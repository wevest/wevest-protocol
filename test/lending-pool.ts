import chai from 'chai';
import hre from "hardhat";
import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import { Signer, BigNumberish } from "ethers";
import {
    LendingPool__factory,
    LendingPoolConfigurator__factory,
    WvToken__factory,
    MintableERC20__factory,
    YieldFarmingPool__factory,
    PriceOracle__factory
} from '../types';

chai.use(solidity);
const { expect } = chai;

export const unlockAccount = async (address: string) => {
    await hre.network.provider.send("hardhat_impersonateAccount", [address]);
    return address;
};

describe("Lending Pool", () => {
    let signers: Signer[];
    let deployer: Signer;
    let userA: Signer;

    let amountUSDCtoDeposit: BigNumberish;
    const APPROVAL_AMOUNT_LENDING_POOL = '1000000000000000000000000000';
    let wvUsdc: any;

    let allWvTokens: any;
    let usdc: any, aave: any, wvToken: any, lendingPoolProxy: any;
    let wvUSDCAddress: any;
    let lendingPoolAddressesProvider, lendingPoolConfiguratorProxy;
    let debtToken, interestRateStrategy, protocolDataProvider;

    let yfPoolProxy: any;
    let priceOracle: any;
    let usdcYVault: any;
    let whaleSigner: any;

    before(async () => {
        // get signers array
        signers = await ethers.getSigners();
        // set first signer as deployer
        deployer = signers[0];

        const LendingPoolAddressesProvider = await ethers.getContractFactory("LendingPoolAddressesProvider");
        lendingPoolAddressesProvider = await LendingPoolAddressesProvider.deploy("Main Market");
        await lendingPoolAddressesProvider.deployed();
        console.log("LendingPoolAddressesProvider deployed to:", lendingPoolAddressesProvider.address);

        await lendingPoolAddressesProvider.setPoolAdmin(await deployer.getAddress());
        await lendingPoolAddressesProvider.setEmergencyAdmin(await signers[1].getAddress());

        // deploy logic libraries used by Lending Pool
        const reserveLogicLibFactory = await ethers.getContractFactory("ReserveLogic");
        const reserveLogicLibContract = await reserveLogicLibFactory.deploy();
        await reserveLogicLibContract.deployed();

        const genericLogicLibFactory = await ethers.getContractFactory("GenericLogic");
        const genericLogicLibContract = await genericLogicLibFactory.deploy();
        await genericLogicLibContract.deployed();

        const validationLogicLibFactory = await ethers.getContractFactory("ValidationLogic", {
            libraries: {
                GenericLogic: genericLogicLibContract.address
            }
        });
        const validationLogicLibContract = await validationLogicLibFactory.deploy();
        await validationLogicLibContract.deployed();

        // LendingPool contract
        const LendingPool = await ethers.getContractFactory("LendingPool", {
            libraries: {
                ReserveLogic: reserveLogicLibContract.address,
                ValidationLogic: validationLogicLibContract.address
            },
        });
        const lendingPool = await LendingPool.deploy();
        await lendingPool.deployed();

        // update implementation as proxy contract
        await lendingPoolAddressesProvider.setLendingPoolImpl(lendingPool.address);
        const lendingPoolAddress = await lendingPoolAddressesProvider.getLendingPool();

        // get LendingPoolProxy contract
        lendingPoolProxy = await LendingPool__factory.connect(lendingPoolAddress, deployer);
        console.log("LendingPool deployed to:", lendingPoolProxy.address);

        const LendingPoolConfigurator = await ethers.getContractFactory("LendingPoolConfigurator");
        const lendingPoolConfigurator  = await LendingPoolConfigurator.deploy();
        await lendingPoolConfigurator.deployed();

        // update as proxy contract
        await lendingPoolAddressesProvider.setLendingPoolConfiguratorImpl(lendingPoolConfigurator.address);
        const lendingPoolConfiguratorAddress = await lendingPoolAddressesProvider.getLendingPoolConfigurator();
        // get LendingPoolConfiguratorProxy contract
        lendingPoolConfiguratorProxy = await LendingPoolConfigurator__factory.connect(lendingPoolConfiguratorAddress, deployer);
        console.log("LendingPoolConfigurator deployed to:", lendingPoolConfiguratorProxy.address);

        // deploy USDC mock contract
        const MintableERC20 = await ethers.getContractFactory("MintableERC20");
        /* usdc = await MintableERC20.deploy("USD Coin", "USDC", 6);
        await usdc.deployed(); */
        const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
        usdc = await ethers.getContractAt(
            "IUSDC",
            USDC
        );
        console.log("USDC deployed to:", usdc.address);

        const WvToken = await ethers.getContractFactory("WvToken");
        wvToken = await WvToken.deploy();
        await wvToken.deployed();

        const treasuryExample = "0x488177c42bD58104618cA771A674Ba7e4D5A2FBB";

        await wvToken.initialize(
            lendingPoolProxy.address,
            treasuryExample,
            usdc.address,
            6,
            'Wevest interest bearing USDC',
            'wvUSDC'
        );

        console.log("wvUSDC deployed to:", wvToken.address);

        const DebtToken = await ethers.getContractFactory("DebtToken");
        debtToken = await DebtToken.deploy();
        await debtToken.deployed();

        await debtToken.initialize(
            lendingPoolProxy.address,
            usdc.address,
            18,
            'Wevest debt bearing AAVE',
            'debtAAVE'
        );

        console.log("debtAAVE deployed to:", debtToken.address);

        const InterestRateStrategy = await ethers.getContractFactory("DefaultReserveInterestRateStrategy");
        interestRateStrategy = await InterestRateStrategy.deploy(lendingPoolAddressesProvider.address);
        await interestRateStrategy.deployed();
        
        console.log("DefaultReserveInterestRateStrategy deployed to:", interestRateStrategy.address);
        
        const USDC_YVAULT = "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9";

        usdcYVault = await ethers.getContractAt(
            "IVault",
            USDC_YVAULT
        );
        let initReserveParams: {
            wvTokenImpl: string;
            debtTokenImpl: string;
            vaultTokenAddress: string;
            underlyingAsset: string;
            underlyingAssetName: string;
            underlyingAssetDecimals: BigNumberish;
            interestRateStrategyAddress: string;
            treasury: string;
            wvTokenName: string;
            wvTokenSymbol: string;
            debtTokenName: string;
            debtTokenSymbol: string;
        }[] = [];

        initReserveParams.push({
            wvTokenImpl: wvToken.address,
            debtTokenImpl: debtToken.address,
            vaultTokenAddress: usdcYVault.address,
            underlyingAsset: usdc.address,
            underlyingAssetName: await usdc.name(),
            underlyingAssetDecimals: await usdc.decimals(),
            interestRateStrategyAddress: interestRateStrategy.address,
            treasury: treasuryExample,
            wvTokenName: await wvToken.name(),
            wvTokenSymbol: await wvToken.symbol(),
            debtTokenName: await debtToken.name(),
            debtTokenSymbol: await debtToken.symbol()
        });

        await lendingPoolConfiguratorProxy.batchInitReserve(initReserveParams);
        // deploy ProtocolDataProvider
        const ProtocolDataProvider = await ethers.getContractFactory("WevestProtocolDataProvider");
        protocolDataProvider  = await ProtocolDataProvider.deploy(lendingPoolAddressesProvider.address);
        await protocolDataProvider.deployed();
        console.log("ProcotolDataProvider deployed to:", protocolDataProvider.address);
        allWvTokens = await protocolDataProvider.getAllWvTokens();

        amountUSDCtoDeposit = ethers.utils.parseUnits("100", 6);

        // deploy YieldFarmingPool
        const YieldFarmingPool = await ethers.getContractFactory("YieldFarmingPool");
        const yieldFarmingPool  = await YieldFarmingPool.deploy();
        await yieldFarmingPool.deployed();

        // update as proxy contract
        await lendingPoolAddressesProvider.setYieldFarmingPoolImpl(yieldFarmingPool.address);
        const yieldFarmingPoolAddress = await lendingPoolAddressesProvider.getYieldFarmingPool();
        // get yfpool proxy contract
        yfPoolProxy = await YieldFarmingPool__factory.connect(yieldFarmingPoolAddress, deployer);

        console.log("YieldFarmingPool deployed to:", yfPoolProxy.address);

        // deploy PriceOracle
        const PriceOracleFactory = await ethers.getContractFactory("PriceOracle");
        const priceOracleContract  = await PriceOracleFactory.deploy();
        await priceOracleContract.deployed();

        // update as proxy contract
        await lendingPoolAddressesProvider.setPriceOracle(priceOracleContract.address);
        const priceOracleAddress = await lendingPoolAddressesProvider.getPriceOracle();

        // get price oracle contract
        priceOracle = await PriceOracle__factory.connect(priceOracleAddress, deployer);
        
        const whaleAddress = "0xb55167e8c781816508988A75cB15B66173C69509";

        unlockAccount(whaleAddress);
        whaleSigner = await ethers.provider.getSigner(whaleAddress);

        await signers[1].sendTransaction({
            to: whaleAddress,
            value: ethers.utils.parseEther("100"),
        });

        userA = signers[2];
            
        // before start, first create 1000 USDC in userA account
        await usdc
            .connect(whaleSigner)
            .transfer(await userA.getAddress(), ethers.utils.parseUnits("1000", 6));
        
        await usdc
            .connect(userA)
            .approve(lendingPoolProxy.address, APPROVAL_AMOUNT_LENDING_POOL);
        
        // initialize yf pool
        await usdc
            .connect(whaleSigner)
            .transfer(yfPoolProxy.address, ethers.utils.parseUnits("1000", 6));
        
        await yfPoolProxy
            .connect(userA)
            .deposit(usdcYVault.address, usdc.address, amountUSDCtoDeposit);
    });

    describe("Deposit", async () => {
        it("UserA deposit 100 USDC to lending pool", async () => {
            await lendingPoolProxy
                .connect(userA)
                .deposit(usdc.address, amountUSDCtoDeposit);
        });
    
        it("USDC pool balance after deposit action", async() => {
            wvUSDCAddress = allWvTokens.find(
                (wvToken: { symbol: string; }) => wvToken.symbol === 'wvUSDC'
            )?.tokenAddress;
            wvUsdc = await WvToken__factory.connect(wvUSDCAddress, deployer);
            const reserveUsdcBalance = await usdc.balanceOf(wvUSDCAddress);
            console.log("USDC pool balance: ", reserveUsdcBalance.toString());

            expect(reserveUsdcBalance.toString()).to.be.equal(
                amountUSDCtoDeposit.toString(), 
                "Invalid USDC reserve balance"
            );
        });
    
        it("UserA's balance after deposit action", async() => {
            const usdcBalance = await usdc.balanceOf(await userA.getAddress());
            console.log("UserA USDC balance: ", usdcBalance.toString());
            const wvUsdcBalance = await wvUsdc.balanceOf(await userA.getAddress());
            console.log("UserA wvUSDC balance: ", wvUsdcBalance.toString());
            expect(wvUsdcBalance.toString()).to.be.equal(
                amountUSDCtoDeposit.toString(), 
                "Invalid wvUSDC amount"
            );
        });
    });
    
    describe("Withdraw", async () => {
        it("UserA withdraws 50 wvUSDC balance", async() => {
            // calculate interest for deposit
            const interest = await yfPoolProxy
                .connect(userA)
                .userAssetInterest(
                    usdcYVault.address, 
                    usdc.address, 
                    await userA.getAddress(), 
                    wvUSDCAddress
                );

            console.log("user interest", interest.toString());

            /* console.log("USDC balance after deposit", (await usdc.balanceOf(yfPoolProxy.address)).toString());
            console.log("yvUSDC balance after deposit", (await usdcYVault.balanceOf(yfPoolProxy.address)).toString()); */
            
            // const wvUsdcBalance = await wvUsdc.balanceOf(await userA.getAddress());
            const amountToWithdraw = ethers.utils.parseUnits("50", 6);
            const totalWithdraw = parseInt(amountToWithdraw.toString()) + parseInt(interest.toString());
            console.log("total Withdraw: ", totalWithdraw.toString());

            const reserveUsdcBalance = await usdc.balanceOf(wvUSDCAddress);
            console.log("USDC pool current balance: ", reserveUsdcBalance.toString());

            await lendingPoolProxy
                .connect(userA)
                .withdraw(usdc.address, amountToWithdraw);
        });

        it("UserA's wvUSDC balance after withdraw action", async() => {
            const usdcBalance = await usdc.balanceOf(await userA.getAddress());
            console.log("UserA USDC balance: ", usdcBalance.toString());

            const wvUsdcBalance = await wvUsdc.balanceOf(await userA.getAddress());
            console.log("UserA wvUSDC balance: ", wvUsdcBalance.toString());
            /* expect(wvUsdcBalance.toString()).to.be.equal(
                '0', "Invalid wvUSDC amount"
            ); */
        });

        it("USDC pool balance after withdraw action", async() => {
            const reserveUsdcBalance = await usdc.balanceOf(wvUSDCAddress);
            console.log("USDC pool current balance: ", reserveUsdcBalance.toString());
        });
    });

    /* describe("Borrow", async () => {
        it("UserA deposit 100 USDC as collateral, and want to borrow AAVE with 3x leverage", async() => {
            await lendingPoolProxy
                .connect(userA)
                .deposit(usdc.address, amountUSDCtoDeposit);

            const amountAaveToBorrow = ethers.utils.parseUnits("10", 18);
            await lendingPoolProxy
                .connect(userA)
                .borrow(aave.address, amountAaveToBorrow, 3);
        });
    }); */
});
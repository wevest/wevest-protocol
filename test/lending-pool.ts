import chai from 'chai';
import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import { Signer, BigNumberish } from "ethers";
import {
    LendingPool__factory,
    LendingPoolConfigurator__factory,
    WvToken__factory
} from '../types';

chai.use(solidity);

describe("Lending Pool", () => {
    let signers: Signer[];
    let deployer: Signer;

    let lendingPoolAddressesProvider, lendingPoolProxy, lendingPoolConfiguratorProxy, wvToken, 
    usdc, debtToken, interestRateStrategy, protocolDataProvider;
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
        console.log(await lendingPoolProxy.getAddressesProvider());
        
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
        usdc = await MintableERC20.deploy("USD Coin", "USDC", 6);
        await usdc.deployed();
        console.log("USDC deployed to:", usdc.address);

        const WvToken = await ethers.getContractFactory("WvToken");
        wvToken = await WvToken.deploy();
        await wvToken.deployed();

        const treasuryExample = "0x488177c42bD58104618cA771A674Ba7e4D5A2FBB";

        await wvToken.initialize(
            lendingPool.address,
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
            lendingPool.address,
            usdc.address,
            6,
            'Wevest debt bearing USDC',
            'debtUSDC'
        );

        console.log("debtUSDC deployed to:", debtToken.address);

        const InterestRateStrategy = await ethers.getContractFactory("DefaultReserveInterestRateStrategy");
        interestRateStrategy = await InterestRateStrategy.deploy(lendingPoolAddressesProvider.address);
        await interestRateStrategy.deployed();
        
        console.log("DefaultReserveInterestRateStrategy deployed to:", interestRateStrategy.address);
        
        let initReserveParams: {
            wvTokenImpl: string;
            debtTokenImpl: string;
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
        const protocolDataProvider  = await ProtocolDataProvider.deploy(lendingPoolAddressesProvider.address);
        await protocolDataProvider.deployed();
        console.log("ProcotolDataProvider deployed to:", protocolDataProvider.address);
        console.log(await protocolDataProvider.getAllReservesTokens());
    });

    it("UserA deposit 100 USDC to lending pool", async () => {

    });
});
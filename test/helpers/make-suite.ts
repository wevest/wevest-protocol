import { ethers } from "hardhat";
import { Signer, BigNumberish } from "ethers";
import hre from "hardhat";
import {
    LendingPool__factory,
    LendingPoolConfigurator__factory,
    WvToken__factory,
    MintableERC20__factory,
    YieldFarmingPool__factory,
    PriceOracle__factory
} from '../../types';
import { any } from "hardhat/internal/core/params/argumentTypes";

export interface TestEnv {
    deployer: Signer;
    signers: Signer[];
    userA: Signer;
    wvToken: any;
    debtToken: any;
    wvUsdc: any;
    usdc: any;
    lendingPool: any;
    lendingPoolAddressesProvider: any;
    lendingPoolConfigurator: any;
    protocolDataProvider: any;
    yieldFarmingPool: any;
    tokenSwap: any;
    usdcYVault: any;
    interestRateStrategy: any;
}

const testEnv: TestEnv = {
    deployer: {} as Signer,
    signers: [] as Signer[],
    userA: {} as Signer,
    wvToken: {} as any,
    debtToken: {} as any,
    wvUsdc: {} as any,
    usdc: {} as any,
    lendingPool: {} as any,
    lendingPoolAddressesProvider: {} as any,
    lendingPoolConfigurator: {} as any,
    protocolDataProvider: {} as any,
    yieldFarmingPool: {} as any,
    tokenSwap: {} as any,
    usdcYVault: {} as any,
    interestRateStrategy: {} as any
}

export const unlockAccount = async (address: string) => {
    await hre.network.provider.send("hardhat_impersonateAccount", [address]);
    return address;
};

export async function initialize() {
    const signers = await ethers.getSigners();
    testEnv.signers = signers;
    testEnv.deployer = signers[0];
    testEnv.userA = signers[1];

    const LendingPoolAddressesProvider = await ethers.getContractFactory("LendingPoolAddressesProvider");
    testEnv.lendingPoolAddressesProvider = await LendingPoolAddressesProvider.deploy("Main Market");
    await testEnv.lendingPoolAddressesProvider.deployed();
    console.log("LendingPoolAddressesProvider deployed to:", testEnv.lendingPoolAddressesProvider.address);

    await testEnv.lendingPoolAddressesProvider.setPoolAdmin(await testEnv.deployer.getAddress());
    await testEnv.lendingPoolAddressesProvider.setEmergencyAdmin(await signers[1].getAddress());

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
    await testEnv.lendingPoolAddressesProvider.setLendingPoolImpl(lendingPool.address);
    const lendingPoolAddress = await testEnv.lendingPoolAddressesProvider.getLendingPool();

    // get LendingPoolProxy contract
    testEnv.lendingPool = await LendingPool__factory.connect(lendingPoolAddress, testEnv.deployer);
    console.log("LendingPool deployed to:", testEnv.lendingPool.address);

    const LendingPoolConfigurator = await ethers.getContractFactory("LendingPoolConfigurator");
    const lendingPoolConfigurator  = await LendingPoolConfigurator.deploy();
    await lendingPoolConfigurator.deployed();

    // update as proxy contract
    await testEnv.lendingPoolAddressesProvider.setLendingPoolConfiguratorImpl(lendingPoolConfigurator.address);
    const lendingPoolConfiguratorAddress = await testEnv.lendingPoolAddressesProvider.getLendingPoolConfigurator();
    // get LendingPoolConfiguratorProxy contract
    testEnv.lendingPoolConfigurator = await LendingPoolConfigurator__factory.connect(
        lendingPoolConfiguratorAddress, 
        testEnv.deployer
    );
    console.log("LendingPoolConfigurator deployed to:", testEnv.lendingPoolConfigurator.address);
    
    const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    testEnv.usdc = await ethers.getContractAt(
        "IUSDC",
        USDC
    );
    console.log("USDC deployed to:", testEnv.usdc.address);

    const treasuryExample = "0x488177c42bD58104618cA771A674Ba7e4D5A2FBB";

    const WvToken = await ethers.getContractFactory("WvToken");
    testEnv.wvToken = await WvToken.deploy();
    await testEnv.wvToken.deployed();

    await testEnv.wvToken.initialize(
        testEnv.lendingPool.address,
        treasuryExample,
        testEnv.usdc.address,
        6,
        'Wevest interest bearing USDC',
        'wvUSDC'
    );

    console.log("wvUSDC deployed to:", testEnv.wvToken.address);
    
    const DebtToken = await ethers.getContractFactory("DebtToken");
    testEnv.debtToken = await DebtToken.deploy();
    await testEnv.debtToken.deployed();

    await testEnv.debtToken.initialize(
        testEnv.lendingPool.address,
        testEnv.usdc.address,
        6,
        'Wevest debt bearing USDC',
        'debtUSDC'
    );

    const InterestRateStrategy = await ethers.getContractFactory("DefaultReserveInterestRateStrategy");
    testEnv.interestRateStrategy = await InterestRateStrategy.deploy(testEnv.lendingPoolAddressesProvider.address);
    await testEnv.interestRateStrategy.deployed();
    
    console.log("DefaultReserveInterestRateStrategy deployed to:", testEnv.interestRateStrategy.address);
    
    const USDC_YVAULT = "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9";

    testEnv.usdcYVault = await ethers.getContractAt(
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
        wvTokenImpl: testEnv.wvToken.address,
        debtTokenImpl: testEnv.debtToken.address,
        vaultTokenAddress: testEnv.usdcYVault.address,
        underlyingAsset: testEnv.usdc.address,
        underlyingAssetName: await testEnv.usdc.name(),
        underlyingAssetDecimals: await testEnv.usdc.decimals(),
        interestRateStrategyAddress: testEnv.interestRateStrategy.address,
        treasury: treasuryExample,
        wvTokenName: await testEnv.wvToken.name(),
        wvTokenSymbol: await testEnv.wvToken.symbol(),
        debtTokenName: await testEnv.debtToken.name(),
        debtTokenSymbol: await testEnv.debtToken.symbol()
    });

    await testEnv.lendingPoolConfigurator.batchInitReserve(initReserveParams);

    // deploy ProtocolDataProvider
    const ProtocolDataProvider = await ethers.getContractFactory("WevestProtocolDataProvider");
    testEnv.protocolDataProvider  = await ProtocolDataProvider.deploy(testEnv.lendingPoolAddressesProvider.address);
    await testEnv.protocolDataProvider.deployed();
    console.log("ProcotolDataProvider deployed to:", testEnv.protocolDataProvider.address);
    
    const allWvTokens = await testEnv.protocolDataProvider.getAllWvTokens();
    const wvUSDCAddress = allWvTokens.find(
        (wvToken: { symbol: string; }) => wvToken.symbol === 'wvUSDC'
    )?.tokenAddress;
    testEnv.wvUsdc = await WvToken__factory.connect(wvUSDCAddress, testEnv.deployer);

    // deploy YieldFarmingPool
    const YieldFarmingPool = await ethers.getContractFactory("YieldFarmingPool");
    const yieldFarmingPool  = await YieldFarmingPool.deploy();
    await yieldFarmingPool.deployed();

    // update as proxy contract
    await testEnv.lendingPoolAddressesProvider.setYieldFarmingPoolImpl(yieldFarmingPool.address);
    const yieldFarmingPoolAddress = await testEnv.lendingPoolAddressesProvider.getYieldFarmingPool();
    // get yfpool proxy contract
    testEnv.yieldFarmingPool = await YieldFarmingPool__factory.connect(yieldFarmingPoolAddress, testEnv.deployer);

    console.log("YieldFarmingPool deployed to:", testEnv.yieldFarmingPool.address);

    const tokenSwapFactory = await ethers.getContractFactory(
        "TokenSwap",
        testEnv.deployer
    );

    testEnv.tokenSwap = await tokenSwapFactory.deploy(testEnv.lendingPool.address);
    await testEnv.tokenSwap.deployed();
}

export function makeSuite(name: string, tests: (testEnv: TestEnv) => void) {
    describe(name, () => {
      tests(testEnv);
    });
}

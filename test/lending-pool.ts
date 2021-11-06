import chai from 'chai';
import { ethers, upgrades } from "hardhat";
import { solidity } from "ethereum-waffle";
import { Signer } from "ethers";
import {
    LendingPool__factory,
    WvToken__factory
} from '../types';

chai.use(solidity);

describe("Lending Pool", () => {
    let signers: Signer[];
    let deployer: Signer;

    before(async () => {
        // get signers array
        signers = await ethers.getSigners();
        // set first signer as deployer
        deployer = signers[0];

        const poolAddressesFactory = await ethers.getContractFactory("LendingPoolAddressesProvider");
        const poolAddressesContract = await poolAddressesFactory.deploy("Main Market");
        await poolAddressesContract.deployed();

        console.log("LendingPoolAddressesProvider deployed to:", poolAddressesContract.address);
        await poolAddressesContract.setPoolAdmin(await deployer.getAddress());
        await poolAddressesContract.setEmergencyAdmin(await signers[1].getAddress());
        
        const poolAddressesRegistryFactory = await ethers.getContractFactory("LendingPoolAddressesProviderRegistry");
        const poolAddressesRegistryContract = await poolAddressesRegistryFactory.deploy();
        await poolAddressesRegistryContract.deployed();

        console.log("LendingPoolAddressesProviderRegistry deployed to:", poolAddressesRegistryContract.address);
        await poolAddressesRegistryContract.registerAddressesProvider(poolAddressesContract.address, 1);

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
        const lendingPoolFactory = await ethers.getContractFactory("LendingPool", {
            libraries: {
                ReserveLogic: reserveLogicLibContract.address,
                ValidationLogic: validationLogicLibContract.address
            },
        });
        const lendingPoolContract = await lendingPoolFactory.deploy();
        await lendingPoolContract.deployed();

        console.log("LendingPool deployed to:", lendingPoolContract.address);
        // update as proxy contract
        await poolAddressesContract.setLendingPoolImpl(lendingPoolContract.address);
        const lendingPoolAddress = await poolAddressesContract.getLendingPool();
        console.log(lendingPoolAddress);

        // get LendingPoolProxy contract
        const lendingPoolProxy = await LendingPool__factory.connect(lendingPoolAddress, deployer);
        console.log(await lendingPoolProxy.getAddressesProvider());
        const mintableERC20Factory = await ethers.getContractFactory("MintableERC20");
        const mockUsdcContract = await mintableERC20Factory.deploy("USD Coin", "USDC", 6);
        await mockUsdcContract.deployed();
        console.log("USDC deployed to:", mockUsdcContract.address);

        const wvTokenFactory = await ethers.getContractFactory("WvToken");
        const treasuryExample = "0x488177c42bD58104618cA771A674Ba7e4D5A2FBB";
        const wvTokenContract = await wvTokenFactory.deploy();
        await wvTokenContract.deployed();
        console.log(wvTokenContract.address);
        await WvToken__factory.connect(wvTokenContract.address, deployer);
    });

    it("UserA deposit 100 USDC to lending pool", async () => {

    });
});
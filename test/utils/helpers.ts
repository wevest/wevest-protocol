import { ethers } from "hardhat";
import { Signer } from "ethers";
import { ERC20__factory } from "../../typechain";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { LendingPool__factory } from "../../typechain";
import { eContractid } from './constants';

let DRE: HardhatRuntimeEnvironment;
export const getFirstSigner = async () => (await getEthersSigners())[0];

export const convertToCurrencyDecimals = async (tokenAddress: string, amount: string) => {
    const [deployer, user] = await ethers.getSigners();
    const tokenInstance = new ERC20__factory(deployer).attach(tokenAddress);
    let decimals = (await tokenInstance.decimals()).toString();
  
    return ethers.utils.parseUnits(amount, decimals);
};

export const getEthersSigners = async (): Promise<Signer[]> => {
    const ethersSigners = await Promise.all(await DRE.ethers.getSigners());
    return ethersSigners;
};

export const getLendingPoolAddressesProvider = async () => {
    const lendingPoolAddressesFactory = await ethers.getContractFactory(eContractid.LendingPoolAddressesProvider);
    const lendingPoolAddressesContract = await lendingPoolAddressesFactory.deploy();
    return lendingPoolAddressesContract;
};

export const getLendingPool = async () => {
    const lendingPoolFactory = new LendingPool__factory(await getFirstSigner());
    const lendingPoolContract = await lendingPoolFactory.deploy();
    return lendingPoolContract;
};

export const getMintableERC20 = async () => {
    const MintableERC20Factory = await ethers.getContractFactory(eContractid.MintableERC20);
    const MintableERC20Contract = await MintableERC20Factory.deploy();
    return MintableERC20Contract;
};

import { LendingPool, LendingPoolDataProvider, MintableERC20, WvToken } from '../../typechain';
import { Signer } from 'ethers';
import { ethers } from "hardhat";
import { 
    getEthersSigners, 
    getLendingPool,
    getLendingPoolAddressesProvider,
    getMintableERC20 
} from './helpers';
import { eContractid } from './constants';
import { solidity } from "ethereum-waffle";

chai.use(solidity);

export interface SignerWithAddress {
    signer: Signer;
    address: string;
}

export interface TestEnv {
    deployer: SignerWithAddress;
    users: SignerWithAddress[];
    pool: LendingPool;
    poolDataProvider: LendingPoolDataProvider;
    dai: MintableERC20;
    wvDai: WvToken;
}

const testEnv: TestEnv = {
    deployer: {} as SignerWithAddress,
    users: [] as SignerWithAddress[],
    pool: {} as LendingPool,
    poolDataProvider: {} as LendingPoolDataProvider,
    dai: {} as MintableERC20,
    wvDai: {} as WvToken,
} as TestEnv;

export const getWvToken = async (
    underlyingAsset: string, 
    decimal: number, 
    name: string, 
    symbol: string
) => {
    const WvTokenFactory = await ethers.getContractFactory(eContractid.WvToken);
    let addressesProvider = await getLendingPoolAddressesProvider();
    const WvTokenContract = await WvTokenFactory.deploy(
        addressesProvider, 
        underlyingAsset,
        decimal,
        name,
        symbol
    );
    return WvTokenContract;
};

export async function initialize() {
    const [_deployer, ...restSigners] = await getEthersSigners();
    const deployer: SignerWithAddress = {
      address: await _deployer.getAddress(),
      signer: _deployer,
    };
  
    for (const signer of restSigners) {
      testEnv.users.push({
        signer,
        address: await signer.getAddress(),
      });
    }
    testEnv.deployer = deployer;
    testEnv.pool = await getLendingPool();

    const allTokens = await testEnv.poolDataProvider.getAllWvTokens();
    const wvDaiAddress = allTokens.find(wvToken => wvToken.symbol === "wvDAI")?.tokenAddress;
  
    const reservesTokens = await testEnv.poolDataProvider.getAllReservesTokens();
  
    const daiAddress = reservesTokens.find(token => token.symbol === "DAI")?.tokenAddress;
  
    if (!wvDaiAddress) {
      process.exit(1);
    }
    if (!daiAddress) {
      process.exit(1);
    }
  
    testEnv.wvDai = await getWvToken(daiAddress, 18, "DAI", "DAI");
    testEnv.dai = await getMintableERC20(daiAddress);
}
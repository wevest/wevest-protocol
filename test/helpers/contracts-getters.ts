import {
    LendingPool__factory,
    LendingPoolConfigurator__factory,
    WvToken__factory,
    MintableERC20__factory,
    YieldFarmingPool__factory,
    PriceOracle__factory,
    TokenSwap__factory
} from '../../types';

import { Signer } from "ethers";

export const getLendingPool = async (
    address: string, 
    signer: Signer
) => LendingPool__factory.connect(address, signer);
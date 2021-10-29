import { ethers, upgrades } from "hardhat";
import { Signer } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";

chai.use(solidity);
const { expect } = chai;

describe("Lending Pool Data Provider", () => {
    let signers: Signer[];
    let deployer: Signer;

    let lendingPoolCoreContract: any;
    let lendingPoolDataProviderContract: any;

    beforeEach(async () => {
        // get signers array
        signers = await ethers.getSigners();
        // set first signer as deployer
        deployer = signers[0];
    });
});

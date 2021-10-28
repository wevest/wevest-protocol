import { ethers } from "hardhat";
import { Signer } from "ethers";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { convertToCurrencyDecimals } from './utils/helpers';
import { APPROVAL_AMOUNT_LENDING_POOL } from './utils/constants';
import { 
    LendingPoolAddressesProvider__factory,
    LendingPoolCore__factory,
    LendingPool__factory, 
    MockDAI__factory,
    WvToken__factory 
} from "../typechain";

chai.use(solidity);
const { expect } = chai;

describe("Lending Pool", () => {
    let signers: Signer[];
    let deployer: Signer;

    let lendingPoolContract: any;
    let lendingPoolCoreContract: any;
    let mockDaiContract: any;
    let wvDaiContract: any;

    beforeEach(async () => {
        // get signers array
        signers = await ethers.getSigners();
        // set first signer as deployer
        deployer = signers[0];
        const lendingPoolAddressesFactory = new LendingPoolAddressesProvider__factory(deployer);
        const lendingPoolAddressesContract = await lendingPoolAddressesFactory.deploy();

        const lendingPoolFactory = await ethers.getContractFactory("LendingPool");
        lendingPoolContract = await lendingPoolFactory.deploy();

        const mockDaiFactory = new MockDAI__factory(deployer);
        mockDaiContract = await mockDaiFactory.deploy();

        const wvTokenFactory = new WvToken__factory(deployer);
        wvDaiContract = await wvTokenFactory.deploy(
            lendingPoolAddressesContract.address, 
            mockDaiContract.address, 
            18, 
            "wvDai", 
            "wvDai"
        );
    });

    describe("Deposit", async () => {
        it('User1 deposits 1000 DAI in an empty reserve', async() => {
            const amountDAItoDeposit = ethers.utils.parseUnits("1000", 18);
            await mockDaiContract.mint(amountDAItoDeposit);
            await mockDaiContract.approve(lendingPoolContract.address, APPROVAL_AMOUNT_LENDING_POOL);
            
            const user1 = await signers[0].getAddress();
            const user2 = await signers[1].getAddress();

            // await wvDaiContract._transfer(user1, user2, amountDAItoDeposit);

            const fromBalance = await wvDaiContract.balanceOf(user1);
            const toBalance = await wvDaiContract.balanceOf(user2);
        
            expect(fromBalance.toString()).to.be.equal('0', 'Invalid from balance after transfer');
            /* expect(toBalance.toString()).to.be.equal(
                amountDAItoDeposit.toString(),
                'Invalid from balance after transfer'
            ); */
        });
    });
});
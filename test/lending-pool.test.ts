import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { LendingPool__factory } from "../typechain";
import { TestEnv, initialize } from './utils/types';
import { convertToCurrencyDecimals } from './utils/helpers';
import { APPROVAL_AMOUNT_LENDING_POOL } from './utils/constants';

chai.use(solidity);
const { expect } = chai;

await initialize();

describe("Lending Pool", () => {
    let lendingPoolAddress: string;
    let testEnv: TestEnv;

    beforeEach(async () => {
        const [deployer] = await ethers.getSigners();
        const lendingPoolFactory = new LendingPool__factory(deployer);
        const lendingPoolContract = await lendingPoolFactory.deploy();
        lendingPoolAddress = lendingPoolContract.address;
    });

    describe("Deposit", async () => {
        it('User1 deposits 1000 DAI in an empty reserve', async() => {
            const { users, pool, dai, wvDai } = testEnv;

            await dai.connect(users[0].signer).mint(await convertToCurrencyDecimals(dai.address, '1000'));
            await dai.connect(users[0].signer).approve(pool.address, APPROVAL_AMOUNT_LENDING_POOL);

            // user deposits 1000 DAI
            const amountDAItoDeposit = await convertToCurrencyDecimals(dai.address, '1000');

            await pool
                .connect(users[0].signer)
                .deposit(dai.address, amountDAItoDeposit);

            // await wvDai.connect(users[0].signer).transfer(users[1].address, amountDAItoDeposit);

            const fromBalance = await wvDai.balanceOf(users[0].address);
            const toBalance = await wvDai.balanceOf(users[1].address);
        
            expect(fromBalance.toString()).to.be.equal('0', 'Invalid from balance after transfer');
            expect(toBalance.toString()).to.be.equal(
                amountDAItoDeposit.toString(),
                'Invalid from balance after transfer'
            );
        });
    });
});
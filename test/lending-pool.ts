import chai from 'chai';
import { TestEnv, makeSuite, unlockAccount } from './helpers/make-suite';
import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";

chai.use(solidity);
const { expect } = chai;

makeSuite('Lending Pool', (testEnv: TestEnv) => {
    const APPROVAL_AMOUNT_LENDING_POOL = '1000000000000000000000000000';
    let whaleSigner: any;
    const amountToDeposit = ethers.utils.parseUnits("100", 6);
    before(async () => {
        const { userA, usdc, lendingPool, yieldFarmingPool, usdcYVault } = testEnv;
        const whaleAddress = "0xb55167e8c781816508988A75cB15B66173C69509";

        unlockAccount(whaleAddress);
        whaleSigner = await ethers.provider.getSigner(whaleAddress);

        await userA.sendTransaction({
            to: whaleAddress,
            value: ethers.utils.parseEther("100"),
        });
            
        // before start, first create 1000 USDC in userA account
        await usdc
            .connect(whaleSigner)
            .transfer(await userA.getAddress(), ethers.utils.parseUnits("1000", 6));
        
        await usdc
            .connect(userA)
            .approve(lendingPool.address, APPROVAL_AMOUNT_LENDING_POOL);
        
        // initialize yf pool
        await usdc
            .connect(whaleSigner)
            .transfer(yieldFarmingPool.address, ethers.utils.parseUnits("1000", 6));
        
        await yieldFarmingPool
            .connect(userA)
            .deposit(usdcYVault.address, usdc.address, amountToDeposit);
    });

    describe("Deposit", async () => {
        it("UserA deposit 100 USDC to lending pool", async () => {
            const { lendingPool, usdc, userA } = testEnv;
            await lendingPool
                .connect(userA)
                .deposit(usdc.address, amountToDeposit);
        });
    
        it("USDC pool balance after deposit action", async() => {
            const { usdc, wvUsdc } = testEnv;
            const wvUSDCAddress = wvUsdc.address;
            const reserveUsdcBalance = await usdc.balanceOf(wvUSDCAddress);
            console.log("USDC pool balance: ", reserveUsdcBalance.toString());

            expect(reserveUsdcBalance.toString()).to.be.equal(
                ethers.utils.parseUnits("100", 6).toString(), 
                "Invalid USDC reserve balance"
            );
        });
    
        it("UserA's balance after deposit action", async() => {
            const { userA, usdc, wvUsdc } = testEnv;
            const usdcBalance = await usdc.balanceOf(await userA.getAddress());
            console.log("UserA USDC balance: ", usdcBalance.toString());
            const wvUsdcBalance = await wvUsdc.balanceOf(await userA.getAddress());
            console.log("UserA wvUSDC balance: ", wvUsdcBalance.toString());
            expect(wvUsdcBalance.toString()).to.be.equal(
                ethers.utils.parseUnits("100", 6).toString(), 
                "Invalid wvUSDC amount"
            );
        });
    });
    
    describe("Withdraw", async () => {
        it("UserA withdraws 50 wvUSDC balance", async() => {
            const { lendingPool, yieldFarmingPool, userA, usdcYVault, wvUsdc, usdc } = testEnv;
            // calculate interest for deposit
            const interest = await yieldFarmingPool
                .connect(userA)
                .lenderInterest(
                    usdcYVault.address, 
                    usdc.address, 
                    await userA.getAddress(), 
                    wvUsdc.address
                );

            console.log("userA interest", interest.toString());

            const amountToWithdraw = ethers.utils.parseUnits("50", 6);
            const totalWithdraw = parseInt(amountToWithdraw.toString()) + parseInt(interest.toString());
            console.log("total Withdraw: ", totalWithdraw.toString());
            
            const reserveUsdcBalance = await usdc.balanceOf(wvUsdc.address);
            console.log("USDC pool current balance: ", reserveUsdcBalance.toString());

            await lendingPool
                .connect(userA)
                .withdraw(usdc.address, amountToWithdraw);
        });

        it("UserA's wvUSDC balance after withdraw action", async() => {
            const { usdc, userA, wvUsdc } = testEnv;
            const usdcBalance = await usdc.balanceOf(await userA.getAddress());
            console.log("UserA USDC balance: ", usdcBalance.toString());

            const wvUsdcBalance = await wvUsdc.balanceOf(await userA.getAddress());
            console.log("UserA wvUSDC balance: ", wvUsdcBalance.toString());
            // expect(wvUsdcBalance.toString()).to.be.equal(
            //    '0', "Invalid wvUSDC amount"
            // );
        });

        it("USDC pool balance after withdraw action", async() => {
            const { usdc, userA, wvUsdc } = testEnv;
            const reserveUsdcBalance = await usdc.balanceOf(wvUsdc.address);
            console.log("USDC pool current balance: ", reserveUsdcBalance.toString());
        });
    });

    describe("Borrow", async () => {
        it("UserA deposit 100 USDC as collateral, and want to borrow AAVE with 3x leverage", async() => {
            /* await lendingPoolProxy
                .connect(userA)
                .deposit(usdc.address, amountUSDCtoDeposit);

            const aaveWhaleAddress = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";

            unlockAccount(aaveWhaleAddress);
            aaveWhaleSigner = await ethers.provider.getSigner(aaveWhaleAddress);

            await signers[1].sendTransaction({
                to: aaveWhaleSigner,
                value: ethers.utils.parseEther("100"),
            });
            console.log((await aave.balanceOf(aaveWhaleAddress)).toString()); */

            /* await aave
                .connect(aaveWhaleSigner)
                .transfer(lendingPoolProxy.address, ethers.utils.parseUnits("1000", 18)); */

            /* await usdc
                .connect(userA)
                .approve(lendingPoolProxy.address, APPROVAL_AMOUNT_LENDING_POOL);

            const amountAaveToBorrow = ethers.utils.parseUnits("100", 18);
            await lendingPoolProxy
                .connect(userA)
                .borrow(aave.address, amountAaveToBorrow, 3); */
        });
    });
});

import hre from "hardhat";

export const unlockAccount = async (address: string) => {
    await hre.network.provider.send("hardhat_impersonateAccount", [address]);
    return address;
};
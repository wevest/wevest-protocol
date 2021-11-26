import { ethers } from "hardhat";
import { Contract} from 'ethers';
import { ContractId } from "./types";

import { EthereumConfig } from "../markets/ethereum";

export const deployLendingPoolAddressesProvider = async (): Promise<Contract> => {
    const lendingPoolAddressesProvider = await (
        await ethers.getContractFactory(ContractId.LendingPoolAddressesProvider)
    ).deploy(EthereumConfig.MarketId);
    return await lendingPoolAddressesProvider.deployed();
}

export const deployReserveLogic = async (): Promise<Contract> => {
    const reserveLogic = await (
        await ethers.getContractFactory(ContractId.ReserveLogic)
    ).deploy();
    return await reserveLogic.deployed();
}

export const deployGenericLogic = async (): Promise<Contract> => {
    const genericLogic = await (
        await ethers.getContractFactory(ContractId.GenericLogic)
    ).deploy();
    return await genericLogic.deployed();
}

export const deployValidationLogic = async (): Promise<Contract> => {
    const genericLogic = await deployGenericLogic();
    const validationLogic = await (
        await ethers.getContractFactory(ContractId.ValidationLogic, {
            libraries: {
                GenericLogic: genericLogic.address
            }
        })
    ).deploy();
    return await validationLogic.deployed();
}

export const deployLendingPool = async (): Promise<Contract> => {
    const reserveLogic = await deployReserveLogic();
    const validationLogic = await deployValidationLogic();

    const lendingPoolImpl = await (
        await ethers.getContractFactory(ContractId.LendingPool, {
            libraries: {
                ReserveLogic: reserveLogic.address,
                ValidationLogic: validationLogic.address
            },
        })
    ).deploy();

    return await lendingPoolImpl.deployed();
}
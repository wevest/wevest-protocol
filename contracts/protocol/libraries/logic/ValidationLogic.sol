// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {DataTypes} from '../types/DataTypes.sol';
import {Errors} from '../helpers/Errors.sol';

library ValidationLogic {
    /**
    * @dev Validates a deposit action
    * @param reserve The reserve object on which the user is depositing
    * @param amount The amount to be deposited
    */
    function validateDeposit(DataTypes.ReserveData storage reserve, uint256 amount) external view {
        (bool isActive, bool isFrozen, , ) = reserve.configuration.getFlags();

        require(amount != 0, Errors.VL_INVALID_AMOUNT);
        require(isActive, Errors.VL_NO_ACTIVE_RESERVE);
        require(!isFrozen, Errors.VL_RESERVE_FROZEN);
    }
}
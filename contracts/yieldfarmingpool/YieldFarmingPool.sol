// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.0;

import "../lendingpool/LendingPool.sol";

contract YieldFarmingPool {

    LendingPool private pool;

    modifier onlyLendingPool {
        require(
            msg.sender == address(pool),
            "The caller of this function must be a lending pool"
        );
        _;
    }
}
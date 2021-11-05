// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {VersionedInitializable} from '../libraries/wevest-upgradeability/VersionedInitializable.sol';
import {ILendingPool} from '../../interfaces/ILendingPool.sol';

contract YieldFarmingPool is VersionedInitializable {

    uint256 public constant YIELDFARMING_POOL_REVISION = 0x2;

    ILendingPool internal _pool;

    function initialize(ILendingPool pool) public initializer {
        _pool = pool;
    }

    function getRevision() internal pure override returns (uint256) {
        return YIELDFARMING_POOL_REVISION;
    }
}
// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {ILendingPool} from '../../interfaces/ILendingPool.sol';
import {VersionedInitializable} from '../libraries/upgradeability/VersionedInitializable.sol';
import {LendingPoolStorage} from './LendingPoolStorage.sol';

contract LendingPool is VersionedInitializable, ILendingPool, LendingPoolStorage {

}
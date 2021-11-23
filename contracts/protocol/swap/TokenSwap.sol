// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {IERC20} from '../../dependencies/openzeppelin/contracts/IERC20.sol';
import {IUniswapV2Router} from "../../interfaces/IUniswapV2Router.sol";
import {IUniswapV2Pair} from  "../../interfaces/IUniswapV2Pair.sol";
import {IUniswapV2Factory} from  "../../interfaces/IUniswapV2Factory.sol";

contract TokenSwap {
    address private constant UNISWAP_V2_ROUTER =
        0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address private constant UNISWAP_V2_FACTORY = 
        0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
    address private constant WETH = 
        0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    
    function swap(
        address _tokenIn,
        address _tokenOut,
        uint _amountIn,
        uint _amountOutMin,
        address _to
    ) external {
        IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);

        address[] memory path;
        if (_tokenIn == WETH || _tokenOut == WETH) {
            path = new address[](2);
            path[0] = _tokenIn;
            path[1] = _tokenOut;
        } else {
            path = new address[](3);
            path[0] = _tokenIn;
            path[1] = WETH;
            path[2] = _tokenOut;
        }

        IUniswapV2Router(UNISWAP_V2_ROUTER).swapExactTokensForTokens(
            _amountIn,
            _amountOutMin,
            path,
            _to,
            block.timestamp
        );
    }

    function getUniswapV2PairAddress(address token0, address token1)
        public
        view
        returns(address)
    {
        address pair = IUniswapV2Factory(UNISWAP_V2_FACTORY).getPair(token0, token1);
        return pair;
    }
}

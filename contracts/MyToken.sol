// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 intialSupply,
        address owner
    ) ERC20(name, symbol) {
        _mint(owner, intialSupply * 10 ** decimals());
    }
}

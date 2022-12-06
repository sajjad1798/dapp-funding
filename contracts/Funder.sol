// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract Funder {
    uint256 public numOfFunders;
    mapping(uint256 => address) private funders;

    function transfer() external payable {
        funders[numOfFunders] = msg.sender;
    }

    receive() external payable {}

    function withdraw(uint256 withdrawAmount) external {
        require(
            withdrawAmount <= 2000000000000000000,
            "Can't witthdraw more than 2 ethers"
        );
        payable(msg.sender).transfer(withdrawAmount);
    }
}

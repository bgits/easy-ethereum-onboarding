pragma solidity ^0.5.11;

contract Onboarding {

  event Deposit(address indexed receiver, uint256 _value);

  mapping(address => uint256) balances;

  function deposit(address receiver, uint amount) payable public {
    require(msg.value == amount);
    balances[receiver] += amount;
    emit Deposit(receiver, amount);
  }

  function withdraw() public {
    msg.sender.transfer(balances[msg.sender]);
  }

  function getBalance() public view returns (uint256) {
    return balances[msg.sender];
  }
}

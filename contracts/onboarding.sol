pragma solidity ^0.5.11;

contract Onboarding {

  struct DepositInfo {
    address funder;
    uint256 amount;
  }

  event Deposit(address indexed receiver, uint256 _value);
  event Recover(address indexed receiver);

  mapping(address => DepositInfo) balances;

  function deposit(address receiver, uint amount) payable public {
    require(msg.value == amount);
    balances[receiver] = DepositInfo({
      funder: msg.sender,
      amount: amount
    });
    emit Deposit(receiver, amount);
  }

  function withdraw() public {
    msg.sender.transfer(balances[msg.sender].amount);
  }

  function getBalance() public view returns (uint256) {
    return balances[msg.sender].amount;
  }

  function recover(address receiver) public {
    DepositInfo memory info = balances[receiver];
    require(msg.sender == info.funder);
    msg.sender.transfer(info.amount);
    emit Recover(receiver);

  }
}

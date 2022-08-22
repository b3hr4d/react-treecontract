//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Secure.sol";
import "./64Math.sol";

contract UserData is Secure {
  using Math for uint64;

  event Registered(address indexed user, address indexed ref, uint256 amount);
  event ReferralReceived(address indexed user, address from, uint256 amount);

  struct Invest {
    uint64 amount;
    uint64 period;
    uint64 reward;
    uint64 startTime;
  }

  struct UserStruct {
    address ref;
    address left;
    address right;
    uint64 refAmount;
    Invest[] invest;
  }

  mapping(address => UserStruct) public users;

  constructor() {
    users[_msgSender()].ref = address(1);
  }

  function register(address ref, Invest memory invest) public {
    require(notExist(_msgSender()), "User Exist");
    require(exist(ref), "Ref Not Exist");

    uint64 amount = invest.amount;
    updateReferrer(ref, amount);

    users[_msgSender()].ref = ref;
    users[_msgSender()].invest.push(invest);

    emit Registered(_msgSender(), ref, amount);
  }

  function updateReferrer(address user, uint64 amount) internal {
    require(isFree(user), "Right and Left is Full");

    if (users[user].left == address(0)) users[user].left = _msgSender();
    else users[user].right = _msgSender();

    users[user].refAmount = users[user].refAmount.add(refPercent(amount));
  }

  function refPercent(uint64 amount) public pure returns (uint64) {
    return (amount * 10) / 100;
  }

  function findAmount(address user) public view returns (uint64) {
    if (notExist(user)) return 0;

    (uint64 left, uint64 right) = findLegsAmount(user);

    return users[user].refAmount.add(left).add(right);
  }

  function findLegsAmount(address user) public view returns (uint64 left, uint64 right) {
    left = findAmount(users[user].left);
    right = findAmount(users[user].right);
  }

  function isFree(address user) public view returns (bool) {
    return (users[user].right == address(0) || users[user].left == address(0));
  }

  function exist(address user) public view returns (bool) {
    return users[user].ref != address(0);
  }

  function notExist(address user) public view returns (bool) {
    return users[user].ref == address(0);
  }
}

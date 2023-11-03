//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import './Secure.sol';
import './64Math.sol';
import './Math.sol';

contract UserData is Secure {
    using SixFourMath for uint64;
    using Math for uint256;

    event WithdrawInterest(
        address indexed user,
        uint256 hourly,
        uint256 referral
    );
    event Registered(address indexed user, address indexed ref, uint256 amount);
    event ReferralReceived(address indexed user, address from, uint256 amount);

    struct Invest {
        uint64 amount;
        uint64 period;
        uint64 reward;
        uint64 startTime;
    }

    struct UserStruct {
        Invest[] invest;
        address ref;
        address left;
        address right;
        uint64 refAmount;
        uint64 latestWithdraw;
    }

    mapping(address => UserStruct) public users;

    constructor() {
        users[_msgSender()].ref = address(1);
    }

    function register(address ref, Invest memory invest) public payable {
        require(notExist(_msgSender()), 'USR');
        require(exist(ref), 'REF');

        uint64 amount = invest.amount;
        updateReferrer(ref, amount);

        users[_msgSender()].ref = ref;
        users[_msgSender()].invest.push(invest);

        emit Registered(_msgSender(), ref, amount);
    }

    function withdrawInterest() public payable {
        require(exist(_msgSender()), 'UNE');

        (uint256 hourly, uint256 referral, ) = calculateInterest(_msgSender());

        uint256 totalUsdReward = hourly.add(referral);

        if (totalUsdReward > 0) {
            _safeTransferETH(_msgSender(), totalUsdReward);
        }
        emit WithdrawInterest(_msgSender(), hourly, referral);
    }

    function calculateInterest(address user)
        public
        view
        returns (
            uint256 hourly,
            uint256 referral,
            uint256 requestTime
        )
    {
        uint256 latestWithdraw = users[user].latestWithdraw;
        referral = users[user].refAmount;

        requestTime = block.timestamp;

        if (latestWithdraw.addHour() <= requestTime) {
            hourly = calculateHourly(user, requestTime);
        }
        return (hourly, referral, requestTime);
    }

    function calculateHourly(address user, uint256 time)
        public
        view
        returns (uint256 rewards)
    {
        uint256 userIvestLength = depositNumber(user);
        for (uint8 i = 0; i < userIvestLength; i++) {
            uint256 reward = users[user].invest[i].reward;
            if (reward > 0) {
                uint256 startTime = users[user].invest[i].startTime;
                uint256 lw = users[user].latestWithdraw;
                if (lw < startTime) lw = startTime;
                if (time >= lw.addHour()) {
                    uint256 hour = time.sub(lw).toHours();
                    rewards = rewards.add(hour.mul(reward));
                }
            }
        }
    }

    function depositNumber(address user) public view returns (uint256) {
        return users[user].invest.length;
    }

    function updateReferrer(address user, uint64 amount) internal {
        require(isFree(user), 'RAL');

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

    function findLegsAmount(address user)
        public
        view
        returns (uint64 left, uint64 right)
    {
        left = findAmount(users[user].left);
        right = findAmount(users[user].right);
    }

    function isFree(address user) public view returns (bool) {
        return (users[user].right == address(0) ||
            users[user].left == address(0));
    }

    function exist(address user) public view returns (bool) {
        return users[user].ref != address(0);
    }

    function notExist(address user) public view returns (bool) {
        return users[user].ref == address(0);
    }

    function userInvest(address user) public view returns (Invest[] memory) {
        return users[user].invest;
    }
}

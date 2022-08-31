// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// CAUTION
// This version of Math should only be used with Solidity 0.8 or later,
// because it relies on the compiler's built in overflow checks.
library SixFourMath {
    function add(uint64 a, uint64 b) internal pure returns (uint64) {
        return a + b;
    }

    function sub(uint64 a, uint64 b) internal pure returns (uint64) {
        return a - b;
    }

    function mul(uint64 a, uint64 b) internal pure returns (uint64) {
        return a * b;
    }

    function div(uint64 a, uint64 b) internal pure returns (uint64) {
        return a / b;
    }

    function mod(uint64 a, uint64 b) internal pure returns (uint64) {
        return a % b;
    }

    function addHour(uint64 a) internal pure returns (uint64) {
        return add(a, 1 hours);
    }

    function toHours(uint64 a) internal pure returns (uint64) {
        return div(a, 1 hours);
    }
}

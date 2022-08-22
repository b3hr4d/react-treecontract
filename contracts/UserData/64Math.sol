// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

// CAUTION
// This version of Math should only be used with Solidity 0.8 or later,
// because it relies on the compiler's built in overflow checks.
library Math {
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

  function toUint64(uint256 value) internal pure returns (uint64) {
    require(value <= type(uint64).max, "Math: OVERFLOW");
    return uint64(value);
  }
}

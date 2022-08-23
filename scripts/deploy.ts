import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  const UserData = await ethers.getContractFactory("UserData");
  const userData = await UserData.deploy();

  await userData.deployed();

  const check = await userData.exist(owner.address);
  console.log(check);

  console.log("UserData Contract: ", userData.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

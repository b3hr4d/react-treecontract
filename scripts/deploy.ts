import { ethers } from "hardhat";
import { UserData, UserData__factory } from "../typechain";

async function main() {
  const [owner] = await ethers.getSigners();

  const UserData = (await ethers.getContractFactory(
    "UserData"
  )) as UserData__factory;
  const userData = (await UserData.deploy()) as UserData;

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

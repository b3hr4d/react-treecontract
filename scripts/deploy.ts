import { ethers } from 'hardhat'
import writeToFront from '../writeToFront'

async function main() {
  const [owner] = await ethers.getSigners()

  const UserData = await ethers.getContractFactory('UserData')
  const userData = await UserData.deploy()

  await userData.deployed()

  const check = await userData.exist(owner.address)
  console.log(check)

  console.log('UserData Contract: ', userData.address)
  writeToFront('UserData', userData.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

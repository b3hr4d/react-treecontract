import { ethers } from 'hardhat'

async function main() {
  const addresses = [
    '0x167F27341960aC14080F430d60fb6322bAed18Fe',
    '0xfDc2e71c6F96F70eB785BB9e18144aadbd2f98b0',
    '0xcDF464A6567B145FD6dCb684aeE1099157923548',
    '0x9EaA173b5C6283F475539E6C0a91Efefdc9BfAF5',
    '0x41B4901705f2F93Be8751B48Ed7B758464B069D9',
    '0x23621421A9A589078653b79F6865227FC0951b22',
    '0x2c8CCA40A23e29903E42FD95Ba43c10Ff7782E7F',
    '0x5722Dc761cb8edfdCb18fb2510e8F8FF628b3569',
    '0x754bF225122e8d7Dc27F1d690F07DbEC30112c74',
    '0x39Db10269Efd598659C25d68Af19AA070aA539cE',
    '0xDFdD9B5386b4D9e528C29cEac58Bee1013924342',
    '0x621190f034A35a3Ca2D05edd1A7f97d0f6449c4C',
    '0xd7381dfE4e300AF7e2fDc9dE41A840679A20A6C3',
    '0x3a90955585ba9fb69ff00e448496088724dd364d',
    '0x56bdb3C1572333AD79Ba6d074cB49B799dA6815C',
    '0x20F5Ff0fC74dae919D86AbA18eC556B03dd87A55',
    '0x27256b0928194bd154592cf41689e6Bc0E06C3DA',
    '0x45229E337473eEFF49cc2A92317161aa5AF1d21c',
    '0xC7656B8d7Ec377289775a6d89a5b87Cfea77B7aA',
  ]

  const signer = ethers.provider.getSigner(
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  )

  for await (const address of addresses) {
    console.log(address)
    await signer.sendTransaction({
      to: address,
      value: ethers.utils.parseEther('100'),
    })
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

import { createModel } from '@rematch/core'
import { RootModel } from 'context'
import userAbi from 'contracts/UserData/UserData.json'
import { ethers } from 'ethers'
import { UserData } from 'typechain'
import { ContractState } from './types'

const contract = createModel<RootModel>()({
  state: {} as ContractState,
  reducers: {
    DEPLOY: (_, contract: UserData) => contract,
  },
  effects: (dispatch) => ({
    init: async (provider: any) => {
      const userDataAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // Move this to context?

      const userData = new ethers.Contract(
        userDataAddress,
        userAbi,
        provider,
      ) as UserData

      await userData.deployed()

      dispatch.contract.DEPLOY(userData)
    },
  }),
})

export default contract

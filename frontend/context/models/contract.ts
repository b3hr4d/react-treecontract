import { Web3Provider } from '@ethersproject/providers'
import { createModel } from '@rematch/core'
import { RootModel } from 'context/store'
import { ABI, ADDRESS } from 'contracts/UserData'
import { ethers } from 'ethers'
import { UserData } from 'typechain'
import { ContractState } from '../data/contract'

const contract = createModel<RootModel>()({
  state: {} as ContractState,
  reducers: {
    DEPLOY: (_, contract: UserData) => contract,
  },
  effects: (dispatch) => ({
    init: async (provider: Web3Provider) => {
      const userData = new ethers.Contract(
        ADDRESS,
        ABI,
        provider.getSigner(),
      ) as UserData

      dispatch.contract.DEPLOY(userData)
    },
    register: async (payload, state) => {
      state.contract.register(payload, [1000, 1000, 1000, 1000])
    },
  }),
})

export default contract

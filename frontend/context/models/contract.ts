import { Web3Provider } from '@ethersproject/providers'
import { createModel } from '@rematch/core'
import { RootModel } from 'context/store'
import compiled from 'contracts/UserData/UserData.min.json'
import { ethers } from 'ethers'
import { investMaker } from 'helpers'
import { UserData } from 'typechain'
import { ContractState } from '../data/contract'

const state = {
  initialized: false,
} as ContractState

const contract = createModel<RootModel>()({
  state,
  reducers: {
    DEPLOY: (_, contract) => ({ ...contract, initialized: true }),
  },
  effects: (dispatch) => ({
    init: async (provider: Web3Provider, state) => {
      if (state.contract.initialized) return
      console.log('initializing')
      const userData = new ethers.Contract(
        compiled.address,
        compiled.abi,
        provider.getSigner(),
      ) as UserData

      dispatch.database.RESET()

      userData.once('Registered', (a, b, c) => {
        dispatch.database.registerUser({ user: a, referrer: b })
      })

      dispatch.contract.DEPLOY(userData)
    },
    register: async ({ referrer, value }, state) => {
      state.contract.register(
        referrer,
        investMaker() as unknown as UserData.InvestStruct,
        { value },
      )
    },
  }),
})

export default contract

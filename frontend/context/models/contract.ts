import { Web3Provider } from '@ethersproject/providers'
import { createModel } from '@rematch/core'
import { RootModel } from 'context/store'
import compiled from 'contracts/UserData/UserData.min.json'
import { ethers } from 'ethers'
import { investMaker } from 'helpers'
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
        compiled.address,
        compiled.abi,
        provider.getSigner(),
      ) as UserData

      await userData.deployed()

      dispatch.contract.DEPLOY(userData)
    },
    register: async (payload, state) => {
      state.contract.register(
        payload,
        investMaker() as unknown as UserData.InvestStruct,
        { value: '1000000' },
      )
    },
  }),
})

export default contract

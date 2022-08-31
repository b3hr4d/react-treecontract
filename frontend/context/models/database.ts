import { createModel } from '@rematch/core'
import { UserDataState } from 'context/data/database'
import { updateDatabase } from 'context/hooks/useDatabase'
import { setLoading } from 'context/hooks/useSettings'
import type { RootModel } from 'context/store'
import UserData from 'contracts'
import { jsInvestMaker, throttle, userInit } from 'helpers'

export const contract = new UserData(
  '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  userInit('0x0000000000000000000000000000000000000001'),
)

const defaultState: UserDataState = {
  users: contract.users,
  total: contract.total,
  userLength: Object.keys(contract.users).length,
}

const database = createModel<RootModel>()({
  state: defaultState,
  reducers: {
    UPDATE: (state) => {
      console.log('UpdateStates')

      return {
        ...state,
        total: contract.total,
        userLength: Object.keys(contract.users).length,
        users: { ...contract.users },
      }
    },
    RESET: () => {
      console.log('Reset Database')
      const contract = new UserData(
        '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        userInit('0x0000000000000000000000000000000000000001'),
      )

      return {
        total: contract.total,
        userLength: Object.keys(contract.users).length,
        users: { ...contract.users },
      }
    },
  },

  effects: () => ({
    registerUser: async ({ user, referrer }) => {
      console.log('Registering: ', user, referrer)
      contract.users[user] = userInit()
      contract.register(user, referrer, jsInvestMaker())

      throttle(() => {
        setLoading(false)
        updateDatabase()
      })
    },
  }),
})

export default database

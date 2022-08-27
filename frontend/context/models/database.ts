import { createModel } from '@rematch/core'
import { UserDataState } from 'context/data/database'
import { updateDatabase } from 'context/hooks/useDatabase'
import { setLoading } from 'context/hooks/useSettings'
import type { RootModel } from 'context/store'
import UserData from 'contracts'
import { investMaker, throttle, userInit } from 'helpers'

export const contract = new UserData('0x0', userInit('0xstart'))

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
  },

  effects: () => ({
    registerUser: async ({ user, referrer }) => {
      console.log('Registering: ', user, referrer)
      contract.users[user] = userInit()
      contract.register(user, referrer, investMaker())

      throttle(() => {
        setLoading(false)
        updateDatabase()
      })
    },
  }),
})

export default database

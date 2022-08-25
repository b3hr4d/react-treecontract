import { Provider } from '@ethersproject/providers'
import { createModel } from '@rematch/core'
import type { RootModel } from 'context'

const defaultStates = {}

const wallet = createModel<RootModel>()({
  state: defaultStates,
  reducers: {
    INIT: (state, provider: Provider) => ({ ...state, provider }),
  },
  effects: (dispatch) => ({
    init: async () => {},
  }),
})

export default wallet

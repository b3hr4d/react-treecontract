import { createModel } from '@rematch/core'
import type { RootModel } from 'context/store'
import { hooks, network, store } from '../data/provider/connectors'

import { WalletState } from '../data/provider'

const defaultStates: WalletState = {
  network,
  hooks,
  store,
}

const provider = createModel<RootModel>()({
  state: defaultStates,
  reducers: {
    INIT: (state) => ({ ...state }),
  },
  effects: (dispatch) => ({}),
})

export default provider

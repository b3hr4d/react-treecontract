import { initializeConnector } from '@web3-react/core'
import { Network } from '@web3-react/network'
import { URLS } from 'context/models/provider/chains'

export const [network, networkHooks] = initializeConnector<Network>(
  (actions) => new Network({ actions, urlMap: URLS }),
)

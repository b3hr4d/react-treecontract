import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { getPriorityConnector, Web3ReactHooks } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import type { Network } from '@web3-react/network'
import type web3React from '@web3-react/types/dist/index'
import { Web3ReactStore } from '@web3-react/types/dist/index'
import type { WalletConnect } from '@web3-react/walletconnect'

export type Provider = web3React.Provider

export type Connectors = [
  MetaMask | WalletConnect | CoinbaseWallet | Network,
  Web3ReactHooks,
][]

export type Priority = ReturnType<typeof getPriorityConnector>

export type WalletState = {
  store: Web3ReactStore
  hooks: Web3ReactHooks
  network: Network
  provider?: Provider
}

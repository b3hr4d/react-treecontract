import type { Provider } from '@ethersproject/providers'
import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { Web3ReactHooks } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import type { Network } from '@web3-react/network'
import type { WalletConnect } from '@web3-react/walletconnect'
import provider from '.'

export type Connectors = {
  [key in 'MetaMask' | 'WalletConnect' | 'CoinbaseWallet' | 'Network']: [
    MetaMask | WalletConnect | CoinbaseWallet | Network,
    Web3ReactHooks,
  ]
}
export type WalletState = {
  connectors: Connectors
  provider?: Provider
}

export type ProviderModel = typeof provider

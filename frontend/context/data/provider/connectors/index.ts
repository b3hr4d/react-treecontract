import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import type { Connectors } from '..'
import { coinbaseWallet, coinbaseWalletHooks } from './coinbaseWallet'
import { metaMask, metaMaskHooks } from './metaMask'
import { hooks, network } from './network'
import { walletConnect, walletConnectHooks } from './walletConnect'

export const MetaMaskConnector: [MetaMask, Web3ReactHooks] = [
  metaMask,
  metaMaskHooks,
]

export const WalletConnector: [WalletConnect, Web3ReactHooks] = [
  walletConnect,
  walletConnectHooks,
]

export const CoinBaseConnector: [CoinbaseWallet, Web3ReactHooks] = [
  coinbaseWallet,
  coinbaseWalletHooks,
]

export const NetworkConnector: [Network, Web3ReactHooks] = [network, hooks]

const connectors: Connectors = [
  MetaMaskConnector,
  WalletConnector,
  CoinBaseConnector,
  NetworkConnector,
]

export * from './coinbaseWallet'
export * from './metaMask'
export * from './network'
export * from './walletConnect'

export default connectors

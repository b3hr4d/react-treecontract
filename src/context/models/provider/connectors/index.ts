import type { Connectors } from '../types'
import { coinbaseWallet, coinbaseWalletHooks } from './coinbaseWallet'
import { metaMask, metaMaskHooks } from './metaMask'
import { network, networkHooks } from './network'
import { walletConnect, walletConnectHooks } from './walletConnect'

const connectors: Connectors = {
  MetaMask: [metaMask, metaMaskHooks],
  WalletConnect: [walletConnect, walletConnectHooks],
  CoinbaseWallet: [coinbaseWallet, coinbaseWalletHooks],
  Network: [network, networkHooks],
}

export * from './coinbaseWallet'
export * from './metaMask'
export * from './network'
export * from './walletConnect'

export default connectors

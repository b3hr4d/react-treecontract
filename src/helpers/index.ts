import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect'
import { address, Invest, UserStruct } from '../contracts'

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask'
  if (connector instanceof WalletConnect) return 'WalletConnect'
  if (connector instanceof CoinbaseWallet) return 'Coinbase Wallet'
  if (connector instanceof Network) return 'Network'
  return 'Unknown'
}

export const randomAddress = (id: number | string) => `0x${numBeetween(+id)}`

export const randomValue = (multi = 10000) => Math.floor(Math.random() * multi)

export const investMaker = () =>
  new Invest(randomValue(), randomValue(), randomValue(), 10000)

export const numBeetween = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const userInit = (ref?: string) => new UserStruct(address(ref))

export const toUsd = (value = 0, show = false) =>
  value.toLocaleString(
    'en',
    show
      ? { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }
      : undefined,
  )

export const getEllipsisAdd = (str = '', n = 6) =>
  `${str.slice(0, n)}...${str.slice(str.length - n)}`.toLowerCase()

let timer: NodeJS.Timeout

export const throttle = (func: () => void, wait = 300) => {
  clearTimeout(timer)
  timer = setTimeout(() => func(), wait)
}

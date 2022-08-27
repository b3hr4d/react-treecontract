import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { initializeConnector } from '@web3-react/core'
import { URLS } from '../chains'

export const [coinbaseWallet, coinbaseWalletHooks] =
  initializeConnector<CoinbaseWallet>(
    (actions) =>
      new CoinbaseWallet({
        actions,
        options: {
          url: URLS[1][0],
          appName: 'smart-world',
        },
      }),
  )

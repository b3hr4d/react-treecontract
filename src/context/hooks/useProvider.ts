import type { Provider } from '@ethersproject/providers'
import store, { RootState } from 'context'
import { useSelector } from 'react-redux'

export const initialize = (provider: Provider) => {
  store.dispatch.wallet.INIT(provider)
}

const useWallet = () => useSelector((state: RootState) => state.wallet)

export default useWallet

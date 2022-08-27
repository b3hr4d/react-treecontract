import { useWeb3React } from '@web3-react/core'
import store, { RootState } from 'context/store'
import { useSelector } from 'react-redux'

export const usePriorityProvider = useWeb3React

const networkHooks = store.getState().provider.hooks

export const useChainId = networkHooks.useChainId
export const useAccount = networkHooks.useAccount
export const useProvider = networkHooks.useProvider
export const useIsActive = networkHooks.useIsActive
export const useIsActivating = networkHooks.useIsActivating

const useWallet = () => useSelector((state: RootState) => state.provider)

export default useWallet

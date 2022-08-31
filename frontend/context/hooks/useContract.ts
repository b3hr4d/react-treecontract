import { Web3Provider } from '@ethersproject/providers'
import store, { RootState } from 'context/store'
import { BigNumber } from 'ethers'
import { useSelector } from 'react-redux'

export const setContract = (provider: Web3Provider) =>
  store.dispatch.contract.init(provider)

export const registerUser = (referrer: string, value: BigNumber) =>
  store.dispatch.contract.register({ referrer, value })

const useContract = () => useSelector((state: RootState) => state.contract)

export default useContract

import { useWeb3React } from '@web3-react/core'
import { useCallback, useState } from 'react'

const useChainSwitch = () => {
  const { chainId, account, isActivating, isActive, provider, connector } =
    useWeb3React()

  const [error, setError] = useState<Error>()
  // attempt to connect eagerly on mount

  const [desiredChainId, setDesiredChainId] = useState<number>(31337)

  const switchChain = useCallback(
    (desiredChainId: number) => {
      setDesiredChainId(desiredChainId)
      // if we're already connected to the desired chain, return
      if (desiredChainId === chainId) {
        setError(undefined)
        return
      }

      // if they want to connect to the default chain and we're already connected, return
      if (desiredChainId === -1 && chainId !== undefined) {
        setError(undefined)
        return
      }
      connector.activate(desiredChainId === -1 ? undefined : desiredChainId)
    },
    [chainId, connector],
  )

  return {
    desiredChainId,
    account,
    provider,
    chainId,
    error,
    isActivating,
    isActive,
    switchChain,
  }
}

export default useChainSwitch

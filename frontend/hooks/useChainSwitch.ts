import { network } from 'context/data/provider/connectors'
import {
  useAccount,
  useChainId,
  useIsActivating,
  useIsActive,
  useProvider,
} from 'context/hooks'
import { useCallback, useEffect, useState } from 'react'

const useChainSwitch = () => {
  const chainId = useChainId()
  const account = useAccount()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()

  const [error, setError] = useState<Error>()
  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate().catch(() => {
      console.debug('Failed to connect to network')
    })
  }, [])

  const [desiredChainId, setDesiredChainId] = useState<number>(1)

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
      network
        .activate(desiredChainId === -1 ? undefined : desiredChainId)
        .then(() => setError(undefined))
        .catch(setError)
    },
    [chainId, setError],
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

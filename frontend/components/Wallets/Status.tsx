import { Typography } from '@mui/material'
import type { Web3ReactHooks } from '@web3-react/core'

export function Status({
  isActivating,
  isActive,
  error,
}: {
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
  error?: Error
}) {
  return (
    <Typography mb={1}>
      {error ? (
        <span>
          🔴 {error.name ?? 'Error'}
          {error.message ? `: ${error.message}` : null}
        </span>
      ) : isActivating ? (
        '🟡 Connecting'
      ) : isActive ? (
        '🟢 Connected'
      ) : (
        '⚪️ Disconnected'
      )}
    </Typography>
  )
}

import { Box, Typography } from '@mui/material'
import type { Web3ReactHooks } from '@web3-react/core'
import { CHAINS } from 'context/data/provider/chains'

export function Chain({
  chainId,
}: {
  chainId: ReturnType<Web3ReactHooks['useChainId']>
}) {
  if (chainId === undefined) return null

  const name = chainId ? CHAINS[chainId]?.name : undefined

  return (
    <Box>
      {name ? (
        <Typography>
          Chain:&nbsp;
          <b>
            {name} ({chainId})
          </b>
        </Typography>
      ) : (
        <Typography>
          Chain Id:&nbsp;
          <b>{chainId}</b>
        </Typography>
      )}
    </Box>
  )
}

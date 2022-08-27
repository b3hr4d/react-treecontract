import { ButtonProps, MenuItem, Select } from '@mui/material'
import { CHAINS, URLS } from 'context/data/provider/chains'
import useChainSwitch from 'hooks/useChainSwitch'

interface ChainChangerProps extends ButtonProps {}

const ChainChanger: React.FC<ChainChangerProps> = () => {
  const { chainId, isActivating, switchChain } = useChainSwitch()

  const chainIds = Object.keys(URLS)

  return (
    <Select
      size="small"
      value={chainId || 1}
      onChange={(event) => {
        switchChain(Number(event.target.value))
      }}
      disabled={isActivating}
    >
      {chainIds.map((chainId) => (
        <MenuItem key={chainId} value={chainId}>
          {CHAINS[chainId]?.name ?? chainId}
        </MenuItem>
      ))}
    </Select>
  )
}

export default ChainChanger

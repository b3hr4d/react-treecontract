import {
  ButtonProps,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { Stack } from '@mui/system'
import { CHAINS } from 'context/data/provider/chains'
import TButton from 'elements/TButton'

interface ChainSelectProps extends ButtonProps {
  title: string
  chainId?: number
  switchChain: (chainId: number) => void | undefined
  onClick?: () => void
  displayDefault: boolean
  disabled?: boolean
  loading?: boolean
  chainIds: number[]
}

const ChainSelect: React.FC<ChainSelectProps> = ({
  chainId,
  switchChain,
  displayDefault,
  title,
  chainIds,
  loading,
  ...rest
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <FormControl size="small" disabled={loading}>
        <InputLabel id="chain-select">Chain</InputLabel>
        <Select
          id="chain-select"
          labelId="chain-select"
          variant="outlined"
          label="Chain"
          value={chainId}
          onChange={(event) => {
            switchChain(Number(event.target.value))
          }}
          disabled={switchChain === undefined}
        >
          {displayDefault ? (
            <MenuItem value={-1}>Default Chain</MenuItem>
          ) : null}
          {chainIds.map((chainId) => (
            <MenuItem key={chainId} value={chainId}>
              {CHAINS[chainId]?.name ?? chainId}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TButton size="small" {...rest}>
        {title}
      </TButton>
    </Stack>
  )
}

export default ChainSelect

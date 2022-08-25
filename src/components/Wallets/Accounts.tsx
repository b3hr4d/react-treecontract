import { formatEther } from '@ethersproject/units'
import { List, ListItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import type { Web3ReactHooks } from '@web3-react/core'
import { getEllipsisAdd } from 'helpers'
import useBalances from 'hooks/useBalances'

interface AccountsProps {
  accounts: ReturnType<Web3ReactHooks['useAccounts']>
  provider: ReturnType<Web3ReactHooks['useProvider']>
  ENSNames?: ReturnType<Web3ReactHooks['useENSNames']>
}

export const Accounts: React.FC<AccountsProps> = ({
  accounts,
  provider,
  ENSNames,
}) => {
  const balances = useBalances(provider, accounts)

  if (accounts === undefined) return null

  return (
    <Stack direction="row" alignItems="center">
      <Typography>Accounts:&nbsp;</Typography>
      <List>
        <Typography fontWeight="bold">
          {accounts.length === 0
            ? 'None'
            : accounts?.map((account, i) => (
                <ListItem disablePadding key={account}>
                  {ENSNames?.[i] ?? getEllipsisAdd(account)}
                  {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
                </ListItem>
              ))}
        </Typography>
      </List>
    </Stack>
  )
}

import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { getName } from 'helpers'
import { Accounts } from './Accounts'
import { Chain } from './Chain'
import { ConnectWithSelect } from './ConnectWithSelect'
import { Status } from './Status'

interface WalletCardProps {
  connector: MetaMask | WalletConnect | CoinbaseWallet | Network
  chainId: ReturnType<Web3ReactHooks['useChainId']>
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
  error?: Error
  setError: (error?: Error) => void
  ENSNames?: ReturnType<Web3ReactHooks['useENSNames']>
  provider?: ReturnType<Web3ReactHooks['useProvider']>
  accounts?: string[]
}

const WalletCard: React.FC<WalletCardProps> = ({
  connector,
  chainId,
  isActivating,
  isActive,
  error,
  setError,
  ENSNames,
  accounts,
  provider,
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Stack m={1} minHeight={150}>
            <Typography gutterBottom variant="h5" fontWeight="bold">
              {getName(connector)}
            </Typography>
            <Status
              isActivating={isActivating}
              isActive={isActive}
              error={error}
            />
            <Chain chainId={chainId} />
            <Accounts
              accounts={accounts}
              provider={provider}
              ENSNames={ENSNames}
            />
          </Stack>
          <CardActions>
            <ConnectWithSelect
              connector={connector}
              chainId={chainId}
              isActivating={isActivating}
              isActive={isActive}
              error={error}
              setError={setError}
            />
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default WalletCard

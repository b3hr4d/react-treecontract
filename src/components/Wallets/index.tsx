import Grid from '@mui/material/Grid'
import CoinbaseWalletCard from './Cards/CoinbaseWalletCard'
import MetaMaskCard from './Cards/MetaMaskCard'
import NetworkCard from './Cards/NetworkCard'
import WalletConnectCard from './Cards/WalletConnectCard'

interface ConnectWalletProps {}

const ConnectWallet: React.FC<ConnectWalletProps> = () => {
  return (
    <Grid container spacing={1}>
      {/* <ProviderExample /> */}
      <MetaMaskCard />
      <WalletConnectCard />
      <CoinbaseWalletCard />
      <NetworkCard />
    </Grid>
  )
}

export default ConnectWallet

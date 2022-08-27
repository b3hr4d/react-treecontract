import { Grid, Modal } from '@mui/material'
import useSettings, { setModal } from 'context/hooks/useSettings'
import CoinbaseWalletCard from './Cards/CoinbaseWalletCard'
import MetaMaskCard from './Cards/MetaMaskCard'
import NetworkCard from './Cards/NetworkCard'
import WalletConnectCard from './Cards/WalletConnectCard'

interface ConnectWalletProps {}

const ConnectWallet: React.FC<ConnectWalletProps> = () => {
  const { modal } = useSettings()
  return (
    <Modal keepMounted open={modal} onClose={() => setModal(false)}>
      <Grid
        container
        spacing={1}
        width="400px"
        height="400px"
        justifyContent="space-between"
        position="absolute"
        sx={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <MetaMaskCard />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <NetworkCard />
      </Grid>
    </Modal>
  )
}

export default ConnectWallet

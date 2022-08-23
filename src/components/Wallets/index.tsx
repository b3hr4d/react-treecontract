import { Stack } from "@mui/material";
import CoinbaseWalletCard from "./connectorCards/CoinbaseWalletCard";
import MetaMaskCard from "./connectorCards/MetaMaskCard";
import NetworkCard from "./connectorCards/NetworkCard";
import WalletConnectCard from "./connectorCards/WalletConnectCard";
import ProviderExample from "./ProviderExample";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  return (
    <Stack spacing={1}>
      <ProviderExample />
      <MetaMaskCard />
      <WalletConnectCard />
      <CoinbaseWalletCard />
      <NetworkCard />
    </Stack>
  );
};

export default index;

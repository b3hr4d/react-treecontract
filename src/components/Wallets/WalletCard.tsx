import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import { Accounts } from "./Accounts";
import { Chain } from "./Chain";
import { ConnectWithSelect } from "./ConnectWithSelect";
import { Status } from "./Status";
import { getName } from "./utils";

interface WalletCardProps {
  connector: MetaMask | WalletConnect | CoinbaseWallet | Network;
  chainId: ReturnType<Web3ReactHooks["useChainId"]>;
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
  error?: Error;
  setError: (error?: Error) => void;
  ENSNames: ReturnType<Web3ReactHooks["useENSNames"]>;
  provider?: ReturnType<Web3ReactHooks["useProvider"]>;
  accounts?: string[];
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
      <Card title={getName(connector)}>
        <CardContent>
          <Stack m={1} minHeight={220}>
            <Typography gutterBottom variant="h5" component="div">
              {getName(connector)}
            </Typography>
            <div style={{ marginBottom: "1rem" }}>
              <Status
                isActivating={isActivating}
                isActive={isActive}
                error={error}
              />
            </div>
            <Chain chainId={chainId} />
            <div style={{ marginBottom: "1rem" }}>
              <Accounts
                accounts={accounts}
                provider={provider}
                ENSNames={ENSNames}
              />
            </div>
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
  );
};

export default WalletCard;

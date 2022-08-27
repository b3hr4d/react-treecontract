import {
  AppBar,
  Button,
  Icon,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import ChainChanger from 'components/Wallets/ChainChanger'
import { setModal } from 'context/hooks'
import useDatabase from 'context/hooks/useDatabase'
import { getEllipsis, toUsd } from 'helpers'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { total } = useDatabase()
  const { account } = useWeb3React()

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Icon>account_tree</Icon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tree&nbsp;
          {toUsd(total)}
        </Typography>
        <Stack
          spacing={1}
          py={0.5}
          px={1}
          direction="row"
          alignItems="center"
          bgcolor="rgba(255, 255, 255, 0.8);"
          borderRadius={1}
        >
          <ChainChanger />
          <Button onClick={() => setModal(true)} variant="text">
            {getEllipsis(account) || 'Connect'}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header

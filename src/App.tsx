import { Toolbar } from '@mui/material'
import Box from '@mui/material/Box'

import RegisterBar from 'components/RegisterBar'
import TreeCanvas from 'components/TreeCanvas'

// import ConnectWallet from 'components/Wallets'

import Body from 'layouts/Body'
import Header from './layouts/Header'

function App() {
  return (
    <Box>
      <Header />
      <Toolbar />
      <Body>
        {/* <ConnectWallet /> */}
        <RegisterBar />
        <TreeCanvas />
      </Body>
    </Box>
  )
}

export default App

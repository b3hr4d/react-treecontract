import { Toolbar } from '@mui/material'
import Body from 'layouts/Body'
import Header from 'layouts/Header'

import { Web3ReactProvider } from '@web3-react/core'
import connectors from 'context/data/provider/connectors'
import store from 'context/store'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'theme'
import './styles.css'

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Web3ReactProvider connectors={connectors} lookupENS={false}>
        <Provider store={store}>
          <ThemeProvider>
            <Header />
            <Toolbar />
            <Body>
              <Component {...pageProps} />
            </Body>
          </ThemeProvider>
        </Provider>
      </Web3ReactProvider>
    </StrictMode>
  )
}

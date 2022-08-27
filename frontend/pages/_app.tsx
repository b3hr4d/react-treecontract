import { Toolbar } from '@mui/material'
import Body from 'layouts/Body'
import Header from 'layouts/Header'

import { createTheme, ThemeProvider as MuiProvider } from '@mui/material/styles'
import { Web3ReactProvider } from '@web3-react/core'
import connectors from 'context/data/provider/connectors'
import useSettings from 'context/hooks/useSettings'
import store from 'context/store'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'

const ThemeProvider = (props: any) => {
  const { color } = useSettings()

  const theme = createTheme({
    palette: {
      primary: {
        main: color[700],
      },
    },
  })
  return <MuiProvider theme={theme} {...props} />
}

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Web3ReactProvider connectors={connectors}>
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

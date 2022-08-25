import { createTheme, ThemeProvider as MuiProvider } from '@mui/material/styles'
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { Buffer } from 'buffer'
import store from 'context'
import useSettings from 'context/hooks/useSettings'
import connectors from 'context/models/provider/connectors'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'

window.Buffer = window.Buffer || Buffer

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

const Web3Provider = ({ children }) => {
  const { connector } = useWeb3React()

  console.log(connector.provider)

  return children
}

const root = createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <Web3ReactProvider connectors={Object.values(connectors)}>
        <Web3Provider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Web3Provider>
      </Web3ReactProvider>
    </Provider>
  </StrictMode>,
)

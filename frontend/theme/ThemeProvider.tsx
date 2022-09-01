import Snackbar from '@mui/material/Snackbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useSettings, { setShowSnackbar } from 'context/hooks/useSettings'
import { useMemo } from 'react'
import TAlert from './elements/TAlert'

interface MainProviderProps {
  children?: React.ReactNode
}

const MainProvider: React.FC<MainProviderProps> = ({ children, ...rest }) => {
  const { color, snackbar, showSnackBar } = useSettings()

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    setShowSnackbar(false)
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: color[700],
          },
        },
      }),
    [color],
  )

  return (
    <ThemeProvider theme={theme} {...rest}>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        {...snackbar}
      >
        <TAlert
          severity="error"
          title="Error"
          onClose={handleClose}
          {...snackbar}
        />
      </Snackbar>
      {children}
    </ThemeProvider>
  )
}

export default MainProvider

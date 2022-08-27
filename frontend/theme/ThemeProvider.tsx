import { createTheme, ThemeProvider as MuiProvider } from '@mui/material'
import useSettings from 'context/hooks/useSettings'

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

export default ThemeProvider

import { Box } from '@mui/material'
import Body from './Body'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Body>{children}</Body>
    </Box>
  )
}

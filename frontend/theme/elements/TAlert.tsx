import Alert, { AlertProps } from '@mui/material/Alert'
import { forwardRef } from 'react'

interface TAlertProps extends AlertProps {
  message: string
}

const TAlert: React.FC<TAlertProps> = forwardRef(
  ({ children, message, ...rest }, ref) => (
    <Alert severity="success" sx={{ width: '100%' }} {...rest} ref={ref}>
      {children || message}
    </Alert>
  ),
)

export default TAlert

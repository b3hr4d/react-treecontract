import { Icon, IconButton, InputAdornment } from '@mui/material'
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField'
import { forwardRef } from 'react'

interface TInputProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  max?: number
  min?: number
  onClose?: () => void
}

const TInput: React.FC<TInputProps> = forwardRef(
  ({ max, min = 0, onClose, InputProps, ...rest }, ref) => (
    <TextField
      inputProps={{
        min,
        max,
        sx: { py: 0.8, px: 1.6 },
      }}
      InputProps={{
        ...InputProps,
        endAdornment: onClose ? (
          <InputAdornment position="end" onClick={onClose}>
            <IconButton edge="end">
              <Icon children="close" color="error" />
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
      {...rest}
      ref={ref}
    />
  ),
)

export default TInput

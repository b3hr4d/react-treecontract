import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";
import { forwardRef } from "react";

interface TInputProps extends Omit<OutlinedTextFieldProps, "variant"> {
  max?: number;
  min?: number;
}

const TInput: React.FC<TInputProps> = forwardRef(
  ({ max, min = 0, ...rest }, ref) => (
    <TextField
      fullWidth
      inputProps={{
        min,
        max,
        sx: { py: 0.8, px: 1.6 },
      }}
      {...rest}
      ref={ref}
    />
  )
);

export default TInput;

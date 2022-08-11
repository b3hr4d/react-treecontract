import Button, { ButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

interface TButtonProps extends ButtonProps {}

const TButton: React.FC<TButtonProps> = forwardRef((props, ref) => {
  return <Button {...props} variant="contained" ref={ref}></Button>;
});

export default TButton;

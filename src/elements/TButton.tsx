import Button, { ButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

interface TButtonProps extends ButtonProps {}

const TButton: React.FC<TButtonProps> = forwardRef((props, ref) => (
  <Button variant="contained" {...props} ref={ref} />
));

export default TButton;

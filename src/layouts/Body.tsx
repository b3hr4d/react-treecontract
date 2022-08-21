import Container, { ContainerProps } from "@mui/material/Container";
import { forwardRef } from "react";

interface BodyProps extends ContainerProps {}

const Body: React.FC<BodyProps> = forwardRef((props, ref) => (
  <Container
    maxWidth="md"
    disableGutters
    sx={{ height: "100vh" }}
    ref={ref}
    {...props}
  />
));

export default Body;

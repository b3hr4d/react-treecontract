import Grid, { GridProps } from "@mui/material/Grid";
import { forwardRef } from "react";

interface TGridProps extends GridProps {}

const TGridContainer: React.FC<TGridProps> = forwardRef((props, ref) => (
  <Grid
    container
    spacing={1}
    justifyContent="space-between"
    alignItems="center"
    ref={ref}
    {...props}
  />
));

export default TGridContainer;

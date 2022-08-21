import Grid, { GridProps } from "@mui/material/Grid";
import { forwardRef } from "react";

interface TGridProps extends GridProps {}

const TGridItem: React.FC<TGridProps> = forwardRef((props, ref) => (
  <Grid item alignItems="center" textAlign="center" ref={ref} {...props} />
));

export default TGridItem;

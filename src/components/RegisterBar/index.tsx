import { Box, Grid } from "@mui/material";
import TGridContainer from "elements/TGridContainer";

import Loop from "./Loop";
import Random from "./Random";
import Register from "./Register";

interface RegisterProps {}

const RegisterBar: React.FC<RegisterProps> = () => {
  return (
    <Box m={1}>
      <TGridContainer>
        <Grid item xs={12} sm={4}>
          <Register />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Random />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Loop />
        </Grid>
      </TGridContainer>
    </Box>
  );
};

export default RegisterBar;

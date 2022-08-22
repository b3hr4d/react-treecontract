import { Box, Stack } from "@mui/material";

import Loop from "./Loop";
import Random from "./Random";
import Register from "./Register";

interface RegisterProps {}

const RegisterBar: React.FC<RegisterProps> = () => {
  return (
    <Box m={1}>
      <Stack
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Register />
        <Random />
        <Loop />
      </Stack>
    </Box>
  );
};

export default RegisterBar;

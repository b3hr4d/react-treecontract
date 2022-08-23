import { Stack } from "@mui/material";

import Loop from "./Loop";
import Random from "./Random";
import Register from "./Register";

interface RegisterProps {}

const RegisterBar: React.FC<RegisterProps> = () => {
  return (
    <Stack
      my={1}
      spacing={1}
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <Register />
      <Random />
      <Loop />
    </Stack>
  );
};

export default RegisterBar;

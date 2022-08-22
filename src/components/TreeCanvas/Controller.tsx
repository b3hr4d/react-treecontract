import { Box, FormControlLabel, Stack, Switch } from "@mui/material";
import useUserData from "context/hooks/useUserData";
import TButton from "elements/TButton";
import TInput from "elements/TInput";
import { useEffect, useState } from "react";

interface ControllerProps {}

const Controller: React.FC<ControllerProps> = () => {
  const [
    { showAddress, showDetails, user },
    { setShowAddress, setUser, setShowDetails },
  ] = useUserData();

  const [search, setSearch] = useState(user);

  useEffect(() => {
    setSearch(user);
  }, [user]);

  return (
    <Box m={1}>
      <Stack
        spacing={1}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Stack p={1} direction="row" justifyContent="center" spacing={1}>
          <TInput
            type="text"
            label="Search"
            placeholder="search"
            value={search || user}
            onClose={() => setSearch("0x0")}
            onChange={(e) => setSearch(e.target.value)}
          />
          <TButton onClick={() => setUser(search)}>Search</TButton>
        </Stack>
        <FormControlLabel
          control={<Switch color="primary" checked={showAddress} />}
          label="Show Address"
          labelPlacement="start"
          onClick={setShowAddress}
        />
        <FormControlLabel
          control={<Switch color="primary" checked={showDetails} />}
          label="Show Details"
          labelPlacement="start"
          onClick={setShowDetails}
        />
      </Stack>
    </Box>
  );
};

export default Controller;

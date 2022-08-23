import { FormControlLabel, Stack, Switch } from "@mui/material";
import useGlobal, {
  resetTree,
  setUser,
  setUserAddress,
  setUserDetails,
} from "context/hooks/useGlobal";
import TButton from "elements/TButton";
import TInput from "elements/TInput";
import { useCallback, useEffect, useState } from "react";

interface ControllerProps {}

const Controller: React.FC<ControllerProps> = () => {
  const { showAddress, showDetails, user } = useGlobal();

  const [search, setSearch] = useState(user);

  useEffect(() => {
    setSearch(user);
  }, [user]);

  const searchHandler = useCallback(() => {
    setUser(search);
    resetTree();
  }, [search]);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      p={1}
    >
      <Stack flex={6} direction="row" justifyContent="center" spacing={1}>
        <TInput
          type="text"
          label="Search"
          placeholder="search"
          value={search || user}
          onClose={() => setSearch("0x0")}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TButton onClick={searchHandler}>Search</TButton>
      </Stack>
      <Stack
        flex={6}
        direction="row"
        justifyContent="space-between"
        spacing={1}
      >
        <FormControlLabel
          control={<Switch color="primary" checked={showAddress} />}
          label="Address"
          labelPlacement="start"
          onClick={setUserAddress}
        />
        <FormControlLabel
          control={<Switch color="primary" checked={showDetails} />}
          label="Details"
          labelPlacement="start"
          onClick={setUserDetails}
        />
      </Stack>
    </Stack>
  );
};

export default Controller;

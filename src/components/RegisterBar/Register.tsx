import { Card, Stack } from "@mui/material";
import { RootState } from "context/store";
import TButton from "elements/TButton";
import TInput from "elements/TInput";
import useUserContract from "hooks/useUserContract";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [ref, setRef] = useState(0);

  const { register } = useUserContract();
  const { userLength } = useSelector((state: RootState) => state.userData);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    if (value < userLength) setRef(value);
  };

  return (
    <Card>
      <Stack p={1} direction="row" justifyContent="center" spacing={1}>
        <TInput
          type="number"
          label="Referrer"
          placeholder="referrer"
          value={ref}
          max={userLength - 1}
          onChange={inputHandler}
        />
        <TButton onClick={() => register(ref)}>Register</TButton>
      </Stack>
    </Card>
  );
};

export default Register;

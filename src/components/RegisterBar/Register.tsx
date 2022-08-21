import { Box, Card } from "@mui/material";
import TButton from "elements/TButton";
import TGridContainer from "elements/TGridContainer";
import TGridItem from "elements/TGridItem";
import TInput from "elements/TInput";
import useUserContract from "hooks/useContract";
import { ChangeEvent, useState } from "react";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [ref, setRef] = useState(0);

  const { register, userLength } = useUserContract();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    if (value < userLength) setRef(value);
  };

  return (
    <Card>
      <Box p={1}>
        <TGridContainer>
          <TGridItem xs={8}>
            <TInput
              type="number"
              label="Referrer"
              placeholder="referrer"
              value={ref}
              max={userLength - 1}
              onChange={inputHandler}
            />
          </TGridItem>
          <TGridItem xs={4}>
            <TButton onClick={() => register(ref)}>Register</TButton>
          </TGridItem>
        </TGridContainer>
      </Box>
    </Card>
  );
};

export default Register;

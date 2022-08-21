import { Box, Card } from "@mui/material";
import TButton from "elements/TButton";
import useUserContract from "hooks/useContract";

interface RandomProps {}

const Random: React.FC<RandomProps> = () => {
  const { random } = useUserContract();

  return (
    <Card>
      <Box p={1} textAlign="center">
        <TButton onClick={() => random()}>Random</TButton>
      </Box>
    </Card>
  );
};

export default Random;

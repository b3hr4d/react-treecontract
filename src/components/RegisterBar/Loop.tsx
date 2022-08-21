import { Box, Card } from "@mui/material";
import TButton from "elements/TButton";
import TGridContainer from "elements/TGridContainer";
import TGridItem from "elements/TGridItem";
import TInput from "elements/TInput";
import useUserContract from "hooks/useContract";
import { useState } from "react";

interface LoopProps {}

const Loop: React.FC<LoopProps> = () => {
  const [num, setNum] = useState(100);
  const { loop } = useUserContract();

  return (
    <Card>
      <Box p={1}>
        <TGridContainer>
          <TGridItem xs={9}>
            <TInput
              type="number"
              fullWidth
              label="Loop"
              placeholder="loop"
              value={num}
              onChange={(e) => setNum(+e.target.value)}
            />
          </TGridItem>
          <TGridItem xs={3}>
            <TButton onClick={() => loop(num)}>Loop</TButton>
          </TGridItem>
        </TGridContainer>
      </Box>
    </Card>
  );
};

export default Loop;

import { Box, Card } from "@mui/material";
import CustomNode from "components/TreeCanvas/CustomNode";
import { useCenteredTree } from "hooks/useCenteredTree";
import useUserTree from "hooks/useUserTree";
import Tree from "react-d3-tree";
import Header from "./Controller";

interface indexProps {}

const TreeCanvas: React.FC<indexProps> = () => {
  const [translate, containerRef] = useCenteredTree();
  const { data } = useUserTree();

  return (
    <Box height="100%" ref={containerRef}>
      <Card sx={{ height: translate.height, m: 1 }}>
        <Header />
        <Tree
          data={data}
          translate={translate}
          orientation="vertical"
          renderCustomNodeElement={(props: any) => <CustomNode {...props} />}
        />
      </Card>
    </Box>
  );
};

export default TreeCanvas;

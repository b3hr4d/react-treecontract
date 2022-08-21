import { Box } from "@mui/material";
import CustomNode from "components/TreeCanvas/Node";
import { address } from "contracts";
import { useCenteredTree } from "hooks/useCenteredTree";
import useUserContract from "hooks/useContract";
import { useMemo } from "react";
import Tree from "react-d3-tree";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";

interface indexProps {}

const TreeCanvas: React.FC<indexProps> = () => {
  const [translate, containerRef] = useCenteredTree();

  const { findTree, users } = useUserContract();

  const data = useMemo(() => {
    const findTrees = (name: string) => {
      const obj: RawNodeDatum = {
        name,
      };
      if (address() === name) return obj;
      const { left, right, refAmount } = users[name];
      obj.attributes = {
        refAmount,
        tree: findTree(name).toString(),
      };

      if (address() !== left) obj.children = [findTrees(left)];

      if (address() !== right) obj.children?.push(findTrees(right));
      return obj;
    };
    return findTrees("0x0");
  }, [users, findTree]);

  console.log(users);

  return (
    <Box height="100%" ref={containerRef}>
      <Tree
        data={data}
        translate={translate}
        orientation="vertical"
        renderCustomNodeElement={(props) => <CustomNode {...props} />}
      />
    </Box>
  );
};

export default TreeCanvas;

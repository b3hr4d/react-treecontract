import { Box, Card, Typography } from "@mui/material";
import { useMemo } from "react";
import { CustomNodeElementProps } from "react-d3-tree/lib/types/common";

const CustomNode: React.FC<CustomNodeElementProps> = ({
  nodeDatum,
  hierarchyPointNode,
  toggleNode,
}) => {
  const isLeft = useMemo(() => hierarchyPointNode.x < 0, [hierarchyPointNode]);

  const foreignObjectProps = useMemo(
    () => ({
      width: 150,
      height: 150,
      x: isLeft ? -225 : 25,
      y: -30,
    }),
    [isLeft]
  );

  return (
    <g>
      <circle r={20} onClick={toggleNode}>
        <text x="0" y="0" fill="red">
          {nodeDatum.name}
        </text>
      </circle>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <Card>
          <Box p={1}>
            <Typography align="center">{nodeDatum.name}</Typography>
          </Box>
        </Card>
      </foreignObject>
    </g>
  );
};

export default CustomNode;

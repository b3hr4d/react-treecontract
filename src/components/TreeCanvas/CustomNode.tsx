import { Box, Card, Collapse, Icon, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Stack } from "@mui/system";
import { toUsd } from "helpers";
import useUserTree from "hooks/useUserTree";
import { useEffect, useMemo, useState } from "react";
import { CustomNodeProps } from "./Types";

const CustomNode: React.FC<CustomNodeProps> = ({
  nodeDatum: { __rd3t, attributes, children, name, invest },
  toggleNode,
}) => {
  const { showAddress, showDetails, setUser } = useUserTree();
  const [open, setOpen] = useState(showDetails);

  useEffect(() => {
    setOpen(showDetails);
  }, [showDetails]);

  const bgcolor = useMemo(
    () => (children ? blue[300] : "ActiveCaption"),
    [children]
  );

  const total = useMemo(
    () => invest?.reduce((all, inv) => all + inv.amount, 0),
    [invest]
  );

  return (
    <foreignObject width={130} height={150} x={-65} y={-25}>
      <Card sx={{ bgcolor }}>
        <Stack
          px={0.5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Icon onClick={toggleNode} fontSize="small">
            {__rd3t.collapsed ? "keyboard_arrow_right" : "keyboard_arrow_down"}
          </Icon>
          <Typography fontWeight="500" onClick={() => setUser(name)}>
            {showAddress ? name : toUsd(total, true)}
          </Typography>
          <Icon onClick={() => setOpen((prev) => !prev)} fontSize="small">
            {open ? "info" : "info_outlined"}
          </Icon>
        </Stack>
      </Card>
      {attributes?.refAmount ? (
        <Collapse in={open}>
          <Box textAlign="center" mt={0.5} fontSize="12px" fontWeight="bold">
            <Card sx={{ bgcolor }}>{toUsd(attributes?.refAmount, true)}</Card>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={0.25}
              mt={0.5}
            >
              {attributes?.tree.map((it, i) => (
                <Card key={i} sx={{ bgcolor, flex: 6 }}>
                  {toUsd(it)}
                </Card>
              ))}
            </Stack>
          </Box>
        </Collapse>
      ) : null}
    </foreignObject>
  );
};

export default CustomNode;

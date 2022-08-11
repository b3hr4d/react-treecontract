import { Box, Grid, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import { ChangeEvent, useMemo, useState } from "react";
import Tree from "react-d3-tree";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";
import "./App.css";
import Header from "./components/Header";
import TButton from "./components/TButton";
import { address } from "./contracts";
import useUserContract from "./hooks/useContract";

function App() {
  const [ref, setRef] = useState(0);
  const [num, setNum] = useState(100);
  const { register, loop, random, findTree, total, userLength, users } =
    useUserContract();

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
    console.log("data");

    return findTrees("0x0");
  }, [users, findTree]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    if (value < userLength) setRef(value);
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header total={total} />
      <Container
        maxWidth={false}
        disableGutters
        sx={(theme) => ({
          height: {
            xs: `calc(100% - ${theme.spacing(7)})`,
            sm: `calc(100% - ${theme.spacing(8)})`,
          },
        })}
      >
        <Box height={{ xs: "20%", sm: "10%" }}>
          <Grid container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              mt={1}
              spacing={1}
            >
              <Grid item xs={6} sm={2}>
                <TextField
                  type="number"
                  label="Referrer"
                  placeholder="referrer"
                  value={ref}
                  inputProps={{
                    min: 0,
                    max: userLength - 1,
                    sx: { p: 1 },
                  }}
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <TButton onClick={() => register(ref)}>Register</TButton>
              </Grid>
              <Grid item xs={4} sm={2}>
                <TButton onClick={() => random()}>Random</TButton>
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  type="number"
                  label="Loop"
                  placeholder="loop"
                  value={num}
                  inputProps={{
                    min: 0,
                    max: userLength - 1,
                    sx: { p: 1 },
                  }}
                  onChange={(e) => setNum(+e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TButton onClick={() => loop(num)}>Loop</TButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box height={{ xs: "80%", sm: "90%" }}>
          <Tree
            data={data}
            orientation="vertical"
            nodeSize={{ x: 150, y: 150 }}
            translate={{ x: window.innerWidth / 2, y: 50 }}
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"
            onLinkClick={(e) => {
              console.log(e);
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default App;

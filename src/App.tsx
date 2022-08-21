import Box from "@mui/material/Box";

import RegisterBar from "components/RegisterBar";
import TreeCanvas from "components/TreeCanvas";

import Body from "layouts/Body";
import Header from "./layouts/Header";

function App() {
  return (
    <Box>
      <Header />
      <Body>
        <RegisterBar />
        <TreeCanvas />
      </Body>
    </Box>
  );
}

export default App;

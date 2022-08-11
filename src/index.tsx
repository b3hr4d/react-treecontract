import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = createTheme({
  components: {},
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

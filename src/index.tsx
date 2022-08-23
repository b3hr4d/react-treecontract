import {
  createTheme,
  ThemeProvider as MuiProvider,
} from "@mui/material/styles";
import { Buffer } from "buffer";
import useGlobal from "context/hooks/useGlobal";
import { store } from "context/models/store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

window.Buffer = window.Buffer || Buffer;

const ThemeProvider = (props: any) => {
  const { color } = useGlobal();

  const theme = createTheme({
    palette: {
      primary: {
        main: color[700],
      },
    },
  });
  return <MuiProvider theme={theme} {...props} />;
};

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

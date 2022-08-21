import { Breakpoint, Theme, useMediaQuery } from "@mui/material";
import useMuiTheme from "@mui/material/styles/useTheme";
import { useSelector } from "react-redux";
import { BodyColors, HeaderColors, ThemeState } from "../models/theme";
import { RootState } from "../store";

export const useTheme = (): ThemeState => {
  const { theme } = useSelector((state: RootState) => state);
  return theme;
};

export const useHeaderTheme = (): HeaderColors => {
  const { header } = useTheme();
  return header;
};

export const useBodyTheme = (): BodyColors => {
  const { body } = useTheme();
  return body;
};

type BreakpointOrNull = Breakpoint | null;

export function useWidth() {
  const theme: Theme = useMuiTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

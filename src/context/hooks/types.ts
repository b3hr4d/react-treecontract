import { colors } from "@mui/material";
import { Colors } from "../theme/colors";

export type ColorRange = keyof typeof colors.amber;
export type SetColorFunction = (color: Colors) => void;

export interface BodySetter {
  setColor: SetColorFunction;
  setBgColor: SetColorFunction;
}

export interface HeaderSetter {
  setColor: SetColorFunction;
  setBgColor: SetColorFunction;
}

export interface GlobalSetting {
  setShowAddress: (show: boolean) => void;
}

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

export interface UserDataFunction {
  setShowAddress: () => void;
  setShowDetails: () => void;
  setUser: (user: string) => void;
  Register: (user: string, referrer: string) => void;
}

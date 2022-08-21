import { Colors } from "./theme/colors";

export interface AppState {
  theme: ThemeType;
  setting: SettingStype;
}

export interface ThemeType {
  color: Colors;
  dark: boolean;
}
export interface SettingStype {
  showAddress: boolean;
}

export interface ThemeAction {
  type: string;
  value: Colors;
}

export interface SettingAction {
  type: string;
  value: boolean;
}

export type AppAction = ThemeAction | SettingAction;

export enum Setting {
  SHOW_ADDRESS = "SHOW_ADDRESS",
}

export enum Theme {
  CHANGE_COLOR = "CHANGE_COLOR",
  TOGGLE_THEME = "TOGGLE_THEME",
}

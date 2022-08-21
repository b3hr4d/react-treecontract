import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Colors } from "../theme/colors";

export interface HeaderColors {
  bgcolor: Colors;
  color: Colors;
}
export interface BodyColors {
  bgcolor: Colors;
  color: Colors;
}
export type ColorSetter = { bgcolor: Colors } | { color: Colors } | BodyColors;

export interface ThemeState {
  header: HeaderColors;
  body: BodyColors;
  dark: boolean;
}

const state: ThemeState = {
  header: { bgcolor: "indigo", color: "white" },
  body: { bgcolor: "common", color: "indigo" },
  dark: false,
};

export const theme = createModel<RootModel>()({
  state,
  reducers: {
    CHANGE_HEADER_COLOR: (state, payload: ColorSetter) => {
      return {
        ...state,
        header: { ...state.header, ...payload },
      };
    },
    CHANGE_BODY_COLOR: (state, payload: ColorSetter) => {
      return {
        ...state,
        body: { ...state.body, ...payload },
      };
    },
    DARK_MODE: (state) => {
      return {
        ...state,
        dark: !state.dark,
      };
    },
  },
  effects: (dispatch) => ({
    ChangeHeaderColor(payload: ColorSetter) {
      dispatch.theme.CHANGE_HEADER_COLOR(payload);
    },
    ChangeBodyColor(payload: ColorSetter) {
      dispatch.theme.CHANGE_BODY_COLOR(payload);
    },
    ToogleDarkMode() {
      dispatch.theme.DARK_MODE();
    },
  }),
});

import { Color, colors } from "@mui/material";
import { createModel } from "@rematch/core";
import { throttle } from "helpers";
import { RootModel } from ".";
import { Colors, GlobalState } from "../types/global";

export const translate = {
  x: 0,
  y: 0,
  height: 500,
  width: 0,
};

export const global = createModel<RootModel>()({
  state: {
    translate,
    loading: true,
    showAddress: true,
    showDetails: false,
    user: "0x0",
    color: colors["blue"],
  } as GlobalState,

  reducers: {
    SET_COLOR: (state, color: Colors) => ({
      ...state,
      color: colors[color] as Color,
    }),
    SET_LOADING: (state, loading: boolean) => ({
      ...state,
      loading,
    }),
    SET_TRANSLATE: (state, translate) => ({
      ...state,
      loading: false,
      translate,
    }),
    SHOW_ADDRESS: (state) => {
      return {
        ...state,
        showAddress: !state.showAddress,
      };
    },
    SHOW_DETAILS: (state) => {
      return {
        ...state,
        showDetails: !state.showDetails,
      };
    },
    CHANGE_ADDRESS: (state, user: string) => {
      return {
        ...state,
        user,
      };
    },
  },

  effects: (dispatch) => ({
    resetTree: async () => {
      dispatch.global.SET_LOADING(true);

      throttle(() => {
        console.log("Reset");
        dispatch.global.SET_LOADING(false);
      }, 100);
    },
  }),
});

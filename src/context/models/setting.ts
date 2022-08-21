import { createModel } from "@rematch/core";
import { RootModel } from ".";

export type SettingState = {
  showAddress: boolean;
};

export const setting = createModel<RootModel>()({
  state: {
    showAddress: false,
  } as SettingState,
  reducers: {
    SHOW_ADDRESS(state, showAddress: boolean) {
      return {
        ...state,
        showAddress,
      };
    },
  },
  effects: (dispatch) => ({
    async showAddress(payload: boolean) {
      dispatch.setting.SHOW_ADDRESS(payload);
    },
  }),
});

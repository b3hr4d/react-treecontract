import { createModel } from "@rematch/core";
import { UserData } from "typechain";
import { RootModel } from ".";

export type WalletState = UserData;

export const wallet = createModel<RootModel>()({
  state: {} as WalletState,
  reducers: {
    DEPLOY: (_, wallet: UserData) => wallet,
  },
  effects: (dispatch) => ({
    init: async () => {},
  }),
});

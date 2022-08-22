import { createModel } from "@rematch/core";
import UserData, { Users } from "contracts";
import { investMaker, throttle, userInit } from "helpers";
import { RootModel } from "./index";

export type UserDataState = {
  users: Users;
  total: number;
  userLength: number;
  showAddress: boolean;
  showDetails: boolean;
  user: string;
};

export const contract = new UserData("0x0", userInit("0xstart"));

export const userData = createModel<RootModel>()({
  state: {
    users: contract.users,
    total: contract.total,
    userLength: Object.keys(contract.users).length,
    showAddress: true,
    showDetails: false,
    user: "0x0",
  } as UserDataState,

  reducers: {
    UPDATE_STATE: (state) => {
      return {
        ...state,
        total: contract.total,
        userLength: Object.keys(contract.users).length,
        users: { ...contract.users },
      };
    },
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
    Register: async ({ user, referrer }) => {
      console.log("Registering: ", user, referrer);
      contract.users[user] = userInit();
      contract.register(user, referrer, investMaker());

      throttle(() => {
        console.log("UpdateStates");
        dispatch.userData.UPDATE_STATE();
      });
    },
  }),
});

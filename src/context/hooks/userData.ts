import { createModel } from "@rematch/core";
import UserData, { Users } from "contracts";
import { investMaker, throttle, userInit } from "helpers";
import { RootModel } from "../models/index";

export type UserDataState = {
  users: Users;
  total: number;
  userLength: number;
};

export const contract = new UserData("0x0", userInit("0xstart"));

export const userData = createModel<RootModel>()({
  state: {
    users: contract.users,
    total: contract.total,
    userLength: Object.keys(contract.users).length,
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
  },

  effects: (dispatch) => ({
    registerUser: async ({ user, referrer }) => {
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

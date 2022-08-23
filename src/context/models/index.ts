import { Models } from "@rematch/core";
import { userData } from "../hooks/userData";
import { contract } from "./contract";
import { global } from "./global";
import { wallet } from "./wallet";

export interface RootModel extends Models<RootModel> {
  userData: typeof userData;
  contract: typeof contract;
  wallet: typeof wallet;
  global: typeof global;
}

export const models: RootModel = { wallet, global, userData, contract };

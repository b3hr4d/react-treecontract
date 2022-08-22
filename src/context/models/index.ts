import { Models } from "@rematch/core";
import { setting } from "./setting";
import { theme } from "./theme";
import { userData } from "./userData";

export interface RootModel extends Models<RootModel> {
  theme: typeof theme;
  userData: typeof userData;
  setting: typeof setting;
}

export const models: RootModel = { theme, userData, setting };

import { Models } from "@rematch/core";
import { common } from "./common";
import { setting } from "./setting";
import { theme } from "./theme";

export interface RootModel extends Models<RootModel> {
  theme: typeof theme;
  common: typeof common;
  setting: typeof setting;
}

export const models: RootModel = { theme, common, setting };

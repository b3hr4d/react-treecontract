import { SettingState } from "context/models/setting";
import { Dispatch, RootState } from "context/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalSetting } from "./types";

export const useSetting = (): [SettingState, GlobalSetting] => {
  const { setting } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<Dispatch>();

  const setShowAddress = useCallback(
    (show: boolean) => dispatch.setting.showAddress(show),
    [dispatch.setting]
  );

  return [setting, { setShowAddress }];
};

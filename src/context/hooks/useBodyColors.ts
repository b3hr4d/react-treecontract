import { colors } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { BodyColors } from "../models/theme";
import { Dispatch } from "../store";
import { BodySetter, ColorRange, SetColorFunction } from "./types";
import { useBodyTheme } from "./useTheme";

export const useBodyColor = (): [BodyColors, BodySetter] => {
  const { color, bgcolor } = useBodyTheme();

  const dispatch = useDispatch<Dispatch>();

  const setColor: SetColorFunction = useCallback(
    (color) => dispatch.theme.CHANGE_BODY_COLOR({ color }),
    [dispatch.theme]
  );

  const setBgColor: SetColorFunction = useCallback(
    (bgcolor) => dispatch.theme.CHANGE_BODY_COLOR({ bgcolor }),
    [dispatch.theme]
  );

  return [
    { color, bgcolor },
    { setColor, setBgColor },
  ];
};

export const useBodyColorRange = (range: ColorRange = 100): BodyColors => {
  const [{ color, bgcolor }] = useBodyColor();

  return useMemo(
    () => ({
      color: colors?.[color]?.[range],
      bgcolor: colors?.[bgcolor]?.[range],
    }),
    [color, bgcolor, range]
  );
};

import { colors } from "@mui/material";
import { Colors } from "context/theme/colors";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { HeaderColors } from "../models/theme";
import { Dispatch } from "../store";
import { ColorRange, HeaderSetter, SetColorFunction } from "./types";
import { useHeaderTheme } from "./useTheme";

export const useHeaderColor = (): [HeaderColors, HeaderSetter] => {
  const { color, bgcolor } = useHeaderTheme();

  const dispatch = useDispatch<Dispatch>();

  const setColor: SetColorFunction = useCallback(
    (color) => dispatch.theme.CHANGE_HEADER_COLOR({ color }),
    [dispatch.theme]
  );

  const setBgColor: SetColorFunction = useCallback(
    (bgcolor) => dispatch.theme.CHANGE_HEADER_COLOR({ bgcolor }),
    [dispatch.theme]
  );

  return [
    { color, bgcolor },
    { setColor, setBgColor },
  ];
};

export const useHeaderColorRange = (range: ColorRange = 700): HeaderColors => {
  const [{ color, bgcolor }] = useHeaderColor();

  return useMemo(
    () => ({
      color: color === "white" ? color : colors?.[color]?.[range],
      bgcolor: bgcolor === "white" ? bgcolor : colors?.[bgcolor]?.[range],
    }),
    [color, bgcolor, range]
  );
};

export const useColor = (range: ColorRange = 700) => {
  return useCallback(
    (color: Colors) => (color === "white" ? color : colors?.[color]?.[range]),
    [range]
  );
};

import { throttle } from "helpers";
import { useLayoutEffect, useRef, useState } from "react";
import { Point } from "react-d3-tree/lib/types/common";

type CenteredHook = () => [
  Point,
  React.MutableRefObject<HTMLDivElement | undefined>
];

export const useCenteredTree: CenteredHook = () => {
  const containerElem = useRef<HTMLDivElement>();
  const [translate, setTranslate] = useState<Point>({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const resize = () => {
      if (containerElem.current) {
        console.log("resize");
        const { width, height } = containerElem.current.getBoundingClientRect();
        setTranslate({ x: width / 2, y: height / 12 });
      }
    };

    resize();

    window.addEventListener("resize", () => throttle(resize));
    return () => window.removeEventListener("resize", () => throttle(resize));
  }, []);

  return [translate, containerElem];
};

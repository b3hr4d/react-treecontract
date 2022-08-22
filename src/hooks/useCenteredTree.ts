import { throttle } from "helpers";
import { useLayoutEffect, useRef, useState } from "react";
import { Point } from "react-d3-tree/lib/types/common";

interface Translate extends Point {
  height: number;
}

type CenteredHook = () => [
  Translate,
  React.MutableRefObject<HTMLDivElement | undefined>
];

export const useCenteredTree: CenteredHook = () => {
  const containerElem = useRef<HTMLDivElement>();
  const [translate, setTranslate] = useState<Translate>({
    x: 0,
    y: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const resize = () => {
      if (containerElem.current) {
        console.log("resize");
        const { width, height, top } =
          containerElem.current.getBoundingClientRect();
        const { innerHeight } = window;
        setTranslate({
          x: width / 2,
          y: height / 12,
          height: innerHeight - top - 8,
        });
      }
    };

    resize();

    window.addEventListener("resize", () => throttle(resize));
    return () => window.removeEventListener("resize", () => throttle(resize));
  }, []);

  return [translate, containerElem];
};

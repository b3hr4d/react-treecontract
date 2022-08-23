import { Stack } from "@mui/system";

interface LoadingProps {
  width?: number;
  height?: number;
}

const Loading: React.FC<LoadingProps> = ({ height, width }) => {
  return (
    <Stack
      width={width ? width : "100%"}
      height={height ? height : "100%"}
      justifyContent="center"
      alignItems="center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "rgb(255, 255, 255) none repeat scroll 0% 0%",
          display: "block",
          shapeRendering: "auto",
        }}
        width={height ? height / 10 : "100px"}
        height={height ? height / 10 : "100px"}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(0 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.9375s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(22.5 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.875s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(45 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.8125s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(67.5 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.75s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.6875s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(112.5 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.625s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(135 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5625s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(157.5 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.4375s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(202.5 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.375s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(225 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.3125s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(247.5 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.25s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.1875s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(292.5 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.125s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(315 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.0625s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(337.5 50 50)">
          <rect
            x="47"
            y="5.5"
            rx="0.68"
            ry="0.68"
            width="6"
            height="17"
            fill="#1565c0"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
      </svg>{" "}
    </Stack>
  );
};

export default Loading;

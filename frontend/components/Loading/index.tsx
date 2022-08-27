import { Stack } from '@mui/system'
import useSettings from 'context/hooks/useSettings'
import { useMemo } from 'react'

interface LoadingProps {
  width?: number
  height?: number
  length?: number
  duration?: number
  rectProps?: React.SVGProps<SVGRectElement>
}

const Loading: React.FC<LoadingProps> = ({
  height,
  width,
  length = 16,
  duration = 1,
  rectProps,
}) => {
  const pi = useMemo(() => 360 / length, [length])
  const dur = useMemo(() => duration / length, [length, duration])

  const { color } = useSettings()

  return (
    <Stack
      width={width ? width : '100%'}
      height={height ? height : '100%'}
      justifyContent="center"
      alignItems="center"
    >
      <svg
        width={height ? height / 8 : '100px'}
        height={height ? height / 8 : '100px'}
        viewBox="0 0 100 100"
      >
        {Array.from({ length }).map((_, i) => (
          <g transform={`rotate(${i * pi} 50 50)`} key={i}>
            <rect
              x="47"
              y="5.5"
              rx="1"
              ry="1"
              width="6"
              height="17"
              fill={color[600]}
              {...rectProps}
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur={duration}
                begin={0 - (length - i) * dur}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}
      </svg>
    </Stack>
  )
}

export default Loading

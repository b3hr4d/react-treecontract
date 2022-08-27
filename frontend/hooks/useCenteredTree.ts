import useSettings, { setTranslate } from 'context/hooks/useSettings'
import { throttle } from 'helpers'
import { useEffect, useRef } from 'react'

export const useCenteredTree = () => {
  const containerElem = useRef<HTMLDivElement>()
  const { translate, loading } = useSettings()

  useEffect(() => {
    const resize = () => {
      if (containerElem.current) {
        console.log('resize')
        const { width, height, top } =
          containerElem.current.getBoundingClientRect()
        const { innerHeight } = window
        setTranslate({
          x: width / 2,
          y: height / 12,
          height: innerHeight - top - 8,
          width,
        })
      }
    }

    resize()

    window.addEventListener('resize', () => throttle(resize))
    return () => window.removeEventListener('resize', () => throttle(resize))
  }, [])

  return { translate, loading, containerElem }
}

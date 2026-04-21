'use client'

import { useEffect, useState } from 'react'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

export default function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * end)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step)
      }
    }

    animationFrameId = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

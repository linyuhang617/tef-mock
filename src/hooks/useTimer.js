import { useState, useEffect, useRef } from 'react'

export function useTimer(totalSeconds, onExpire) {
  const [timeLeft, setTimeLeft] = useState(totalSeconds)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpireRef.current()
      return
    }
    const id = setInterval(() => {
      setTimeLeft(t => t - 1)
    }, 1000)
    return () => clearInterval(id)
  }, [timeLeft])

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const ss = String(timeLeft % 60).padStart(2, '0')

  return { timeLeft, display: `${mm}:${ss}` }
}

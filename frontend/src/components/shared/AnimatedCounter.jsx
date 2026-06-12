import React, { useEffect, useRef, useState } from 'react'

function formatValue(value, decimals) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export default function AnimatedCounter({ to, suffix = '', className = '', duration = 1800 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || hasAnimated) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setHasAnimated(true)
        const start = performance.now()
        const decimals = Number.isInteger(to) ? 0 : 1

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const nextValue = to * eased

          setValue(decimals === 0 ? Math.round(nextValue) : Number(nextValue.toFixed(decimals)))

          if (progress < 1) {
            requestAnimationFrame(step)
          }
        }

        requestAnimationFrame(step)
        observer.disconnect()
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [duration, hasAnimated, to])

  const decimals = Number.isInteger(to) ? 0 : 1

  return (
    <span ref={ref} className={className}>
      {formatValue(value, decimals)}
      {suffix}
    </span>
  )
}


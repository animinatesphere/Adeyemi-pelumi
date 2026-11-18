import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

// Counts the leading number up from 0 when it scrolls into view ("3+" → 0,1,2,3+).
// Values without a leading number are shown as-is.
export default function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const match = /^(\d+)(.*)$/.exec(value)

  // Start from 0 once JS is running; the HTML itself keeps the real number.
  useEffect(() => {
    if (match && !reduce && ref.current) ref.current.textContent = `0${match[2]}`
  }, [reduce]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!match || !inView || reduce || !ref.current) return
    const [, num, rest] = match
    const controls = animate(0, Number(num), {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${rest}`
      },
    })
    return () => controls.stop()
  }, [inView, reduce, value]) // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{value}</span>
}

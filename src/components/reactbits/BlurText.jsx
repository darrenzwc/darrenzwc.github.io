import React, { useEffect, useRef } from 'react'

/**
 * BlurText
 * Animated heading whose letters de-blur (and slightly rise) into clarity.
 * Props: text, className
 */
export default function BlurText({ text, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = Array.from(el.querySelectorAll('[data-letter]'))
    items.forEach((span, i) => {
      span.style.transition = 'filter 600ms ease, transform 600ms cubic-bezier(.2,.65,.2,1), opacity 600ms ease'
      span.style.filter = 'blur(8px)'
      span.style.transform = 'translateY(8px)'
      span.style.opacity = '0'
      setTimeout(() => {
        span.style.filter = 'blur(0px)'
        span.style.transform = 'translateY(0)'
        span.style.opacity = '1'
      }, 80 * i)
    })
  }, [text])

  return (
    <h1 ref={ref} className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} data-letter style={{ display:'inline-block' }}>{ch === ' ' ? '\u00A0' : ch}</span>
      ))}
    </h1>
  )
}

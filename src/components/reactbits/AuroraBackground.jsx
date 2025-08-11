import React, { useMemo } from 'react'

/**
 * AuroraBackground
 * Dynamic aurora-like gradient using animated radial blobs + grain overlay.
 * Props: children
 */
export default function AuroraBackground({ children }) {
  // randomized offsets so each mount feels a bit unique
  const seeds = useMemo(() => Array.from({length:4}, () => ({
    x: Math.random()*100, y: Math.random()*100, s: 60 + Math.random()*40, d: 20 + Math.random()*20
  })), [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* animated blobs layer */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="blur"><feGaussianBlur stdDeviation="80" /></filter>
          </defs>
          <g filter="url(#blur)">
            {seeds.map((b, i) => (
              <circle key={i}
                cx="50%" cy="50%" r="30%"
                fill={i%2===0?"#9be7ff":"#ffd6fa"}
                style={{ mixBlendMode:'screen' }}
              >
                <animate attributeName="cx" dur={`${20+b.d}s`} values="10%;90%;10%" repeatCount="indefinite" />
                <animate attributeName="cy" dur={`${18+b.d}s`} values="10%;90%;10%" repeatCount="indefinite" />
              </circle>
            ))}
            <circle cx="50%" cy="50%" r="40%" fill="#d2ffd1" style={{ mixBlendMode:'screen' }}>
              <animate attributeName="cx" dur="28s" values="80%;20%;80%" repeatCount="indefinite" />
              <animate attributeName="cy" dur="24s" values="20%;80%;20%" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      {/* subtle dark gradient to anchor contrast */}
      <div className="pointer-events-none absolute inset-0 -z-10"
           style={{
             background: 'linear-gradient(180deg, rgba(11,13,16,0.9), rgba(15,17,21,0.85) 60%, rgba(10,12,16,0.95))'
           }}/>

      {/* grain overlay */}
      <div className="aurora-grain absolute inset-0 -z-10" aria-hidden />

      {children}
    </div>
  )
}

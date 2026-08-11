'use client'

import { useState } from 'react'
import Navbar from '@/components/ui/Navbar'
import Marquee from '@/components/ui/Marquee'
import Hero from '@/components/sections/Hero'

/* Throwaway comparison route — three hero variants side by side so the call
   gets made with eyes rather than argument. Delete once decided. */
const VARIANTS = [
  { id: 'current', label: 'Current — pen-plotter swarm', marks: false, rail: false },
  { id: 'rail', label: 'A — swarm + stack rail in the marquee', marks: false, rail: true },
  { id: 'dome', label: 'B — stack marks in the dome', marks: true, rail: false },
] as const

export default function HeroLab() {
  const [v, setV] = useState<(typeof VARIANTS)[number]>(VARIANTS[0])

  return (
    <div style={{ position: 'relative', background: '#EDE9E1', overflowX: 'clip' }}>
      <div className="grid-overlay" />

      <div
        style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 70,
          display: 'flex',
          gap: 6,
          padding: 6,
          background: '#14120E',
          borderRadius: 100,
        }}
      >
        {VARIANTS.map((o) => (
          <button
            key={o.id}
            onClick={() => setV(o)}
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.14em',
              padding: '9px 15px',
              borderRadius: 100,
              border: 'none',
              cursor: 'pointer',
              background: v.id === o.id ? '#1FD48F' : 'transparent',
              color: v.id === o.id ? '#14120E' : 'rgba(237,233,225,0.7)',
            }}
          >
            {o.label}
          </button>
        ))}
      </div>

      <Navbar />
      <main>
        {/* key remounts the canvas so the variant swap actually rebuilds it */}
        <Hero key={v.id} marks={v.marks} />
        <Marquee marks={v.rail} />
      </main>
    </div>
  )
}

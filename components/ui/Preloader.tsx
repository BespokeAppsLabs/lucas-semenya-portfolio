'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Logo from '@/components/ui/Logo'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0
    const duration = 2000
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = Math.floor(eased * 100)
      setCount(value)

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${eased})`
      }

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setCount(100)
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: onDone,
        })
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone])

  return (
    <div ref={containerRef} className="preloader">
      {/* Monogram */}
      <div ref={textRef} className="flex flex-col items-center gap-8">
        <div className="relative" aria-label="Loading Lucas Semenya">
          <Logo size={120} animated loop />
        </div>

        {/* Progress bar */}
        <div className="w-48 relative">
          <div
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '1px',
              overflow: 'hidden',
            }}
          >
            <div
              ref={progressRef}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #00FFD1, #FFB800)',
                transformOrigin: 'left',
                transform: 'scaleX(0)',
              }}
            />
          </div>
          <div
            style={{
              marginTop: '12px',
              textAlign: 'right',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: '#00FFD1',
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            {count.toString().padStart(3, '0')}
          </div>
        </div>
      </div>
    </div>
  )
}

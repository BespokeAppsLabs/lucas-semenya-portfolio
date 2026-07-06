'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { SOCIAL } from '@/lib/data'

const FloatingOrb = dynamic(() => import('@/components/three/FloatingOrb'), { ssr: false })

export default function Hero() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" className="relative min-h-svh flex flex-col justify-end overflow-clip">
      {/* Signature moment: slow wireframe sphere, right side */}
      <div className="absolute right-[-12%] top-[8%] w-[60%] h-[80%] pointer-events-none hidden md:block" aria-hidden="true">
        <FloatingOrb mouseRef={mouseRef} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-16 pt-40">
        <p className="label mb-8 hero-fade" style={{ animationDelay: '0.1s' }}>
          Founder · Engineer · AI Builder — South Africa
        </p>

        <h1 className="display text-[clamp(3.5rem,11vw,9.5rem)] hero-fade" style={{ animationDelay: '0.25s' }}>
          Lucas
          <br />
          Semenya
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10 hero-fade" style={{ animationDelay: '0.45s' }}>
          <p className="max-w-md text-muted text-lg leading-relaxed">
            Founder of <span className="text-ink font-medium">Bespoke Applications Labs</span>.
            I build AI-powered products, full-stack platforms, and autonomous
            agent systems — from South Africa to the world.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-ink"
            >
              View projects
            </a>
            <a href={`mailto:${SOCIAL.email}`} className="btn-line">
              Get in touch
            </a>
          </div>
        </div>

        <div className="rule mt-16 pt-5 flex items-center justify-between hero-fade" style={{ animationDelay: '0.6s' }}>
          <div className="flex gap-6">
            {[
              { label: 'LinkedIn', href: SOCIAL.linkedin },
              { label: 'GitHub', href: SOCIAL.github },
              { label: 'Email', href: `mailto:${SOCIAL.email}` },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="u-link label !text-faint hover:!text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
          <span className="label !text-faint hidden sm:block">Scroll ↓</span>
        </div>
      </div>

      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .hero-fade {
          opacity: 0;
          animation: heroFade 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade { animation: none; opacity: 1; }
        }
      `}</style>
    </section>
  )
}

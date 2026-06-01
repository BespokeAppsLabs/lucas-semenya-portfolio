'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { HERO_ROLES, SOCIAL } from '@/lib/data'

const ParticleNetwork = dynamic(() => import('@/components/three/ParticleNetwork'), { ssr: false })
const FloatingOrb = dynamic(() => import('@/components/three/FloatingOrb'), { ssr: false })

export default function Hero() {
  const mouseRef = useRef({ x: 0, y: 0 })
  const badgeRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState(HERO_ROLES[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(HERO_ROLES[0].length)

  // Track mouse for shared orb + particle parallax
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Typewriter
  useEffect(() => {
    const currentRole = HERO_ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 90)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 45)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % HERO_ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.4 })

    tl.fromTo(badgeRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
      .fromTo(nameRef.current, { y: 80, opacity: 0, skewY: 5 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: 'power4.out' }, '-=0.3')
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .fromTo(socialRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.1')
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 640,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Layer 1: Particle network (full viewport, background) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <ParticleNetwork mouseRef={mouseRef} />
      </div>

      {/* Layer 2: Floating orb (right side, foreground 3D) */}
      <div
        style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '55%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <FloatingOrb mouseRef={mouseRef} />
      </div>

      {/* Radial vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 90% at 30% 50%, transparent 20%, rgba(2,2,8,0.5) 60%, rgba(2,2,8,0.96) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 240,
          background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Location badge */}
        <div
          ref={badgeRef}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            borderRadius: 100,
            border: '1px solid rgba(0,255,209,0.18)',
            background: 'rgba(0,255,209,0.05)',
            marginBottom: 32,
            opacity: 0,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#00FFD1',
              display: 'block',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span style={{ fontSize: 12, color: '#00FFD1', fontWeight: 600, letterSpacing: '0.08em' }}>
            Johannesburg, South Africa
          </span>
        </div>

        {/* Name */}
        <div style={{ overflow: 'hidden' }}>
          <h1
            ref={nameRef}
            style={{
              fontSize: 'clamp(56px, 10vw, 150px)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              opacity: 0,
              marginBottom: 28,
            }}
          >
            <span style={{ display: 'block', color: 'var(--white)' }}>Lucas</span>
            <span
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #00FFD1 0%, #FFB800 55%, #00FFD1 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradientShift 6s ease-in-out infinite',
              }}
            >
              Semenya
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subRef} style={{ opacity: 0, maxWidth: 560 }}>
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 21px)',
              color: 'rgba(240,240,248,0.55)',
              fontWeight: 400,
              lineHeight: 1.5,
              marginBottom: 6,
            }}
          >
            Founder of{' '}
            <span style={{ color: 'var(--white)', fontWeight: 600 }}>Bespoke Applications Labs</span>
          </p>
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 21px)',
              fontWeight: 500,
              lineHeight: 1.5,
              color: '#00FFD1',
              marginBottom: 16,
              minHeight: '1.5em',
            }}
          >
            {displayedRole}
            <span
              style={{
                display: 'inline-block',
                width: 2,
                height: '0.9em',
                background: '#00FFD1',
                marginLeft: 3,
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }}
            />
          </p>
          <p
            style={{
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              color: 'rgba(240,240,248,0.38)',
              fontWeight: 400,
              lineHeight: 1.65,
            }}
          >
            Building AI-powered products, immersive 3D experiences,
            <br className="hidden md:block" />
            and intelligent automation — from South Africa to the world.
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{ display: 'flex', gap: 14, marginTop: 44, opacity: 0, flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            data-hover
            style={{
              padding: '13px 30px',
              borderRadius: 100,
              background: 'linear-gradient(135deg, #00FFD1, #00c4a0)',
              color: '#020208',
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '0.01em',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 30px rgba(0,255,209,0.4)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            View Projects
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            data-hover
            style={{
              padding: '13px 30px',
              borderRadius: 100,
              border: '1px solid rgba(240,240,248,0.12)',
              color: 'rgba(240,240,248,0.75)',
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: '0.01em',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(0,255,209,0.35)'
              el.style.color = '#00FFD1'
              el.style.background = 'rgba(0,255,209,0.05)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(240,240,248,0.12)'
              el.style.color = 'rgba(240,240,248,0.75)'
              el.style.background = 'transparent'
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Social */}
        <div
          ref={socialRef}
          style={{ display: 'flex', gap: 24, marginTop: 52, opacity: 0, alignItems: 'center' }}
        >
          <span style={{ fontSize: 11, color: 'rgba(240,240,248,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            Connect
          </span>
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />
          {[
            { label: 'GitHub', href: SOCIAL.github },
            { label: 'LinkedIn', href: SOCIAL.linkedin },
            { label: 'Email', href: `mailto:${SOCIAL.email}` },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: 'rgba(240,240,248,0.3)',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FFD1')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,240,248,0.3)')}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          opacity: 0,
        }}
      >
        <div
          style={{
            width: 24,
            height: 38,
            borderRadius: 12,
            border: '1px solid rgba(240,240,248,0.15)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '6px 0',
          }}
        >
          <div
            style={{
              width: 3,
              height: 8,
              borderRadius: 2,
              background: '#00FFD1',
              animation: 'scrollDot 2s ease-in-out infinite',
            }}
          />
        </div>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(240,240,248,0.25)',
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(14px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}</style>
    </section>
  )
}

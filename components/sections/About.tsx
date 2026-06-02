'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '3+', label: 'Years Building' },
  { value: '10+', label: 'Active Projects' },
  { value: '6', label: 'AI Agents Running' },
  { value: '5+', label: 'Clients' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current?.children ?? [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      gsap.fromTo(
        statsRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        padding: '140px 24px',
        maxWidth: 1400,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Background number */}
      <span
        className="number-large"
        style={{
          position: 'absolute',
          top: 60,
          right: -20,
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        01
      </span>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 80,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Text */}
        <div ref={textRef}>
          <div className="section-label" style={{ marginBottom: 28 }}>
            About Me
          </div>

          <h2
            style={{
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            I build{' '}
            <span className="gradient-text">intelligent systems</span>
            <br />
            that move the world forward.
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              color: 'rgba(240,240,248,0.6)',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              lineHeight: 1.7,
              maxWidth: 520,
            }}
          >
            <p>
              I&apos;m Lucas Semenya — founder of{' '}
              <span style={{ color: 'var(--white)', fontWeight: 600 }}>Bespoke Applications Labs</span>, where
              I lead the development of AI-powered products, full-stack platforms, and autonomous agent systems.
            </p>
            <p>
              My work sits at the intersection of artificial intelligence and product engineering. I believe
              every manual process is a{' '}
              <span style={{ color: '#00FFD1', fontWeight: 500 }}>systemic bug waiting to be solved</span> —
              and I build software that solves them permanently.
            </p>
            <p>
              From mobile and web applications to AI CEO agents, I ship products that operate at scale and
              create real impact for businesses across South Africa and beyond.
            </p>
          </div>

          <a
            href={`#contact`}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 40,
              padding: '12px 28px',
              borderRadius: 100,
              border: '1px solid rgba(0,255,209,0.25)',
              color: '#00FFD1',
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: '0.02em',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(0,255,209,0.08)'
              el.style.borderColor = 'rgba(0,255,209,0.5)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.borderColor = 'rgba(0,255,209,0.25)'
            }}
          >
            <span>Work With Me</span>
            <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
          </a>
        </div>

        {/* Right: Stats + visual */}
        <div>
          {/* Stats grid */}
          <div
            ref={statsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              marginBottom: 32,
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card gradient-border"
                style={{ padding: '28px 24px' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, #00FFD1, #FFB800)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'rgba(240,240,248,0.45)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--gray)', marginBottom: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Current Focus
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['BespokeHQ', 'Malome Mobile', 'Bespoke CRM', 'OpenClaw Agents', 'Next.js 16', 'Expo 54', 'Convex', 'WebGL'].map(
                (tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

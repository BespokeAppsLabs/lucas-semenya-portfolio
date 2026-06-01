'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EXPERIENCE } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
        }
      )

      const items = timelineRef.current?.querySelectorAll('[data-timeline-item]') ?? []
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 80%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{
        padding: '140px 24px',
        background: 'var(--bg-surface)',
        position: 'relative',
      }}
    >
      {/* Top fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          background: 'linear-gradient(to bottom, var(--bg), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: 80, textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 24, justifyContent: 'center' }}>
            <span style={{ width: 24, height: 1, background: 'var(--teal)', display: 'block' }} />
            Experience
            <span style={{ width: 24, height: 1, background: 'var(--teal)', display: 'block' }} />
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
            }}
          >
            Where I&apos;ve
            <br />
            <span className="gradient-text">made my mark.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 1,
              background: 'var(--border)',
              transform: 'translateX(-50%)',
              display: 'none',
            }}
            className="md:block"
          />

          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.title}
              data-timeline-item
              style={{
                display: 'flex',
                gap: 32,
                marginBottom: 40,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'flex-start',
              }}
            >
              {/* Card */}
              <div
                className="glass-card gradient-border"
                style={{
                  flex: 1,
                  padding: '32px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = `0 0 40px ${exp.color}12`
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                }}
              >
                {/* Glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: -30,
                    left: -30,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${exp.color}15, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Period */}
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: exp.color,
                    marginBottom: 12,
                    fontFamily: 'var(--font-geist-mono)',
                    opacity: 0.8,
                  }}
                >
                  {exp.period}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(18px, 2.2vw, 24px)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    marginBottom: 6,
                  }}
                >
                  {exp.title}
                </h3>

                {/* Company */}
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'rgba(240,240,248,0.5)',
                    marginBottom: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: exp.color,
                      display: 'inline-block',
                    }}
                  />
                  {'companyUrl' in exp ? (
                    <a
                      href={(exp as { companyUrl: string }).companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'rgba(240,240,248,0.5)',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = exp.color)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,240,248,0.5)')}
                    >
                      {exp.company} ↗
                    </a>
                  ) : (
                    exp.company
                  )}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: 'rgba(240,240,248,0.5)',
                  }}
                >
                  {exp.description}
                </p>

                {/* Type badge */}
                <div
                  style={{
                    marginTop: 20,
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: 100,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: `1px solid ${exp.color}30`,
                    color: exp.color,
                    background: `${exp.color}08`,
                  }}
                >
                  {exp.type === 'founder' ? '⚡ Founder' : exp.company === 'Technanimals' ? '🏢 Software Engineer' : '💼 Full-Time'}
                </div>
              </div>

              {/* Timeline dot (hidden on mobile) */}
              <div
                style={{
                  display: 'none',
                  flexShrink: 0,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 20px ${exp.color}60`,
                  marginTop: 36,
                  position: 'relative',
                  zIndex: 1,
                }}
                className="md:flex"
              />

              {/* Spacer for alternating layout */}
              <div style={{ flex: 1 }} className="hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

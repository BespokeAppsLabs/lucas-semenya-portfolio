'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

      gsap.fromTo(
        gridRef.current?.children ?? [],
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const featured = PROJECTS.filter((p) => p.size === 'large')
  const medium = PROJECTS.filter((p) => p.size === 'medium')
  const small = PROJECTS.filter((p) => p.size === 'small')

  return (
    <section
      ref={sectionRef}
      id="projects"
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
      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: 'linear-gradient(to top, var(--bg), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: 80 }}>
          <div className="section-label" style={{ marginBottom: 24 }}>
            Projects
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
              }}
            >
              Things I&apos;ve
              <br />
              <span className="gradient-text">built & shipped.</span>
            </h2>
            <p
              style={{
                maxWidth: 380,
                fontSize: 16,
                color: 'rgba(240,240,248,0.45)',
                lineHeight: 1.65,
              }}
            >
              A selection of products, platforms, and AI systems I&apos;ve engineered from idea to production.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div ref={gridRef}>
          {/* Row 1: featured (full width) */}
          {featured.map((project) => (
            <div
              key={project.id}
              className="glass-card gradient-border"
              style={{
                marginBottom: 20,
                padding: 'clamp(32px, 4vw, 56px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 40,
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = `0 0 60px ${project.color}15, inset 0 0 60px ${project.color}05`
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = ''
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: -60,
                  right: -60,
                  width: 240,
                  height: 240,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${project.color}20, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: project.color,
                      opacity: 0.8,
                    }}
                  >
                    {project.category}
                  </div>
                  {'status' in project && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        padding: '3px 10px',
                        borderRadius: 100,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(0,255,209,0.2)',
                        color: '#00FFD1',
                        background: 'rgba(0,255,209,0.06)',
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00FFD1', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
                      Active
                    </span>
                  )}
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(24px, 3.5vw, 44px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    marginBottom: 20,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(14px, 1.6vw, 17px)',
                    color: 'rgba(240,240,248,0.55)',
                    lineHeight: 1.65,
                    marginBottom: 28,
                    maxWidth: 480,
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: '5px 14px',
                        borderRadius: 100,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                        background: `${project.color}08`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    color: project.color,
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'gap 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '14px')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '8px')}
                >
                  View Project <span style={{ fontSize: 18 }}>→</span>
                </a>
              </div>

              {/* Visual placeholder */}
              <div
                style={{
                  height: 'clamp(180px, 25vw, 300px)',
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  border: `1px solid ${project.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    background: `linear-gradient(135deg, ${project.color}40, ${project.color}15)`,
                    border: `1px solid ${project.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    fontWeight: 900,
                    color: project.color,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {project.title.slice(0, 2)}
                </div>
                {/* Decorative circles */}
                {[60, 120, 200].map((size, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: size,
                      height: size,
                      borderRadius: '50%',
                      border: `1px solid ${project.color}${12 - i * 3}`,
                      animation: `spin ${8 + i * 4}s linear infinite`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Row 2: medium cards (auto-fit, up to 3 columns) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 20 }}>
            {medium.map((project) => (
              <div
                key={project.id}
                className="glass-card gradient-border"
                style={{ padding: 32, position: 'relative', overflow: 'hidden' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = `0 0 40px ${project.color}12`
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${project.color}18, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: project.color,
                    marginBottom: 12,
                    opacity: 0.8,
                  }}
                >
                  {project.category}
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    marginBottom: 14,
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(240,240,248,0.5)', lineHeight: 1.6, marginBottom: 24 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 100,
                        fontSize: 11,
                        fontWeight: 600,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                        background: `${project.color}08`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: project.color,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'gap 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '12px')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '6px')}
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>

          {/* Row 3: small cards (3 columns) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {small.map((project) => (
              <div
                key={project.id}
                className="glass-card gradient-border"
                style={{ padding: '28px 24px' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = `0 0 30px ${project.color}10`
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 800,
                    color: project.color,
                    marginBottom: 20,
                  }}
                >
                  {project.title.slice(0, 2)}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: project.color,
                    marginBottom: 8,
                    opacity: 0.7,
                  }}
                >
                  {project.category}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 10 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(240,240,248,0.45)', lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

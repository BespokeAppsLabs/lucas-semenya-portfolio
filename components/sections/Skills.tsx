'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SKILL_GROUPS } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const groupsRef = useRef<HTMLDivElement>(null)

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

      const groups = groupsRef.current?.querySelectorAll('[data-group]') ?? []
      groups.forEach((group, i) => {
        gsap.fromTo(
          group,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.07,
            ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{
        padding: '140px 24px',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: 80, textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 24, justifyContent: 'center' }}>
            <span style={{ width: 24, height: 1, background: 'var(--teal)', display: 'block' }} />
            Skills & Stack
            <span style={{ width: 24, height: 1, background: 'var(--teal)', display: 'block' }} />
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: 20,
            }}
          >
            Tools of the{' '}
            <span className="gradient-text">trade.</span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: 'rgba(240,240,248,0.45)',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            A continuously growing toolkit for building modern AI-powered products across web, mobile, and beyond.
          </p>
        </div>

        {/* Skill groups grid */}
        <div
          ref={groupsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              data-group
              className="glass-card"
              style={{ padding: '32px 28px' }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: group.color,
                    boxShadow: `0 0 10px ${group.color}`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: group.color,
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 100,
                      fontSize: 13,
                      fontWeight: 500,
                      border: `1px solid ${group.color}20`,
                      background: `${group.color}06`,
                      color: 'rgba(240,240,248,0.8)',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                      animationDelay: `${skillIndex * 50}ms`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = group.color
                      el.style.color = group.color
                      el.style.background = `${group.color}12`
                      el.style.transform = 'translateY(-2px)'
                      el.style.boxShadow = `0 4px 16px ${group.color}20`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = `${group.color}20`
                      el.style.color = 'rgba(240,240,248,0.8)'
                      el.style.background = `${group.color}06`
                      el.style.transform = 'translateY(0)'
                      el.style.boxShadow = 'none'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling marquee */}
        <div
          style={{
            marginTop: 80,
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 40,
              animation: 'marquee 30s linear infinite',
              width: 'max-content',
            }}
          >
            {[...SKILL_GROUPS.flatMap((g) => g.skills), ...SKILL_GROUPS.flatMap((g) => g.skills)].map(
              (skill, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'rgba(240,240,248,0.15)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

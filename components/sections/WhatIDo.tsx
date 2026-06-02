'use client'

import { useRef, useEffect, MouseEvent } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SERVICES } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      z: 0,
      duration: 0.6,
      ease: 'power3.out',
      clearProps: 'transform',
    })
  }

  return (
    <div
      ref={cardRef}
      className="glass-card gradient-border"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: '36px 32px',
        cursor: 'default',
        willChange: 'transform',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      {/* Glow on hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${service.color}10, transparent 70%)`,
          pointerEvents: 'none',
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Number */}
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.15em',
          color: service.color,
          marginBottom: 20,
          opacity: 0.7,
          fontFamily: 'var(--font-geist-mono)',
        }}
      >
        {service.number}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 'clamp(18px, 2vw, 22px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--white)',
          marginBottom: 16,
          lineHeight: 1.2,
        }}
      >
        {service.title}
      </h3>

      {/* Separator */}
      <div
        style={{
          width: 40,
          height: 2,
          background: service.color,
          borderRadius: 2,
          marginBottom: 20,
          opacity: 0.6,
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: 'rgba(240,240,248,0.55)',
          marginBottom: 28,
          flex: 1,
        }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '4px 12px',
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: `1px solid ${service.color}30`,
              color: service.color,
              background: `${service.color}08`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function WhatIDo() {
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
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        gridRef.current?.children ?? [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        padding: '140px 24px',
        position: 'relative',
        background: 'var(--bg)',
      }}
    >
      {/* Grid background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 0 }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: 80, maxWidth: 700 }}>
          <span
            className="number-large"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 0,
              lineHeight: 1,
            }}
          >
            02
          </span>

          <div className="section-label" style={{ marginBottom: 24, position: 'relative', zIndex: 1 }}>
            What I Do
          </div>

          <h2
            style={{
              fontSize: 'clamp(52px, 6.5vw, 96px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Every product I build
            <br />
            <span className="gradient-text">solves a real problem.</span>
          </h2>

          <p
            style={{
              marginTop: 24,
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: 'rgba(240,240,248,0.5)',
              lineHeight: 1.6,
              position: 'relative',
              zIndex: 1,
            }}
          >
            From AI systems that think autonomously to mobile apps that thousands rely on daily —
            here&apos;s the full scope of what I bring to every engagement.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
            padding: '40px 48px',
            borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(0,255,209,0.06), rgba(255,184,0,0.04))',
            border: '1px solid rgba(0,255,209,0.12)',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: 8,
              }}
            >
              Have a project in mind?
            </h3>
            <p style={{ color: 'rgba(240,240,248,0.5)', fontSize: 15 }}>
              Let&apos;s build something remarkable together.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              padding: '14px 36px',
              borderRadius: 100,
              background: 'linear-gradient(135deg, #00FFD1, #00c4a0)',
              color: '#020208',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 30px rgba(0,255,209,0.35)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  )
}

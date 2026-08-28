'use client'

import { useEffect, useState } from 'react'
import { SOCIAL } from '@/lib/data'

/* Direct mailto and two links. No form — a form implies a queue, and a
   founder taking select work answers directly. (DESIGN.md §6) */
export default function Contact() {
  const [clock, setClock] = useState('')

  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Africa/Johannesburg',
        }).format(new Date()),
      )
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  const label = {
    fontSize: 10,
    letterSpacing: '0.18em',
    color: 'rgba(20,18,14,0.5)',
    margin: '0 0 10px',
  } as const

  return (
    <section id="contact" className="section" style={{ padding: '130px 28px 90px' }}>
      <p className="eyebrow" style={{ marginBottom: 40 }}>
        06 — Start something
      </p>

      <h2
        className="display"
        style={{
          fontSize: 'clamp(2.6rem,10vw,9rem)',
          lineHeight: 0.86,
          letterSpacing: '-0.04em',
          marginBottom: 44,
        }}
      >
        <span style={{ display: 'block' }}>Let&rsquo;s build</span>
        <span className="outline" style={{ display: 'block' }}>
          the machine
        </span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: 32,
          borderTop: '1px solid rgba(20,18,14,0.2)',
          paddingTop: 36,
        }}
      >
        <div>
          <p className="mono" style={label}>
            Email
          </p>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="display plain-link"
            style={{
              fontSize: 'clamp(1rem,1.8vw,1.5rem)',
              letterSpacing: '-0.02em',
              wordBreak: 'break-all',
              textTransform: 'none',
            }}
          >
            {SOCIAL.email}
          </a>
        </div>

        <div>
          <p className="mono" style={label}>
            Elsewhere
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mono plain-link"
              style={{ fontSize: 13, letterSpacing: '0.1em' }}
            >
              LinkedIn ↗
            </a>
            <a
              href={SOCIAL.company}
              target="_blank"
              rel="noopener noreferrer"
              className="mono plain-link"
              style={{ fontSize: 13, letterSpacing: '0.1em' }}
            >
              Bespoke Apps Labs ↗
            </a>
          </div>
        </div>

        <div>
          <p className="mono" style={label}>
            Based in
          </p>
          <p className="mono" style={{ fontSize: 13, letterSpacing: '0.1em', margin: 0 }}>
            Limpopo + Gauteng, South Africa
            <br />
            Lephalale · Polokwane · Pretoria
            <br />
            Johannesburg · North West · Mpumalanga
            <br />
            {/* Empty until the client effect runs — avoids a hydration mismatch. */}
            {clock && `${clock} SAST`}
          </p>
        </div>
      </div>
    </section>
  )
}

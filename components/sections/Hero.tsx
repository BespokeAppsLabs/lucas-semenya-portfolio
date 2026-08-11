'use client'

import { useEffect, useState } from 'react'
import AgentLattice from '@/components/three/AgentLattice'
import { HERO_ROLES } from '@/lib/data'

export default function Hero({ marks = false }: { marks?: boolean }) {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % HERO_ROLES.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '120px 28px 40px',
        overflow: 'hidden',
      }}
    >
      <AgentLattice marks={marks} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '18px 32px',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 22,
          }}
        >
          <div
            className="scrim hero-in"
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 14,
              padding: '9px 14px',
              animationDelay: '0.3s',
            }}
          >
            <span
              style={{
                display: 'block',
                width: 8,
                height: 8,
                background: '#0A9D67',
                borderRadius: '50%',
                animation: 'blink 1.4s steps(1,end) infinite',
              }}
            />
            <span
              className="mono"
              style={{ fontSize: 11, letterSpacing: '0.2em', color: '#0A9D67' }}
            >
              Available for select work — 2026
            </span>
          </div>

          <p
            className="mono scrim hero-in"
            data-parallax="0.12"
            style={{
              animationDelay: '0.3s',
              fontSize: 11,
              lineHeight: 1.9,
              letterSpacing: '0.1em',
              color: 'rgba(20,18,14,0.85)',
              margin: 0,
              textAlign: 'right',
              maxWidth: 340,
              padding: '10px 14px',
            }}
          >
            Founder — Bespoke Applications Labs
            <br />
            South Africa
            <br />
            Building agent systems since 2023
          </p>
        </div>

        <h1
          className="display"
          style={{
            fontSize: 'clamp(3.4rem,13.5vw,15rem)',
            lineHeight: 0.82,
            letterSpacing: '-0.035em',
          }}
        >
          <span className="hero-in" style={{ display: 'block' }}>
            Lucas
          </span>
          <span className="outline hero-in" style={{ display: 'block', animationDelay: '0.1s' }}>
            Semenya
          </span>
        </h1>

        {/* Own element rather than a border so it can draw left to right. */}
        <div
          className="hero-rule"
          style={{
            marginTop: 34,
            height: 1,
            background: 'rgba(20,18,14,0.18)',
            animationDelay: '0.45s',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 32,
            paddingTop: 22,
          }}
        >
          <p
            className="hero-in"
            style={{
              animationDelay: '0.55s',
              maxWidth: 560,
              fontSize: 'clamp(1rem,1.5vw,1.35rem)',
              lineHeight: 1.5,
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            I turn manual processes into solved problems. AI-native platforms, autonomous agent
            swarms, and full-stack products shipped from South Africa to production.
          </p>

          <div
            className="hero-in"
            style={{
              animationDelay: '0.55s',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              minWidth: 280,
            }}
          >
            <span
              className="mono"
              style={{ fontSize: 11, letterSpacing: '0.18em', color: 'rgba(20,18,14,0.45)' }}
            >
              Currently
            </span>
            <span
              className="display"
              style={{
                fontSize: 'clamp(1.1rem,2.4vw,2rem)',
                letterSpacing: '-0.02em',
                color: '#0A9D67',
              }}
            >
              {HERO_ROLES[roleIndex]}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

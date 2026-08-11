import { SERVICES } from '@/lib/data'

export default function WhatIDo() {
  return (
    <section id="services" className="on-ink">
      <div className="section">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
            marginBottom: 56,
          }}
        >
          <p className="eyebrow">02 — The practice</p>
          <h2
            className="display"
            data-reveal
            style={{ fontSize: 'clamp(1.8rem,3.6vw,3.2rem)', lineHeight: 1 }}
          >
            Six ways I ship
          </h2>
        </div>

        <div style={{ borderTop: '1px solid rgba(237,233,225,0.22)' }}>
          {SERVICES.map((s) => (
            <div key={s.number} className="svc-row">
              <div style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                <span
                  className="mono accent"
                  style={{ fontSize: 12, letterSpacing: '0.2em', flex: 'none', color: '#1FD48F' }}
                >
                  {s.number}
                </span>
                <h3
                  className="display"
                  style={{
                    fontSize: 'clamp(1.3rem,2.4vw,2.1rem)',
                    lineHeight: 1.02,
                    letterSpacing: '-0.025em',
                    textTransform: 'none',
                  }}
                >
                  {s.title}
                </h3>
              </div>

              <div>
                <p
                  style={{
                    margin: '0 0 16px',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: 'rgba(237,233,225,0.66)',
                    maxWidth: 620,
                    textWrap: 'pretty',
                  }}
                >
                  {s.description}
                </p>
                <ul
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {s.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

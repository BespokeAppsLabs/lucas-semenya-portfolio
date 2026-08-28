import Image from 'next/image'
import { FEATURED, PROJECT_INDEX, SWARM } from '@/lib/data'

export default function Projects() {
  return (
    <section id="work" className="section">
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
        <p className="eyebrow">03 — Selected work</p>
        <p
          className="mono"
          style={{ fontSize: 11, letterSpacing: '0.14em', color: 'rgba(20,18,14,0.5)', margin: 0 }}
        >
          {FEATURED.length + PROJECT_INDEX.length} projects · products, platforms, and private client systems
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
        {FEATURED.map((p) => (
          <article
            key={p.title}
            data-parallax="0.04"
            data-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 44,
              alignItems: 'center',
            }}
          >
            <div className="shot" style={{ aspectRatio: '16/11', overflow: 'hidden' }}>
              <Image
                src={p.logo}
                alt={`${p.title} logo`}
                fill
                sizes="(max-width: 703px) 100vw, 50vw"
                style={{ objectFit: 'contain', padding: p.logoPadding, background: '#f7f7f4' }}
              />
              <span
                className="mono"
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  background: '#14120E',
                  color: '#EDE9E1',
                  padding: '5px 10px',
                  zIndex: 1,
                }}
              >
                {p.status}
              </span>
            </div>

            <div>
              <p className="eyebrow" style={{ letterSpacing: '0.16em', marginBottom: 14 }}>
                {p.category}
              </p>

              <h3
                className="display"
                style={{
                  fontSize: 'clamp(2rem,4vw,3.4rem)',
                  lineHeight: 0.94,
                  marginBottom: 20,
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  margin: '0 0 22px',
                  fontSize: '1.02rem',
                  lineHeight: 1.62,
                  color: 'rgba(20,18,14,0.72)',
                  maxWidth: 600,
                  textWrap: 'pretty',
                }}
              >
                {p.description}
              </p>

              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  listStyle: 'none',
                  margin: '0 0 24px',
                  padding: 0,
                }}
              >
                {p.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>

              <a href={p.link} target="_blank" rel="noopener noreferrer" className="rule-link">
                Visit project →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* The swarm. Sits between the featured work and the index because the
          agents are built products — and because the hero lattice has been
          depicting them since the first byte with nothing to explain it. */}
      <div style={{ marginTop: 96, borderTop: '1px solid rgba(20,18,14,0.2)', paddingTop: 34 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <p className="eyebrow">The swarm</p>
          <p
            className="mono"
            style={{ fontSize: 11, letterSpacing: '0.14em', color: 'rgba(20,18,14,0.5)', margin: 0 }}
          >
            3 agents running · autonomous
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
            gap: 40,
          }}
        >
          {SWARM.map((a) => (
            <article key={a.name} data-reveal>
              <h3
                className="display"
                style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', lineHeight: 1, marginBottom: 8 }}
              >
                {a.name}
              </h3>
              <p className="eyebrow" style={{ letterSpacing: '0.16em', marginBottom: 16 }}>
                {a.role}
              </p>
              <p
                style={{
                  margin: '0 0 16px',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  color: 'rgba(20,18,14,0.72)',
                  textWrap: 'pretty',
                }}
              >
                {a.description}
              </p>
              <ul
                className="mono"
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  color: 'rgba(20,18,14,0.5)',
                }}
              >
                {a.facts.map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 96, borderTop: '1px solid rgba(20,18,14,0.2)' }}>
        {PROJECT_INDEX.map((p) => {
          const row = (
            <>
            <span
              className="display"
              style={{
                fontSize: 'clamp(1.05rem,2vw,1.6rem)',
                letterSpacing: '-0.02em',
                flex: '1 1 220px',
                minWidth: 0,
              }}
            >
              {p.title}
            </span>
            <span
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.14em',
                opacity: 0.65,
                flex: '0 1 190px',
                minWidth: 0,
              }}
            >
              {p.category}
            </span>
            <span style={{ fontSize: '0.92rem', lineHeight: 1.5, opacity: 0.7, flex: '2 1 300px', minWidth: 0 }}>
              {p.short}
            </span>
            <span className="mono" style={{ fontSize: 14, flex: 'none', marginLeft: 'auto' }}>
              {p.link ? '↗' : p.access}
            </span>
            </>
          )

          return p.link ? (
            <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="idx-row">
              {row}
            </a>
          ) : (
            <div key={p.title} className="idx-row">
              {row}
            </div>
          )
        })}
      </div>
    </section>
  )
}

import { EXPERIENCE } from '@/lib/data'

/* Rendered inside the ink Stack section — see Skills.tsx. */
export default function Experience() {
  return (
    <div id="experience" style={{ marginTop: 96 }}>
      <p className="eyebrow" style={{ marginBottom: 40 }}>
        05 — Track record
      </p>

      {EXPERIENCE.map((e) => (
        <div
          key={e.title}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 32,
            padding: '38px 0',
            borderTop: '1px solid rgba(237,233,225,0.22)',
          }}
        >
          <div>
            <h3
              className="display"
              style={{
                fontSize: 'clamp(1.4rem,2.6vw,2.2rem)',
                lineHeight: 1,
                letterSpacing: '-0.025em',
                marginBottom: 10,
              }}
            >
              {e.title}
            </h3>
            <p
              className="mono accent"
              style={{ fontSize: 12, letterSpacing: '0.14em', margin: 0, color: '#1FD48F' }}
            >
              {e.company}
              {e.period && ` · ${e.period}`}
            </p>
          </div>

          <div>
            <p
              style={{
                margin: 0,
                fontSize: '1rem',
                lineHeight: 1.62,
                color: 'rgba(237,233,225,0.66)',
                maxWidth: 640,
                textWrap: 'pretty',
              }}
            >
              {e.description}
            </p>

            {/* Specialisms, in the same pill the services already use. */}
            {e.tags && (
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  listStyle: 'none',
                  margin: '18px 0 0',
                  padding: 0,
                }}
              >
                {e.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

import Experience from '@/components/sections/Experience'
import { SKILL_GROUPS } from '@/lib/data'

/* 04 and 05 share one ink section — the page alternates ground to break the
   scroll, and two inversions back to back would undo that. */
export default function Skills() {
  return (
    <section id="stack" className="on-ink">
      <div className="section">
        <p className="eyebrow" style={{ marginBottom: 48 }}>
          04 — The toolkit
        </p>

        {/* 1px gap over a bone-tinted parent draws the hairline grid. */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 1,
            background: 'rgba(237,233,225,0.2)',
            border: '1px solid rgba(237,233,225,0.2)',
          }}
        >
          {SKILL_GROUPS.map((g) => (
            <div key={g.category} className="stack-cell">
              <h3
                className="display accent"
                style={{
                  fontSize: '1.15rem',
                  letterSpacing: '-0.01em',
                  marginBottom: 20,
                  color: '#1FD48F',
                }}
              >
                {g.category}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {g.skills.map((s) => (
                  <li
                    key={s}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      letterSpacing: '0.06em',
                      color: 'rgba(237,233,225,0.75)',
                    }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Experience />
      </div>
    </section>
  )
}

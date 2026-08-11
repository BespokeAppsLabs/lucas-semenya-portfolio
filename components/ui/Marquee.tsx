import { TICKER } from '@/lib/data'
import { STACK_MARKS } from '@/lib/stackMarks'

/* Pure CSS — the track is duplicated and translated -50%. No JS.
   `marks` swaps the word ticker for bone silhouettes of the stack: one
   colour, so the two-hue rule survives (DESIGN.md §2.1). */
export default function Marquee({ marks = false }: { marks?: boolean }) {
  const row = (key: string) => (
    <div
      key={key}
      className="mono"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: marks ? 56 : 44,
        paddingRight: marks ? 56 : 44,
        fontSize: 12,
        letterSpacing: '0.24em',
        whiteSpace: 'nowrap',
      }}
    >
      {marks
        ? STACK_MARKS.map((m) => (
            <svg
              key={`${key}-${m.slug}`}
              viewBox={m.viewBox}
              height="22"
              width="22"
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
              style={{ display: 'block', flex: 'none', opacity: 0.82 }}
            >
              <path d={m.path} />
            </svg>
          ))
        : TICKER.map((t, i) => <span key={`${key}-${i}`}>{t}</span>)}
    </div>
  )

  return (
    <div
      aria-hidden
      style={{
        borderTop: '1px solid rgba(20,18,14,0.18)',
        borderBottom: '1px solid rgba(20,18,14,0.18)',
        background: '#14120E',
        color: '#EDE9E1',
        overflow: 'hidden',
        padding: '14px 0',
      }}
    >
      <div className="marquee-track">
        {row('a')}
        {row('b')}
      </div>
    </div>
  )
}

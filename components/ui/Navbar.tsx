import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '18px 28px',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: 'rgba(237,233,225,0.72)',
        borderBottom: '1px solid rgba(20,18,14,0.12)',
      }}
    >
      {/* Flat single-colour LS glyph — closes DESIGN.md §10 item 4. Same
          paths as app/icon.svg, cropped to the glyph and inheriting colour so
          it works ink-on-bone here and bone-on-ink anywhere inverted. */}
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg
          viewBox="10 22 80 56"
          height="15"
          fill="currentColor"
          aria-hidden
          style={{ display: 'block', flex: 'none' }}
        >
          <path d="M10 22h14v56H10z" />
          <path d="M10 66h30v12H10z" />
          <path d="M50 22h40v12H50z" />
          <path d="M50 22h12v34H50z" />
          <path d="M50 44h40v12H50z" />
          <path d="M78 44h12v34H78z" />
          <path d="M50 66h40v12H50z" />
        </svg>
        <span
          className="mono"
          style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}
        >
          L. Semenya
        </span>
      </a>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 26,
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
        }}
      >
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta">
          Start a project
        </a>
      </nav>
    </header>
  )
}

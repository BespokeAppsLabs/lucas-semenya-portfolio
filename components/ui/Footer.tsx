'use client'

import { SOCIAL, NAV_LINKS } from '@/lib/data'

export default function Footer() {
  return (
    <footer
      style={{
        padding: '60px 24px 40px',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #00FFD1, #FFB800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: 14,
                color: '#020208',
              }}
            >
              LS
            </div>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Lucas Semenya</span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(240,240,248,0.35)', lineHeight: 1.6, maxWidth: 220 }}>
            Building AI-powered products and intelligent systems from South Africa.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(240,240,248,0.3)',
              marginBottom: 20,
            }}
          >
            Navigation
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  textAlign: 'left',
                  fontSize: 14,
                  color: 'rgba(240,240,248,0.45)',
                  transition: 'color 0.3s ease',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: 'var(--font-space-grotesk)',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FFD1')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,240,248,0.45)')}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(240,240,248,0.3)',
              marginBottom: 20,
            }}
          >
            Connect
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Email', href: `mailto:${SOCIAL.email}` },
              { label: 'GitHub', href: SOCIAL.github },
              { label: 'LinkedIn', href: SOCIAL.linkedin },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  color: 'rgba(240,240,248,0.45)',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#00FFD1')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,240,248,0.45)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <h4
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(240,240,248,0.3)',
              marginBottom: 20,
            }}
          >
            Status
          </h4>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: 100,
              border: '1px solid rgba(0,255,209,0.2)',
              background: 'rgba(0,255,209,0.05)',
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#00FFD1',
                animation: 'pulse 2s ease-in-out infinite',
                display: 'block',
              }}
            />
            <span style={{ fontSize: 12, color: '#00FFD1', fontWeight: 600 }}>Available for work</span>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(240,240,248,0.3)', lineHeight: 1.5 }}>
            Open to freelance, consulting, and co-founder opportunities.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 32,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <p style={{ fontSize: 12, color: 'rgba(240,240,248,0.25)' }}>
          © {new Date().getFullYear()} Lucas Semenya · Bespoke Applications Labs
        </p>
        <p style={{ fontSize: 12, color: 'rgba(240,240,248,0.2)' }}>
          Designed & Built with{' '}
          <span style={{ color: 'rgba(0,255,209,0.5)' }}>Three.js · GSAP · Next.js</span>
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
      `}</style>
    </footer>
  )
}

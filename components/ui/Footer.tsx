'use client'

import { SOCIAL, NAV_LINKS } from '@/lib/data'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  return (
    <footer className="rule">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-ink">
              <Logo size={28} />
              <span className="text-sm font-medium">Lucas Semenya</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Building AI-powered products and intelligent systems from South Africa.
              Open to freelance, consulting, and co-founder opportunities.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label mb-5">Navigation</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="u-link text-sm text-muted hover:text-ink"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label mb-5">Connect</p>
            <ul className="space-y-2">
              {[
                { label: 'Email', href: `mailto:${SOCIAL.email}` },
                { label: 'GitHub', href: SOCIAL.github },
                { label: 'LinkedIn', href: SOCIAL.linkedin },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="u-link text-sm text-muted hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule pt-8 flex flex-wrap justify-between gap-4">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Lucas Semenya · Bespoke Applications Labs
          </p>
          <p className="text-xs text-faint">Designed &amp; built with Next.js</p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS, SOCIAL } from '@/lib/data'
import Logo from '@/components/ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? 'bg-paper/90 backdrop-blur-sm border-line' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-ink"
          >
            <Logo size={28} />
            <span className="text-sm font-medium tracking-tight hidden sm:block">Lucas Semenya</span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="u-link text-sm text-muted hover:text-ink"
              >
                {link.label}
              </button>
            ))}
          </div>

          <a href={`mailto:${SOCIAL.email}`} className="btn-ink !py-2 !px-5 text-[13px] hidden lg:inline-flex">
            Let&apos;s talk
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-ink transition-transform ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-6 h-px bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-ink transition-transform ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-8 transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="display text-4xl text-ink"
          >
            {link.label}
          </button>
        ))}
        <a href={`mailto:${SOCIAL.email}`} className="btn-ink mt-4">
          Let&apos;s talk
        </a>
      </div>
    </>
  )
}

import { SOCIAL } from '@/lib/data'

export default function Footer() {
  return (
    <footer
      className="mono"
      style={{
        borderTop: '1px solid rgba(20,18,14,0.2)',
        padding: 28,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'space-between',
        fontSize: 10,
        letterSpacing: '0.16em',
        color: 'rgba(20,18,14,0.5)',
      }}
    >
      <span>
        © {new Date().getFullYear()} Lucas Semenya —{' '}
        <a
          href={SOCIAL.company}
          target="_blank"
          rel="noopener noreferrer"
          className="plain-link"
        >
          {SOCIAL.companyName}
        </a>
      </span>
      <span>{SOCIAL.domain}</span>
    </footer>
  )
}

import type { Metadata } from 'next'
import { Archivo, Archivo_Black, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const archivoBlack = Archivo_Black({
  variable: '--font-archivo-black',
  subsets: ['latin'],
  weight: '400',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Lucas Semenya — Founder, Engineer & AI Builder',
  description:
    'Founder of Bespoke Applications Labs. Building AI-powered products, full-stack applications, and autonomous agent systems from South Africa.',
  keywords: [
    'Lucas Semenya',
    'Bespoke Applications Labs',
    'AI Developer',
    'Full Stack Engineer',
    'South Africa',
    'React',
    'Next.js',
    'AI Agents',
  ],
  authors: [{ name: 'Lucas Semenya', url: 'https://lucassemenya.co.za' }],
  metadataBase: new URL('https://lucassemenya.co.za'),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Lucas Semenya — Founder, Engineer & AI Builder',
    description: 'Building AI-powered products and autonomous agent systems from South Africa.',
    type: 'website',
    url: 'https://lucassemenya.co.za',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Semenya — Founder, Engineer & AI Builder',
    description: 'Building AI-powered products from South Africa.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoBlack.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import SmoothScroll from '@/components/ui/SmoothScroll'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lucas Semenya — Founder, Engineer & AI Builder',
  description:
    'Founder of Bespoke Applications Labs. Building AI-powered products, full-stack applications, and autonomous agent systems from South Africa.',
  keywords: ['Lucas Semenya', 'Bespoke Applications Labs', 'AI Developer', 'Full Stack Engineer', 'South Africa', 'React', 'Next.js', 'AI Agents'],
  authors: [{ name: 'Lucas Semenya', url: 'https://lucassemenya.co.za' }],
  metadataBase: new URL('https://lucassemenya.co.za'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
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
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

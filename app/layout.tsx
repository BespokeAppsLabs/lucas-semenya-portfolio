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
    'Founder of Bespoke Applications Labs. Building AI-powered products, full-stack applications, and intelligent automation systems from South Africa.',
  keywords: ['Lucas Semenya', 'Bespoke Applications Labs', 'AI Developer', 'Full Stack', 'South Africa'],
  authors: [{ name: 'Lucas Semenya' }],
  openGraph: {
    title: 'Lucas Semenya — Founder, Engineer & AI Builder',
    description: 'Building AI-powered products from South Africa.',
    type: 'website',
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

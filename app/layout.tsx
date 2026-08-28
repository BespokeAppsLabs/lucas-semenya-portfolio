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
  title: 'Lucas Semenya — AI Developer & Product Engineer, South Africa',
  description:
    'AI developer and product engineer building agent systems and software across Lephalale, Polokwane, Pretoria, Johannesburg, Limpopo and Gauteng.',
  keywords: [
    'Lucas Semenya',
    'Bespoke Applications Labs',
    'AI developer South Africa',
    'AI developer Lephalale',
    'AI developer Polokwane',
    'AI developer Pretoria',
    'AI developer Johannesburg',
    'software developer Limpopo',
    'software developer Gauteng',
    'software developer North West',
    'software developer Mpumalanga',
    'full-stack engineer South Africa',
    'AI agent systems',
  ],
  authors: [{ name: 'Lucas Semenya', url: 'https://lucassemenya.co.za' }],
  creator: 'Lucas Semenya',
  publisher: 'Lucas Semenya',
  metadataBase: new URL('https://lucassemenya.co.za'),
  alternates: { canonical: '/' },
  category: 'technology',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Lucas Semenya — AI Developer & Product Engineer',
    description:
      'AI-native products, autonomous agent systems, and full-stack engineering from South Africa.',
    type: 'website',
    url: '/',
    siteName: 'Lucas Semenya',
    locale: 'en_ZA',
    images: [
      {
        url: '/images/Lucas_profile_swarm_4x5.png',
        width: 1120,
        height: 1400,
        alt: 'Lucas Semenya with the FRIDAY, ULTRON, and NOVA robot agents',
      },
    ],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://lucassemenya.co.za/#lucas-semenya',
  name: 'Lucas Semenya',
  url: 'https://lucassemenya.co.za',
  image: 'https://lucassemenya.co.za/images/Lucas_profile_swarm_4x5.png',
  description:
    'South African founder, AI developer, product engineer, and mechanical engineer building AI-native products and autonomous agent systems.',
  jobTitle: 'Founder and Product Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Bespoke Applications Labs',
    url: 'https://www.bespokeapps.co.za',
  },
  homeLocation: { '@type': 'Place', name: 'Limpopo, South Africa' },
  workLocation: [
    'Lephalale',
    'Polokwane',
    'Pretoria',
    'Johannesburg',
    'Limpopo',
    'Gauteng',
    'North West',
    'Mpumalanga',
  ].map((name) => ({ '@type': 'Place', name: `${name}, South Africa` })),
  knowsAbout: [
    'Artificial intelligence',
    'AI agent systems',
    'Full-stack software engineering',
    'Product architecture',
    'Business automation',
    'Mechanical engineering',
  ],
  sameAs: ['https://www.linkedin.com/in/lucas-semenya-50665564/'],
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  )
}

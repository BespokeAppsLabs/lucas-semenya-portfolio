'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function LogoShowcase() {
  const [key, setKey] = useState(0)

  return (
    <div className="min-h-svh flex flex-col items-center justify-center gap-12 px-6">
      <div className="text-ink" key={key}>
        <Logo size={240} animated />
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => setKey((k) => k + 1)} className="btn-line">
          Replay
        </button>
        <Link href="/" className="btn-ink">
          Back to site
        </Link>
      </div>

      <p className="label">LS monogram — single stroke</p>
    </div>
  )
}

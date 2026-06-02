'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function LogoShowcase() {
  const [logoKey, setLogoKey] = useState(0)
  const [logoSize, setLogoSize] = useState(280)
  const [isAnimated, setIsAnimated] = useState(true)

  const handleReplay = () => {
    setLogoKey((prev) => prev + 1)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#020208',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#f0f0f8',
        fontFamily: 'var(--font-space-grotesk), sans-serif',
        padding: '40px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Background grid + vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 209, 0.05) 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 600,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: 12 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#00FFD1',
              border: '1px solid rgba(0, 255, 209, 0.2)',
              padding: '4px 12px',
              borderRadius: 100,
              background: 'rgba(0, 255, 209, 0.03)',
            }}
          >
            Brand Identity Concept
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: 8,
            background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          LS Particle Infinity
        </h1>

        <p
          style={{
            fontSize: 15,
            color: 'rgba(240, 240, 248, 0.5)',
            marginBottom: 48,
            maxWidth: 420,
            lineHeight: 1.5,
          }}
        >
          The &apos;L&apos; and &apos;S&apos; draw apart, merge, then rotate into a horizontal particle infinity mark.
        </p>

        {/* Large Logo Display Box */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(240, 240, 248, 0.05)',
            backdropFilter: 'blur(16px)',
            borderRadius: 24,
            width: '100%',
            aspectRatio: '1/1',
            maxHeight: 380,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
            marginBottom: 32,
            boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            position: 'relative',
          }}
        >
          {/* Subtle background ring */}
          <div
            style={{
              position: 'absolute',
              width: logoSize + 40,
              height: logoSize + 40,
              borderRadius: '50%',
              border: '1px dashed rgba(0, 255, 209, 0.05)',
              pointerEvents: 'none',
              animation: 'spin 120s linear infinite',
            }}
          />

          <Logo key={logoKey} size={logoSize} animated={isAnimated} />
        </div>

        {/* Interactive Controls */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(240, 240, 248, 0.05)',
            backdropFilter: 'blur(12px)',
            borderRadius: 16,
            padding: 24,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginBottom: 40,
          }}
        >
          {/* Size Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'stretch' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 500, color: 'rgba(240,240,248,0.6)' }}>
              <span>Display Size</span>
              <span>{logoSize}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="320"
              value={logoSize}
              onChange={(e) => setLogoSize(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#00FFD1',
                cursor: 'pointer',
              }}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={handleReplay}
              style={{
                flex: 1,
                padding: '12px 20px',
                borderRadius: 8,
                background: 'linear-gradient(135deg, #00FFD1, #00c4a0)',
                color: '#020208',
                fontWeight: 700,
                fontSize: 13,
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s, opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Replay Animation
            </button>
            <button
              onClick={() => setIsAnimated(!isAnimated)}
              style={{
                flex: 1,
                padding: '12px 20px',
                borderRadius: 8,
                background: 'rgba(240,240,248,0.05)',
                color: '#f0f0f8',
                fontWeight: 600,
                fontSize: 13,
                border: '1px solid rgba(240,240,248,0.1)',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(240,240,248,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(240,240,248,0.05)')}
            >
              {isAnimated ? 'Disable Draw' : 'Enable Draw'}
            </button>
          </div>
        </div>

        {/* Link back to home */}
        <Link
          href="/"
          style={{
            fontSize: 14,
            color: 'rgba(240, 240, 248, 0.4)',
            textDecoration: 'none',
            transition: 'color 0.3s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#00FFD1')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240, 240, 248, 0.4)')}
        >
          <span>← Back to main site</span>
        </Link>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

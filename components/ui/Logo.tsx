'use client'

import React, { useId } from 'react'

interface LogoProps {
  size?: number
  className?: string
  animated?: boolean
  loop?: boolean
}

export default function Logo({ size = 36, className = '', animated = true, loop = false }: LogoProps) {
  const id = useId().replace(/:/g, '')
  const gradientId = `vertical-infinity-gradient-${id}`
  const glowId = `neon-glow-${id}`
  const cyanGlowId = `cyan-detail-glow-${id}`
  const goldGlowId = `gold-detail-glow-${id}`
  const shouldAnimate = animated || loop

  // Stage 1: "L" drawn from the first half of the final infinity mark,
  // with a longer lower sweep so it reads as an L before the merge.
  const lPathData = `
    M 50,15
    C 66,15 72,32 50,50
    C 28,68 22,85 45,85
    C 55,85 65,82 72,72
  `

  // Stage 2: "S" drawn from the top down along the other half of the final mark.
  const sPathData = `
    M 50,15
    C 38,15 32,20 38,28
    C 45,36 50,41 58,48
    C 66,55 74,62 72,72
    C 70,82 60,85 45,85
  `

  // Final mark: vertical infinity loop merging cursive "L" and "S".
  const infinityPathData = `
    M 50,15 
    C 66,15 72,32 50,50 
    C 28,68 22,85 45,85 
    C 60,85 70,82 72,72 
    C 74,62 66,55 58,48 
    C 50,41 45,36 38,28 
    C 32,20 38,15 50,15 Z
  `

  const detailStrokes = [
    { color: '#00FFD1', width: 0.85, opacity: 0.78, dash: '0.55 1.5', transform: 'translate(-3.6 -1.4) scale(1.08)' },
    { color: '#00FFD1', width: 0.65, opacity: 0.62, dash: '0.25 1.15', transform: 'translate(3.2 1.8) scale(0.96)' },
    { color: '#7FFFEA', width: 0.48, opacity: 0.62, dash: '0.2 1.05', transform: 'translate(-1.4 3.2) scale(0.91)' },
    { color: '#F7FFFF', width: 0.38, opacity: 0.72, dash: '0.18 1.35', transform: 'translate(0.8 -3.1) scale(1.03)' },
    { color: '#FFDA73', width: 0.85, opacity: 0.72, dash: '0.65 1.75', transform: 'translate(3.8 -2.1) scale(1.04)' },
    { color: '#FFB800', width: 0.62, opacity: 0.58, dash: '0.3 1.25', transform: 'translate(-3.0 2.4) scale(0.99)' },
    { color: '#FFF2B0', width: 0.45, opacity: 0.64, dash: '0.22 1.4', transform: 'translate(1.1 4.2) scale(0.88)' },
    { color: '#00FFD1', width: 0.36, opacity: 0.48, dash: '0.12 0.95', transform: 'translate(-4.4 1.1) scale(1.0)' },
  ]

  const particles = [
    { x: 49.8, y: 15.3, r: 1.1, color: '#FFF2B0' },
    { x: 63.2, y: 24.5, r: 0.9, color: '#00FFD1' },
    { x: 68.7, y: 35.1, r: 0.65, color: '#FFDA73' },
    { x: 55.8, y: 47.5, r: 1.25, color: '#F7FFFF' },
    { x: 36.4, y: 62.2, r: 0.8, color: '#00FFD1' },
    { x: 43.8, y: 84.6, r: 0.75, color: '#FFDA73' },
    { x: 62.8, y: 82.3, r: 0.9, color: '#FFF2B0' },
    { x: 72.4, y: 70.7, r: 0.85, color: '#FFDA73' },
    { x: 65.7, y: 56.4, r: 0.7, color: '#00FFD1' },
    { x: 49.6, y: 41.5, r: 0.75, color: '#7FFFEA' },
    { x: 39.4, y: 29.6, r: 0.85, color: '#00FFD1' },
    { x: 32.6, y: 21.6, r: 0.65, color: '#FFF2B0' },
    { x: 58.8, y: 31.2, r: 0.7, color: '#00FFD1' },
    { x: 42.4, y: 54.4, r: 0.8, color: '#F7FFFF' },
    { x: 31.8, y: 73.1, r: 0.7, color: '#FFB800' },
    { x: 55.2, y: 74.4, r: 0.55, color: '#00FFD1' },
    { x: 24.4, y: 63.2, r: 0.55, color: '#00FFD1' },
    { x: 27.8, y: 78.5, r: 0.5, color: '#FFDA73' },
    { x: 33.6, y: 84.8, r: 0.55, color: '#FFF2B0' },
    { x: 72.8, y: 58.4, r: 0.55, color: '#00FFD1' },
    { x: 75.2, y: 70.8, r: 0.5, color: '#FFF2B0' },
    { x: 67.4, y: 83.8, r: 0.5, color: '#FFB800' },
    { x: 31.2, y: 35.1, r: 0.48, color: '#00FFD1' },
    { x: 41.2, y: 18.2, r: 0.5, color: '#FFF2B0' },
    { x: 58.8, y: 17.6, r: 0.52, color: '#FFDA73' },
    { x: 70.4, y: 28.8, r: 0.5, color: '#00FFD1' },
  ]

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
      }}
      className={`group ${loop ? 'logo-loader-loop-animation' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={shouldAnimate ? 'logo-stage-revert-animation' : 'logo-stage-horizontal-static'}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Vertical linear gradient: Neon Cyan at the top, Gold at the bottom */}
          <linearGradient id={gradientId} x1="8%" y1="12%" x2="92%" y2="88%">
            <stop offset="0%" stopColor="#00FFD1" />
            <stop offset="38%" stopColor="#00FFD1" />
            <stop offset="52%" stopColor="#F7FFFF" />
            <stop offset="66%" stopColor="#FFDA73" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>

          <radialGradient id={`${gradientId}-surface`} cx="50%" cy="50%" r="54%">
            <stop offset="0%" stopColor="#F7FFFF" stopOpacity="0.45" />
            <stop offset="38%" stopColor="#00FFD1" stopOpacity="0.2" />
            <stop offset="72%" stopColor="#FFB800" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#020208" stopOpacity="0" />
          </radialGradient>

          <linearGradient id={`${gradientId}-glass`} x1="12%" y1="8%" x2="88%" y2="92%">
            <stop offset="0%" stopColor="#00FFD1" stopOpacity="0.15" />
            <stop offset="24%" stopColor="#00FFD1" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#F7FFFF" stopOpacity="0.22" />
            <stop offset="72%" stopColor="#FFDA73" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0.18" />
          </linearGradient>

          {/* Neon Glow Filter */}
          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={cyanGlowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={goldGlowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse
          cx="50"
          cy="50"
          rx="43"
          ry="34"
          fill={`url(#${gradientId}-surface)`}
          opacity={shouldAnimate ? 0 : 0.38}
          className={shouldAnimate ? 'logo-ambient-cloud-animation' : ''}
        />

        {/* Glow backdrop path (simulating a physical neon glow) */}
        <path
          d={infinityPathData}
          stroke={`url(#${gradientId})`}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
          filter={`url(#${glowId})`}
          style={{
            transition: 'all 0.5s ease',
          }}
          className={`${shouldAnimate ? 'logo-final-glow-animation' : ''} group-hover:opacity-60 group-hover:stroke-[9px]`}
        />

        {shouldAnimate && (
          <>
            <path
              d={lPathData}
              stroke={`url(#${gradientId}-glass)`}
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              filter={`url(#${glowId})`}
              className="logo-letter-l-depth-animation"
            />
            <path
              d={sPathData}
              stroke={`url(#${gradientId}-glass)`}
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              filter={`url(#${glowId})`}
              className="logo-letter-s-depth-animation"
            />
          </>
        )}

        {/* Stage 1: L */}
        {shouldAnimate && (
          <path
            d={lPathData}
            stroke={`url(#${gradientId})`}
            strokeWidth="5.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className="logo-letter-l-animation"
          />
        )}

        {/* Stage 2: S */}
        {shouldAnimate && (
          <path
            d={sPathData}
            stroke={`url(#${gradientId})`}
            strokeWidth="5.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className="logo-letter-s-animation"
          />
        )}

        {/* Static fallback only. Animated mark is formed by L + S, not a third draw. */}
        {!shouldAnimate && (
          <path
            d={infinityPathData}
            stroke={`url(#${gradientId})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            style={{
              transition: 'stroke-width 0.3s ease',
            }}
          />
          )}

        <g className={shouldAnimate ? 'logo-ribbon-depth-reveal-animation' : ''} opacity={shouldAnimate ? 0 : 1}>
          <path
            d={infinityPathData}
            stroke={`url(#${gradientId}-glass)`}
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.22"
            filter={`url(#${glowId})`}
          />
          <path
            d={infinityPathData}
            stroke="#00FFD1"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.18"
            transform="translate(-1.4 -1)"
            filter={`url(#${cyanGlowId})`}
          />
          <path
            d={infinityPathData}
            stroke="#FFB800"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.16"
            transform="translate(1.5 1.2)"
            filter={`url(#${goldGlowId})`}
          />
          <path
            d={infinityPathData}
            stroke="#F7FFFF"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.75"
          />
        </g>

        <g className={shouldAnimate ? 'logo-particles-live-animation' : ''}>
          {particles.map((particle, index) => (
            <circle
              key={`live-particle-${index}`}
              cx={particle.x}
              cy={particle.y}
              r={particle.r}
              fill={particle.color}
              filter={particle.color === '#FFB800' || particle.color === '#FFDA73' || particle.color === '#FFF2B0' ? `url(#${goldGlowId})` : `url(#${cyanGlowId})`}
              className={shouldAnimate ? 'logo-particle-twinkle' : ''}
              style={{
                animationDelay: `${0.18 + index * 0.13}s`,
                opacity: shouldAnimate ? 0 : 0.9,
              }}
            />
          ))}
        </g>

        {/* Fine particle/detail layer cloned from the PNG feel: dotted neon trails, nodes, and orbit lines. */}
        <g className={shouldAnimate ? 'logo-detail-reveal-animation' : ''} opacity={shouldAnimate ? 0 : 1}>
          {detailStrokes.map((stroke, index) => (
            <path
              key={`detail-stroke-${index}`}
              d={infinityPathData}
              stroke={stroke.color}
              strokeWidth={stroke.width}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={stroke.dash}
              opacity={stroke.opacity}
              transform={stroke.transform}
              filter={stroke.color === '#FFB800' || stroke.color === '#FFDA73' ? `url(#${goldGlowId})` : `url(#${cyanGlowId})`}
              className="logo-orbit-strand"
              style={{
                animationDelay: `${index * 0.16}s`,
              }}
            />
          ))}

          <path
            d="M 34,62 C 42,54 49,53 55,48 C 61,43 66,38 70,29"
            stroke="#00FFD1"
            strokeWidth="0.45"
            strokeLinecap="round"
            strokeDasharray="1.2 2"
            opacity="0.65"
            filter={`url(#${cyanGlowId})`}
          />
          <path
            d="M 30,76 C 42,72 55,77 70,70"
            stroke="#FFDA73"
            strokeWidth="0.45"
            strokeLinecap="round"
            strokeDasharray="1 1.8"
            opacity="0.6"
            filter={`url(#${goldGlowId})`}
          />
          <path
            d="M 36,28 C 47,31 52,40 59,47 C 66,55 70,59 73,66"
            stroke="#7FFFEA"
            strokeWidth="0.35"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>
      </svg>

      <style jsx global>{`
        @keyframes logoStageRevert {
          0% { transform: rotate(0deg) scale(1); }
          66% { transform: rotate(0deg) scale(1); }
          82% { transform: rotate(-90deg) scale(1.18); }
          100% { transform: rotate(-90deg) scale(1.18); }
        }

        @keyframes logoLetterL {
          0% { opacity: 1; stroke-dashoffset: 1; transform: translateX(-22px); }
          26% { opacity: 1; stroke-dashoffset: 0; transform: translateX(-22px); }
          66% { opacity: 1; stroke-dashoffset: 0; transform: translateX(-22px); }
          100% { opacity: 1; stroke-dashoffset: 0; transform: translateX(0); }
        }

        @keyframes logoLetterS {
          0% { opacity: 0; stroke-dashoffset: 1; transform: translateX(22px); }
          30% { opacity: 0; stroke-dashoffset: 1; transform: translateX(22px); }
          58% { opacity: 1; stroke-dashoffset: 0; transform: translateX(22px); }
          66% { opacity: 1; stroke-dashoffset: 0; transform: translateX(22px); }
          100% { opacity: 1; stroke-dashoffset: 0; transform: translateX(0); }
        }

        @keyframes logoFinalGlow {
          0% { opacity: 0; }
          66% { opacity: 0; }
          78% { opacity: 0.32; }
          100% { opacity: 0.42; }
        }

        @keyframes logoRibbonDepthReveal {
          0% { opacity: 0; transform: scale(0.98); filter: blur(3px); }
          68% { opacity: 0; transform: scale(0.98); filter: blur(3px); }
          82% { opacity: 0.85; transform: scale(1.025); filter: blur(0.8px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        @keyframes logoDetailReveal {
          0% { opacity: 0; transform: scale(0.96); filter: blur(5px); }
          66% { opacity: 0; transform: scale(0.98); filter: blur(3px); }
          84% { opacity: 0.85; transform: scale(1.03); filter: blur(1px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        @keyframes logoParticleTwinkle {
          0% { opacity: 0; transform: scale(0.35); }
          18% { opacity: 1; transform: scale(1.45); }
          34% { opacity: 0.55; transform: scale(0.85); }
          54% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 0.9; transform: scale(1); }
        }

        @keyframes logoAmbientCloud {
          0% { opacity: 0; transform: scale(0.9); }
          66% { opacity: 0; transform: scale(0.96); }
          82% { opacity: 0.34; transform: scale(1.08); }
          100% { opacity: 0.38; transform: scale(1); }
        }

        @keyframes logoStrandFlow {
          0% { stroke-dashoffset: 0; opacity: 0.28; }
          35% { opacity: 0.88; }
          100% { stroke-dashoffset: -18; opacity: 0.64; }
        }

        .logo-stage-revert-animation,
        .logo-stage-horizontal-static {
          transform-box: fill-box;
          transform-origin: center;
        }

        .logo-stage-revert-animation {
          will-change: transform;
          animation: logoStageRevert 5.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-stage-horizontal-static {
          transform: rotate(-90deg) scale(1.18);
        }

        .logo-letter-l-animation,
        .logo-letter-s-animation,
        .logo-letter-l-depth-animation,
        .logo-letter-s-depth-animation {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          fill: none;
          transform-box: fill-box;
          transform-origin: center;
          will-change: transform, opacity, stroke-dashoffset;
        }

        .logo-letter-l-animation {
          animation: logoLetterL 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-letter-s-animation {
          animation: logoLetterS 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-letter-l-depth-animation {
          opacity: 0.34;
          animation: logoLetterL 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-letter-s-depth-animation {
          opacity: 0.34;
          animation: logoLetterS 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-final-glow-animation {
          animation: logoFinalGlow 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-ribbon-depth-reveal-animation {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          will-change: opacity, transform, filter;
          animation: logoRibbonDepthReveal 4.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-detail-reveal-animation {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          will-change: opacity, transform, filter;
          animation: logoDetailReveal 4.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-ambient-cloud-animation {
          transform-box: fill-box;
          transform-origin: center;
          will-change: opacity, transform;
          animation: logoAmbientCloud 4.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-orbit-strand {
          animation: logoStrandFlow 4.8s linear infinite;
        }

        .logo-particle-twinkle {
          transform-box: fill-box;
          transform-origin: center;
          will-change: opacity, transform;
          animation: logoParticleTwinkle 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .logo-loader-loop-animation .logo-stage-revert-animation {
          animation: logoStageRevert 5.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .logo-loader-loop-animation .logo-letter-l-animation,
        .logo-loader-loop-animation .logo-letter-l-depth-animation {
          animation: logoLetterL 5.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .logo-loader-loop-animation .logo-letter-s-animation,
        .logo-loader-loop-animation .logo-letter-s-depth-animation {
          animation: logoLetterS 5.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .logo-loader-loop-animation .logo-final-glow-animation {
          animation: logoFinalGlow 5.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .logo-loader-loop-animation .logo-ribbon-depth-reveal-animation {
          animation: logoRibbonDepthReveal 5.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .logo-loader-loop-animation .logo-detail-reveal-animation {
          animation: logoDetailReveal 5.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .logo-loader-loop-animation .logo-ambient-cloud-animation {
          animation: logoAmbientCloud 5.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .logo-loader-loop-animation .logo-particle-twinkle {
          animation: logoParticleTwinkle 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-letter-l-animation,
          .logo-letter-s-animation,
          .logo-letter-l-depth-animation,
          .logo-letter-s-depth-animation {
            animation: none;
            opacity: 1;
            stroke-dashoffset: 0;
            transform: translateX(0);
          }

          .logo-final-glow-animation {
            animation: none;
            opacity: 0.35;
          }

          .logo-detail-reveal-animation {
            animation: none;
            opacity: 1;
            transform: scale(1);
            filter: none;
          }

          .logo-ribbon-depth-reveal-animation,
          .logo-particle-twinkle,
          .logo-stage-revert-animation,
          .logo-ambient-cloud-animation,
          .logo-orbit-strand {
            animation: none;
            opacity: 1;
            transform: scale(1);
            filter: none;
          }

          .logo-stage-revert-animation,
          .logo-stage-horizontal-static {
            transform: rotate(-90deg) scale(1.18);
          }
        }
      `}</style>
    </div>
  )
}

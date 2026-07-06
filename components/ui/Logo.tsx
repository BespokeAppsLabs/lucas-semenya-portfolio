'use client'

interface LogoProps {
  size?: number
  className?: string
  animated?: boolean
  loop?: boolean
}

/**
 * LS infinity monogram — single continuous stroke, inherits currentColor.
 * The mark is the original L+S loop rotated to its horizontal (infinity) stance.
 */
export default function Logo({ size = 36, className = '', animated = false, loop = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" aria-hidden="true">
        <g transform="translate(50 50) rotate(-90) scale(1.18) translate(-50 -50)">
          <path
            d="M50 15C66 15 72 32 50 50C28 68 22 85 45 85C60 85 70 82 72 72C74 62 66 55 58 48C50 41 45 36 38 28C32 20 38 15 50 15Z"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className={animated || loop ? (loop ? 'logo-draw logo-draw-loop' : 'logo-draw') : undefined}
          />
        </g>
      </svg>

      <style jsx global>{`
        @keyframes logoDraw {
          0% { stroke-dashoffset: 1; }
          60%, 100% { stroke-dashoffset: 0; }
        }
        .logo-draw {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: logoDraw 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .logo-draw-loop {
          animation: logoDraw 2.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-draw, .logo-draw-loop {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </span>
  )
}

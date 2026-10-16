/* Sunset logo mark: sun setting behind two ridges */
export default function Logo({ size = 34, showText = true }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="logo-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEE7B5" />
            <stop offset="55%" stopColor="#FE8932" />
            <stop offset="100%" stopColor="#CD1A30" />
          </linearGradient>
          <clipPath id="logo-clip"><rect width="40" height="40" rx="12" /></clipPath>
        </defs>
        <g clipPath="url(#logo-clip)">
          <rect width="40" height="40" fill="url(#logo-sky)" />
          <circle cx="20" cy="22" r="8" fill="#FEE7B5" opacity="0.95" />
          <path d="M0 28 L10 20 L17 25 L26 16 L40 27 L40 40 L0 40Z" fill="#7A0C31" />
          <path d="M0 33 L8 29 L16 32 L24 27 L32 31 L40 29 L40 40 L0 40Z" fill="#200432" />
        </g>
      </svg>
      {showText && (
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--cream)', letterSpacing: '-0.02em' }}>
          UI <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>Explorer</span>
        </span>
      )}
    </span>
  )
}

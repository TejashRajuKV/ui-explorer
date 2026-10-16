export default function Badge({ children, color = 'accent', style = {} }) {
  const colors = {
    // Tokens (not fixed hexes) so badges follow per-style themes on Library pages
    accent: { bg: 'color-mix(in srgb, var(--accent) 14%, transparent)', text: 'var(--accent)', border: 'color-mix(in srgb, var(--accent) 32%, transparent)' },
    pink:   { bg: 'color-mix(in srgb, var(--accent-2) 16%, transparent)', text: 'var(--accent-2)', border: 'color-mix(in srgb, var(--accent-2) 35%, transparent)' },
    green:  { bg: 'color-mix(in srgb, var(--accent-3) 12%, transparent)', text: 'var(--accent-3)', border: 'color-mix(in srgb, var(--accent-3) 28%, transparent)' },
    muted:  { bg: 'var(--bg-glass)', text: 'var(--text-secondary)', border: 'var(--border)' },
  }

  const c = colors[color] || colors.accent

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '4px 12px',
        borderRadius: 100,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

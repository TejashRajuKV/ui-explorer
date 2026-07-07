export default function Badge({ children, color = 'accent', style = {} }) {
  const colors = {
    accent: { bg: 'rgba(108, 99, 255, 0.15)', text: 'var(--accent)', border: 'rgba(108, 99, 255, 0.3)' },
    pink:   { bg: 'rgba(255, 101, 132, 0.12)', text: 'var(--accent-2)', border: 'rgba(255, 101, 132, 0.25)' },
    green:  { bg: 'rgba(67, 233, 123, 0.12)', text: 'var(--accent-3)', border: 'rgba(67, 233, 123, 0.25)' },
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

export default function SectionBlock({ icon, title, children, accent = false }) {
  return (
    <div style={{ marginBottom: 48 }}>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 20,
        paddingBottom: 16,
        borderBottom: `2px solid ${accent ? 'var(--accent)' : 'var(--border)'}`,
      }}>
        {icon && (
          <div style={{
            width: 40, height: 40,
            borderRadius: 10,
            background: accent ? 'rgba(254,137,50,0.15)' : 'var(--bg-glass)',
            border: `1px solid ${accent ? 'rgba(254,137,50,0.3)' : 'var(--border)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, flexShrink: 0,
          }}>
            {icon}
          </div>
        )}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
          {title}
        </h2>
      </div>

      {/* Content */}
      <div>{children}</div>
    </div>
  )
}

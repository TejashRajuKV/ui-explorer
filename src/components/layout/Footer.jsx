import { Link } from 'react-router-dom'

const footerLinks = {
  Explore: [
    { label: 'UI Library',   path: '/library' },
    { label: 'Components',   path: '/components' },
  ],
  Tools: [
    { label: 'Playground',   path: '/playground' },
    { label: 'Code Library', path: '/code' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="footer"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: '64px 0 32px',
      }}
    >
      <div className="container">
        {/* Top: Logo + Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr repeat(2, auto)',
          gap: 48,
          marginBottom: 64,
          flexWrap: 'wrap',
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, textDecoration: 'none' }}>
              <div style={{
                width: 36, height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 900, color: '#fff',
              }}>
                UI
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>
                UI <span style={{ color: 'var(--accent)' }}>Explorer</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Explore, compare, and master modern UI design styles through interactive learning.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={{ color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Copyright */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
            © {year} UI Explorer. Built for designers & developers.
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span style={{
              fontSize: 12,
              color: 'var(--text-muted)',
              padding: '4px 10px',
              borderRadius: 100,
              background: 'var(--bg-glass)',
              border: '1px solid var(--border)',
            }}>
              v1.0.0
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

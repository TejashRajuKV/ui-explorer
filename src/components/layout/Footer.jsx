import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerLinks = {
  Explore: [
    { label: 'UI Library',   path: '/library' },
    { label: 'Components',   path: '/components' },
    { label: 'Animations',   path: '/animations' },
  ],
  Tools: [
    { label: 'Playground',   path: '/playground' },
    { label: 'Code Library', path: '/code' },
    { label: 'Compare',      path: '/compare' },
  ],
}

const palette = ['#200432', '#4A0730', '#7A0C31', '#CD1A30', '#FE8932', '#FEE7B5']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" style={{ position: 'relative', background: '#0e0116', marginTop: 0 }}>
      {/* Ridge silhouette transitions from page bg into footer */}
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" style={{ display: 'block', width: '100%', height: 90, background: 'var(--bg-primary)' }}>
        <path d="M0,80 L90,52 L160,70 L260,30 L340,62 L430,44 L520,74 L610,38 L700,60 L790,24 L880,58 L980,40 L1070,70 L1160,34 L1250,60 L1350,42 L1440,64 L1440,120 L0,120Z" fill="#200432" opacity="0.8" />
        <path d="M0,100 L120,78 L220,96 L330,70 L450,92 L560,74 L680,98 L800,76 L920,94 L1040,72 L1160,96 L1280,80 L1440,94 L1440,120 L0,120Z" fill="#0e0116" />
      </svg>

      <div className="container" style={{ padding: '40px 24px 32px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(2, auto)', gap: 64, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: 18 }}>
              <Logo />
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, maxWidth: 300, marginBottom: 20 }}>
              Explore, compare, and master modern UI design styles, components and motion — all in one place.
            </p>
            <div style={{ display: 'flex', borderRadius: 10, overflow: 'hidden', width: 180, height: 10, border: '1px solid rgba(254,231,181,0.1)' }} title="Sunset palette">
              {palette.map(c => <span key={c} style={{ flex: 1, background: c }} />)}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="eyebrow" style={{ marginBottom: 18, fontFamily: 'Space Grotesk, sans-serif' }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Copyright */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
            © {year} UI Explorer. Built for designers & developers.
          </p>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', padding: '4px 12px', borderRadius: 100, border: '1px solid var(--border)' }}>
            v2.0 · Sunset
          </span>
        </div>
      </div>

      <style>{`
        .footer-link { color: var(--text-secondary); font-size: 14px; transition: color 0.2s ease, padding 0.2s ease; }
        .footer-link:hover { color: var(--orange); padding-left: 4px; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}

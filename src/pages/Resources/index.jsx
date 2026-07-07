import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'

export default function Resources() {
  const categories = [
    { name: 'Typography', tools: [
      { name: 'Google Fonts', url: 'https://fonts.google.com/' },
      { name: 'Fontshare', url: 'https://www.fontshare.com/' },
      { name: 'TypeScale', url: 'https://typescale.com/' }
    ] },
    { name: 'Colors', tools: [
      { name: 'Coolors', url: 'https://coolors.co/' },
      { name: 'Color Hunt', url: 'https://colorhunt.co/' },
      { name: 'Realtime Colors', url: 'https://www.realtimecolors.com/' }
    ] },
    { name: 'Icons', tools: [
      { name: 'Lucide', url: 'https://lucide.dev/' },
      { name: 'Phosphor Icons', url: 'https://phosphoricons.com/' },
      { name: 'Heroicons', url: 'https://heroicons.com/' }
    ] },
    { name: 'Assets', tools: [
      { name: 'Unsplash', url: 'https://unsplash.com/' },
      { name: 'SVGRepo', url: 'https://www.svgrepo.com/' },
      { name: 'Figma Community', url: 'https://www.figma.com/community' }
    ] },
  ]

  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="green" style={{ marginBottom: 16 }}>📚 Resources</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            Design <span style={{ color: 'var(--accent)' }}>Tools</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            A hand-picked collection of the best tools, libraries, and assets for UI design.
          </p>
        </div>
      </section>

      <section style={{ padding: '48px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24 }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, borderBottom: '1px solid var(--border)', paddingBottom: 12 }}>{c.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {c.tools.map(t => (
                    <li key={t.name} style={{ marginBottom: 12 }}>
                      <a href={t.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 15 }}>
                        ↗ {t.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

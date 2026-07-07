import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'

export default function Inspiration() {
  const items = [
    { id: 'mobbin', title: 'Mobbin', desc: 'The world\'s largest UI & UX reference library.', url: 'https://mobbin.com/', gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)', icon: '📱' },
    { id: 'godly', title: 'Godly', desc: 'Astronomically good web design inspiration.', url: 'https://godly.website/', gradient: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', icon: '✨' },
    { id: 'awwwards', title: 'Awwwards', desc: 'The awards for design, creativity and innovation on the internet.', url: 'https://www.awwwards.com/', gradient: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', icon: '🏆' },
    { id: 'dribbble', title: 'Dribbble', desc: 'Discover the world’s top designers & creatives.', url: 'https://dribbble.com/', gradient: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)', icon: '🏀' },
    { id: 'behance', title: 'Behance', desc: 'The world\'s largest creative network for showcasing and discovering creative work.', url: 'https://www.behance.net/', gradient: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)', icon: '🎨' },
    { id: 'lapa', title: 'Lapa Ninja', desc: 'The best landing page design inspiration from across the web.', url: 'https://www.lapa.ninja/', gradient: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', icon: '🥷' },
  ]

  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="accent" style={{ marginBottom: 16 }}>✨ Inspiration</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            Design <span style={{ color: 'var(--accent-2)' }}>Gallery</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            Curated examples of real-world interfaces using different design styles.
          </p>
        </div>
      </section>

      <section style={{ padding: '48px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {items.map((m, i) => (
              <a href={m.url} target="_blank" rel="noopener noreferrer" key={m.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                >
                  <div style={{ height: 160, background: m.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 48 }}>{m.icon}</span>
                  </div>
                  <div style={{ padding: 20, flex: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{m.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{m.desc}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

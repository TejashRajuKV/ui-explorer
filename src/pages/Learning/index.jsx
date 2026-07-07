import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

export default function Learning() {
  const modules = [
    { title: 'Color Theory', desc: 'Master color harmony, contrast, and emotional impact in UI design.', icon: '🎨', lessons: 12, url: 'https://m2.material.io/design/color/the-color-system.html' },
    { title: 'Typography', desc: 'Learn how to choose, pair, and scale fonts for readability and aesthetic.', icon: 'Aa', lessons: 8, url: 'https://practicaltypography.com/' },
    { title: 'Layout Systems', desc: 'Understanding grids, flexbox, spacing, and rhythm in interfaces.', icon: '📐', lessons: 15, url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout' },
    { title: 'Accessibility (a11y)', desc: 'Designing inclusive experiences for all users.', icon: '♿', lessons: 10, url: 'https://web.dev/learn/accessibility/' },
  ]

  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="pink" style={{ marginBottom: 16 }}>🎓 Learning Hub</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            Master <span style={{ color: 'var(--accent)' }}>UI Design</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            Structured resources and tutorials to help you understand the fundamental principles behind beautiful interfaces.
          </p>
        </div>
      </section>

      <section style={{ padding: '48px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{m.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20, flex: 1 }}>{m.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Free Resource</span>
                  <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button style={{ padding: '6px 12px', fontSize: 13 }}>Read</Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

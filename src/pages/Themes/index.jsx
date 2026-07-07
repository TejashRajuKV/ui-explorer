import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'
import { useTheme } from '../../context/ThemeContext'

export default function Themes() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="pink" style={{ marginBottom: 16 }}>🌗 Themes</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            Theme <span style={{ color: 'var(--accent)' }}>Explorer</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            Experience UI Explorer in different environments. Currently supporting Light and Dark modes.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="container">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            style={{
              padding: '16px 32px',
              fontSize: 18,
              fontWeight: 700,
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </motion.button>
          
          <p style={{ marginTop: 24, color: 'var(--text-muted)' }}>
            More themes (AMOLED, High Contrast) coming soon.
          </p>
        </div>
      </section>
    </div>
  )
}

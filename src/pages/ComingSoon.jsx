import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

export default function ComingSoon({ title, description, icon, badgeLabel }) {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 24px',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ fontSize: 72, marginBottom: 24 }}>{icon}</div>
        <Badge color="accent" style={{ marginBottom: 20 }}>{badgeLabel || 'Coming Soon'}</Badge>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 40px)', marginBottom: 16, fontWeight: 800 }}>{title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.7 }}>
          {description}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/"><Button id={`back-home-${title?.replace(/\s/g, '-').toLowerCase()}`} variant="primary">← Back to Home</Button></Link>
        </div>
      </motion.div>
    </div>
  )
}

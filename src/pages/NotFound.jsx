import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

export default function NotFound() {
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
        <div style={{
          fontSize: 'clamp(80px, 15vw, 140px)',
          fontWeight: 900,
          fontFamily: 'Space Grotesk, sans-serif',
          background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: 16,
        }}>
          404
        </div>

        <h1 style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12, fontWeight: 700 }}>
          Page Not Found
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 400, margin: '0 auto 36px', lineHeight: 1.7 }}>
          Looks like this page is still under construction. Navigate back home to explore all features.
        </p>

        <Link to="/">
          <Button id="not-found-home" size="lg">
            ← Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

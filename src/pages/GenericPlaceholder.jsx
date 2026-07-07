import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

export default function GenericPlaceholder({ title, icon, description, badgeLabel }) {
  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="accent" style={{ marginBottom: 16 }}>{badgeLabel}</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            {icon} {title}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            {description}
          </p>
        </div>
      </section>
      <section style={{ padding: '80px 0', background: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: 64, marginBottom: 24 }}>🚧</div>
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>Under Construction</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto 32px' }}>
            We're working hard to bring this feature to you soon. Stay tuned!
          </p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StylePreview from './StylePreview'
import Badge from '../ui/Badge'

const difficultyColor = { Beginner: 'green', Intermediate: 'accent', Advanced: 'pink' }

export default function StyleCard({ style, index = 0 }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < style.popularity ? '★' : '☆').join('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/library/${style.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          whileHover={{ y: -6, scale: 1.015 }}
          transition={{ duration: 0.25 }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {/* CSS Preview */}
          <StylePreview styleId={style.id} height={180} />

          {/* Card Body */}
          <div style={{ padding: '20px 22px 22px' }}>
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                {style.emoji} {style.name}
              </h3>
              <span style={{ fontSize: 12, color: '#f7c948', flexShrink: 0, letterSpacing: 1 }}>{stars}</span>
            </div>

            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
              {style.tagline}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
              <Badge color="muted" style={{ fontSize: 11 }}>{style.category}</Badge>
              <Badge color={difficultyColor[style.difficulty] || 'muted'} style={{ fontSize: 11 }}>
                {style.difficulty}
              </Badge>
            </div>

            {/* Color Swatches */}
            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              {style.colors.map((c, i) => (
                <div
                  key={i}
                  title={c}
                  style={{
                    width: 18, height: 18,
                    borderRadius: '50%',
                    background: c,
                    border: '2px solid var(--bg-card)',
                    boxShadow: '0 0 0 1px var(--border)',
                    marginLeft: i > 0 ? -6 : 0,
                    zIndex: style.colors.length - i,
                    position: 'relative',
                  }}
                />
              ))}
              <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>Explore →</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

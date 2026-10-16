import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { componentTypes } from '../../data/components'
import { styles } from '../../data/styles'
import ComponentPreview from '../../components/gallery/ComponentPreview'
import Badge from '../../components/ui/Badge'

function ComponentTypeCard({ comp, index }) {
  // Show 3 style previews as a collage
  const previewStyles = ['glassmorphism', 'dark-ui', 'brutalism']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link to={`/components/${comp.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          whileHover={{ y: -6, scale: 1.015 }}
          transition={{ duration: 0.25 }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          {/* 3-column mini preview grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: 130, overflow: 'hidden' }}>
            {previewStyles.map(sid => (
              <div key={sid} style={{ overflow: 'hidden', height: 130 }}>
                <div style={{ transform: 'scale(0.55)', transformOrigin: 'top left', width: '182%', height: '182%', pointerEvents: 'none' }}>
                  <ComponentPreview componentId={comp.id} styleId={sid} height={236} />
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div style={{ padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>{comp.icon}</span>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>{comp.name}</h3>
              <Badge color="muted" style={{ marginLeft: 'auto', fontSize: 11 }}>{comp.count} styles</Badge>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{comp.description}</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function ComponentsIndex() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'var(--accent-2)', filter: 'blur(120px)', opacity: 0.07, top: '-40%', right: '-5%', pointerEvents: 'none' }} />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge color="pink" style={{ marginBottom: 16 }}>🧩 Component Gallery</Badge>
            <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
              UI Components in Every{' '}
              <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent-2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Design Style</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, lineHeight: 1.7 }}>
              {componentTypes.length} component types × {styles.length} design styles. Every component comes with a live preview and copy-ready HTML, CSS, and Tailwind code.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 28, marginTop: 32, flexWrap: 'wrap' }}>
              {[
                { n: componentTypes.length.toString(), label: 'Component Types' },
                { n: styles.length.toString(), label: 'Design Styles' },
                { n: (componentTypes.length * styles.length).toString(), label: 'Live Previews' },
                { n: '3', label: 'Code Formats' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'Space Grotesk,sans-serif', background: 'linear-gradient(135deg,var(--accent),var(--accent-2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Component Grid */}
      <section style={{ padding: '56px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="comp-index-grid">
            {componentTypes.map((comp, i) => (
              <ComponentTypeCard key={comp.id} comp={comp} index={i} />
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:1024px){.comp-index-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:600px){.comp-index-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>
    </div>
  )
}

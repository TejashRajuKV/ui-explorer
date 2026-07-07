import { useState } from 'react'
import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'
import { styles } from '../../data/styles'
import ComponentPreview from '../../components/gallery/ComponentPreview'

export default function Compare() {
  const [style1, setStyle1] = useState('glassmorphism')
  const [style2, setStyle2] = useState('brutalism')

  const s1 = styles.find(s => s.id === style1)
  const s2 = styles.find(s => s.id === style2)

  const renderSelect = (value, onChange) => (
    <select 
      value={value} 
      onChange={e => onChange(e.target.value)}
      style={{
        padding: '12px 16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        color: 'var(--text-primary)',
        fontSize: 16,
        fontWeight: 600,
        outline: 'none',
        width: '100%',
        cursor: 'pointer'
      }}
    >
      {styles.map(s => <option key={s.id} value={s.id}>{s.emoji} {s.name}</option>)}
    </select>
  )

  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="accent" style={{ marginBottom: 16 }}>⚖️ Design Comparison</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            Compare <span style={{ color: 'var(--accent)' }}>Styles</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            See how different design styles stack up against each other visually and conceptually.
          </p>
        </div>
      </section>

      <section style={{ padding: '48px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="compare-grid">
            
            {/* Left Side */}
            <div>
              <div style={{ marginBottom: 24 }}>{renderSelect(style1, setStyle1)}</div>
              
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 24 }}>
                <ComponentPreview componentId="card" styleId={style1} height={260} />
              </div>
              
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Characteristics</h3>
                <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                  {s1.characteristics.slice(0,3).map((c,i) => <li key={i} style={{ marginBottom: 8 }}>{c}</li>)}
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <div style={{ marginBottom: 24 }}>{renderSelect(style2, setStyle2)}</div>
              
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 24 }}>
                <ComponentPreview componentId="card" styleId={style2} height={260} />
              </div>
              
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Characteristics</h3>
                <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                  {s2.characteristics.slice(0,3).map((c,i) => <li key={i} style={{ marginBottom: 8 }}>{c}</li>)}
                </ul>
              </div>
            </div>

          </div>

          {/* Comparison Table */}
          <div style={{ marginTop: 48, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
              <div style={{ padding: 16, fontWeight: 700, borderRight: '1px solid var(--border)' }}>Feature</div>
              <div style={{ padding: 16, fontWeight: 700, borderRight: '1px solid var(--border)' }}>{s1.name}</div>
              <div style={{ padding: 16, fontWeight: 700 }}>{s2.name}</div>
            </div>
            
            {[
              { label: 'Category', k: 'category' },
              { label: 'Difficulty', k: 'difficulty' },
              { label: 'Popularity', k: 'popularity', render: (val) => '★'.repeat(val) }
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', borderBottom: '1px solid var(--border)' }}>
                <div style={{ padding: 16, fontWeight: 600, borderRight: '1px solid var(--border)', color: 'var(--text-muted)' }}>{row.label}</div>
                <div style={{ padding: 16, borderRight: '1px solid var(--border)' }}>{row.render ? row.render(s1[row.k]) : s1[row.k]}</div>
                <div style={{ padding: 16 }}>{row.render ? row.render(s2[row.k]) : s2[row.k]}</div>
              </div>
            ))}
          </div>

        </div>
        <style>{`
          @media(max-width: 768px) { .compare-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
  )
}

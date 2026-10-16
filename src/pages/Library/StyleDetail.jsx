import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { getStyleById, styles } from '../../data/styles'
import SectionBlock from '../../components/library/SectionBlock'
import StylePreview from '../../components/library/StylePreview'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

const difficultyColor = { Beginner: 'green', Intermediate: 'accent', Advanced: 'pink' }

function CheckItem({ text, icon = '✓', color = 'var(--accent-3)' }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
      <span style={{ color, fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <span style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.6 }}>{text}</span>
    </div>
  )
}

function PrincipleCard({ title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '20px 22px',
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
      }}
    >
      <div style={{
        width: 32, height: 32,
        borderRadius: 8,
        background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 800, color: '#fff',
        flexShrink: 0, fontFamily: 'Space Grotesk, sans-serif',
      }}>
        {index + 1}
      </div>
      <div>
        <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{title}</h4>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{desc}</p>
      </div>
    </motion.div>
  )
}

function ExampleCard({ name, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '18px 20px',
      }}
    >
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
        <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{name}</h4>
      </div>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </motion.div>
  )
}

export default function StyleDetail() {
  const { styleId } = useParams()
  const navigate = useNavigate()
  const style = getStyleById(styleId)

  // Get prev/next styles for navigation
  const currentIndex = styles.findIndex(s => s.id === styleId)
  const prevStyle = currentIndex > 0 ? styles[currentIndex - 1] : null
  const nextStyle = currentIndex < styles.length - 1 ? styles[currentIndex + 1] : null

  useEffect(() => {
    if (style) {
      document.documentElement.setAttribute('data-active-style', style.id)
    }
    return () => {
      document.documentElement.removeAttribute('data-active-style')
    }
  }, [style])

  if (!style) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 24px' }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🔍</div>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>Style not found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>
          The style "{styleId}" doesn't exist in our library yet.
        </p>
        <Link to="/library"><Button id="back-to-library">← Back to Library</Button></Link>
      </div>
    )
  }

  return (
    <div>
      {/* ── Hero ─────────────────────────────────── */}
      <section style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
        padding: '48px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'var(--accent)', filter: 'blur(140px)', opacity: 0.07, top: '-30%', right: '-10%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--accent-2)', filter: 'blur(100px)', opacity: 0.06, bottom: '-20%', left: '10%', pointerEvents: 'none' }} />

        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 13, color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Home</Link>
            <span>/</span>
            <Link to="/library" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Library</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{style.name}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 48, alignItems: 'start', paddingBottom: 48 }} className="detail-hero-grid">
            {/* Left: Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>{style.emoji}</div>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                <Badge color="accent">{style.category}</Badge>
                <Badge color={difficultyColor[style.difficulty] || 'muted'}>{style.difficulty}</Badge>
                <Badge color="muted" style={{ letterSpacing: 1 }}>
                  {'★'.repeat(style.popularity)}{'☆'.repeat(5 - style.popularity)}
                </Badge>
              </div>

              <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, marginBottom: 14, letterSpacing: '-0.03em' }}>
                {style.name}
              </h1>

              <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28, maxWidth: 540 }}>
                {style.tagline}
              </p>

              {/* Color Palette */}
              <div>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Color Palette</p>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {style.colors.map((c, i) => (
                    <div key={i} title={c} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: c, border: '2px solid var(--border)', boxShadow: 'var(--shadow-sm)' }} />
                      <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'monospace' }}>{c.length > 9 ? c.slice(0, 9) + '..' : c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 20 }}>
                {style.tags.map(tag => (
                  <span key={tag} style={{ padding: '4px 10px', background: 'var(--bg-glass)', border: '1px solid var(--border)', borderRadius: 100, fontSize: 12, color: 'var(--text-muted)' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Preview */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <StylePreview styleId={style.id} height={280} />
              <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>
                Live CSS preview — no images used
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section nav bar */}
        <div style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)', overflowX: 'auto' }}>
          <div className="container">
            <div style={{ display: 'flex', gap: 0, minWidth: 'max-content' }}>
              {['Definition','History','Principles','Accessibility','Best Practices','Mistakes','Use Cases','Examples'].map(label => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    padding: '14px 18px',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    borderBottom: '2px solid transparent',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.color = 'var(--text-primary)'; e.target.style.borderColor = 'var(--accent)' }}
                  onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.borderColor = 'transparent' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────── */}
      <div className="container" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56, alignItems: 'start' }} className="detail-content-grid">

          {/* ── Left: All Sections ── */}
          <div>
            {/* Definition */}
            <div id="definition">
              <SectionBlock icon="📖" title="Definition" accent>
                <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '24px 28px', borderLeft: '3px solid var(--accent)' }}>
                  {style.definition}
                </p>
              </SectionBlock>
            </div>

            {/* History */}
            <div id="history">
              <SectionBlock icon="🕰️" title="History">
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {style.history}
                </p>
              </SectionBlock>
            </div>

            {/* Key Characteristics */}
            <div id="characteristics">
              <SectionBlock icon="🔑" title="Key Characteristics">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }} className="chars-grid">
                  {style.characteristics.map((c, i) => (
                    <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '14px 16px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>◆</span>
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{c}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            </div>

            {/* Design Principles */}
            <div id="principles">
              <SectionBlock icon="📐" title="Design Principles">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {style.principles.map((p, i) => (
                    <PrincipleCard key={i} title={p.title} desc={p.desc} index={i} />
                  ))}
                </div>
              </SectionBlock>
            </div>

            {/* Accessibility */}
            <div id="accessibility">
              <SectionBlock icon="♿" title="Accessibility Considerations">
                <div style={{ background: 'rgba(67,233,123,0.05)', border: '1px solid rgba(67,233,123,0.2)', borderRadius: 'var(--radius-md)', padding: '8px 20px' }}>
                  {style.accessibility.map((tip, i) => (
                    <CheckItem key={i} text={tip} icon="♿" color="var(--accent-3)" />
                  ))}
                </div>
              </SectionBlock>
            </div>

            {/* Best Practices */}
            <div id="best-practices">
              <SectionBlock icon="✅" title="Best Practices">
                <div style={{ background: 'rgba(254,137,50,0.05)', border: '1px solid rgba(254,137,50,0.2)', borderRadius: 'var(--radius-md)', padding: '8px 20px' }}>
                  {style.bestPractices.map((p, i) => (
                    <CheckItem key={i} text={p} icon="✓" color="var(--accent)" />
                  ))}
                </div>
              </SectionBlock>
            </div>

            {/* Common Mistakes */}
            <div id="mistakes">
              <SectionBlock icon="⚠️" title="Common Mistakes">
                <div style={{ background: 'rgba(205,26,48,0.05)', border: '1px solid rgba(205,26,48,0.2)', borderRadius: 'var(--radius-md)', padding: '8px 20px' }}>
                  {style.commonMistakes.map((m, i) => (
                    <CheckItem key={i} text={m} icon="✗" color="var(--accent-2)" />
                  ))}
                </div>
              </SectionBlock>
            </div>

            {/* Use Cases */}
            <div id="use-cases">
              <SectionBlock icon="🎯" title="Use Cases">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }} className="usecases-grid">
                  {style.useCases.map((uc, i) => (
                    <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ color: 'var(--accent-2)', fontSize: 16, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{uc}</span>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            </div>

            {/* Real-World Examples */}
            <div id="examples">
              <SectionBlock icon="🌍" title="Real-World Examples">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="examples-grid">
                  {style.realWorldExamples.map((ex, i) => (
                    <ExampleCard key={i} name={ex.name} desc={ex.desc} index={i} />
                  ))}
                </div>
              </SectionBlock>
            </div>

            {/* Prev / Next Navigation */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
              {prevStyle ? (
                <Link to={`/library/${prevStyle.id}`} style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ padding: '16px 20px' }}>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>← Previous</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{prevStyle.emoji} {prevStyle.name}</div>
                  </div>
                </Link>
              ) : <div />}
              {nextStyle ? (
                <Link to={`/library/${nextStyle.id}`} style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ padding: '16px 20px', textAlign: 'right' }}>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Next →</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{nextStyle.emoji} {nextStyle.name}</div>
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* ── Right: Sticky Sidebar ── */}
          <div style={{ position: 'sticky', top: 96 }}>
            {/* Quick Info Card */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 24, marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Quick Info</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Category', value: style.category },
                  { label: 'Difficulty', value: style.difficulty },
                  { label: 'Popularity', value: '★'.repeat(style.popularity) + '☆'.repeat(5 - style.popularity) },
                  { label: 'Characteristics', value: `${style.characteristics.length} traits` },
                  { label: 'Principles', value: `${style.principles.length} principles` },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{row.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA: Explore More */}
            <div style={{ background: 'linear-gradient(135deg, rgba(254,137,50,0.12), rgba(205,26,48,0.08))', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 24, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Explore {style.name}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16 }}>
                See {style.name} components in action, or experiment in the playground.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Link to="/components">
                  <button style={{ width: '100%', padding: '10px', background: 'var(--accent)', border: 'none', borderRadius: 8, color: 'var(--plum)', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                    View Components →
                  </button>
                </Link>
                <Link to="/playground">
                  <button style={{ width: '100%', padding: '10px', background: 'var(--bg-glass)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text-primary)', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Open Playground
                  </button>
                </Link>
                <Link to="/compare">
                  <button style={{ width: '100%', padding: '10px', background: 'transparent', border: 'none', borderRadius: 8, color: 'var(--text-muted)', fontWeight: 500, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Compare Styles
                  </button>
                </Link>
              </div>
            </div>

            {/* All styles quick nav */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>All Styles</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {styles.map(s => (
                  <Link
                    key={s.id}
                    to={`/library/${s.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 10px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      background: s.id === styleId ? 'rgba(254,137,50,0.12)' : 'transparent',
                      color: s.id === styleId ? 'var(--accent)' : 'var(--text-secondary)',
                      fontSize: 13,
                      fontWeight: s.id === styleId ? 600 : 400,
                      transition: 'background 0.15s, color 0.15s',
                    }}
                    onMouseEnter={e => { if (s.id !== styleId) { e.currentTarget.style.background = 'var(--bg-glass)'; e.currentTarget.style.color = 'var(--text-primary)' } }}
                    onMouseLeave={e => { if (s.id !== styleId) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' } }}
                  >
                    <span>{s.emoji}</span>
                    <span>{s.name}</span>
                    {s.id === styleId && <span style={{ marginLeft: 'auto', fontSize: 10 }}>●</span>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .detail-hero-grid { grid-template-columns: 1fr !important; }
          .detail-content-grid { grid-template-columns: 1fr !important; }
          .detail-content-grid > div:last-child { position: static !important; }
        }
        @media(max-width:640px){
          .chars-grid { grid-template-columns: 1fr !important; }
          .usecases-grid { grid-template-columns: 1fr !important; }
          .examples-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

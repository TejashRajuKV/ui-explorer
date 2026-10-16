import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getComponentById } from '../../data/components'
import { styles, categories } from '../../data/styles'
import ComponentCard from '../../components/gallery/ComponentCard'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

export default function ComponentDetail() {
  const { componentId } = useParams()
  const comp = getComponentById(componentId)
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeDifficulty, setActiveDifficulty] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return styles.filter(s => {
      const matchCat = activeCategory === 'All' || s.category === activeCategory
      const matchDiff = activeDifficulty === 'All' || s.difficulty === activeDifficulty
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      return matchCat && matchDiff && matchSearch
    })
  }, [activeCategory, activeDifficulty, search])

  if (!comp) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 24px' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🧩</div>
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>Component not found</h1>
        <Link to="/components"><Button id="back-components">← Back to Gallery</Button></Link>
      </div>
    )
  }

  const FilterBtn = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      style={{
        padding: '7px 14px',
        borderRadius: 100,
        border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
        background: active ? 'rgba(254,137,50,0.15)' : 'var(--bg-glass)',
        color: active ? 'var(--accent)' : 'var(--text-secondary)',
        fontSize: 12,
        fontWeight: active ? 600 : 500,
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
  )

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '48px 0 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', background: 'var(--accent)', filter: 'blur(120px)', opacity: 0.07, top: '-30%', left: '-5%', pointerEvents: 'none' }} />
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: 13, color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Home</Link>
            <span>/</span>
            <Link to="/components" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Components</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{comp.name}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{comp.icon}</div>
            <Badge color="pink" style={{ marginBottom: 14 }}>Component Gallery</Badge>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, marginBottom: 12, letterSpacing: '-0.03em' }}>
              {comp.name} <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent-2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Components</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 500, lineHeight: 1.7 }}>
              {comp.description} — in all {styles.length} design styles with copy-ready code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filters */}
      <section style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border)', padding: '16px 0', position: 'sticky', top: 72, zIndex: 100, backdropFilter: 'blur(12px)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: '1', minWidth: 160, maxWidth: 280 }}>
              <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 14, opacity: 0.4 }}>🔍</span>
              <input
                type="text"
                placeholder="Filter styles…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '8px 10px 8px 32px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text-primary)', fontSize: 13, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            {/* Category */}
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {categories.map(c => (
                <FilterBtn key={c} label={c} active={activeCategory === c} onClick={() => setActiveCategory(c)} />
              ))}
            </div>

            {/* Difficulty */}
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
                <FilterBtn key={d} label={d} active={activeDifficulty === d} onClick={() => setActiveDifficulty(d)} />
              ))}
            </div>

            <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-muted)' }}>
              {filtered.length} styles
            </span>
          </div>
        </div>
      </section>

      {/* Component Grid */}
      <section style={{ padding: '40px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="comp-detail-grid">
              {filtered.map((style, i) => (
                <ComponentCard key={style.id} componentId={comp.id} style={style} index={i} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
              <div style={{ fontSize: 44, marginBottom: 12 }}>🔍</div>
              <p>No styles match your filter. <button onClick={() => { setActiveCategory('All'); setActiveDifficulty('All'); setSearch('') }} style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 'inherit' }}>Clear filters</button></p>
            </div>
          )}
        </div>
        <style>{`
          @media(max-width:1100px){.comp-detail-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:600px){.comp-detail-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>
    </div>
  )
}

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { styles, categories, difficulties } from '../../data/styles'
import StyleCard from '../../components/library/StyleCard'
import Badge from '../../components/ui/Badge'

export default function LibraryIndex() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeDifficulty, setActiveDifficulty] = useState('All')

  const filtered = useMemo(() => {
    return styles.filter(s => {
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.tagline.toLowerCase().includes(search.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      const matchCat = activeCategory === 'All' || s.category === activeCategory
      const matchDiff = activeDifficulty === 'All' || s.difficulty === activeDifficulty
      return matchSearch && matchCat && matchDiff
    })
  }, [search, activeCategory, activeDifficulty])

  const FilterBtn = ({ label, active, onClick, color }) => (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        borderRadius: 100,
        border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
        background: active ? 'rgba(254,137,50,0.15)' : 'var(--bg-glass)',
        color: active ? 'var(--accent)' : 'var(--text-secondary)',
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
  )

  return (
    <div>
      {/* ── Hero ───────────────────────────────── */}
      <section style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
        padding: '64px 0 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'var(--accent)', filter: 'blur(120px)', opacity: 0.08, top: '-50%', right: '-10%', pointerEvents: 'none' }} />

        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge color="accent" style={{ marginBottom: 16 }}>🎨 Design Library</Badge>
            <h1 style={{ fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
              Explore UI Design <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Styles</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, lineHeight: 1.7, marginBottom: 36 }}>
              Deep-dive into {styles.length} modern UI design styles. Learn their history, principles, accessibility guidelines, and best practices — then build with confidence.
            </p>

            {/* Search */}
            <div style={{ position: 'relative', maxWidth: 520 }}>
              <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 18, pointerEvents: 'none', opacity: 0.5 }}>🔍</span>
              <input
                id="library-search"
                type="text"
                placeholder="Search styles, tags… (e.g. blur, neon, minimal)"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 18px 14px 48px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: 15,
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(254,137,50,0.15)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 18 }}
                >×</button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filters ────────────────────────────── */}
      <section style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border)', padding: '20px 0', position: 'sticky', top: 72, zIndex: 100, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Category filters */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 4 }}>Category</span>
              {categories.map(c => (
                <FilterBtn key={c} label={c} active={activeCategory === c} onClick={() => setActiveCategory(c)} />
              ))}
            </div>

            <div style={{ width: 1, height: 24, background: 'var(--border)' }} className="filter-divider" />

            {/* Difficulty filters */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 4 }}>Level</span>
              {difficulties.map(d => (
                <FilterBtn key={d} label={d} active={activeDifficulty === d} onClick={() => setActiveDifficulty(d)} />
              ))}
            </div>

            <span style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>
              {filtered.length} style{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
        <style>{`@media(max-width:768px){.filter-divider{display:none!important;}}`}</style>
      </section>

      {/* ── Grid ───────────────────────────────── */}
      <section style={{ padding: '48px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="library-grid">
              {filtered.map((style, i) => (
                <StyleCard key={style.id} style={style} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '80px 0' }}
            >
              <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>No styles found</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Try a different search term or clear your filters.
              </p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); setActiveDifficulty('All') }}
                style={{ marginTop: 16, padding: '10px 20px', background: 'var(--accent)', color: 'var(--plum)', border: 'none', borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
        <style>{`
          @media(max-width:1024px){.library-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:600px){.library-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>
    </div>
  )
}

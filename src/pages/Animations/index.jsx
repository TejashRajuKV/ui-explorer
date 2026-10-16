import { useMemo, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { animations, animationCategories, allAnimationCss } from '../../data/animations'
import AnimationCard from '../../components/animations/AnimationCard'
import AnimationDetail from '../../components/animations/AnimationDetail'

export default function Animations() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(null)
  const reduced = useReducedMotion()
  const close = useCallback(() => setOpen(null), [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return animations.filter(a =>
      (category === 'All' || a.category === category) &&
      (!q || a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q))
    )
  }, [category, query])

  const counts = useMemo(() => Object.fromEntries(
    animationCategories.map(c => [c, c === 'All' ? animations.length : animations.filter(a => a.category === c).length])
  ), [])

  return (
    <div>
      <style>{allAnimationCss}</style>

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '72px 0 56px', borderBottom: '1px solid var(--border)' }}>
        <div aria-hidden="true" className="anim-hero-sun" />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="eyebrow">Motion library</span>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 76px)', margin: '14px 0 16px', lineHeight: 1.02, maxWidth: 820 }}>
              Animations that feel <em className="text-sunset" style={{ fontWeight: 500 }}>alive</em>.
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 580, lineHeight: 1.7 }}>
              {animations.length} ready-made motion recipes, including entrances, loaders, text effects and micro-interactions.
              Each one has a live demo, pure CSS code and a Framer Motion version.
            </p>
          </motion.div>
          {reduced && (
            <div style={{ marginTop: 20, display: 'inline-block', padding: '10px 16px', borderRadius: 12, background: 'rgba(254,137,50,0.1)', border: '1px solid rgba(254,137,50,0.3)', color: 'var(--orange)', fontSize: 13 }}>
              Your system asks for reduced motion, so the demos are shown mostly static. The code is unaffected.
            </div>
          )}
        </div>
      </section>

      {/* Filters */}
      <div className="anim-filters">
        <div className="container" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="anim-tabs" role="tablist" aria-label="Animation categories">
            {animationCategories.map(c => (
              <button key={c} role="tab" aria-selected={category === c} onClick={() => setCategory(c)} className={`anim-tab ${category === c ? 'on' : ''}`}>
                {category === c && <motion.span layoutId="anim-tab-bg" className="anim-tab-bg" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                <span style={{ position: 'relative' }}>{c} <small>{counts[c]}</small></span>
              </button>
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search animations…"
            aria-label="Search animations"
            className="anim-search"
          />
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: '36px 0 96px' }}>
        <div className="container">
          <motion.div layout className="anim-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((a, i) => <AnimationCard key={a.id} anim={a} index={i} onOpen={setOpen} />)}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '60px 0' }}>No animations match “{query}”.</p>
          )}
        </div>
      </section>

      {/* Portalled so the page-transition transform can't trap the fixed overlay */}
      {createPortal(
        <AnimatePresence>
          {open && <AnimationDetail anim={open} onClose={close} />}
        </AnimatePresence>,
        document.body
      )}

      <style>{`
        .anim-hero-sun {
          position: absolute; right: -120px; top: -160px; width: 520px; height: 520px; border-radius: 50%;
          background: radial-gradient(circle at 40% 60%, rgba(254,137,50,0.45), rgba(205,26,48,0.25) 45%, transparent 70%);
          filter: blur(10px); pointer-events: none;
        }
        .anim-filters {
          position: sticky; top: 76px; z-index: 50; padding: 14px 0;
          background: rgba(20,2,31,0.78); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .anim-tabs { display: flex; gap: 4px; padding: 4px; border-radius: 100px; background: rgba(254,231,181,0.04); border: 1px solid var(--border); overflow-x: auto; max-width: 100%; scrollbar-width: none; }
        .anim-tab { position: relative; padding: 8px 14px; border-radius: 100px; border: none; background: none; color: var(--text-secondary); font: 500 13px Inter, sans-serif; cursor: pointer; white-space: nowrap; }
        .anim-tab small { font-size: 11px; opacity: .55; margin-left: 2px; }
        .anim-tab.on { color: var(--plum); font-weight: 700; }
        .anim-tab-bg { position: absolute; inset: 0; border-radius: 100px; background: linear-gradient(135deg,#FEE7B5,#FE8932); }
        .anim-search {
          margin-left: auto; min-width: 220px; padding: 10px 16px; border-radius: 100px; font: 14px Inter, sans-serif;
          background: rgba(254,231,181,0.04); border: 1px solid var(--border); color: var(--cream); outline: none;
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .anim-search::placeholder { color: var(--text-muted); }
        .anim-search:focus { border-color: var(--orange); box-shadow: 0 0 0 3px rgba(254,137,50,0.15); }

        .anim-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 18px; }
        .anim-card { border-radius: 22px; overflow: hidden; background: linear-gradient(180deg,#230636,#1a0428); border: 1px solid rgba(254,231,181,0.08); transition: border-color .3s ease, transform .3s ease; }
        .anim-card:hover { border-color: rgba(254,137,50,0.3); }
        .anim-stage {
          position: relative; height: 200px; display: grid; place-items: center; overflow: hidden;
          background:
            radial-gradient(circle at 50% 120%, rgba(205,26,48,0.25), transparent 60%),
            repeating-linear-gradient(0deg, rgba(254,231,181,0.025) 0 1px, transparent 1px 24px),
            repeating-linear-gradient(90deg, rgba(254,231,181,0.025) 0 1px, transparent 1px 24px),
            #16021f;
          border-bottom: 1px solid rgba(254,231,181,0.06);
        }
        .anim-stage.large { height: 300px; border-radius: 18px; border: 1px solid rgba(254,231,181,0.08); }
        .anim-stage-inner { display: grid; place-items: center; width: 100%; height: 100%; }
        .anim-stage.is-scroll .anim-stage-inner { display: block; }
        .anim-hint { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); font-size: 11px; color: var(--text-muted); white-space: nowrap; pointer-events: none; }
        .anim-meta { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 14px 16px; }
        .anim-cat { font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--orange); }
        .anim-name { font-size: 19px; margin-top: 2px; color: var(--cream); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .anim-icon-btn { width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--border); background: rgba(254,231,181,0.04); color: var(--cream); cursor: pointer; font-size: 15px; transition: background .2s ease, transform .3s ease; flex-shrink: 0; }
        .anim-icon-btn:hover { background: rgba(254,137,50,0.18); transform: rotate(-90deg); }
        .anim-code-btn { padding: 8px 14px; border-radius: 100px; border: 1px solid rgba(254,137,50,0.35); background: rgba(254,137,50,0.1); color: var(--orange); font: 600 12px Inter, sans-serif; cursor: pointer; transition: background .2s ease, color .2s ease; }
        .anim-code-btn:hover { background: var(--orange); color: var(--plum); }
        .anim-chip { padding: 6px 12px; border-radius: 100px; font-size: 12px; color: var(--text-secondary); background: rgba(254,231,181,0.05); border: 1px solid var(--border); font-family: ui-monospace, monospace; }

        .anim-overlay { position: fixed; inset: 0; z-index: 2000; background: rgba(8,0,14,0.72); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); display: grid; place-items: center; padding: 20px; overflow-y: auto; }
        .anim-dialog { width: 100%; max-width: 1040px; border-radius: 28px; background: #1a0428; border: 1px solid rgba(254,231,181,0.1); box-shadow: 0 40px 100px rgba(0,0,0,0.6); padding: 24px; }
        .anim-dialog-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        .anim-dialog-body { display: grid; grid-template-columns: 1fr 1.15fr; gap: 24px; }
        @media (max-width: 860px) {
          .anim-dialog-body { grid-template-columns: 1fr; }
          .anim-search { margin-left: 0; width: 100%; }
        }
      `}</style>
    </div>
  )
}

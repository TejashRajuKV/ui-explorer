import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ComponentPreview from '../gallery/ComponentPreview'
import FadeIn from '../ui/FadeIn'
import { styles } from '../../data/styles'

const showcaseComponents = ['card', 'pricing', 'login']

export default function StyleShowcase() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [compIdx, setCompIdx] = useState(0)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex(i => (i + 1) % styles.length), 2400)
    return () => clearInterval(t)
  }, [paused])

  const style = styles[index]
  const componentId = showcaseComponents[compIdx]

  return (
    <section style={{ position: 'relative', background: 'var(--bg-primary)', padding: '96px 0', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(205,26,48,0.22), transparent 65%)', top: '50%', right: '-10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
      <div className="container showcase-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center', position: 'relative' }}>
        <FadeIn>
          <span className="eyebrow">One component · {styles.length} personalities</span>
          <h2 style={{ fontSize: 'clamp(32px, 4.4vw, 54px)', margin: '14px 0 18px', lineHeight: 1.05 }}>
            Same markup,<br />
            <em className="text-sunset" style={{ fontWeight: 500 }}>completely</em> different feel.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.7, marginBottom: 26, maxWidth: 460 }}>
            Watch one component take on each design language. Pick a style to pin it, or hover the stage to pause.
          </p>

          <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
            {showcaseComponents.map((c, i) => (
              <button key={c} onClick={() => setCompIdx(i)} className={`sc-chip ${i === compIdx ? 'on' : ''}`}>
                {c[0].toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>

          <div className="style-list" role="tablist" aria-label="Design styles">
            {styles.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === index}
                onClick={() => { setIndex(i); setPaused(true) }}
                className={`style-pill ${i === index ? 'on' : ''}`}
              >
                {i === index && <motion.span layoutId="style-pill-bg" className="style-pill-bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span style={{ position: 'relative' }}>{s.name}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="showcase-stage"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="stage-bar">
              <span /><span /><span />
              <div className="stage-url">ui-explorer / {componentId} / <b>{style.id}</b></div>
            </div>
            <div style={{ position: 'relative', height: 360 }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={style.id + componentId}
                  initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <ComponentPreview componentId={componentId} styleId={style.id} height={360} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="stage-foot">
              <span>{style.name}</span>
              <Link to={`/library/${style.id}`} className="stage-link">Learn this style →</Link>
            </div>
            {!paused && <motion.span key={index} className="stage-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.4, ease: 'linear' }} />}
          </div>
        </FadeIn>
      </div>

      <style>{`
        .sc-chip { padding: 6px 14px; border-radius: 100px; font: 600 12px Inter, sans-serif; cursor: pointer; color: var(--text-secondary); background: transparent; border: 1px solid var(--border); transition: all .2s ease; }
        .sc-chip.on { color: var(--plum); background: var(--cream); border-color: var(--cream); }
        .style-list { display: flex; flex-wrap: wrap; gap: 6px; }
        .style-pill { position: relative; padding: 8px 14px; border-radius: 100px; border: 1px solid var(--border); background: rgba(254,231,181,0.03); color: var(--text-muted); font: 500 13px Inter, sans-serif; cursor: pointer; transition: color .2s ease; }
        .style-pill:hover { color: var(--cream); }
        .style-pill.on { color: var(--plum); font-weight: 700; border-color: transparent; }
        .style-pill-bg { position: absolute; inset: -1px; border-radius: 100px; background: linear-gradient(135deg,#FEE7B5,#FE8932); }
        .showcase-stage { position: relative; border-radius: 24px; overflow: hidden; background: #1a0428; border: 1px solid rgba(254,231,181,0.1); box-shadow: 0 40px 80px rgba(8,0,14,0.6), 0 0 0 8px rgba(254,231,181,0.02); }
        .stage-bar { display: flex; align-items: center; gap: 6px; padding: 12px 16px; border-bottom: 1px solid rgba(254,231,181,0.07); }
        .stage-bar > span { width: 10px; height: 10px; border-radius: 50%; background: #CD1A30; }
        .stage-bar > span:nth-child(2) { background: #FE8932; }
        .stage-bar > span:nth-child(3) { background: #FEE7B5; }
        .stage-url { margin-left: 12px; font: 12px ui-monospace, monospace; color: var(--text-muted); padding: 4px 12px; border-radius: 8px; background: rgba(254,231,181,0.04); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .stage-url b { color: var(--orange); font-weight: 600; }
        .stage-foot { display: flex; justify-content: space-between; align-items: center; padding: 14px 18px; border-top: 1px solid rgba(254,231,181,0.07); font-family: var(--font-display); font-size: 18px; color: var(--cream); }
        .stage-link { font: 600 13px Inter, sans-serif; color: var(--orange); }
        .stage-progress { position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: var(--grad-sunset); transform-origin: left; }
        @media (max-width: 900px) { .showcase-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

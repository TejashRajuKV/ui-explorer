import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import { componentTypes } from '../../data/components'
import { styles } from '../../data/styles'
import { animations } from '../../data/animations'

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: v => setVal(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

export default function StatsMarquee() {
  const stats = [
    { n: componentTypes.length, label: 'Component types' },
    { n: styles.length, label: 'Design styles' },
    { n: componentTypes.length * styles.length, label: 'Live previews', suffix: '+' },
    { n: animations.length, label: 'Motion recipes' },
  ]
  const names = styles.map(s => s.name)

  return (
    <section style={{ position: 'relative', background: 'var(--bg-primary)', padding: '72px 0 40px' }}>
      <div className="container">
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, borderRadius: 24, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--border)' }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: 'var(--bg-primary)', padding: '28px 24px', textAlign: 'center' }}>
              <div className="text-sunset" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em' }}>
                <CountUp to={s.n} suffix={s.suffix} />
              </div>
              <div style={{ marginTop: 8, fontSize: 13, color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.02em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite style-name marquee */}
      <div className="marquee" aria-label="Design styles" style={{ marginTop: 56 }}>
        {[0, 1].map(k => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {names.map(n => (
              <span key={n} className="marquee-item">
                {n}
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10Z" fill="#FE8932" /></svg>
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .marquee {
          display: flex; overflow: hidden; user-select: none;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
        }
        .marquee-track { display: flex; flex-shrink: 0; gap: 40px; padding-right: 40px; animation: marquee 48s linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        .marquee-item {
          display: inline-flex; align-items: center; gap: 40px; white-space: nowrap;
          font-family: var(--font-display); font-style: italic; font-weight: 500;
          font-size: clamp(28px, 4vw, 52px); color: rgba(254,231,181,0.22);
          transition: color .3s ease;
        }
        .marquee-item:hover { color: var(--cream); }
        @keyframes marquee { to { transform: translateX(-100%); } }
        @media (max-width: 700px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}

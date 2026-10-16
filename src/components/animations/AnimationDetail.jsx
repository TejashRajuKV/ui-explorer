import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimationStage from './AnimationStage'
import CodeViewer from '../gallery/CodeViewer'

export default function AnimationDetail({ anim, onClose }) {
  const [replayKey, setReplayKey] = useState(0)

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  return (
    <motion.div
      className="anim-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="anim-detail-title"
        className="anim-dialog"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <div className="anim-dialog-head">
          <div>
            <span className="eyebrow">{anim.category}</span>
            <h2 id="anim-detail-title" style={{ fontSize: 30, marginTop: 6 }}>{anim.name}</h2>
          </div>
          <button className="anim-icon-btn" onClick={onClose} aria-label="Close" style={{ width: 40, height: 40 }}>✕</button>
        </div>

        <div className="anim-dialog-body">
          <div>
            <div className={`anim-stage large ${anim.demo === 'scroll' ? 'is-scroll' : ''}`}>
              <div key={replayKey} className="anim-stage-inner">
                <AnimationStage anim={anim} large />
              </div>
              {anim.interactive && <span className="anim-hint">{anim.interactive}</span>}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, margin: '18px 0 14px' }}>{anim.description}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="anim-chip">⏱ {anim.duration}</span>
              <span className="anim-chip">∿ {anim.easing}</span>
              <button className="anim-code-btn" style={{ marginLeft: 'auto' }} onClick={() => setReplayKey(k => k + 1)}>↻ Replay</button>
            </div>
          </div>
          <div style={{ minWidth: 0 }}>
            <CodeViewer tabs={['CSS', 'Framer Motion']} code={{ CSS: anim.css, 'Framer Motion': anim.framer }} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

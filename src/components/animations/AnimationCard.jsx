import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimationStage from './AnimationStage'

export default function AnimationCard({ anim, index, onOpen }) {
  const [replayKey, setReplayKey] = useState(0)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="anim-card"
    >
      <div className={`anim-stage ${anim.demo === 'scroll' ? 'is-scroll' : ''}`}>
        <div key={replayKey} className="anim-stage-inner">
          <AnimationStage anim={anim} />
        </div>
        {anim.interactive && <span className="anim-hint">{anim.interactive}</span>}
      </div>

      <div className="anim-meta">
        <div style={{ minWidth: 0 }}>
          <div className="anim-cat">{anim.category}</div>
          <h3 className="anim-name">{anim.name}</h3>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button className="anim-icon-btn" onClick={() => setReplayKey(k => k + 1)} aria-label={`Replay ${anim.name}`} title="Replay">↻</button>
          <button className="anim-code-btn" onClick={() => onOpen(anim)}>Code</button>
        </div>
      </div>
    </motion.article>
  )
}

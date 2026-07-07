import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ComponentPreview from './ComponentPreview'
import CodeViewer from './CodeViewer'
import { getComponentCode } from '../../data/componentCode'
import Badge from '../ui/Badge'

const diffColor = { Beginner: 'green', Intermediate: 'accent', Advanced: 'pink' }

export default function ComponentCard({ componentId, style, index = 0 }) {
  const [showCode, setShowCode] = useState(false)
  const code = getComponentCode(componentId, style.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.35)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Live Preview */}
      <ComponentPreview componentId={componentId} styleId={style.id} height={200} />

      {/* Card footer */}
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 18 }}>{style.emoji}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{style.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 1 }}>{style.category}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Badge color={diffColor[style.difficulty] || 'muted'} style={{ fontSize: 10, padding: '3px 8px' }}>
              {style.difficulty}
            </Badge>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button
            id={`toggle-code-${componentId}-${style.id}`}
            onClick={() => setShowCode(v => !v)}
            style={{
              flex: 1,
              padding: '8px 0',
              background: showCode ? 'rgba(108,99,255,0.15)' : 'var(--bg-glass)',
              border: `1px solid ${showCode ? 'rgba(108,99,255,0.3)' : 'var(--border)'}`,
              borderRadius: 8,
              color: showCode ? 'var(--accent)' : 'var(--text-secondary)',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            {showCode ? '▲ Hide Code' : '⟨/⟩ View Code'}
          </button>
        </div>
      </div>

      {/* Code Viewer — expands below */}
      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ borderTop: '1px solid var(--border)', padding: '0 0 0 0' }}>
              <CodeViewer code={code} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

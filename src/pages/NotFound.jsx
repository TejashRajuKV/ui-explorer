import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px 200px', overflow: 'hidden' }}>
      {/* Sun sinking behind a ridge */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: 60, width: 300, height: 300, marginLeft: -150, borderRadius: '50%', background: 'radial-gradient(circle at 50% 40%, #FEE7B5, #FE8932 55%, #CD1A30)', boxShadow: '0 0 100px 30px rgba(254,137,50,0.3)' }} />
      <svg aria-hidden="true" viewBox="0 0 1440 220" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: 220 }}>
        <path d="M0,120 L160,80 L300,110 L460,50 L600,100 L720,70 L860,110 L1000,60 L1160,104 L1300,76 L1440,96 L1440,220 L0,220Z" fill="#7A0C31" />
        <path d="M0,160 L200,130 L380,158 L560,124 L760,160 L940,130 L1120,158 L1300,134 L1440,150 L1440,220 L0,220Z" fill="#4A0730" />
        <path d="M0,196 L240,176 L480,198 L720,178 L960,200 L1200,180 L1440,194 L1440,220 L0,220Z" fill="var(--bg-primary)" />
      </svg>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative' }}>
        <div className="text-sunset" style={{ fontSize: 'clamp(90px, 16vw, 170px)', fontWeight: 700, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: 12, letterSpacing: '-0.05em' }}>
          404
        </div>
        <h1 style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: 12 }}>Lost in the mountains</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 420, margin: '0 auto 32px', lineHeight: 1.7 }}>
          This trail doesn&apos;t lead anywhere yet. Head back to base camp before the sun goes down.
        </p>
        <Link to="/" id="not-found-home" className="btn-sunset">← Back to home</Link>
      </motion.div>
    </div>
  )
}

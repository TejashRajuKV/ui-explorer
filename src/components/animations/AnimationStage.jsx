import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useSpring } from 'framer-motion'

/* ─────────────────────────────────────────────
   Renders the demo markup for one animation.
   The animation's CSS (injected by the page) targets
   `anim.className`; interactive demos add a little JS.
───────────────────────────────────────────── */

const card = {
  width: 180, padding: 16, borderRadius: 16,
  background: 'linear-gradient(160deg, #4A0730, #200432)',
  border: '1px solid rgba(254,231,181,0.12)',
  boxShadow: '0 12px 30px rgba(8,0,14,0.4)',
}
const line = (w, o = 0.18) => ({ height: 8, width: w, borderRadius: 4, background: `rgba(254,231,181,${o})`, marginTop: 8 })
const sunsetBox = { width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg,#FE8932,#CD1A30)', boxShadow: '0 12px 30px rgba(205,26,48,0.45)' }
const btn = { padding: '12px 26px', borderRadius: 100, border: 'none', background: 'linear-gradient(135deg,#FE8932,#CD1A30)', color: '#FEE7B5', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }

function MiniCard({ className }) {
  return (
    <div className={className} style={card}>
      <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#FE8932,#CD1A30)' }} />
      <div style={line('80%', 0.35)} />
      <div style={line('55%')} />
      <div style={line('70%')} />
    </div>
  )
}

function Magnetic() {
  const x = useSpring(0, { stiffness: 200, damping: 12 })
  const y = useSpring(0, { stiffness: 200, damping: 12 })
  return (
    <div
      style={{ padding: 40 }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * 0.35)
        y.set((e.clientY - r.top - r.height / 2) * 0.35)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      <motion.button style={{ ...btn, x, y }}>Pull me</motion.button>
    </div>
  )
}

function Ripple() {
  const [ripples, setRipples] = useState([])
  return (
    <button
      style={{ ...btn, position: 'relative', overflow: 'hidden', padding: '14px 34px' }}
      onClick={e => {
        const r = e.currentTarget.getBoundingClientRect()
        setRipples(rs => [...rs, { id: Date.now() + Math.random(), x: e.clientX - r.left, y: e.clientY - r.top }])
      }}
    >
      <AnimatePresence>
        {ripples.map(rp => (
          <motion.span
            key={rp.id}
            style={{ position: 'absolute', left: rp.x, top: rp.y, width: 20, height: 20, margin: '-10px 0 0 -10px', borderRadius: '50%', background: 'rgba(254,231,181,0.55)', pointerEvents: 'none' }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 14, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => setRipples(rs => rs.filter(x => x.id !== rp.id))}
          />
        ))}
      </AnimatePresence>
      <span style={{ position: 'relative' }}>Click me</span>
    </button>
  )
}

function ScrollReveal() {
  const root = useRef(null)
  return (
    <div ref={root} style={{ width: '100%', height: '100%', overflowY: 'auto', padding: '16px 20px', scrollbarWidth: 'thin' }}>
      <div style={{ height: 140, display: 'grid', placeItems: 'center', color: 'rgba(254,231,181,0.5)', fontSize: 12 }}>↓ scroll</div>
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root, once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ ...card, width: '100%', marginBottom: 14, display: 'flex', gap: 12, alignItems: 'center', padding: 12 }}
        >
          <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, background: ['#FE8932', '#CD1A30', '#7A0C31', '#FEE7B5'][i] }} />
          <div style={{ flex: 1 }}><div style={{ ...line('70%', 0.35), marginTop: 0 }} /><div style={line('45%')} /></div>
        </motion.div>
      ))}
    </div>
  )
}

/* Re-triggers one-shot animations every `every` ms by remounting */
function useLoopKey(every) {
  const [k, setK] = useState(0)
  useEffect(() => {
    if (!every) return
    const t = setInterval(() => setK(v => v + 1), every)
    return () => clearInterval(t)
  }, [every])
  return k
}

export default function AnimationStage({ anim, large = false }) {
  const loopKey = useLoopKey(anim.loopEvery)
  const c = anim.className
  const textSize = large ? 44 : 30

  switch (anim.demo) {
    case 'card':        return <MiniCard className={c} />
    case 'box':         return <div className={c} style={sunsetBox} />
    case 'stagger':
      return (
        <ul className={c} style={{ listStyle: 'none', width: 190, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[0, 1, 2, 3].map(i => (
            <li key={i} style={{ '--i': i, ...card, width: '100%', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 14, height: 14, borderRadius: 4, background: ['#FE8932', '#CD1A30', '#7A0C31', '#FEE7B5'][i] }} />
              <span style={{ ...line(`${80 - i * 12}%`, 0.3), marginTop: 0 }} />
            </li>
          ))}
        </ul>
      )
    case 'dot':
      return (
        <div className={c} style={{ width: 22, height: 22, background: '#FE8932', boxShadow: '0 0 16px #FE8932' }} />
      )
    case 'input':
      return (
        <div key={loopKey} className={c} style={{ width: 210 }}>
          <div style={{ padding: '11px 14px', borderRadius: 12, border: '1.5px solid #CD1A30', background: 'rgba(205,26,48,0.08)', color: 'rgba(254,231,181,0.8)', fontSize: 13 }}>wrong-password</div>
          <div style={{ fontSize: 11, color: '#ff6b7d', marginTop: 6 }}>Incorrect password</div>
        </div>
      )
    case 'bell':
      return (
        <div className={c} style={{ fontSize: large ? 64 : 46, lineHeight: 1, filter: 'drop-shadow(0 6px 14px rgba(254,137,50,0.5))' }} aria-hidden="true">
          <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="#FE8932" d="M12 2a6 6 0 0 0-6 6v4.2L4.3 15a1 1 0 0 0 .9 1.5h13.6a1 1 0 0 0 .9-1.5L18 12.2V8a6 6 0 0 0-6-6Z" /><circle cx="12" cy="19.5" r="2.5" fill="#FEE7B5" /></svg>
        </div>
      )
    case 'heart':
      return (
        <div className={c} style={{ fontSize: large ? 72 : 52, lineHeight: 1 }} aria-hidden="true">
          <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="#CD1A30" d="M12 21s-7.5-4.6-9.6-9.3C.8 8 3 4 6.8 4c2.2 0 3.7 1.2 5.2 3 1.5-1.8 3-3 5.2-3C21 4 23.2 8 21.6 11.7 19.5 16.4 12 21 12 21Z" /></svg>
        </div>
      )
    case 'button':      return <button className={c} style={btn}>Get started</button>
    case 'spinner':     return <div className={c} />
    case 'dots':        return <div className={c}><span /><span /><span /></div>
    case 'orbit':       return <div className={c}><span /><span /></div>
    case 'skeleton':
      return (
        <div style={{ ...card, width: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div className={c} style={{ width: 36, height: 36, borderRadius: '50%' }} />
            <div style={{ flex: 1 }}><div className={c} style={{ height: 10, width: '80%' }} /><div className={c} style={{ height: 8, width: '50%', marginTop: 8 }} /></div>
          </div>
          <div className={c} style={{ height: 60 }} />
        </div>
      )
    case 'typewriter':
      return <div key={loopKey} className={c} style={{ color: '#FEE7B5', fontSize: large ? 24 : 17 }}>Hello, golden hour</div>
    case 'text':
      return <div className={c} style={{ fontFamily: 'var(--font-display)', fontSize: textSize, fontWeight: 700, letterSpacing: '-0.02em' }}>Golden Hour</div>
    case 'letters':
      return (
        <div className={c} style={{ fontFamily: 'var(--font-display)', fontSize: textSize, fontWeight: 700, color: '#FEE7B5' }}>
          {'Sunset'.split('').map((ch, i) => <span key={i} style={{ '--i': i }}>{ch}</span>)}
        </div>
      )
    case 'hover-card':  return <MiniCard className={c} />
    case 'magnetic':    return <Magnetic />
    case 'ripple':      return <Ripple />
    case 'border-trace':
      return (
        <div className={c} style={{ width: 190, padding: 18, color: '#FEE7B5', fontSize: 13 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Pro plan</div>
          <div style={{ opacity: 0.6 }}>Hover to light the border</div>
        </div>
      )
    case 'link':
      return (
        <div style={{ display: 'flex', gap: 22, fontSize: 16, fontWeight: 600 }}>
          {['Home', 'Work', 'About'].map(l => <a key={l} href="#" onClick={e => e.preventDefault()} className={c} style={{ color: '#FEE7B5' }}>{l}</a>)}
        </div>
      )
    case 'scroll':      return <ScrollReveal />
    default:            return <div className={c} style={sunsetBox} />
  }
}

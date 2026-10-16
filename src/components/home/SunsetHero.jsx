import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { layers, sun, towerWindow, VIEW_W, VIEW_H } from './sceneGeometry'
import { componentTypes } from '../../data/components'
import { styles } from '../../data/styles'
import { animations } from '../../data/animations'

const headline = ['Explore', 'the', 'whole', 'spectrum', 'of', 'UI', 'design.']
const ease = [0.22, 1, 0.36, 1]

const birds = [
  { top: '16%', size: 22, dur: 38, delay: 0,   startX: '-8vw' },
  { top: '21%', size: 16, dur: 44, delay: 4,   startX: '-12vw' },
  { top: '12%', size: 14, dur: 52, delay: 9,   startX: '-6vw' },
  { top: '26%', size: 18, dur: 40, delay: 16,  startX: '-10vw' },
  { top: '18%', size: 12, dur: 58, delay: 22,  startX: '-4vw' },
]

function Bird({ size }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 20 10" className="bird-flap" aria-hidden="true">
      <path d="M0 5 Q5 0 10 5 Q15 0 20 5" fill="none" stroke="#4A0730" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/* One parallax landscape layer */
function Layer({ layer, progress, mx, still }) {
  const y = useTransform(progress, [0, 1], [0, 420 * layer.depth])
  const x = useTransform(mx, v => v * (1 - layer.depth) * -28)
  return (
    <motion.svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      style={{ position: 'absolute', inset: '-2% -3% 0', width: '106%', height: '102%', y: still ? 0 : y, x: still ? 0 : x }}
    >
      <path d={layer.d} fill={layer.color} />
      {layer.extra && <path d={layer.extra} fill={layer.color} />}
      {layer.id === 'far' && (
        <rect x={towerWindow.x} y={towerWindow.y} width={towerWindow.w} height={towerWindow.h} fill="#FEE7B5" className="tower-glow" />
      )}
    </motion.svg>
  )
}

export default function SunsetHero() {
  const ref = useRef(null)
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const rawMx = useMotionValue(0)
  const mx = useSpring(rawMx, { stiffness: 60, damping: 20 })

  const sunY = useTransform(scrollYProgress, [0, 1], [0, 460])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const sunX = useTransform(mx, v => v * -6)

  const onPointerMove = e => {
    if (still || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    rawMx.set(((e.clientX - r.left) / r.width - 0.5) * 2)
  }

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      className="sunset-hero grain"
      style={{ position: 'relative', height: '100svh', minHeight: 680, overflow: 'hidden', background: 'var(--grad-sky)' }}
    >
      {/* Slow rotating sun rays */}
      <div className="sun-rays" aria-hidden="true" />

      {/* Sun */}
      <motion.svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        style={{ position: 'absolute', inset: '-2% -3% 0', width: '106%', height: '102%', y: still ? 0 : sunY, x: still ? 0 : sunX }}
      >
        <defs>
          <radialGradient id="sun-core" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#FFF6DE" />
            <stop offset="60%" stopColor="#FEE7B5" />
            <stop offset="100%" stopColor="#FEC98A" />
          </radialGradient>
          <radialGradient id="sun-halo">
            <stop offset="0%" stopColor="#FEE7B5" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#FE8932" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FE8932" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={sun.cx} cy={sun.cy} r={sun.r * 3} fill="url(#sun-halo)" className="sun-halo" />
        <circle cx={sun.cx} cy={sun.cy} r={sun.r} fill="url(#sun-core)" />
      </motion.svg>

      {/* Birds */}
      {!still && birds.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          style={{ position: 'absolute', top: b.top, left: 0, zIndex: 2 }}
          initial={{ x: b.startX }}
          animate={{ x: '110vw', y: [0, -18, 6, -10, 0] }}
          transition={{ x: { duration: b.dur, delay: b.delay, repeat: Infinity, ease: 'linear' }, y: { duration: b.dur / 3, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Bird size={b.size} />
        </motion.div>
      ))}

      {/* Landscape layers */}
      {layers.map(layer => (
        <Layer key={layer.id} layer={layer} progress={scrollYProgress} mx={mx} still={still} />
      ))}

      {/* Headline */}
      <motion.div
        className="container hero-copy"
        style={{ position: 'relative', zIndex: 5, paddingTop: 'clamp(118px, 15vh, 150px)', textAlign: 'center', y: still ? 0 : textY, opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 14px 6px 8px', borderRadius: 100, background: 'rgba(32,4,50,0.08)', border: '1px solid rgba(32,4,50,0.14)', marginBottom: 22, fontSize: 13, fontWeight: 600, color: '#4A0730' }}
        >
          <span style={{ padding: '2px 8px', borderRadius: 100, background: '#200432', color: '#FEE7B5', fontSize: 11, letterSpacing: '0.06em' }}>NEW</span>
          {animations.length} motion recipes just landed
        </motion.div>

        <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 6.6vw, 90px)', lineHeight: 1.02, letterSpacing: '-0.035em', color: '#200432', fontWeight: 700, maxWidth: 980, margin: '0 auto' }}>
          {headline.map((word, i) => (
            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.08em', marginRight: '0.24em', verticalAlign: 'top' }}>
              <motion.span
                style={{ display: 'inline-block', ...(word === 'spectrum' ? { fontStyle: 'italic', fontWeight: 500, background: 'linear-gradient(100deg,#CD1A30,#7A0C31)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', paddingRight: '0.06em' } : {}) }}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 + i * 0.07, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease }}
          style={{ fontSize: 'clamp(15px, 1.6vw, 19px)', color: '#4A0730', maxWidth: 560, margin: '18px auto 28px', lineHeight: 1.6, fontWeight: 500 }}
        >
          {componentTypes.length} components across {styles.length} design styles, with live previews, copy-ready code and motion — from glassmorphism to brutalism.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/components" className="btn-sunset">
            Explore components
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/animations" className="btn-ghost-plum">
            Try animations
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ position: 'absolute', bottom: 28, left: '50%', translateX: '-50%', zIndex: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(254,231,181,0.6)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}
        aria-hidden="true"
      >
        <span style={{ width: 22, height: 34, borderRadius: 12, border: '1.5px solid rgba(254,231,181,0.45)', display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <span className="scroll-dot" />
        </span>
        Scroll
      </motion.div>

      <style>{`
        .sun-rays {
          position: absolute; left: 50%; top: 64%; width: 150vmax; height: 150vmax;
          will-change: transform; contain: strict;
          transform: translate(-50%, -50%);
          background: repeating-conic-gradient(from 0deg, rgba(254,231,181,0.16) 0deg 5deg, transparent 5deg 14deg);
          -webkit-mask-image: radial-gradient(circle, #000 0%, transparent 55%);
          mask-image: radial-gradient(circle, #000 0%, transparent 55%);
          animation: rays-spin 140s linear infinite;
          pointer-events: none;
        }
        @keyframes rays-spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
        .sun-halo { animation: sun-breathe 7s ease-in-out infinite; }
        @keyframes sun-breathe { 0%,100% { opacity: .85 } 50% { opacity: 1 } }
        .tower-glow { animation: tower-flicker 4s ease-in-out infinite; }
        @keyframes tower-flicker { 0%,100% { opacity: 1 } 45% { opacity: .75 } 50% { opacity: .95 } 70% { opacity: .8 } }
        .bird-flap { transform-origin: center; animation: flap .9s ease-in-out infinite; }
        @keyframes flap { 0%,100% { transform: scaleY(1) } 50% { transform: scaleY(-0.55) } }
        .scroll-dot { width: 3px; height: 7px; border-radius: 3px; background: var(--orange); animation: scroll-dot 1.8s ease-in-out infinite; }
        @keyframes scroll-dot { 0% { transform: translateY(0); opacity: 1 } 80% { transform: translateY(12px); opacity: 0 } 100% { opacity: 0 } }
        .btn-ghost-plum {
          display: inline-flex; align-items: center; gap: 10px; padding: 13px 26px; border-radius: 100px;
          border: 1.5px solid rgba(32,4,50,0.35); color: #200432; font-weight: 600; font-size: 15px;
          background: rgba(254,231,181,0.35); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          transition: background .25s ease, border-color .25s ease, transform .25s ease;
        }
        .btn-ghost-plum:hover { background: rgba(254,231,181,0.6); border-color: #200432; transform: translateY(-2px); }
        @media (max-width: 600px) {
          .hero-copy { padding-top: 112px !important; }
        }
      `}</style>
    </section>
  )
}

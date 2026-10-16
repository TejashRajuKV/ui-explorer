/* ─────────────────────────────────────────────
   animations.js
   Motion recipes for the Animations tab.
   Each entry ships copy-ready CSS and a Framer Motion
   equivalent. `demo` picks the stage markup rendered by
   AnimationStage; `className` is what the CSS targets.
───────────────────────────────────────────── */

export const animationCategories = ['All', 'Entrances', 'Attention', 'Loaders', 'Text', 'Hover & Micro', 'Scroll']

export const animations = [
  /* ══════ ENTRANCES ══════ */
  {
    id: 'fade-up',
    name: 'Fade Up',
    category: 'Entrances',
    description: 'The workhorse entrance: content rises gently into place while fading in.',
    duration: '0.7s',
    easing: 'cubic-bezier(.22,1,.36,1)',
    demo: 'card',
    className: 'ax-fade-up',
    css: `.ax-fade-up {
  animation: ax-fade-up 0.7s cubic-bezier(.22, 1, .36, 1) both;
}

@keyframes ax-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}`,
    framer: `<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
/>`,
  },
  {
    id: 'scale-in',
    name: 'Scale In',
    category: 'Entrances',
    description: 'Pops content in from slightly smaller with a springy overshoot. Great for modals and toasts.',
    duration: '0.6s',
    easing: 'cubic-bezier(.34,1.56,.64,1)',
    demo: 'box',
    className: 'ax-scale-in',
    css: `.ax-scale-in {
  animation: ax-scale-in 0.6s cubic-bezier(.34, 1.56, .64, 1) both;
}

@keyframes ax-scale-in {
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1); }
}`,
    framer: `<motion.div
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: 'spring', stiffness: 260, damping: 16 }}
/>`,
  },
  {
    id: 'blur-in',
    name: 'Blur In',
    category: 'Entrances',
    description: 'Content resolves from a soft blur, like a camera pulling focus.',
    duration: '0.9s',
    easing: 'ease-out',
    demo: 'card',
    className: 'ax-blur-in',
    css: `.ax-blur-in {
  animation: ax-blur-in 0.9s ease-out both;
}

@keyframes ax-blur-in {
  from { opacity: 0; filter: blur(16px); transform: scale(1.04); }
  to   { opacity: 1; filter: blur(0);    transform: scale(1); }
}`,
    framer: `<motion.div
  initial={{ opacity: 0, filter: 'blur(16px)', scale: 1.04 }}
  animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
  transition={{ duration: 0.9, ease: 'easeOut' }}
/>`,
  },
  {
    id: 'slide-stagger',
    name: 'Staggered Slide',
    category: 'Entrances',
    description: 'List items slide in one after another. Each item offsets its delay by its index.',
    duration: '0.5s + 80ms × i',
    easing: 'cubic-bezier(.22,1,.36,1)',
    demo: 'stagger',
    className: 'ax-stagger',
    css: `.ax-stagger > * {
  animation: ax-slide-in 0.5s cubic-bezier(.22, 1, .36, 1) both;
  animation-delay: calc(var(--i) * 80ms);
}

@keyframes ax-slide-in {
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* <li style="--i: 0">…</li> <li style="--i: 1">…</li> */`,
    framer: `const list = { show: { transition: { staggerChildren: 0.08 } } }
const item = {
  hidden: { opacity: 0, x: -28 },
  show:   { opacity: 1, x: 0 },
}

<motion.ul variants={list} initial="hidden" animate="show">
  {items.map(i => <motion.li key={i} variants={item} />)}
</motion.ul>`,
  },
  {
    id: 'flip-in',
    name: 'Flip In',
    category: 'Entrances',
    description: 'A 3D flip around the X axis. Adds drama to cards and pricing tiers.',
    duration: '0.8s',
    easing: 'cubic-bezier(.22,1,.36,1)',
    demo: 'card',
    className: 'ax-flip-in',
    css: `.ax-flip-in {
  transform-origin: top center;
  animation: ax-flip-in 0.8s cubic-bezier(.22, 1, .36, 1) both;
}

@keyframes ax-flip-in {
  from { opacity: 0; transform: perspective(600px) rotateX(-70deg); }
  to   { opacity: 1; transform: perspective(600px) rotateX(0); }
}`,
    framer: `<motion.div
  style={{ transformPerspective: 600, originY: 0 }}
  initial={{ opacity: 0, rotateX: -70 }}
  animate={{ opacity: 1, rotateX: 0 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
/>`,
  },

  /* ══════ ATTENTION ══════ */
  {
    id: 'pulse',
    name: 'Pulse Ring',
    category: 'Attention',
    description: 'A ring radiates outward from the element. Use it for live indicators and notifications.',
    duration: '1.8s ∞',
    easing: 'ease-out',
    demo: 'dot',
    className: 'ax-pulse',
    css: `.ax-pulse {
  position: relative;
  border-radius: 50%;
}

.ax-pulse::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid #FE8932;
  animation: ax-pulse 1.8s ease-out infinite;
}

@keyframes ax-pulse {
  from { transform: scale(1);   opacity: 0.9; }
  to   { transform: scale(2.4); opacity: 0; }
}`,
    framer: `<div style={{ position: 'relative' }}>
  <motion.span
    style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid #FE8932' }}
    animate={{ scale: [1, 2.4], opacity: [0.9, 0] }}
    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
  />
</div>`,
  },
  {
    id: 'shake',
    name: 'Shake',
    category: 'Attention',
    description: 'A quick horizontal shake. Use it for invalid input or a rejected action.',
    duration: '0.6s',
    easing: 'ease-in-out',
    demo: 'input',
    className: 'ax-shake',
    loopEvery: 1800,
    css: `.ax-shake {
  animation: ax-shake 0.6s ease-in-out both;
}

@keyframes ax-shake {
  0%, 100%      { transform: translateX(0); }
  15%, 55%      { transform: translateX(-8px); }
  35%, 75%      { transform: translateX(8px); }
  90%           { transform: translateX(-3px); }
}`,
    framer: `const controls = useAnimationControls()

// on error:
controls.start({
  x: [0, -8, 8, -8, 8, -3, 0],
  transition: { duration: 0.6 },
})

<motion.input animate={controls} />`,
  },
  {
    id: 'wiggle',
    name: 'Wiggle',
    category: 'Attention',
    description: 'A playful rotation wiggle. Good for a bell icon or an unread badge.',
    duration: '2s ∞',
    easing: 'ease-in-out',
    demo: 'bell',
    className: 'ax-wiggle',
    css: `.ax-wiggle {
  transform-origin: top center;
  animation: ax-wiggle 2s ease-in-out infinite;
}

@keyframes ax-wiggle {
  0%, 50%, 100% { transform: rotate(0); }
  10%, 30%      { transform: rotate(-14deg); }
  20%, 40%      { transform: rotate(14deg); }
}`,
    framer: `<motion.div
  style={{ originY: 0 }}
  animate={{ rotate: [0, -14, 14, -14, 14, 0] }}
  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
/>`,
  },
  {
    id: 'heartbeat',
    name: 'Heartbeat',
    category: 'Attention',
    description: 'A double-thump scale. Use it for like buttons and favourite toggles.',
    duration: '1.3s ∞',
    easing: 'ease-in-out',
    demo: 'heart',
    className: 'ax-heartbeat',
    css: `.ax-heartbeat {
  animation: ax-heartbeat 1.3s ease-in-out infinite;
}

@keyframes ax-heartbeat {
  0%, 40%, 100% { transform: scale(1); }
  10%           { transform: scale(1.22); }
  20%           { transform: scale(1.05); }
  30%           { transform: scale(1.18); }
}`,
    framer: `<motion.div
  animate={{ scale: [1, 1.22, 1.05, 1.18, 1] }}
  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.8 }}
/>`,
  },
  {
    id: 'glow',
    name: 'Sunset Glow',
    category: 'Attention',
    description: 'A breathing warm glow. Draws the eye to a primary CTA without shouting.',
    duration: '2.4s ∞',
    easing: 'ease-in-out',
    demo: 'button',
    className: 'ax-glow',
    css: `.ax-glow {
  animation: ax-glow 2.4s ease-in-out infinite;
}

@keyframes ax-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(254, 137, 50, 0.0), 0 0 18px rgba(205, 26, 48, 0.35); }
  50%      { box-shadow: 0 0 0 8px rgba(254, 137, 50, 0.12), 0 0 42px rgba(254, 137, 50, 0.65); }
}`,
    framer: `<motion.button
  animate={{
    boxShadow: [
      '0 0 18px rgba(205,26,48,0.35)',
      '0 0 42px rgba(254,137,50,0.65)',
      '0 0 18px rgba(205,26,48,0.35)',
    ],
  }}
  transition={{ duration: 2.4, repeat: Infinity }}
/>`,
  },
  {
    id: 'float',
    name: 'Float',
    category: 'Attention',
    description: 'Slow vertical bobbing. Gives hero illustrations and floating cards some life.',
    duration: '4s ∞',
    easing: 'ease-in-out',
    demo: 'box',
    className: 'ax-float',
    css: `.ax-float {
  animation: ax-float 4s ease-in-out infinite;
}

@keyframes ax-float {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50%      { transform: translateY(-14px) rotate(2deg); }
}`,
    framer: `<motion.div
  animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
/>`,
  },

  /* ══════ LOADERS ══════ */
  {
    id: 'spinner',
    name: 'Gradient Spinner',
    category: 'Loaders',
    description: 'A conic-gradient ring. Made from a single element with no SVG.',
    duration: '0.9s ∞',
    easing: 'linear',
    demo: 'spinner',
    className: 'ax-spinner',
    css: `.ax-spinner {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent, #FE8932 70%, #CD1A30);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
          mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
  animation: ax-spin 0.9s linear infinite;
}

@keyframes ax-spin { to { transform: rotate(360deg); } }`,
    framer: `<motion.div
  className="ring"
  animate={{ rotate: 360 }}
  transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
/>`,
  },
  {
    id: 'dots',
    name: 'Bouncing Dots',
    category: 'Loaders',
    description: 'Three dots bouncing in sequence. The classic "typing…" indicator.',
    duration: '1s ∞',
    easing: 'ease-in-out',
    demo: 'dots',
    className: 'ax-dots',
    css: `.ax-dots { display: flex; gap: 8px; }

.ax-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FE8932;
  animation: ax-bounce 1s ease-in-out infinite;
}
.ax-dots span:nth-child(2) { animation-delay: 0.15s; background: #CD1A30; }
.ax-dots span:nth-child(3) { animation-delay: 0.3s;  background: #7A0C31; }

@keyframes ax-bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40%           { transform: translateY(-14px); }
}`,
    framer: `{[0, 1, 2].map(i => (
  <motion.span
    key={i}
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, repeatDelay: 0.2 }}
  />
))}`,
  },
  {
    id: 'shimmer',
    name: 'Skeleton Shimmer',
    category: 'Loaders',
    description: 'A light sweep across placeholder blocks while content loads.',
    duration: '1.6s ∞',
    easing: 'linear',
    demo: 'skeleton',
    className: 'ax-shimmer',
    css: `.ax-shimmer {
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    #2a0a3a 0%,
    #4A0730 40%,
    #2a0a3a 80%
  );
  background-size: 200% 100%;
  animation: ax-shimmer 1.6s linear infinite;
}

@keyframes ax-shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}`,
    framer: `<motion.div
  style={{
    background: 'linear-gradient(90deg,#2a0a3a 0%,#4A0730 40%,#2a0a3a 80%)',
    backgroundSize: '200% 100%',
  }}
  animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
  transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
/>`,
  },
  {
    id: 'orbit',
    name: 'Orbit',
    category: 'Loaders',
    description: 'Two moons orbit a sun at different speeds. A calm loader for long waits.',
    duration: '1.6s / 2.8s ∞',
    easing: 'linear',
    demo: 'orbit',
    className: 'ax-orbit',
    css: `.ax-orbit {
  position: relative;
  width: 72px;
  height: 72px;
}
.ax-orbit::before {             /* the sun */
  content: '';
  position: absolute;
  inset: 26px;
  border-radius: 50%;
  background: #FE8932;
  box-shadow: 0 0 20px #FE8932;
}
.ax-orbit span {
  position: absolute;
  inset: 0;
  animation: ax-spin 1.6s linear infinite;
}
.ax-orbit span:last-child { inset: 10px; animation-duration: 2.8s; animation-direction: reverse; }
.ax-orbit span::after {         /* the moon */
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: #FEE7B5;
}

@keyframes ax-spin { to { transform: rotate(360deg); } }`,
    framer: `<motion.div
  className="orbit-track"
  animate={{ rotate: 360 }}
  transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
>
  <span className="moon" />
</motion.div>`,
  },

  /* ══════ TEXT ══════ */
  {
    id: 'typewriter',
    name: 'Typewriter',
    category: 'Text',
    description: 'Text types itself out behind a blinking caret, using only CSS and steps().',
    duration: '2.4s',
    easing: 'steps(18)',
    demo: 'typewriter',
    className: 'ax-typewriter',
    css: `.ax-typewriter {
  width: 18ch;                 /* = number of characters */
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #FE8932;
  animation:
    ax-type 2.4s steps(18) both,
    ax-caret 0.75s step-end infinite;
}

@keyframes ax-type  { from { width: 0; } }
@keyframes ax-caret { 50% { border-color: transparent; } }`,
    framer: `const text = 'Hello, golden hour'

<motion.span
  initial="hidden"
  animate="show"
  variants={{ show: { transition: { staggerChildren: 0.08 } } }}
>
  {text.split('').map((ch, i) => (
    <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
      {ch}
    </motion.span>
  ))}
</motion.span>`,
  },
  {
    id: 'gradient-sweep',
    name: 'Gradient Sweep',
    category: 'Text',
    description: 'A sunset gradient flows endlessly through the letters.',
    duration: '4s ∞',
    easing: 'linear',
    demo: 'text',
    className: 'ax-gradient-text',
    css: `.ax-gradient-text {
  background: linear-gradient(90deg, #FEE7B5, #FE8932, #CD1A30, #FE8932, #FEE7B5);
  background-size: 200% auto;
  -webkit-background-clip: text;
          background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ax-sweep 4s linear infinite;
}

@keyframes ax-sweep { to { background-position: 200% center; } }`,
    framer: `<motion.h1
  className="gradient-text"
  animate={{ backgroundPosition: ['0% center', '200% center'] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
/>`,
  },
  {
    id: 'letter-wave',
    name: 'Letter Wave',
    category: 'Text',
    description: 'Each letter bobs in turn, sending a wave through the word.',
    duration: '1.6s ∞',
    easing: 'ease-in-out',
    demo: 'letters',
    className: 'ax-wave',
    css: `.ax-wave span {
  display: inline-block;
  animation: ax-wave 1.6s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.08s);
}

@keyframes ax-wave {
  0%, 60%, 100% { transform: translateY(0); }
  30%           { transform: translateY(-12px); color: #FE8932; }
}

/* <span style="--i:0">S</span><span style="--i:1">u</span>… */`,
    framer: `{'Sunset'.split('').map((ch, i) => (
  <motion.span
    key={i}
    style={{ display: 'inline-block' }}
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.8, delay: i * 0.08 }}
  >
    {ch}
  </motion.span>
))}`,
  },

  /* ══════ HOVER & MICRO ══════ */
  {
    id: 'hover-lift',
    name: 'Hover Lift',
    category: 'Hover & Micro',
    description: 'The card rises and its shadow deepens on hover. A tactile, trustworthy affordance.',
    duration: '0.3s',
    easing: 'cubic-bezier(.22,1,.36,1)',
    demo: 'hover-card',
    interactive: 'Hover the card',
    className: 'ax-lift',
    css: `.ax-lift {
  transition: transform 0.3s cubic-bezier(.22, 1, .36, 1),
              box-shadow 0.3s cubic-bezier(.22, 1, .36, 1);
}

.ax-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(205, 26, 48, 0.35);
}`,
    framer: `<motion.div
  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(205,26,48,0.35)' }}
  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
/>`,
  },
  {
    id: 'magnetic',
    name: 'Magnetic Button',
    category: 'Hover & Micro',
    description: 'The button leans toward the cursor as if pulled by a magnet, then springs back.',
    duration: 'spring',
    easing: 'stiffness 200 · damping 12',
    demo: 'magnetic',
    interactive: 'Move your cursor near the button',
    className: 'ax-magnetic',
    css: `.ax-magnetic {
  transition: transform 0.25s cubic-bezier(.22, 1, .36, 1);
}

/* JavaScript */
const btn = document.querySelector('.ax-magnetic')
btn.addEventListener('mousemove', e => {
  const r = btn.getBoundingClientRect()
  const x = (e.clientX - r.left - r.width / 2) * 0.35
  const y = (e.clientY - r.top - r.height / 2) * 0.35
  btn.style.transform = \`translate(\${x}px, \${y}px)\`
})
btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'translate(0, 0)'
})`,
    framer: `const x = useSpring(0, { stiffness: 200, damping: 12 })
const y = useSpring(0, { stiffness: 200, damping: 12 })

<motion.button
  style={{ x, y }}
  onMouseMove={e => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.35)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }}
  onMouseLeave={() => { x.set(0); y.set(0) }}
/>`,
  },
  {
    id: 'ripple',
    name: 'Ripple Click',
    category: 'Hover & Micro',
    description: 'A ripple spreads out from the click point, as in Material Design.',
    duration: '0.6s',
    easing: 'ease-out',
    demo: 'ripple',
    interactive: 'Click the button',
    className: 'ax-ripple',
    css: `.ax-ripple { position: relative; overflow: hidden; }

.ax-ripple .wave {
  position: absolute;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border-radius: 50%;
  background: rgba(254, 231, 181, 0.55);
  pointer-events: none;
  animation: ax-ripple 0.6s ease-out forwards;
}

@keyframes ax-ripple {
  from { transform: scale(0);  opacity: 1; }
  to   { transform: scale(14); opacity: 0; }
}

/* JavaScript: spawn .wave at click point */
btn.addEventListener('click', e => {
  const r = btn.getBoundingClientRect()
  const w = document.createElement('span')
  w.className = 'wave'
  w.style.left = e.clientX - r.left + 'px'
  w.style.top  = e.clientY - r.top + 'px'
  btn.appendChild(w)
  w.addEventListener('animationend', () => w.remove())
})`,
    framer: `const [ripples, setRipples] = useState([])

<button onClick={e => {
  const r = e.currentTarget.getBoundingClientRect()
  setRipples(rs => [...rs, { id: Date.now(), x: e.clientX - r.left, y: e.clientY - r.top }])
}}>
  <AnimatePresence>
    {ripples.map(rp => (
      <motion.span
        key={rp.id}
        style={{ left: rp.x, top: rp.y }}
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 14, opacity: 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setRipples(rs => rs.filter(x => x.id !== rp.id))}
      />
    ))}
  </AnimatePresence>
</button>`,
  },
  {
    id: 'border-trace',
    name: 'Border Trace',
    category: 'Hover & Micro',
    description: 'A glowing gradient border travels around the card on hover.',
    duration: '3s ∞',
    easing: 'linear',
    demo: 'border-trace',
    interactive: 'Hover the card',
    className: 'ax-trace',
    css: `@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.ax-trace {
  border: 2px solid transparent;
  border-radius: 16px;
  background:
    linear-gradient(#200432, #200432) padding-box,
    conic-gradient(from var(--angle), #4A0730 0%, #4A0730 60%, #FE8932 80%, #CD1A30 90%, #4A0730 100%) border-box;
}

.ax-trace:hover {
  animation: ax-trace 3s linear infinite;
}

@keyframes ax-trace { to { --angle: 360deg; } }`,
    framer: `// Framer can't animate @property directly;
// animate a CSS variable instead:
<motion.div
  className="trace"
  whileHover={{ '--angle': '360deg' }}
  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
/>`,
  },
  {
    id: 'underline-slide',
    name: 'Underline Slide',
    category: 'Hover & Micro',
    description: 'A link underline grows from the left on hover and leaves to the right.',
    duration: '0.35s',
    easing: 'cubic-bezier(.22,1,.36,1)',
    demo: 'link',
    interactive: 'Hover the links',
    className: 'ax-underline',
    css: `.ax-underline {
  background: linear-gradient(90deg, #FE8932, #CD1A30) no-repeat right bottom / 0 2px;
  transition: background-size 0.35s cubic-bezier(.22, 1, .36, 1);
  padding-bottom: 2px;
}

.ax-underline:hover {
  background-position: left bottom;
  background-size: 100% 2px;
}`,
    framer: `<motion.a initial="rest" whileHover="hover" animate="rest">
  Link
  <motion.span
    className="line"
    variants={{ rest: { scaleX: 0, originX: 1 }, hover: { scaleX: 1, originX: 0 } }}
    transition={{ duration: 0.35 }}
  />
</motion.a>`,
  },

  /* ══════ SCROLL ══════ */
  {
    id: 'scroll-reveal',
    name: 'Reveal on Scroll',
    category: 'Scroll',
    description: 'Elements fade up the moment they enter the viewport, using IntersectionObserver.',
    duration: '0.6s',
    easing: 'cubic-bezier(.22,1,.36,1)',
    demo: 'scroll',
    interactive: 'Scroll inside the stage',
    className: 'ax-reveal',
    css: `.ax-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s cubic-bezier(.22, 1, .36, 1),
              transform 0.6s cubic-bezier(.22, 1, .36, 1);
}
.ax-reveal.is-visible {
  opacity: 1;
  transform: none;
}

/* JavaScript */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible')
      io.unobserve(e.target)
    }
  })
}, { threshold: 0.2 })

document.querySelectorAll('.ax-reveal').forEach(el => io.observe(el))`,
    framer: `<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
/>`,
  },
]

/* All CSS concatenated. Injected once on the Animations page. */
export const allAnimationCss = animations.map(a => a.css.split('/* JavaScript')[0]).join('\n\n')

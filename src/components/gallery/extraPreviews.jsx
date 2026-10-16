/* ─────────────────────────────────────────────
   extraPreviews.jsx
   Previews for Pagination, Rating, Range Slider, File Upload,
   Stat Card and Command Palette × every style, all driven by
   the shared tokens in styleTokens.js
───────────────────────────────────────────── */
import { newStyleMap, getStyleTokens } from '../../data/styleTokens'

const scene = s => ({ background: s.bg, padding: 22, borderRadius: 16, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, fontFamily: s.font })
const panel = s => ({ background: s.card, border: s.border, borderRadius: s.radius, boxShadow: s.shadow, backdropFilter: s.blur ? 'blur(14px)' : 'none', WebkitBackdropFilter: s.blur ? 'blur(14px)' : 'none' })
const caps = (s, t) => (s.upper ? t.toUpperCase() : t)

const build = render => Object.fromEntries(Object.keys(newStyleMap).map(id => [id, render(getStyleTokens(id), id)]))

/* ── PAGINATION ── */
const paginationPreviews = build((s, id) => (
  <div key={id} style={{ ...scene(s), alignItems: 'center' }}>
    <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
      {['‹', '1', '2', '3', '4', '…', '12', '›'].map((p, i) => {
        const active = p === '3'
        return (
          <span key={i} style={{
            minWidth: 34, height: 34, padding: '0 6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: active ? 800 : 600,
            color: active ? s.onFill : p === '…' ? s.sub : s.text,
            background: active ? s.fill : p === '…' ? 'transparent' : s.card,
            border: p === '…' ? 'none' : active && id === 'cyberpunk' ? '1px solid #00ffff' : s.border,
            borderRadius: s.radius === 0 ? 0 : Math.min(s.radius, 10),
            boxShadow: p === '…' ? 'none' : active && id === 'neumorphism' ? 'inset 2px 2px 5px #b8bec7,inset -2px -2px 5px #fff' : s.shadow,
            backdropFilter: s.blur ? 'blur(10px)' : 'none',
          }}>{p}</span>
        )
      })}
    </div>
    <div style={{ fontSize: 11, color: s.sub }}>{caps(s, 'Showing 21–30 of 120 results')}</div>
  </div>
))

/* ── RATING ── */
const Star = ({ fill, stroke, size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" /></svg>
)
const starColor = (s, id) => (['cyberpunk', 'retro', 'brutalism', 'minimalism'].includes(id) ? s.accent : id === 'neumorphism' ? '#f5a623' : s.dark ? '#ffd166' : '#f5a623')

const ratingPreviews = build((s, id) => (
  <div key={id} style={{ ...scene(s), alignItems: 'center' }}>
    <div style={{ ...panel(s), padding: '16px 20px', width: '100%', maxWidth: 280 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{ fontSize: 30, fontWeight: 900, color: s.text, lineHeight: 1 }}>4.6</div>
        <div>
          <div style={{ display: 'flex', gap: 2 }}>
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill={i <= 4 ? starColor(s, id) : 'transparent'} stroke={starColor(s, id)} />)}
          </div>
          <div style={{ fontSize: 11, color: s.sub, marginTop: 2 }}>{caps(s, '1,284 reviews')}</div>
        </div>
      </div>
      {[[5, 72], [4, 18], [3, 6], [2, 3]].map(([n, pct]) => (
        <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 5 }}>
          <span style={{ fontSize: 10, color: s.sub, width: 10 }}>{n}</span>
          <div style={{ flex: 1, height: 6, borderRadius: s.radius === 0 ? 0 : 6, background: s.surface, border: id === 'brutalism' ? '1px solid #000' : 'none', overflow: 'hidden', boxShadow: s.insetShadow }}>
            <div style={{ width: `${pct}%`, height: '100%', background: starColor(s, id) }} />
          </div>
        </div>
      ))}
    </div>
  </div>
))

/* ── RANGE SLIDER ── */
function Track({ s, id, from = 0, to, label, value }) {
  const thumb = {
    position: 'absolute', top: '50%', width: 18, height: 18, marginTop: -9, marginLeft: -9,
    borderRadius: s.radius === 0 ? 0 : '50%',
    background: id === 'cyberpunk' ? '#050510' : id === 'brutalism' ? '#fff' : id === 'retro' ? '#1a0a00' : '#fff',
    border: id === 'cyberpunk' ? '2px solid #00ffff' : id === 'brutalism' ? '3px solid #000' : id === 'retro' ? '2px solid #ff6b35' : 'none',
    boxShadow: id === 'neumorphism' ? '3px 3px 6px #b8bec7,-3px -3px 6px #fff' : id === 'cyberpunk' ? '0 0 10px #00ffff' : '0 2px 6px rgba(0,0,0,0.25)',
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 10 }}>
        <span style={{ color: s.text, fontWeight: 700 }}>{caps(s, label)}</span>
        <span style={{ color: s.sub }}>{value}</span>
      </div>
      <div style={{ position: 'relative', height: 6, borderRadius: s.radius === 0 ? 0 : 6, background: s.surface, border: id === 'brutalism' ? '2px solid #000' : 'none', boxShadow: s.insetShadow }}>
        <div style={{ position: 'absolute', left: `${from}%`, width: `${to - from}%`, top: 0, bottom: 0, background: s.fill, borderRadius: 'inherit', boxShadow: id === 'cyberpunk' ? '0 0 8px #00ffff' : 'none' }} />
        {from > 0 && <span style={{ ...thumb, left: `${from}%` }} />}
        <span style={{ ...thumb, left: `${to}%` }} />
      </div>
    </div>
  )
}

const sliderPreviews = build((s, id) => (
  <div key={id} style={scene(s)}>
    <div style={{ ...panel(s), padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <Track s={s} id={id} to={64} label="Volume" value="64%" />
      <Track s={s} id={id} from={22} to={78} label="Price" value="$22 – $78" />
    </div>
  </div>
))

/* ── FILE UPLOAD ── */
const fileuploadPreviews = build((s, id) => (
  <div key={id} style={scene(s)}>
    <div style={{
      padding: '18px 14px', textAlign: 'center',
      border: id === 'neumorphism' ? 'none' : `2px dashed ${s.dark ? 'rgba(255,255,255,0.3)' : id === 'brutalism' ? '#000' : 'rgba(0,0,0,0.2)'}`,
      borderRadius: s.radius, background: s.surface, boxShadow: s.insetShadow,
    }}>
      <div style={{ width: 34, height: 34, margin: '0 auto 8px', borderRadius: s.radius === 0 ? 0 : '50%', display: 'grid', placeItems: 'center', background: s.fill, color: s.onFill, fontSize: 16, fontWeight: 900 }}>↑</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: s.text }}>{caps(s, 'Drop files here')}</div>
      <div style={{ fontSize: 11, color: s.sub, marginTop: 2 }}>or <span style={{ color: s.accent, textDecoration: 'underline', fontWeight: 700 }}>browse</span> · PNG, PDF up to 10MB</div>
    </div>
    <div style={{ ...panel(s), padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 28, height: 32, borderRadius: s.radius === 0 ? 0 : 5, background: s.surface, border: `1px solid ${s.line}`, fontSize: 8, fontWeight: 900, color: s.accent, display: 'grid', placeItems: 'center' }}>PDF</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: s.text, fontWeight: 600, marginBottom: 5 }}><span>{caps(s, 'brief.pdf')}</span><span style={{ color: s.sub }}>68%</span></div>
        <div style={{ height: 4, borderRadius: 4, background: s.surface, overflow: 'hidden' }}><div style={{ width: '68%', height: '100%', background: s.fill }} /></div>
      </div>
    </div>
  </div>
))

/* ── STAT CARD ── */
const spark = (up) => (up ? 'M0,26 L12,22 L24,24 L36,14 L48,17 L60,8 L72,10 L84,2' : 'M0,6 L12,10 L24,8 L36,16 L48,13 L60,20 L72,18 L84,26')

const statcardPreviews = build((s, id) => (
  <div key={id} style={{ ...scene(s), flexDirection: 'row', alignItems: 'center', gap: 12 }}>
    {[['Revenue', '$48.2k', '+12.5%', true], ['Churn', '2.4%', '-0.8%', false]].map(([label, val, delta, up]) => {
      const good = id === 'cyberpunk' ? '#00ffff' : id === 'retro' ? '#ff9d4d' : s.dark ? '#4ade80' : '#166534'
      const bad = id === 'cyberpunk' ? '#ff00ff' : s.dark ? '#f87171' : '#b91c1c'
      const tone = up ? good : bad
      return (
        <div key={label} style={{ ...panel(s), flex: 1, padding: '14px 14px 10px', minWidth: 0 }}>
          <div style={{ fontSize: 11, color: s.sub, fontWeight: 600, letterSpacing: s.upper ? 1 : 0 }}>{caps(s, label)}</div>
          <div style={{ fontSize: 24, fontWeight: 900, color: s.text, margin: '4px 0 2px', letterSpacing: '-0.02em' }}>{val}</div>
          <span style={{ fontSize: 11, fontWeight: 700, color: tone }}>{up ? '▲' : '▼'} {delta}</span>
          <svg viewBox="0 0 84 28" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 28, marginTop: 6 }} aria-hidden="true">
            <path d={spark(up)} fill="none" stroke={tone} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      )
    })}
  </div>
))

/* ── COMMAND PALETTE ── */
const commandpalettePreviews = build((s, id) => (
  <div key={id} style={{ ...scene(s), alignItems: 'center' }}>
    <div style={{ ...panel(s), width: '100%', maxWidth: 320, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 14px', borderBottom: `1px solid ${s.line}` }}>
        <span style={{ color: s.sub, fontSize: 13 }}>⌕</span>
        <span style={{ flex: 1, fontSize: 13, color: s.text }}>{caps(s, 'Search commands…')}</span>
        <span style={{ fontSize: 10, color: s.sub, padding: '2px 6px', border: `1px solid ${s.line}`, borderRadius: s.radius === 0 ? 0 : 5 }}>⌘K</span>
      </div>
      <div style={{ padding: 6 }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: s.sub, letterSpacing: 1, padding: '4px 8px', textTransform: 'uppercase' }}>Suggestions</div>
        {[['📄', 'New document', '⌘N'], ['🎨', 'Change theme', '⌘T'], ['⚙️', 'Open settings', '⌘,']].map(([icon, label, key], i) => (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', fontSize: 12,
            borderRadius: s.radius === 0 ? 0 : Math.min(s.radius, 8),
            background: i === 0 ? s.fill : 'transparent',
            color: i === 0 ? s.onFill : s.text, fontWeight: i === 0 ? 700 : 500,
            boxShadow: i === 0 && id === 'neumorphism' ? '2px 2px 5px #b8bec7,-2px -2px 5px #fff' : 'none',
          }}>
            <span style={{ fontSize: 13 }}>{icon}</span>
            <span style={{ flex: 1 }}>{caps(s, label)}</span>
            <span style={{ fontSize: 10, opacity: 0.6 }}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
))

export const extraPreviews = {
  pagination: paginationPreviews,
  rating: ratingPreviews,
  slider: sliderPreviews,
  fileupload: fileuploadPreviews,
  statcard: statcardPreviews,
  commandpalette: commandpalettePreviews,
}

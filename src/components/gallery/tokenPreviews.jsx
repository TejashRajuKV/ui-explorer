/* ─────────────────────────────────────────────
   tokenPreviews.jsx
   Previews rendered purely from the shared style tokens:
   • six more component types (date picker, carousel, chat,
     checkbox & radio, segmented control, empty state)
   • a fallback for the original hand-written components
     (button, card, input, login, pricing, modal, hero,
     navbar) so any newly added style renders everywhere
───────────────────────────────────────────── */
import { newStyleMap, getStyleTokens } from '../../data/styleTokens'

const scene = s => ({ background: s.bg, padding: 20, borderRadius: 16, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, fontFamily: s.font })
const panel = s => ({ background: s.card, border: s.border, borderRadius: s.radius, boxShadow: s.shadow, backdropFilter: s.blur ? 'blur(14px)' : 'none', WebkitBackdropFilter: s.blur ? 'blur(14px)' : 'none' })
const caps = (s, t) => (s.upper ? t.toUpperCase() : t)
const r = (s, max) => (s.radius === 0 ? 0 : Math.min(s.radius, max))
const btn = s => ({ padding: '9px 18px', background: s.fill, color: s.onFill, border: s.border === 'none' ? 'none' : s.border, borderRadius: r(s, 12), boxShadow: s.shadow, fontSize: 13, fontWeight: 700, fontFamily: s.font, textAlign: 'center', cursor: 'pointer' })
const ghostBtn = s => ({ padding: '9px 18px', background: 'transparent', color: s.text, border: `1px solid ${s.line}`, borderRadius: r(s, 12), fontSize: 13, fontWeight: 600, fontFamily: s.font, textAlign: 'center', cursor: 'pointer' })
const field = s => ({ padding: '9px 12px', background: s.surface, border: s.border === 'none' ? `1px solid ${s.line}` : s.border, borderRadius: r(s, 10), boxShadow: s.insetShadow, fontSize: 12, color: s.sub })
const bar = (s, w, strong) => ({ height: strong ? 10 : 7, width: w, borderRadius: 4, background: strong ? s.text : s.sub, opacity: strong ? 0.85 : 0.45 })

const build = render => Object.fromEntries(Object.keys(newStyleMap).map(id => [id, render(getStyleTokens(id), id)]))

/* ══════════════ NEW COMPONENT TYPES ══════════════ */

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
// September 2026 starts on a Tuesday (offset 1 with Monday-first weeks)
const CAL = Array.from({ length: 35 }, (_, i) => (i >= 1 && i <= 30 ? i : null))

const datepickerPreviews = build((s, id) => (
  <div key={id} style={{ ...scene(s), alignItems: 'center' }}>
    <div style={{ ...panel(s), padding: 12, width: 220 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, color: s.text, fontSize: 12, fontWeight: 700 }}>
        <span style={{ color: s.sub }}>‹</span>{caps(s, 'September 2026')}<span style={{ color: s.sub }}>›</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, textAlign: 'center' }}>
        {DAYS.map((d, i) => <span key={i} style={{ fontSize: 9, fontWeight: 700, color: s.sub, paddingBottom: 3 }}>{d}</span>)}
        {CAL.map((d, i) => {
          const sel = d === 17, today = d === 25
          return (
            <span key={i} style={{
              fontSize: 10, lineHeight: '22px', height: 22, borderRadius: s.radius === 0 ? 0 : 6,
              color: sel ? s.onFill : d ? s.text : 'transparent', fontWeight: sel ? 800 : 500,
              background: sel ? s.fill : 'transparent',
              boxShadow: today ? `inset 0 0 0 1.5px ${s.fill.includes('gradient') ? s.accent : s.fill}` : sel && id === 'neumorphism' ? 'inset 2px 2px 4px rgba(0,0,0,0.2)' : 'none',
            }}>{d || '.'}</span>
          )
        })}
      </div>
    </div>
  </div>
))

const carouselPreviews = build((s, id) => (
  <div key={id} style={scene(s)}>
    <div style={{ ...panel(s), padding: 10, position: 'relative' }}>
      <div style={{ height: 112, borderRadius: r(s, 12), overflow: 'hidden', position: 'relative', background: s.fill, display: 'flex', alignItems: 'flex-end', padding: 12 }}>
        <svg viewBox="0 0 200 80" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }} aria-hidden="true">
          <path d="M0,80 L0,50 L40,30 L75,52 L120,18 L160,44 L200,28 L200,80Z" fill={s.onFill} />
        </svg>
        <div style={{ position: 'relative', color: s.onFill }}>
          <div style={{ fontSize: 13, fontWeight: 800 }}>{caps(s, 'Golden hour')}</div>
          <div style={{ fontSize: 10, opacity: 0.8 }}>{caps(s, 'Slide 2 of 5')}</div>
        </div>
      </div>
      {['‹', '›'].map((a, i) => (
        <span key={a} style={{ position: 'absolute', top: 52, [i ? 'right' : 'left']: 2, width: 26, height: 26, display: 'grid', placeItems: 'center', borderRadius: s.radius === 0 ? 0 : '50%', background: s.card, border: s.border === 'none' ? `1px solid ${s.line}` : s.border, color: s.text, fontSize: 14, fontWeight: 700, boxShadow: s.shadow }}>{a}</span>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 9 }}>
        {[0, 1, 2, 3, 4].map(i => <span key={i} style={{ width: i === 1 ? 18 : 6, height: 6, borderRadius: s.radius === 0 ? 0 : 6, background: i === 1 ? s.fill : s.sub, opacity: i === 1 ? 1 : 0.4 }} />)}
      </div>
    </div>
  </div>
))

const chatPreviews = build((s, id) => (
  <div key={id} style={scene(s)}>
    <div style={{ ...panel(s), padding: 12, display: 'flex', flexDirection: 'column', gap: 7 }}>
      {[['in', 'Hey! Did the new palette ship? 🌅'], ['out', 'Yes — live on staging now'], ['in', 'Looks amazing 🔥']].map(([dir, text], i) => (
        <div key={i} style={{
          alignSelf: dir === 'out' ? 'flex-end' : 'flex-start', maxWidth: '78%', padding: '7px 11px', fontSize: 11, lineHeight: 1.4,
          borderRadius: s.radius === 0 ? 0 : dir === 'out' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
          background: dir === 'out' ? s.fill : s.surface, color: dir === 'out' ? s.onFill : s.text,
          border: dir === 'in' && s.border !== 'none' && id !== 'neo-brutalism' ? `1px solid ${s.line}` : id === 'neo-brutalism' || id === 'brutalism' ? '2px solid #111' : 'none',
          boxShadow: id === 'neumorphism' && dir === 'in' ? s.insetShadow : 'none',
        }}>{caps(s, text)}</div>
      ))}
      <div style={{ display: 'flex', gap: 6, marginTop: 3 }}>
        <div style={{ ...field(s), flex: 1, padding: '6px 10px', fontSize: 11 }}>{caps(s, 'Type a message…')}</div>
        <span style={{ ...btn(s), padding: '6px 11px', fontSize: 12 }}>➤</span>
      </div>
    </div>
  </div>
))

function Check({ s, id, on, radio }) {
  const round = radio ? '50%' : r(s, 5)
  return (
    <span style={{
      width: 16, height: 16, flexShrink: 0, borderRadius: s.radius === 0 && !radio ? 0 : round, display: 'grid', placeItems: 'center',
      background: on && !radio ? s.fill : id === 'neumorphism' ? s.card : s.surface,
      border: on && !radio ? 'none' : `1.5px solid ${id === 'brutalism' || id === 'neo-brutalism' ? '#111' : s.sub}`,
      boxShadow: id === 'neumorphism' ? s.insetShadow : 'none', color: s.onFill, fontSize: 10, fontWeight: 900,
    }}>
      {on && (radio ? <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.fill }} /> : '✓')}
    </span>
  )
}

const checkboxPreviews = build((s, id) => (
  <div key={id} style={{ ...scene(s), flexDirection: 'row', alignItems: 'stretch', gap: 10 }}>
    {[['Notifications', false, [['Email', true], ['Push', true], ['SMS', false]]], ['Frequency', true, [['Daily', false], ['Weekly', true], ['Never', false]]]].map(([title, radio, items]) => (
      <div key={title} style={{ ...panel(s), flex: 1, padding: 12, minWidth: 0 }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: s.sub, letterSpacing: 0.6, marginBottom: 9, textTransform: 'uppercase' }}>{title}</div>
        {items.map(([label, on]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 12, color: s.text, fontWeight: on ? 700 : 500 }}>
            <Check s={s} id={id} on={on} radio={radio} />{caps(s, label)}
          </div>
        ))}
      </div>
    ))}
  </div>
))

const segmentedPreviews = build((s, id) => (
  <div key={id} style={{ ...scene(s), alignItems: 'center', gap: 16 }}>
    {[['Day', 'Week', 'Month', 'Year'], ['☰ List', '▦ Grid']].map((opts, gi) => (
      <div key={gi} style={{ display: 'inline-flex', padding: 3, gap: 2, background: s.surface, border: s.border === 'none' ? `1px solid ${s.line}` : s.border, borderRadius: r(s, 12), boxShadow: s.insetShadow }}>
        {opts.map((o, i) => {
          const on = i === 1 - gi
          return (
            <span key={o} style={{
              padding: '6px 13px', fontSize: 12, fontWeight: on ? 700 : 500, borderRadius: r(s, 9),
              background: on ? s.fill : 'transparent', color: on ? s.onFill : s.sub,
              boxShadow: on ? (id === 'neumorphism' ? '2px 2px 5px #b8bec7,-2px -2px 5px #fff' : s.shadow) : 'none',
              border: on && (id === 'brutalism' || id === 'neo-brutalism') ? '2px solid #111' : 'none',
            }}>{caps(s, o)}</span>
          )
        })}
      </div>
    ))}
  </div>
))

const emptystatePreviews = build((s, id) => (
  <div key={id} style={{ ...scene(s), alignItems: 'center' }}>
    <div style={{ ...panel(s), padding: '18px 20px', width: '100%', maxWidth: 260, textAlign: 'center' }}>
      <div style={{ width: 46, height: 46, margin: '0 auto 10px', borderRadius: s.radius === 0 ? 0 : '50%', display: 'grid', placeItems: 'center', background: s.surface, border: `2px dashed ${s.sub}`, color: s.sub, fontSize: 20 }}>＋</div>
      <div style={{ fontSize: 14, fontWeight: 800, color: s.text, marginBottom: 4 }}>{caps(s, 'No projects yet')}</div>
      <div style={{ fontSize: 11, color: s.sub, lineHeight: 1.5, marginBottom: 12 }}>{caps(s, 'Create your first project to get started.')}</div>
      <span style={{ ...btn(s), display: 'inline-block', padding: '7px 16px', fontSize: 12 }}>{caps(s, 'New project')}</span>
    </div>
  </div>
))

export const tokenComponentPreviews = {
  datepicker: datepickerPreviews,
  carousel: carouselPreviews,
  chat: chatPreviews,
  checkbox: checkboxPreviews,
  segmented: segmentedPreviews,
  emptystate: emptystatePreviews,
}

/* ══════════════ FALLBACKS FOR HAND-WRITTEN COMPONENTS ══════════════ */

const fallbacks = {
  button: s => (
    <div style={{ ...scene(s), flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      <span style={btn(s)}>{caps(s, 'Primary')}</span>
      <span style={{ ...ghostBtn(s), background: s.card, boxShadow: s.shadow }}>{caps(s, 'Secondary')}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: s.accent, textDecoration: 'underline', textUnderlineOffset: 4, fontFamily: s.font }}>{caps(s, 'Ghost')}</span>
    </div>
  ),
  card: s => (
    <div style={{ ...scene(s), alignItems: 'center' }}>
      <div style={{ ...panel(s), padding: 16, width: '100%', maxWidth: 250, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ width: 34, height: 34, borderRadius: r(s, 10), background: s.fill }} />
        <div style={{ fontSize: 14, fontWeight: 800, color: s.text }}>{caps(s, 'Card title')}</div>
        <div style={bar(s, '90%')} /><div style={bar(s, '65%')} />
        <span style={{ ...btn(s), marginTop: 4, padding: '7px 12px', fontSize: 12 }}>{caps(s, 'Explore →')}</span>
      </div>
    </div>
  ),
  input: s => (
    <div style={scene(s)}>
      <div style={{ ...panel(s), padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['Email address', 'Password'].map(l => (
          <div key={l}>
            <div style={{ fontSize: 10, fontWeight: 700, color: s.text, marginBottom: 4 }}>{caps(s, l)}</div>
            <div style={field(s)}>{l === 'Password' ? '••••••••' : caps(s, 'you@example.com')}</div>
          </div>
        ))}
        <span style={{ ...btn(s), marginTop: 2, padding: '8px' }}>{caps(s, 'Sign in')}</span>
      </div>
    </div>
  ),
  pricing: s => (
    <div style={{ ...scene(s), alignItems: 'center' }}>
      <div style={{ ...panel(s), padding: 16, width: '100%', maxWidth: 230 }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1, color: s.accent, textTransform: 'uppercase' }}>Pro</div>
        <div style={{ fontSize: 26, fontWeight: 900, color: s.text, margin: '2px 0 8px' }}>$29<span style={{ fontSize: 12, fontWeight: 500, color: s.sub }}>/mo</span></div>
        {['Unlimited projects', 'Priority support', 'Analytics'].map(f => (
          <div key={f} style={{ display: 'flex', gap: 7, alignItems: 'center', fontSize: 11, color: s.text, marginBottom: 5 }}>
            <span style={{ color: s.fill.includes('gradient') ? s.accent : s.fill === s.card ? s.accent : s.fill, fontWeight: 900 }}>✓</span>{caps(s, f)}
          </div>
        ))}
        <span style={{ ...btn(s), display: 'block', marginTop: 8, padding: '8px' }}>{caps(s, 'Get started')}</span>
      </div>
    </div>
  ),
  modal: s => (
    <div style={{ ...scene(s), position: 'relative', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 16, background: s.dark ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.18)' }} />
      <div style={{ ...panel(s), position: 'relative', padding: 16, width: '100%', maxWidth: 250, background: s.card.includes('rgba') ? (s.dark ? '#141a30' : '#fff') : s.card }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 800, color: s.text, marginBottom: 6 }}>{caps(s, 'Delete project?')}<span style={{ color: s.sub }}>×</span></div>
        <div style={{ fontSize: 11, color: s.sub, lineHeight: 1.5, marginBottom: 12 }}>{caps(s, 'This action cannot be undone.')}</div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <span style={{ ...ghostBtn(s), padding: '7px 12px', fontSize: 12 }}>{caps(s, 'Cancel')}</span>
          <span style={{ ...btn(s), padding: '7px 12px', fontSize: 12 }}>{caps(s, 'Delete')}</span>
        </div>
      </div>
    </div>
  ),
  hero: s => (
    <div style={{ ...scene(s), alignItems: 'flex-start', padding: 24 }}>
      <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: s.radius === 0 ? 0 : 100, background: s.surface, color: s.accent, border: s.border === 'none' ? 'none' : `1px solid ${s.line}` }}>{caps(s, '✦ New release')}</span>
      <div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.1, color: s.text, letterSpacing: s.upper ? 0 : '-0.02em' }}>{caps(s, 'Build interfaces')}<br />{caps(s, 'people remember.')}</div>
      <div style={{ fontSize: 11, color: s.sub }}>{caps(s, 'Ship faster with ready-made components.')}</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <span style={btn(s)}>{caps(s, 'Get started')}</span>
        <span style={ghostBtn(s)}>{caps(s, 'Docs')}</span>
      </div>
    </div>
  ),
  navbar: s => (
    <div style={{ ...scene(s), justifyContent: 'flex-start' }}>
      <div style={{ ...panel(s), padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 22, height: 22, borderRadius: r(s, 7), background: s.fill }} />
        <span style={{ fontSize: 13, fontWeight: 900, color: s.text, marginRight: 'auto' }}>{caps(s, 'Brand')}</span>
        {['Work', 'About'].map((l, i) => <span key={l} style={{ fontSize: 11, fontWeight: i ? 500 : 700, color: i ? s.sub : s.text }}>{caps(s, l)}</span>)}
        <span style={{ ...btn(s), padding: '5px 10px', fontSize: 11 }}>{caps(s, 'Join')}</span>
      </div>
      <div style={{ ...bar(s, '55%', true), marginTop: 12 }} />
      <div style={bar(s, '80%')} /><div style={bar(s, '70%')} />
    </div>
  ),
}
fallbacks.login = fallbacks.input

/** Token-based preview for components without a hand-written entry for this style */
export function tokenFallbackPreview(componentId, styleId) {
  const render = fallbacks[componentId]
  return render && newStyleMap[styleId] ? render(getStyleTokens(styleId)) : null
}

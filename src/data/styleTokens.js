/* ─────────────────────────────────────────────
   styleTokens.js
   Shared per-style design tokens used by the generated
   component previews and their copy-ready code.
───────────────────────────────────────────── */

export const newStyleMap = {
  glassmorphism: { bg:'linear-gradient(135deg,#6c63ff,#ff6584)', card:'rgba(255,255,255,0.13)', border:'1px solid rgba(255,255,255,0.28)', radius:12, text:'#fff', sub:'rgba(255,255,255,0.6)', pill:'rgba(255,255,255,0.18)', accent:'#fff', shadow:'none', blur:true, font:'inherit', dark:true },
  neumorphism:   { bg:'#e0e5ec', card:'#e0e5ec', border:'none', radius:12, text:'#333', sub:'#566170', pill:'#e0e5ec', accent:'#6c63ff', shadow:'4px 4px 10px #b8bec7,-4px -4px 10px #fff', blur:false, font:'inherit', dark:false },
  minimalism:    { bg:'#fff', card:'#fff', border:'1px solid #e0e0e0', radius:4, text:'#111', sub:'#777', pill:'#111', accent:'#111', shadow:'none', blur:false, font:'inherit', dark:false },
  brutalism:     { bg:'#f5f500', card:'#fff', border:'3px solid #000', radius:0, text:'#000', sub:'#333', pill:'#000', accent:'#000', shadow:'4px 4px 0 #000', blur:false, font:'monospace', dark:false },
  'material-design': { bg:'#f5f5f5', card:'#fff', border:'none', radius:6, text:'#1a1a1a', sub:'#757575', pill:'#6200ee', accent:'#6200ee', shadow:'0 2px 8px rgba(0,0,0,0.12)', blur:false, font:'inherit', dark:false },
  'fluent-design':{ bg:'linear-gradient(135deg,#0078d4,#005a9e)', card:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', radius:6, text:'#fff', sub:'rgba(255,255,255,0.55)', pill:'#0078d4', accent:'#fff', shadow:'0 2px 8px rgba(0,0,0,0.15)', blur:true, font:'inherit', dark:true },
  'bento-ui':    { bg:'#0f0f1a', card:'#1a1a2e', border:'1px solid rgba(255,255,255,0.08)', radius:10, text:'rgba(255,255,255,0.9)', sub:'rgba(255,255,255,0.38)', pill:'linear-gradient(135deg,#6c63ff,#ff6584)', accent:'#a78bfa', shadow:'none', blur:false, font:'inherit', dark:true },
  claymorphism:  { bg:'#f5f8ff', card:'#d8ecf7', border:'none', radius:18, text:'#1a5276', sub:'rgba(26,82,118,0.65)', pill:'#a8d8ea', accent:'#1a5276', shadow:'0 10px 20px rgba(47,127,166,0.22),inset -4px -4px 8px rgba(26,92,122,0.15),inset 4px 4px 8px rgba(255,255,255,0.8)', blur:false, font:'inherit', dark:false },
  skeuomorphism: { bg:'linear-gradient(180deg,#c9a96e,#8B6914)', card:'linear-gradient(180deg,#f5e6c3,#e8d4a0)', border:'1px solid #c4a054', radius:4, text:'#5a3e0a', sub:'rgba(90,62,10,0.55)', pill:'linear-gradient(180deg,#4a8c3f,#2d6b22)', accent:'#5a3e0a', shadow:'2px 2px 4px rgba(0,0,0,0.3)', blur:false, font:'inherit', dark:false },
  cyberpunk:     { bg:'#050510', card:'#050510', border:'1px solid #00ffff', radius:0, text:'#00ffff', sub:'rgba(0,255,255,0.5)', pill:'transparent', accent:'#00ffff', shadow:'0 0 8px rgba(0,255,255,0.4)', blur:false, font:'monospace', dark:true },
  retro:         { bg:'#1a0a00', card:'#1a0a00', border:'2px solid #ff9d4d', radius:0, text:'#ff6b35', sub:'#d9804a', pill:'#ff6b35', accent:'#ff6b35', shadow:'3px 3px 0 #ff9d4d', blur:false, font:'monospace', dark:true },
  'dark-ui':     { bg:'#0a0a0f', card:'#1a1a2e', border:'1px solid rgba(255,255,255,0.08)', radius:10, text:'rgba(255,255,255,0.9)', sub:'rgba(255,255,255,0.38)', pill:'linear-gradient(135deg,#6c63ff,#9b5de5)', accent:'#a78bfa', shadow:'0 0 14px rgba(108,99,255,0.2)', blur:false, font:'inherit', dark:true },
  'light-ui':    { bg:'#f8f9ff', card:'#fff', border:'1px solid rgba(0,0,0,0.07)', radius:10, text:'#1a1a2e', sub:'#777', pill:'#3f51b5', accent:'#3f51b5', shadow:'0 2px 10px rgba(63,81,181,0.15)', blur:false, font:'inherit', dark:false },
  'gradient-ui': { bg:'radial-gradient(circle at 0% 0%,rgba(65,88,208,0.45),transparent 55%),radial-gradient(circle at 100% 100%,rgba(255,204,112,0.35),transparent 55%),#140b2e', card:'#1c1240', border:'1px solid rgba(200,80,192,0.4)', radius:12, text:'#fff', sub:'rgba(255,255,255,0.6)', pill:'linear-gradient(135deg,#4158D0,#C850C0,#FFCC70)', accent:'#fff', shadow:'0 6px 18px rgba(200,80,192,0.3)', blur:false, font:'inherit', dark:true },
  'neo-brutalism': { bg:'#fdf6e3', card:'#ffffff', border:'3px solid #111', radius:10, text:'#111', sub:'#3f3f46', pill:'#ff90e8', accent:'#111', shadow:'4px 4px 0 #111', blur:false, font:'inherit', dark:false },
  'aurora-ui':   { bg:'radial-gradient(at 18% 20%,rgba(56,189,248,0.55),transparent 50%),radial-gradient(at 82% 25%,rgba(168,85,247,0.55),transparent 50%),radial-gradient(at 50% 95%,rgba(52,211,153,0.45),transparent 55%),#0b1020', card:'rgba(15,20,40,0.55)', border:'1px solid rgba(255,255,255,0.12)', radius:16, text:'#f1f5ff', sub:'rgba(226,232,255,0.72)', pill:'linear-gradient(135deg,#38bdf8,#a855f7)', accent:'#a5f3fc', shadow:'0 10px 30px rgba(56,189,248,0.18)', blur:true, font:'inherit', dark:true },
  'swiss-design': { bg:'#ffffff', card:'#f2f2f2', border:'none', radius:0, text:'#111', sub:'#555', pill:'#e3000f', accent:'#e3000f', shadow:'none', blur:false, font:"'Helvetica Neue',Helvetica,Arial,sans-serif", dark:false },
  y2k:           { bg:'linear-gradient(135deg,#c9d6ff 0%,#f8c8ff 50%,#bdf6ff 100%)', card:'linear-gradient(180deg,#ffffff,#e4e9f5)', border:'1px solid #9aa7c7', radius:20, text:'#2b2d6e', sub:'#4e5188', pill:'linear-gradient(180deg,#6fb6ff,#1f5fe0)', accent:'#3b37c4', shadow:'inset 0 2px 0 rgba(255,255,255,0.9),0 6px 16px rgba(58,141,255,0.3)', blur:false, font:"'Trebuchet MS',Verdana,sans-serif", dark:false },
}

/* Text colour that reads on top of each style's `pill` fill */
const onFillMap = {
  glassmorphism: '#fff', neumorphism: '#fff', minimalism: '#fff', brutalism: '#f5f500',
  'material-design': '#fff', 'fluent-design': '#fff', 'bento-ui': '#fff', claymorphism: '#1a5276',
  skeuomorphism: '#e8f5e0', cyberpunk: '#050510', retro: '#1a0a00', 'dark-ui': '#fff',
  'light-ui': '#fff', 'gradient-ui': '#fff',
  'neo-brutalism': '#111', 'aurora-ui': '#fff', 'swiss-design': '#fff', y2k: '#fff',
}

/**
 * Tokens plus a few derived values:
 *  fill    — solid accent fill (tracks, active states)
 *  onFill  — readable text on `fill`
 *  onPill  — readable text on `pill`
 *  surface — subtle inset surface for fields/rows
 *  line    — hairline divider colour
 */
export function getStyleTokens(styleId) {
  const s = newStyleMap[styleId] || newStyleMap.glassmorphism
  const fill = styleId === 'neumorphism' ? s.accent : styleId === 'cyberpunk' ? '#00ffff' : s.pill
  return {
    ...s,
    fill,
    onFill: onFillMap[styleId] || '#fff',
    // Text on `pill`. Where pill and accent are the same colour (e.g. minimalism #111 on #111) use onFill instead
    onPill: ['glassmorphism', 'neumorphism', 'fluent-design', 'claymorphism', 'cyberpunk', 'gradient-ui'].includes(styleId) ? s.accent : (onFillMap[styleId] || '#fff'),
    surface: styleId === 'brutalism' ? '#fff' : s.dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
    line: s.dark ? 'rgba(255,255,255,0.1)' : styleId === 'brutalism' ? '#000' : 'rgba(0,0,0,0.08)',
    insetShadow: styleId === 'neumorphism' ? 'inset 3px 3px 7px #b8bec7,inset -3px -3px 7px #fff' : 'none',
    upper: s.font === 'monospace',
  }
}

/* Styles whose generated code should use light-on-dark text */
export const DARK_STYLES = ['glassmorphism', 'bento-ui', 'dark-ui', 'cyberpunk', 'retro', 'gradient-ui', 'fluent-design', 'skeuomorphism', 'aurora-ui']
/* Styles that use a monospace, uppercase voice */
export const MONO_STYLES = ['brutalism', 'cyberpunk', 'retro']

/* Entry for the badge/toggle/avatar/progress maps, derived from tokens
   for styles that don't have a hand-tuned one */
export function badgeTokens(styleId) {
  const t = getStyleTokens(styleId)
  return {
    bg: t.bg, pillBg: t.pill, border: t.border, shadow: t.shadow, color: t.onPill,
    label: t.text, // readable text directly on `bg`
    radius: t.radius === 0 ? 0 : 100, font: t.font,
    ...(t.upper ? { textTransform: 'uppercase' } : {}),
  }
}

/* Fills any style missing from a hand-written map with token-derived values */
export function withAllStyles(map) {
  for (const id of Object.keys(newStyleMap)) if (!map[id]) map[id] = badgeTokens(id)
  return map
}

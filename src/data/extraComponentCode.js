/* ─────────────────────────────────────────────
   extraComponentCode.js
   Copy-ready HTML + CSS + Tailwind generated from the shared
   tokens in styleTokens.js: the newer component types, plus a
   token version of the original components for any style that
   has no hand-written snippet
───────────────────────────────────────────── */
import { getStyleTokens } from './styleTokens'

const px = v => (typeof v === 'number' ? `${v}px` : v)
/* Tailwind arbitrary values can't contain spaces */
const tw = v => String(v).replace(/,\s+/g, ',').replace(/\s+/g, '_')
const blur = s => (s.blur ? '\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);' : '')
const font = s => (s.font === 'monospace' ? '\n  font-family: monospace;\n  text-transform: uppercase;' : '')
const small = s => (s.radius === 0 ? 0 : Math.min(s.radius, 10))

const sceneCss = (cls, s) => `.${cls} {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  background: ${s.bg};
  border-radius: 16px;${font(s)}
}`

const panelCss = (cls, s) => `.${cls} {
  background: ${s.card};
  border: ${s.border};
  border-radius: ${px(s.radius)};
  box-shadow: ${s.shadow};${blur(s)}
}`

const twScene = s => `flex flex-col gap-3.5 p-6 rounded-2xl bg-[${tw(s.bg)}]${s.font === 'monospace' ? ' font-mono uppercase' : ''}`
const twPanel = s => `bg-[${tw(s.card)}] ${s.border === 'none' ? 'border-0' : `[border:${tw(s.border)}]`} rounded-[${px(s.radius)}] shadow-[${tw(s.shadow)}]${s.blur ? ' backdrop-blur-md' : ''}`

function pagination(s) {
  return {
    html: `<nav class="pager-scene" aria-label="Pagination">
  <div class="pager">
    <a class="page" href="#" aria-label="Previous">‹</a>
    <a class="page" href="#">1</a>
    <a class="page" href="#">2</a>
    <a class="page active" href="#" aria-current="page">3</a>
    <a class="page" href="#">4</a>
    <span class="gap">…</span>
    <a class="page" href="#">12</a>
    <a class="page" href="#" aria-label="Next">›</a>
  </div>
  <p class="pager-info">Showing 21–30 of 120 results</p>
</nav>`,
    css: `${sceneCss('pager-scene', s)}
.pager-scene { align-items: center; }

.pager { display: flex; gap: 6px; align-items: center; }

.page {
  min-width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: ${s.text};
  text-decoration: none;
  background: ${s.card};
  border: ${s.border};
  border-radius: ${small(s)}px;
  box-shadow: ${s.shadow};
  transition: transform 0.15s ease;
}
.page:hover { transform: translateY(-1px); }

.page.active {
  background: ${s.fill};
  color: ${s.onFill};
  font-weight: 800;
}

.gap { color: ${s.sub}; padding: 0 4px; }
.pager-info { font-size: 11px; color: ${s.sub}; }`,
    tailwind: `<nav class="${twScene(s)} items-center">
  <div class="flex gap-1.5 items-center">
    <a class="min-w-[34px] h-[34px] inline-flex items-center justify-center text-[13px] font-semibold text-[${tw(s.text)}] ${twPanel(s)}" href="#">‹</a>
    <a class="min-w-[34px] h-[34px] inline-flex items-center justify-center text-[13px] font-semibold text-[${tw(s.text)}] ${twPanel(s)}" href="#">2</a>
    <a class="min-w-[34px] h-[34px] inline-flex items-center justify-center text-[13px] font-extrabold bg-[${tw(s.fill)}] text-[${tw(s.onFill)}] rounded-[${small(s)}px]" href="#">3</a>
    <span class="text-[${tw(s.sub)}] px-1">…</span>
    <a class="min-w-[34px] h-[34px] inline-flex items-center justify-center text-[13px] font-semibold text-[${tw(s.text)}] ${twPanel(s)}" href="#">›</a>
  </div>
  <p class="text-[11px] text-[${tw(s.sub)}]">Showing 21–30 of 120 results</p>
</nav>`,
  }
}

function rating(s) {
  return {
    html: `<div class="rating-scene">
  <div class="rating-card">
    <div class="rating-head">
      <span class="rating-score">4.6</span>
      <div>
        <div class="stars" aria-label="4 out of 5 stars">★★★★<span class="off">★</span></div>
        <small>1,284 reviews</small>
      </div>
    </div>
    <div class="bar"><span>5</span><div><i style="width:72%"></i></div></div>
    <div class="bar"><span>4</span><div><i style="width:18%"></i></div></div>
    <div class="bar"><span>3</span><div><i style="width:6%"></i></div></div>
  </div>
</div>`,
    css: `${sceneCss('rating-scene', s)}
.rating-scene { align-items: center; }

${panelCss('rating-card', s)}
.rating-card { padding: 16px 20px; width: 100%; max-width: 280px; }

.rating-head { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.rating-score { font-size: 30px; font-weight: 900; color: ${s.text}; }
.rating-head small { font-size: 11px; color: ${s.sub}; }

.stars { color: #f5a623; letter-spacing: 2px; }
.stars .off { opacity: 0.3; }

.bar { display: flex; align-items: center; gap: 8px; margin-top: 5px; font-size: 10px; color: ${s.sub}; }
.bar div { flex: 1; height: 6px; border-radius: 6px; background: ${s.surface}; overflow: hidden; }
.bar i { display: block; height: 100%; background: #f5a623; }`,
    tailwind: `<div class="${twScene(s)} items-center">
  <div class="${twPanel(s)} p-4 px-5 w-full max-w-[280px]">
    <div class="flex items-center gap-3 mb-3">
      <span class="text-3xl font-black text-[${tw(s.text)}]">4.6</span>
      <div>
        <div class="text-[#f5a623] tracking-widest">★★★★<span class="opacity-30">★</span></div>
        <small class="text-[11px] text-[${tw(s.sub)}]">1,284 reviews</small>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-1 text-[10px] text-[${tw(s.sub)}]">
      <span>5</span>
      <div class="flex-1 h-1.5 rounded-full bg-[${tw(s.surface)}] overflow-hidden"><i class="block h-full w-[72%] bg-[#f5a623]"></i></div>
    </div>
  </div>
</div>`,
  }
}

function slider(s) {
  return {
    html: `<div class="slider-scene">
  <div class="slider-card">
    <label class="slider-label">
      <span>Volume</span><output>64%</output>
    </label>
    <input class="range" type="range" min="0" max="100" value="64"
      style="--val: 64%" oninput="this.style.setProperty('--val', this.value + '%')" />
  </div>
</div>`,
    css: `${sceneCss('slider-scene', s)}

${panelCss('slider-card', s)}
.slider-card { padding: 18px 20px; }

.slider-label { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 12px; }
.slider-label span { color: ${s.text}; font-weight: 700; }
.slider-label output { color: ${s.sub}; }

.range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: ${s.radius === 0 ? 0 : 6}px;
  background: linear-gradient(${s.fill}, ${s.fill}) 0 / var(--val) 100% no-repeat, ${s.surface};
  box-shadow: ${s.insetShadow};
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: ${s.radius === 0 ? 0 : '50%'};
  background: #fff;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.range::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: ${s.radius === 0 ? 0 : '50%'};
  background: #fff;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}`,
    tailwind: `<div class="${twScene(s)}">
  <div class="${twPanel(s)} p-5">
    <label class="flex justify-between text-xs mb-3">
      <span class="font-bold text-[${tw(s.text)}]">Volume</span>
      <output class="text-[${tw(s.sub)}]">64%</output>
    </label>
    <input type="range" value="64" class="w-full h-1.5 appearance-none rounded-full bg-[${tw(s.surface)}] accent-[${tw(s.fill)}]" />
  </div>
</div>`,
  }
}

function fileupload(s) {
  return {
    html: `<div class="upload-scene">
  <label class="dropzone">
    <input type="file" hidden multiple />
    <span class="drop-icon">↑</span>
    <strong>Drop files here</strong>
    <small>or <u>browse</u> · PNG, PDF up to 10MB</small>
  </label>
  <div class="file-row">
    <span class="file-type">PDF</span>
    <div class="file-info">
      <div class="file-name"><span>brief.pdf</span><span>68%</span></div>
      <div class="file-bar"><i style="width:68%"></i></div>
    </div>
  </div>
</div>`,
    css: `${sceneCss('upload-scene', s)}

.dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 18px 14px;
  text-align: center;
  cursor: pointer;
  border: 2px dashed ${s.dark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'};
  border-radius: ${px(s.radius)};
  background: ${s.surface};
  transition: border-color 0.2s ease;
}
.dropzone:hover { border-color: ${s.accent}; }
.dropzone strong { font-size: 13px; color: ${s.text}; }
.dropzone small { font-size: 11px; color: ${s.sub}; }
.dropzone u { color: ${s.accent}; font-weight: 700; }

.drop-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: ${s.radius === 0 ? 0 : '50%'};
  background: ${s.fill};
  color: ${s.onFill};
  font-weight: 900;
}

${panelCss('file-row', s)}
.file-row { display: flex; align-items: center; gap: 10px; padding: 10px 12px; }
.file-type { font-size: 8px; font-weight: 900; color: ${s.accent}; padding: 9px 5px; border: 1px solid ${s.line}; border-radius: 5px; }
.file-info { flex: 1; }
.file-name { display: flex; justify-content: space-between; font-size: 11px; color: ${s.text}; margin-bottom: 5px; }
.file-bar { height: 4px; border-radius: 4px; background: ${s.surface}; overflow: hidden; }
.file-bar i { display: block; height: 100%; background: ${s.fill}; }`,
    tailwind: `<div class="${twScene(s)}">
  <label class="flex flex-col items-center gap-1 p-5 text-center cursor-pointer border-2 border-dashed ${s.dark ? 'border-white/30' : 'border-black/20'} rounded-[${px(s.radius)}] bg-[${tw(s.surface)}] hover:border-[${tw(s.accent)}]">
    <input type="file" hidden />
    <span class="w-9 h-9 grid place-items-center rounded-full bg-[${tw(s.fill)}] text-[${tw(s.onFill)}] font-black">↑</span>
    <strong class="text-[13px] text-[${tw(s.text)}]">Drop files here</strong>
    <small class="text-[11px] text-[${tw(s.sub)}]">or <u class="text-[${tw(s.accent)}] font-bold">browse</u></small>
  </label>
</div>`,
  }
}

function statcard(s) {
  const good = s.dark ? '#4ade80' : '#166534'
  return {
    html: `<div class="stat-scene">
  <div class="stat-card">
    <span class="stat-label">Revenue</span>
    <strong class="stat-value">$48.2k</strong>
    <span class="stat-delta up">▲ +12.5%</span>
    <svg class="spark" viewBox="0 0 84 28" preserveAspectRatio="none">
      <path d="M0,26 L12,22 L24,24 L36,14 L48,17 L60,8 L72,10 L84,2" />
    </svg>
  </div>
</div>`,
    css: `${sceneCss('stat-scene', s)}
.stat-scene { flex-direction: row; }

${panelCss('stat-card', s)}
.stat-card { flex: 1; display: flex; flex-direction: column; padding: 14px 14px 10px; }

.stat-label { font-size: 11px; font-weight: 600; color: ${s.sub}; }
.stat-value { font-size: 24px; font-weight: 900; color: ${s.text}; letter-spacing: -0.02em; margin: 4px 0 2px; }
.stat-delta { font-size: 11px; font-weight: 700; }
.stat-delta.up   { color: ${good}; }
.stat-delta.down { color: ${s.dark ? '#f87171' : '#b91c1c'}; }

.spark { width: 100%; height: 28px; margin-top: 6px; }
.spark path {
  fill: none;
  stroke: ${good};
  stroke-width: 2;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}`,
    tailwind: `<div class="${twScene(s)} flex-row">
  <div class="${twPanel(s)} flex-1 flex flex-col p-3.5 pb-2.5">
    <span class="text-[11px] font-semibold text-[${tw(s.sub)}]">Revenue</span>
    <strong class="text-2xl font-black tracking-tight text-[${tw(s.text)}] mt-1">$48.2k</strong>
    <span class="text-[11px] font-bold text-[${good}]">▲ +12.5%</span>
    <svg class="w-full h-7 mt-1.5" viewBox="0 0 84 28" preserveAspectRatio="none">
      <path d="M0,26 L12,22 L24,24 L36,14 L48,17 L60,8 L72,10 L84,2" fill="none" stroke="${good}" stroke-width="2" vector-effect="non-scaling-stroke" />
    </svg>
  </div>
</div>`,
  }
}

function commandpalette(s) {
  return {
    html: `<div class="cmdk-scene">
  <div class="cmdk" role="dialog" aria-label="Command palette">
    <div class="cmdk-search">
      <span>⌕</span>
      <input placeholder="Search commands…" />
      <kbd>⌘K</kbd>
    </div>
    <div class="cmdk-list" role="listbox">
      <div class="cmdk-group">Suggestions</div>
      <div class="cmdk-item active" role="option" aria-selected="true">📄 New document <kbd>⌘N</kbd></div>
      <div class="cmdk-item" role="option">🎨 Change theme <kbd>⌘T</kbd></div>
      <div class="cmdk-item" role="option">⚙️ Open settings <kbd>⌘,</kbd></div>
    </div>
  </div>
</div>`,
    css: `${sceneCss('cmdk-scene', s)}
.cmdk-scene { align-items: center; }

${panelCss('cmdk', s)}
.cmdk { width: 100%; max-width: 320px; overflow: hidden; }

.cmdk-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  border-bottom: 1px solid ${s.line};
  color: ${s.sub};
}
.cmdk-search input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 13px;
  color: ${s.text};
}

.cmdk kbd {
  margin-left: auto;
  font-size: 10px;
  padding: 2px 6px;
  border: 1px solid ${s.line};
  border-radius: 5px;
  opacity: 0.7;
}

.cmdk-list { padding: 6px; }
.cmdk-group { font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: ${s.sub}; padding: 4px 8px; }

.cmdk-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  font-size: 12px;
  color: ${s.text};
  border-radius: ${small(s)}px;
  cursor: pointer;
}
.cmdk-item.active,
.cmdk-item:hover {
  background: ${s.fill};
  color: ${s.onFill};
  font-weight: 700;
}`,
    tailwind: `<div class="${twScene(s)} items-center">
  <div class="${twPanel(s)} w-full max-w-[320px] overflow-hidden">
    <div class="flex items-center gap-2 px-3.5 py-3 border-b border-[${tw(s.line)}] text-[${tw(s.sub)}]">
      <span>⌕</span>
      <input class="flex-1 bg-transparent outline-none text-[13px] text-[${tw(s.text)}]" placeholder="Search commands…" />
      <kbd class="text-[10px] px-1.5 border border-[${tw(s.line)}] rounded">⌘K</kbd>
    </div>
    <div class="p-1.5">
      <div class="flex items-center gap-2.5 px-2.5 py-2 text-xs font-bold rounded-[${small(s)}px] bg-[${tw(s.fill)}] text-[${tw(s.onFill)}]">📄 New document</div>
      <div class="flex items-center gap-2.5 px-2.5 py-2 text-xs rounded-[${small(s)}px] text-[${tw(s.text)}] hover:bg-[${tw(s.fill)}]">🎨 Change theme</div>
    </div>
  </div>
</div>`,
  }
}

const generators = { pagination, rating, slider, fileupload, statcard, commandpalette }

/* Returns code for one of the extra components, or null if not handled here */
export function getExtraComponentCode(componentId, styleId) {
  const gen = generators[componentId]
  return gen ? gen(getStyleTokens(styleId)) : null
}

/* ══════════════ MORE COMPONENT TYPES ══════════════ */

const btnCss = (cls, s) => `.${cls} {
  padding: 9px 18px;
  background: ${s.fill};
  color: ${s.onFill};
  border: ${s.border};
  border-radius: ${small(s)}px;
  box-shadow: ${s.shadow};
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}`
const twBtn = s => `px-[18px] py-[9px] bg-[${tw(s.fill)}] text-[${tw(s.onFill)}] rounded-[${small(s)}px] shadow-[${tw(s.shadow)}] text-[13px] font-bold`
const fieldCss = (cls, s) => `.${cls} {
  padding: 9px 12px;
  background: ${s.surface};
  border: ${s.border === 'none' ? `1px solid ${s.line}` : s.border};
  border-radius: ${small(s)}px;
  box-shadow: ${s.insetShadow};
  color: ${s.text};
  font: inherit;
  font-size: 12px;
  outline: none;
}`

function datepicker(s) {
  return {
    html: `<div class="dp-scene">
  <div class="dp" role="application" aria-label="Choose date">
    <div class="dp-head">
      <button aria-label="Previous month">‹</button>
      <strong>September 2026</strong>
      <button aria-label="Next month">›</button>
    </div>
    <div class="dp-grid">
      <span class="dow">M</span><span class="dow">T</span><span class="dow">W</span>
      <span class="dow">T</span><span class="dow">F</span><span class="dow">S</span><span class="dow">S</span>
      <span></span>
      <button>1</button><button>2</button><!-- … -->
      <button class="selected" aria-pressed="true">17</button>
      <button class="today" aria-current="date">25</button>
      <!-- … through 30 -->
    </div>
  </div>
</div>`,
    css: `${sceneCss('dp-scene', s)}
.dp-scene { align-items: center; }

${panelCss('dp', s)}
.dp { padding: 12px; width: 240px; }

.dp-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; color: ${s.text}; font-size: 13px; }
.dp-head button { background: none; border: none; color: ${s.sub}; font-size: 16px; cursor: pointer; }

.dp-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; text-align: center; }
.dow { font-size: 10px; font-weight: 700; color: ${s.sub}; padding-bottom: 4px; }
.dp-grid button {
  height: 26px;
  border: none;
  background: transparent;
  color: ${s.text};
  font: inherit;
  font-size: 11px;
  border-radius: ${s.radius === 0 ? 0 : 6}px;
  cursor: pointer;
}
.dp-grid button:hover { background: ${s.surface}; }
.dp-grid .selected { background: ${s.fill}; color: ${s.onFill}; font-weight: 800; }
.dp-grid .today { box-shadow: inset 0 0 0 1.5px ${s.fill.includes('gradient') ? s.accent : s.fill}; }`,
    tailwind: `<div class="${twScene(s)} items-center">
  <div class="${twPanel(s)} p-3 w-60">
    <div class="flex justify-between items-center mb-2 text-[13px] text-[${tw(s.text)}]">
      <button class="text-[${tw(s.sub)}]">‹</button><strong>September 2026</strong><button class="text-[${tw(s.sub)}]">›</button>
    </div>
    <div class="grid grid-cols-7 gap-0.5 text-center text-[11px] text-[${tw(s.text)}]">
      <span class="text-[10px] font-bold text-[${tw(s.sub)}]">M</span><!-- … -->
      <button class="h-[26px] rounded-md bg-[${tw(s.fill)}] text-[${tw(s.onFill)}] font-extrabold">17</button>
    </div>
  </div>
</div>`,
  }
}

function carousel(s) {
  return {
    html: `<div class="carousel-scene">
  <section class="carousel" aria-roledescription="carousel" aria-label="Featured">
    <div class="slide" aria-roledescription="slide" aria-label="2 of 5">
      <strong>Golden hour</strong>
      <small>Slide 2 of 5</small>
    </div>
    <button class="nav prev" aria-label="Previous slide">‹</button>
    <button class="nav next" aria-label="Next slide">›</button>
    <div class="dots">
      <button></button><button class="active" aria-current="true"></button>
      <button></button><button></button><button></button>
    </div>
  </section>
</div>`,
    css: `${sceneCss('carousel-scene', s)}

${panelCss('carousel', s)}
.carousel { position: relative; padding: 10px; }

.slide {
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px;
  border-radius: ${small(s)}px;
  background: ${s.fill};
  color: ${s.onFill};
}
.slide small { opacity: 0.8; }

.nav {
  position: absolute;
  top: 62px;
  width: 30px;
  height: 30px;
  border-radius: ${s.radius === 0 ? 0 : '50%'};
  background: ${s.card};
  border: ${s.border === 'none' ? `1px solid ${s.line}` : s.border};
  color: ${s.text};
  box-shadow: ${s.shadow};
  cursor: pointer;
}
.prev { left: 2px; }
.next { right: 2px; }

.dots { display: flex; justify-content: center; gap: 6px; margin-top: 10px; }
.dots button { width: 6px; height: 6px; padding: 0; border: none; border-radius: 6px; background: ${s.sub}; opacity: 0.4; cursor: pointer; }
.dots .active { width: 18px; background: ${s.fill}; opacity: 1; }`,
    tailwind: `<div class="${twScene(s)}">
  <section class="${twPanel(s)} relative p-2.5">
    <div class="h-[140px] flex flex-col justify-end p-3.5 rounded-[${small(s)}px] bg-[${tw(s.fill)}] text-[${tw(s.onFill)}]">
      <strong>Golden hour</strong><small class="opacity-80">Slide 2 of 5</small>
    </div>
    <div class="flex justify-center gap-1.5 mt-2.5">
      <span class="w-1.5 h-1.5 rounded-full bg-[${tw(s.sub)}] opacity-40"></span>
      <span class="w-[18px] h-1.5 rounded-full bg-[${tw(s.fill)}]"></span>
    </div>
  </section>
</div>`,
  }
}

function chat(s) {
  return {
    html: `<div class="chat-scene">
  <div class="chat" role="log" aria-live="polite">
    <p class="msg in">Hey! Did the new palette ship? 🌅</p>
    <p class="msg out">Yes — live on staging now</p>
    <p class="msg in">Looks amazing 🔥</p>
    <form class="composer">
      <input placeholder="Type a message…" aria-label="Message" />
      <button aria-label="Send">➤</button>
    </form>
  </div>
</div>`,
    css: `${sceneCss('chat-scene', s)}

${panelCss('chat', s)}
.chat { display: flex; flex-direction: column; gap: 8px; padding: 12px; }

.msg {
  max-width: 78%;
  margin: 0;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1.4;
}
.msg.in {
  align-self: flex-start;
  background: ${s.surface};
  color: ${s.text};
  border-radius: ${s.radius === 0 ? '0' : '14px 14px 14px 4px'};
}
.msg.out {
  align-self: flex-end;
  background: ${s.fill};
  color: ${s.onFill};
  border-radius: ${s.radius === 0 ? '0' : '14px 14px 4px 14px'};
}

.composer { display: flex; gap: 6px; margin-top: 4px; }
${fieldCss('composer input', s)}
.composer input { flex: 1; }
${btnCss('composer button', s)}`,
    tailwind: `<div class="${twScene(s)}">
  <div class="${twPanel(s)} flex flex-col gap-2 p-3">
    <p class="self-start max-w-[78%] px-3 py-2 text-xs rounded-2xl rounded-bl bg-[${tw(s.surface)}] text-[${tw(s.text)}]">Hey! Did the new palette ship? 🌅</p>
    <p class="self-end max-w-[78%] px-3 py-2 text-xs rounded-2xl rounded-br bg-[${tw(s.fill)}] text-[${tw(s.onFill)}]">Yes — live on staging now</p>
    <form class="flex gap-1.5 mt-1">
      <input class="flex-1 px-3 py-2 text-xs rounded-lg bg-[${tw(s.surface)}] text-[${tw(s.text)}] outline-none" placeholder="Type a message…" />
      <button class="${twBtn(s)}">➤</button>
    </form>
  </div>
</div>`,
  }
}

function checkbox(s) {
  const mark = s.sub
  return {
    html: `<div class="choice-scene">
  <fieldset class="choice-card">
    <legend>Notifications</legend>
    <label><input type="checkbox" checked /> Email</label>
    <label><input type="checkbox" checked /> Push</label>
    <label><input type="checkbox" /> SMS</label>
  </fieldset>
  <fieldset class="choice-card">
    <legend>Frequency</legend>
    <label><input type="radio" name="freq" /> Daily</label>
    <label><input type="radio" name="freq" checked /> Weekly</label>
    <label><input type="radio" name="freq" /> Never</label>
  </fieldset>
</div>`,
    css: `${sceneCss('choice-scene', s)}
.choice-scene { flex-direction: row; }

${panelCss('choice-card', s)}
.choice-card { flex: 1; margin: 0; padding: 12px; }
.choice-card legend { float: left; width: 100%; margin-bottom: 8px; font-size: 10px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: ${s.sub}; }
.choice-card label { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px; color: ${s.text}; cursor: pointer; }

.choice-card input {
  appearance: none;
  width: 16px;
  height: 16px;
  margin: 0;
  display: grid;
  place-content: center;
  background: ${s.surface};
  border: 1.5px solid ${mark};
  border-radius: ${s.radius === 0 ? 0 : 5}px;
  cursor: pointer;
}
.choice-card input[type="radio"] { border-radius: 50%; }

.choice-card input[type="checkbox"]:checked { background: ${s.fill}; border-color: transparent; }
.choice-card input[type="checkbox"]:checked::after { content: '✓'; color: ${s.onFill}; font-size: 10px; font-weight: 900; }

.choice-card input[type="radio"]:checked::after { content: ''; width: 8px; height: 8px; border-radius: 50%; background: ${s.fill}; }
.choice-card input:focus-visible { outline: 2px solid ${s.accent}; outline-offset: 2px; }`,
    tailwind: `<div class="${twScene(s)} flex-row">
  <fieldset class="${twPanel(s)} flex-1 p-3">
    <legend class="text-[10px] font-extrabold uppercase tracking-wider text-[${tw(s.sub)}] mb-2">Notifications</legend>
    <label class="flex items-center gap-2 mb-2 text-[13px] text-[${tw(s.text)}]">
      <input type="checkbox" checked class="w-4 h-4 accent-[${tw(s.fill.includes('gradient') ? s.accent : s.fill)}]" /> Email
    </label>
  </fieldset>
</div>`,
  }
}

function segmented(s) {
  return {
    html: `<div class="seg-scene">
  <div class="segmented" role="radiogroup" aria-label="Range">
    <button role="radio" aria-checked="false">Day</button>
    <button role="radio" aria-checked="true" class="active">Week</button>
    <button role="radio" aria-checked="false">Month</button>
    <button role="radio" aria-checked="false">Year</button>
  </div>
</div>`,
    css: `${sceneCss('seg-scene', s)}
.seg-scene { align-items: center; }

.segmented {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  background: ${s.surface};
  border: ${s.border === 'none' ? `1px solid ${s.line}` : s.border};
  border-radius: ${small(s)}px;
  box-shadow: ${s.insetShadow};
}

.segmented button {
  padding: 7px 14px;
  border: none;
  background: transparent;
  color: ${s.sub};
  font: inherit;
  font-size: 13px;
  border-radius: ${s.radius === 0 ? 0 : Math.min(s.radius, 9)}px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.segmented .active {
  background: ${s.fill};
  color: ${s.onFill};
  font-weight: 700;
  box-shadow: ${s.shadow};
}`,
    tailwind: `<div class="${twScene(s)} items-center">
  <div class="inline-flex gap-0.5 p-[3px] rounded-[${small(s)}px] bg-[${tw(s.surface)}]">
    <button class="px-3.5 py-[7px] text-[13px] text-[${tw(s.sub)}]">Day</button>
    <button class="px-3.5 py-[7px] text-[13px] font-bold rounded-lg bg-[${tw(s.fill)}] text-[${tw(s.onFill)}]">Week</button>
    <button class="px-3.5 py-[7px] text-[13px] text-[${tw(s.sub)}]">Month</button>
  </div>
</div>`,
  }
}

function emptystate(s) {
  return {
    html: `<div class="empty-scene">
  <div class="empty">
    <div class="empty-icon" aria-hidden="true">＋</div>
    <h3>No projects yet</h3>
    <p>Create your first project to get started.</p>
    <button>New project</button>
  </div>
</div>`,
    css: `${sceneCss('empty-scene', s)}
.empty-scene { align-items: center; }

${panelCss('empty', s)}
.empty { padding: 20px 24px; max-width: 280px; text-align: center; }

.empty-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  display: grid;
  place-items: center;
  border: 2px dashed ${s.sub};
  border-radius: ${s.radius === 0 ? 0 : '50%'};
  color: ${s.sub};
  font-size: 20px;
}

.empty h3 { margin: 0 0 4px; font-size: 15px; color: ${s.text}; }
.empty p { margin: 0 0 14px; font-size: 12px; line-height: 1.5; color: ${s.sub}; }

${btnCss('empty button', s)}`,
    tailwind: `<div class="${twScene(s)} items-center">
  <div class="${twPanel(s)} px-6 py-5 max-w-[280px] text-center">
    <div class="w-12 h-12 mx-auto mb-3 grid place-items-center rounded-full border-2 border-dashed border-[${tw(s.sub)}] text-[${tw(s.sub)}]">＋</div>
    <h3 class="text-[15px] font-bold text-[${tw(s.text)}] mb-1">No projects yet</h3>
    <p class="text-xs text-[${tw(s.sub)}] mb-3.5">Create your first project to get started.</p>
    <button class="${twBtn(s)}">New project</button>
  </div>
</div>`,
  }
}

Object.assign(generators, { datepicker, carousel, chat, checkbox, segmented, emptystate })

/* ══════════════ TOKEN CODE FOR THE ORIGINAL COMPONENTS ══════════════
   Used for any style that has no hand-written snippet (and for the
   components that never had real code: input, login, pricing, hero, navbar) */

function tButton(s) {
  return {
    html: `<div class="btn-scene">
  <button class="btn primary">Primary</button>
  <button class="btn secondary">Secondary</button>
  <a class="btn-link" href="#">Ghost</a>
</div>`,
    css: `${sceneCss('btn-scene', s)}
.btn-scene { flex-direction: row; align-items: center; justify-content: center; }

${btnCss('btn', s)}
.btn { transition: transform 0.15s ease; }
.btn:hover { transform: translateY(-2px); }
.btn.secondary { background: ${s.card}; color: ${s.text}; }

.btn-link { color: ${s.accent}; font-weight: 700; text-underline-offset: 4px; }`,
    tailwind: `<div class="${twScene(s)} flex-row items-center justify-center">
  <button class="${twBtn(s)} hover:-translate-y-0.5 transition">Primary</button>
  <button class="px-[18px] py-[9px] bg-[${tw(s.card)}] text-[${tw(s.text)}] rounded-[${small(s)}px] shadow-[${tw(s.shadow)}] text-[13px] font-bold">Secondary</button>
  <a class="text-[${tw(s.accent)}] font-bold underline underline-offset-4" href="#">Ghost</a>
</div>`,
  }
}

function tCard(s) {
  return {
    html: `<div class="card-scene">
  <article class="card">
    <div class="card-icon" aria-hidden="true"></div>
    <h3>Card title</h3>
    <p>A short description that explains what this card is about.</p>
    <button>Explore →</button>
  </article>
</div>`,
    css: `${sceneCss('card-scene', s)}
.card-scene { align-items: center; }

${panelCss('card', s)}
.card { display: flex; flex-direction: column; gap: 8px; padding: 18px; max-width: 280px; }
.card-icon { width: 36px; height: 36px; border-radius: ${small(s)}px; background: ${s.fill}; }
.card h3 { margin: 0; font-size: 16px; color: ${s.text}; }
.card p { margin: 0; font-size: 13px; line-height: 1.5; color: ${s.sub}; }

${btnCss('card button', s)}`,
    tailwind: `<div class="${twScene(s)} items-center">
  <article class="${twPanel(s)} flex flex-col gap-2 p-[18px] max-w-[280px]">
    <div class="w-9 h-9 rounded-[${small(s)}px] bg-[${tw(s.fill)}]"></div>
    <h3 class="text-base font-bold text-[${tw(s.text)}]">Card title</h3>
    <p class="text-[13px] text-[${tw(s.sub)}]">A short description that explains what this card is about.</p>
    <button class="${twBtn(s)}">Explore →</button>
  </article>
</div>`,
  }
}

function tInput(s) {
  return {
    html: `<div class="form-scene">
  <form class="form-card">
    <label>Email address
      <input type="email" placeholder="you@example.com" />
    </label>
    <label>Password
      <input type="password" placeholder="••••••••" />
    </label>
    <button type="submit">Sign in</button>
  </form>
</div>`,
    css: `${sceneCss('form-scene', s)}

${panelCss('form-card', s)}
.form-card { display: flex; flex-direction: column; gap: 10px; padding: 16px; }

.form-card label { display: flex; flex-direction: column; gap: 4px; font-size: 11px; font-weight: 700; color: ${s.text}; }

${fieldCss('form-card input', s)}
.form-card input::placeholder { color: ${s.sub}; }
.form-card input:focus-visible { outline: 2px solid ${s.fill.includes('gradient') ? s.accent : s.fill}; outline-offset: 1px; }

${btnCss('form-card button', s)}`,
    tailwind: `<div class="${twScene(s)}">
  <form class="${twPanel(s)} flex flex-col gap-2.5 p-4">
    <label class="flex flex-col gap-1 text-[11px] font-bold text-[${tw(s.text)}]">Email address
      <input type="email" placeholder="you@example.com" class="px-3 py-[9px] text-xs rounded-[${small(s)}px] bg-[${tw(s.surface)}] text-[${tw(s.text)}] placeholder:text-[${tw(s.sub)}] outline-none focus-visible:ring-2" />
    </label>
    <button class="${twBtn(s)}">Sign in</button>
  </form>
</div>`,
  }
}

function tPricing(s) {
  const tick = s.fill.includes('gradient') || s.fill === s.card ? s.accent : s.fill
  return {
    html: `<div class="price-scene">
  <div class="price-card">
    <span class="tier">Pro</span>
    <p class="price">$29<small>/mo</small></p>
    <ul>
      <li>Unlimited projects</li>
      <li>Priority support</li>
      <li>Analytics</li>
    </ul>
    <button>Get started</button>
  </div>
</div>`,
    css: `${sceneCss('price-scene', s)}
.price-scene { align-items: center; }

${panelCss('price-card', s)}
.price-card { padding: 18px; width: 240px; }

.tier { font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: ${s.accent}; }
.price { margin: 4px 0 10px; font-size: 30px; font-weight: 900; color: ${s.text}; }
.price small { font-size: 13px; font-weight: 500; color: ${s.sub}; }

.price-card ul { list-style: none; margin: 0 0 14px; padding: 0; }
.price-card li { margin-bottom: 6px; font-size: 13px; color: ${s.text}; }
.price-card li::before { content: '✓'; margin-right: 8px; font-weight: 900; color: ${tick}; }

${btnCss('price-card button', s)}
.price-card button { width: 100%; }`,
    tailwind: `<div class="${twScene(s)} items-center">
  <div class="${twPanel(s)} p-[18px] w-60">
    <span class="text-[11px] font-extrabold uppercase tracking-widest text-[${tw(s.accent)}]">Pro</span>
    <p class="mt-1 mb-2.5 text-3xl font-black text-[${tw(s.text)}]">$29<small class="text-[13px] font-medium text-[${tw(s.sub)}]">/mo</small></p>
    <ul class="mb-3.5 space-y-1.5 text-[13px] text-[${tw(s.text)}]"><li>✓ Unlimited projects</li><li>✓ Priority support</li></ul>
    <button class="${twBtn(s)} w-full">Get started</button>
  </div>
</div>`,
  }
}

function tModal(s) {
  const surface = s.card.includes('rgba') ? (s.dark ? '#141a30' : '#ffffff') : s.card
  return {
    html: `<div class="modal-backdrop">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <header>
      <h3 id="modal-title">Delete project?</h3>
      <button class="close" aria-label="Close">×</button>
    </header>
    <p>This action cannot be undone.</p>
    <footer>
      <button class="cancel">Cancel</button>
      <button class="confirm">Delete</button>
    </footer>
  </div>
</div>`,
    css: `.modal-backdrop {
  display: grid;
  place-items: center;
  padding: 24px;
  background: ${s.dark ? 'rgba(0, 0, 0, 0.55)' : 'rgba(0, 0, 0, 0.25)'};${font(s)}
}

${panelCss('modal', s)}
.modal { width: 280px; padding: 18px; background: ${surface}; }

.modal header { display: flex; justify-content: space-between; align-items: center; }
.modal h3 { margin: 0; font-size: 16px; color: ${s.text}; }
.close { background: none; border: none; font-size: 18px; color: ${s.sub}; cursor: pointer; }
.modal p { margin: 6px 0 16px; font-size: 13px; color: ${s.sub}; }

.modal footer { display: flex; justify-content: flex-end; gap: 8px; }
${btnCss('confirm', s)}
.cancel {
  padding: 9px 16px;
  background: transparent;
  color: ${s.text};
  border: 1px solid ${s.line};
  border-radius: ${small(s)}px;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}`,
    tailwind: `<div class="grid place-items-center p-6 ${s.dark ? 'bg-black/55' : 'bg-black/25'}">
  <div role="dialog" class="${twPanel(s)} w-[280px] p-[18px]">
    <h3 class="text-base font-bold text-[${tw(s.text)}]">Delete project?</h3>
    <p class="mt-1.5 mb-4 text-[13px] text-[${tw(s.sub)}]">This action cannot be undone.</p>
    <div class="flex justify-end gap-2">
      <button class="px-4 py-[9px] text-[13px] text-[${tw(s.text)}] border border-[${tw(s.line)}] rounded-[${small(s)}px]">Cancel</button>
      <button class="${twBtn(s)}">Delete</button>
    </div>
  </div>
</div>`,
  }
}

function tHero(s) {
  return {
    html: `<section class="hero">
  <span class="eyebrow">✦ New release</span>
  <h1>Build interfaces people remember.</h1>
  <p>Ship faster with ready-made components.</p>
  <div class="actions">
    <a class="primary" href="#">Get started</a>
    <a class="secondary" href="#">Docs</a>
  </div>
</section>`,
    css: `${sceneCss('hero', s)}
.hero { align-items: flex-start; padding: 48px 32px; }

.eyebrow {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 700;
  color: ${s.accent};
  background: ${s.surface};
  border-radius: ${s.radius === 0 ? 0 : '100px'};
}

.hero h1 { margin: 0; max-width: 16ch; font-size: clamp(32px, 5vw, 52px); line-height: 1.05; color: ${s.text}; }
.hero p { margin: 0; font-size: 16px; color: ${s.sub}; }

.actions { display: flex; gap: 10px; }
${btnCss('primary', s)}
.primary { text-decoration: none; }
.secondary {
  padding: 9px 18px;
  color: ${s.text};
  border: 1px solid ${s.line};
  border-radius: ${small(s)}px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}`,
    tailwind: `<section class="${twScene(s)} items-start px-8 py-12">
  <span class="px-3 py-1 text-xs font-bold rounded-full bg-[${tw(s.surface)}] text-[${tw(s.accent)}]">✦ New release</span>
  <h1 class="max-w-[16ch] text-5xl font-black leading-none text-[${tw(s.text)}]">Build interfaces people remember.</h1>
  <p class="text-base text-[${tw(s.sub)}]">Ship faster with ready-made components.</p>
  <div class="flex gap-2.5">
    <a class="${twBtn(s)}" href="#">Get started</a>
    <a class="px-[18px] py-[9px] text-[13px] font-semibold text-[${tw(s.text)}] border border-[${tw(s.line)}] rounded-[${small(s)}px]" href="#">Docs</a>
  </div>
</section>`,
  }
}

function tNavbar(s) {
  return {
    html: `<header class="nav-scene">
  <nav class="nav">
    <a class="brand" href="#"><span class="logo" aria-hidden="true"></span>Brand</a>
    <ul>
      <li><a href="#" aria-current="page">Work</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <a class="cta" href="#">Join</a>
  </nav>
</header>`,
    css: `${sceneCss('nav-scene', s)}

${panelCss('nav', s)}
.nav { display: flex; align-items: center; gap: 16px; padding: 10px 14px; }

.brand { display: flex; align-items: center; gap: 8px; margin-right: auto; font-weight: 900; color: ${s.text}; text-decoration: none; }
.logo { width: 24px; height: 24px; border-radius: ${small(s)}px; background: ${s.fill}; }

.nav ul { display: flex; gap: 16px; margin: 0; padding: 0; list-style: none; }
.nav ul a { font-size: 13px; color: ${s.sub}; text-decoration: none; }
.nav ul a[aria-current] { color: ${s.text}; font-weight: 700; }

${btnCss('cta', s)}
.cta { padding: 6px 12px; text-decoration: none; }`,
    tailwind: `<header class="${twScene(s)}">
  <nav class="${twPanel(s)} flex items-center gap-4 px-3.5 py-2.5">
    <a class="flex items-center gap-2 mr-auto font-black text-[${tw(s.text)}]" href="#"><span class="w-6 h-6 rounded-[${small(s)}px] bg-[${tw(s.fill)}]"></span>Brand</a>
    <a class="text-[13px] font-bold text-[${tw(s.text)}]" href="#">Work</a>
    <a class="text-[13px] text-[${tw(s.sub)}]" href="#">About</a>
    <a class="${twBtn(s)} px-3 py-1.5" href="#">Join</a>
  </nav>
</header>`,
  }
}

const tokenGenerators = { button: tButton, card: tCard, input: tInput, login: tInput, pricing: tPricing, modal: tModal, hero: tHero, navbar: tNavbar }

/* Token-generated code for the original components, or null if not one of them */
export function getTokenComponentCode(componentId, styleId) {
  const gen = tokenGenerators[componentId]
  return gen ? gen(getStyleTokens(styleId)) : null
}

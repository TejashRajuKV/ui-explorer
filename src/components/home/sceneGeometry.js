/* ─────────────────────────────────────────────
   Procedural geometry for the sunset landscape.
   Everything is generated once at module load from a
   seeded RNG, so the scene is identical on every render.
   Coordinate space: viewBox 0 0 1440 900
───────────────────────────────────────────── */

export const VIEW_W = 1440
export const VIEW_H = 900

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/* Ridge height at x: layered sines + a central peak bias */
function makeRidgeFn({ seed, base, amp, peak = 0, peakX = 720, peakWidth = 260 }) {
  const rnd = mulberry32(seed)
  const waves = Array.from({ length: 4 }, (_, i) => ({
    f: (0.004 + rnd() * 0.004) * (i + 1),
    p: rnd() * Math.PI * 2,
    a: amp / (i + 1.4),
  }))
  return x => {
    let y = base
    for (const w of waves) y -= Math.sin(x * w.f + w.p) * w.a
    y -= peak * Math.exp(-((x - peakX) ** 2) / (2 * peakWidth ** 2))
    return y
  }
}

/* Tiered pine silhouette with its trunk base at (x, y) */
function pine(x, y, h, rnd) {
  const w = h * (0.32 + rnd() * 0.08)
  const tiers = 4
  let d = `M${x - w * 0.06},${y + 4} L${x - w * 0.06},${y - h * 0.08} L${x + w * 0.06},${y - h * 0.08} L${x + w * 0.06},${y + 4}Z`
  for (let i = 0; i < tiers; i++) {
    const t0 = i / tiers
    const bottom = y - h * (0.06 + t0 * 0.78)
    const top = y - h * (0.06 + (t0 + 1 / tiers) * 0.78) - h * 0.14
    const half = (w / 2) * (1 - t0 * 0.62)
    d += ` M${x - half},${bottom} L${x},${top} L${x + half},${bottom}Z`
  }
  return d
}

/**
 * Build one landscape layer: a jagged ridge path plus optional pines.
 * treeBias > 0 pushes trees toward the screen edges, keeping the centre open.
 */
function buildLayer({ seed, base, amp, peak, peakWidth, step = 36, jitter = 10, trees = 0, treeH = [40, 80], treeBias = 0 }) {
  const rnd = mulberry32(seed * 7 + 3)
  const ridge = makeRidgeFn({ seed, base, amp, peak, peakWidth })
  let d = `M-60,${VIEW_H + 20}`
  for (let x = -60; x <= VIEW_W + 60; x += step) {
    d += ` L${x.toFixed(1)},${(ridge(x) + (rnd() - 0.5) * jitter).toFixed(1)}`
  }
  d += ` L${VIEW_W + 60},${VIEW_H + 20}Z`

  let treePath = ''
  let placed = 0, guard = 0
  while (placed < trees && guard++ < trees * 20) {
    const x = rnd() * (VIEW_W + 80) - 40
    const edge = Math.abs(x - VIEW_W / 2) / (VIEW_W / 2) // 0 centre → 1 edge
    if (rnd() > Math.pow(edge, treeBias) + 0.05) continue
    const h = treeH[0] + rnd() * (treeH[1] - treeH[0]) * (0.6 + edge * 0.4)
    treePath += ' ' + pine(x, ridge(x) + 6, h, rnd)
    placed++
  }
  return { d, treePath, ridge }
}

/* Far peak with the fire-lookout tower sitting on its summit */
const far = buildLayer({ seed: 11, base: 772, amp: 24, peak: 150, peakWidth: 150, step: 28, jitter: 8 })
const summitX = 720
const summitY = far.ridge(summitX) - 2

function lookoutTower(x, y) {
  const s = 1.15
  const legH = 34 * s, cabW = 30 * s, cabH = 14 * s
  const top = y - legH
  return [
    // legs
    `M${x - 12 * s},${y} L${x - 9 * s},${top} L${x - 7 * s},${top} L${x - 10 * s},${y}Z`,
    `M${x + 12 * s},${y} L${x + 9 * s},${top} L${x + 7 * s},${top} L${x + 10 * s},${y}Z`,
    // cross bracing
    `M${x - 11 * s},${y - 6} L${x + 9 * s},${top + 8} L${x + 9 * s},${top + 10} L${x - 11 * s},${y - 4}Z`,
    `M${x + 11 * s},${y - 6} L${x - 9 * s},${top + 8} L${x - 9 * s},${top + 10} L${x + 11 * s},${y - 4}Z`,
    // deck + cabin + roof
    `M${x - cabW / 2 - 4},${top} L${x + cabW / 2 + 4},${top} L${x + cabW / 2 + 4},${top - 3} L${x - cabW / 2 - 4},${top - 3}Z`,
    `M${x - cabW / 2},${top - 3} L${x + cabW / 2},${top - 3} L${x + cabW / 2},${top - 3 - cabH} L${x - cabW / 2},${top - 3 - cabH}Z`,
    `M${x - cabW / 2 - 6},${top - 3 - cabH} L${x},${top - 3 - cabH - 12 * s} L${x + cabW / 2 + 6},${top - 3 - cabH}Z`,
  ].join(' ')
}

/* Window cut-out in the cabin, rendered in sky colour so it glows */
export const towerWindow = (() => {
  const s = 1.15, top = summitY - 34 * s
  return { x: summitX - 10 * s, y: top - 3 - 11 * s, w: 20 * s, h: 6 * s }
})()

export const layers = [
  // back → front
  { id: 'far',    color: '#F0642C', d: far.d, extra: lookoutTower(summitX, summitY), depth: 0.9 },
  { id: 'ridge2', color: '#CD1A30', ...pick(buildLayer({ seed: 23, base: 792, amp: 30, peak: 40, peakWidth: 380, trees: 26, treeH: [22, 44], treeBias: 1.2 })), depth: 0.7 },
  { id: 'ridge3', color: '#7A0C31', ...pick(buildLayer({ seed: 37, base: 818, amp: 26, peak: 0, trees: 30, treeH: [36, 70], treeBias: 1.6 })), depth: 0.5 },
  { id: 'ridge4', color: '#4A0730', ...pick(buildLayer({ seed: 41, base: 838, amp: 22, peak: -20, peakWidth: 300, trees: 24, treeH: [70, 130], treeBias: 2.2 })), depth: 0.32 },
  { id: 'ridge5', color: '#200432', ...pick(buildLayer({ seed: 53, base: 864, amp: 16, peak: -30, peakWidth: 260, trees: 14, treeH: [150, 260], treeBias: 3 })), depth: 0.16 },
  { id: 'front',  color: '#14021f', ...pick(buildLayer({ seed: 67, base: 893, amp: 8, peak: -10, trees: 8, treeH: [260, 420], treeBias: 5 })), depth: 0 },
]

function pick({ d, treePath }) { return { d, extra: treePath } }

/* Where the sun sits: just behind the summit */
export const sun = { cx: summitX, cy: summitY + 10, r: 150 }

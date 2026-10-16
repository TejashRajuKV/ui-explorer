/* ─────────────────────────────────────────────
   UI Explorer MCP server
   Serves the same data as the website (styles, components,
   code, animations) over the Model Context Protocol, so any
   MCP-capable AI tool can look up design guidance and pull
   copy-ready code while it builds a UI.
───────────────────────────────────────────── */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

import { styles, getStyleById, categories, difficulties } from '../../src/data/styles.js'
import { componentTypes, getComponentById } from '../../src/data/components.js'
import { getComponentCode } from '../../src/data/componentCode.js'
import { getStyleTokens } from '../../src/data/styleTokens.js'
import { animations, animationCategories } from '../../src/data/animations.js'

const VERSION = '1.0.0'

const text = value => ({ content: [{ type: 'text', text: typeof value === 'string' ? value : JSON.stringify(value, null, 2) }] })
const fail = message => ({ isError: true, content: [{ type: 'text', text: message }] })

const styleIds = styles.map(s => s.id)
const componentIds = componentTypes.map(c => c.id)
const unknownStyle = id => fail(`Unknown style "${id}". Valid ids: ${styleIds.join(', ')}`)
const unknownComponent = id => fail(`Unknown component "${id}". Valid ids: ${componentIds.join(', ')}`)

const summary = s => ({ id: s.id, name: s.name, tagline: s.tagline, category: s.category, difficulty: s.difficulty, tags: s.tags })

/* Naive keyword scoring: enough to match "a playful signup page for kids" to Claymorphism */
const STOP = new Set(['a', 'an', 'the', 'for', 'and', 'or', 'of', 'to', 'in', 'on', 'with', 'my', 'our', 'that', 'is', 'it', 'app', 'site', 'website', 'page'])
function recommend(query, limit) {
  const words = query.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2 && !STOP.has(w))
  return styles
    .map(s => {
      const weighted = [
        [s.tags.join(' '), 4], [s.tagline, 3], [s.useCases.join(' '), 3],
        [s.characteristics.join(' '), 1], [s.definition, 1], [s.realWorldExamples.map(e => e.name).join(' '), 2],
      ]
      let score = 0
      const matched = new Set()
      for (const w of words) for (const [hay, weight] of weighted) if (hay.toLowerCase().includes(w)) { score += weight; matched.add(w) }
      return { style: s, score, matched: [...matched] }
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

const server = new McpServer({ name: 'ui-explorer', version: VERSION })

server.registerTool('list_styles', {
  title: 'List design styles',
  description: `List the ${styles.length} UI design styles (e.g. glassmorphism, brutalism, swiss-design), optionally filtered. Returns ids to use with the other tools.`,
  inputSchema: {
    category: z.enum(categories.filter(c => c !== 'All')).optional().describe('Filter by category'),
    difficulty: z.enum(difficulties.filter(d => d !== 'All')).optional().describe('Filter by implementation difficulty'),
    query: z.string().optional().describe('Match against name, tagline and tags'),
  },
}, async ({ category, difficulty, query }) => {
  const q = query?.toLowerCase()
  const list = styles.filter(s =>
    (!category || s.category === category) &&
    (!difficulty || s.difficulty === difficulty) &&
    (!q || [s.name, s.tagline, ...s.tags].some(t => t.toLowerCase().includes(q))))
  return text(list.map(summary))
})

server.registerTool('get_style', {
  title: 'Get design-style guidance',
  description: 'Full guidance for one design style: definition, characteristics, principles, accessibility notes, best practices, common mistakes, use cases and real-world examples, plus its palette.',
  inputSchema: { id: z.string().describe('Style id, e.g. "glassmorphism"') },
}, async ({ id }) => {
  const s = getStyleById(id)
  if (!s) return unknownStyle(id)
  const { emoji, popularity, ...rest } = s
  return text(rest)
})

server.registerTool('get_style_tokens', {
  title: 'Get design tokens for a style',
  description: 'Concrete CSS values for a style (background, card surface, border, radius, text colours, shadow, accent, font) so a UI can be themed to match without copying a whole component.',
  inputSchema: { id: z.string().describe('Style id') },
}, async ({ id }) => {
  if (!getStyleById(id)) return unknownStyle(id)
  const { bg, card, border, radius, text: textColor, sub, fill, onFill, surface, line, shadow, insetShadow, font, dark } = getStyleTokens(id)
  return text({
    style: id,
    note: 'All values are valid CSS. `onFill` is the readable text colour on `fill`.',
    tokens: { background: bg, card, border, radius, text: textColor, mutedText: sub, fill, onFill, surface, divider: line, shadow, insetShadow, fontFamily: font, isDark: dark },
  })
})

server.registerTool('recommend_styles', {
  title: 'Recommend styles for a project',
  description: 'Describe what you are building and who it is for; returns the best-matching design styles with the reasons they matched.',
  inputSchema: {
    description: z.string().min(3).describe('e.g. "playful onboarding for a kids learning app" or "dashboard for a crypto trading platform"'),
    limit: z.number().int().min(1).max(8).default(3).describe('How many styles to return'),
  },
}, async ({ description, limit }) => {
  const results = recommend(description, limit)
  if (!results.length) return text(`No strong match for "${description}". Try list_styles, or describe the mood (playful, minimal, futuristic, professional).`)
  return text(results.map(({ style, matched }) => ({
    ...summary(style),
    matchedOn: matched,
    bestFor: style.useCases.slice(0, 3),
    watchOut: style.commonMistakes[0],
  })))
})

server.registerTool('list_components', {
  title: 'List components',
  description: `List the ${componentTypes.length} component types (button, card, modal, date picker…). Every component is available in every design style.`,
  inputSchema: {},
}, async () => text(componentTypes.map(({ id, name, description }) => ({ id, name, description }))))

server.registerTool('get_component_code', {
  title: 'Get copy-ready component code',
  description: 'HTML, CSS and Tailwind for one component rendered in one design style. Use list_components and list_styles for valid ids.',
  inputSchema: {
    component: z.string().describe('Component id, e.g. "pricing"'),
    style: z.string().describe('Style id, e.g. "neo-brutalism"'),
    format: z.enum(['all', 'html', 'css', 'tailwind']).default('all').describe('Return everything, or just one format'),
  },
}, async ({ component, style, format }) => {
  if (!getComponentById(component)) return unknownComponent(component)
  if (!getStyleById(style)) return unknownStyle(style)
  const code = getComponentCode(component, style)
  if (format !== 'all') return text(code[format] ?? '')
  return text(`## HTML\n\`\`\`html\n${code.html}\n\`\`\`\n\n## CSS\n\`\`\`css\n${code.css}\n\`\`\`\n\n## Tailwind\n\`\`\`html\n${code.tailwind}\n\`\`\``)
})

server.registerTool('list_animations', {
  title: 'List animations',
  description: `List the ${animations.length} motion recipes (entrances, attention, loaders, text effects, hover & micro, scroll).`,
  inputSchema: {
    category: z.enum(animationCategories.filter(c => c !== 'All')).optional().describe('Filter by category'),
    query: z.string().optional().describe('Match against name and description'),
  },
}, async ({ category, query }) => {
  const q = query?.toLowerCase()
  const list = animations.filter(a =>
    (!category || a.category === category) &&
    (!q || a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)))
  return text(list.map(({ id, name, category: c, description, duration, easing }) => ({ id, name, category: c, description, duration, easing })))
})

server.registerTool('get_animation', {
  title: 'Get an animation recipe',
  description: 'CSS (with keyframes) and a Framer Motion equivalent for one animation.',
  inputSchema: {
    id: z.string().describe('Animation id, e.g. "fade-up"'),
    format: z.enum(['both', 'css', 'framer']).default('both'),
  },
}, async ({ id, format }) => {
  const a = animations.find(x => x.id === id)
  if (!a) return fail(`Unknown animation "${id}". Valid ids: ${animations.map(x => x.id).join(', ')}`)
  if (format === 'css') return text(a.css)
  if (format === 'framer') return text(a.framer)
  return text(`# ${a.name}\n${a.description}\nDuration: ${a.duration} · Easing: ${a.easing}\n\n## CSS\n\`\`\`css\n${a.css}\n\`\`\`\n\n## Framer Motion\n\`\`\`jsx\n${a.framer}\n\`\`\``)
})

server.registerPrompt('apply_style', {
  title: 'Apply a design style',
  description: 'Restyle UI code in a chosen design style using the library guidance and tokens.',
  argsSchema: { style: z.string().describe('Style id, e.g. "aurora-ui"') },
}, ({ style }) => {
  const s = getStyleById(style)
  const body = s
    ? `Restyle the UI I am working on in the "${s.name}" style.\n\nCall get_style and get_style_tokens for "${s.id}", follow its principles, avoid its common mistakes, and keep text at WCAG AA contrast (4.5:1). Use get_component_code for any component you need a reference implementation of.`
    : `"${style}" is not a known style. Call list_styles to see valid ids, then try again.`
  return { messages: [{ role: 'user', content: { type: 'text', text: body } }] }
})

await server.connect(new StdioServerTransport())

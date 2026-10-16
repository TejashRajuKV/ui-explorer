// Spawns the built server and exercises it through a real MCP client over stdio.
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'

const entry = fileURLToPath(new URL('../dist/index.js', import.meta.url))
const client = new Client({ name: 'smoke', version: '0.0.0' })
await client.connect(new StdioClientTransport({ command: process.execPath, args: [entry] }))

const call = async (name, args = {}) => {
  const r = await client.callTool({ name, arguments: args })
  return { error: r.isError, text: r.content[0].text }
}

const tools = (await client.listTools()).tools.map(t => t.name).sort()
assert.deepEqual(tools, ['get_animation', 'get_component_code', 'get_style', 'get_style_tokens', 'list_animations', 'list_components', 'list_styles', 'recommend_styles'])

const styles = JSON.parse((await call('list_styles')).text)
assert.ok(styles.length >= 18, 'styles listed')

const comps = JSON.parse((await call('list_components')).text)
assert.ok(comps.length >= 36, 'components listed')

// every component x style must yield real code (no placeholders)
let combos = 0
for (const c of comps) for (const s of styles) {
  const r = await call('get_component_code', { component: c.id, style: s.id })
  assert.ok(!r.error, `${c.id}/${s.id} errored`)
  assert.ok(!/undefined|NaN|\[object|Component content here/.test(r.text), `${c.id}/${s.id} has bad output`)
  combos++
}

const style = JSON.parse((await call('get_style', { id: 'neo-brutalism' })).text)
assert.equal(style.name, 'Neo-Brutalism')
assert.ok(style.principles.length && style.commonMistakes.length)

const tokens = JSON.parse((await call('get_style_tokens', { id: 'swiss-design' })).text)
assert.ok(tokens.tokens.background && tokens.tokens.fill)

const rec = JSON.parse((await call('recommend_styles', { description: 'playful onboarding for a kids learning app' })).text)
assert.equal(rec[0].id, 'claymorphism', `expected claymorphism, got ${rec[0].id}`)

const css = (await call('get_component_code', { component: 'button', style: 'glassmorphism', format: 'css' })).text
assert.match(css, /backdrop-filter/)

const anim = await call('get_animation', { id: 'fade-up' })
assert.match(anim.text, /@keyframes/)

const bad = await call('get_style', { id: 'nope' })
assert.ok(bad.error && /Valid ids/.test(bad.text))

const prompts = (await client.listPrompts()).prompts.map(p => p.name)
assert.deepEqual(prompts, ['apply_style'])

await client.close()
console.log(`ok - ${tools.length} tools, ${styles.length} styles, ${comps.length} components, ${combos} component/style combos`)

/* ─────────────────────────────────────────────
   connect.js
   Content for the "Connect your AI tool" page and the
   landing-page teaser. Keep `mcpTools` in sync with
   mcp/src/index.js when tools are added or renamed.
───────────────────────────────────────────── */

export const PACKAGE_NAME = 'ui-explorer-mcp'
export const NPM_URL = 'https://www.npmjs.com/package/ui-explorer-mcp'
export const REPO_URL = 'https://github.com/TejashRajuKV/ui-explorer'

export const installCommand = 'claude mcp add ui-explorer -- npx -y ui-explorer-mcp'

const serversJson = key => `{
  "${key}": {
    "ui-explorer": {
      "command": "npx",
      "args": ["-y", "ui-explorer-mcp"]
    }
  }
}`

export const clients = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    where: 'Run this once in your terminal. Add --scope user to make it available in every project.',
    snippet: installCommand,
  },
  {
    id: 'claude-desktop',
    name: 'Claude Desktop',
    where: 'Add it to claude_desktop_config.json (Settings → Developer → Edit Config), then restart Claude Desktop.',
    snippet: serversJson('mcpServers'),
  },
  {
    id: 'cursor',
    name: 'Cursor',
    where: 'Add it to ~/.cursor/mcp.json for every project, or .cursor/mcp.json for just this one.',
    snippet: serversJson('mcpServers'),
  },
  {
    id: 'vscode',
    name: 'VS Code',
    where: 'Create .vscode/mcp.json in your project. VS Code will offer to start the server.',
    snippet: `{
  "servers": {
    "ui-explorer": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "ui-explorer-mcp"]
    }
  }
}`,
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    where: 'Add it to ~/.codeium/windsurf/mcp_config.json, then refresh the plugins list.',
    snippet: serversJson('mcpServers'),
  },
]

export const mcpTools = [
  { name: 'recommend_styles', icon: '🧭', desc: 'Describe your project and get the best-matching design styles, and why.' },
  { name: 'list_styles', icon: '🎨', desc: 'Browse every design style, filtered by category, difficulty or keyword.' },
  { name: 'get_style', icon: '📖', desc: 'Principles, accessibility notes, best practices and common mistakes for one style.' },
  { name: 'get_style_tokens', icon: '🧪', desc: 'Concrete CSS values (surface, radius, shadow, text, accent) to theme a UI.' },
  { name: 'list_components', icon: '🧩', desc: 'Every component type: buttons, pricing, date pickers, chat and more.' },
  { name: 'get_component_code', icon: '⚡', desc: 'Copy-ready HTML, CSS and Tailwind for any component in any style.' },
  { name: 'list_animations', icon: '🎞️', desc: 'Entrances, loaders, text effects, hover and scroll motion.' },
  { name: 'get_animation', icon: '✨', desc: 'CSS keyframes and a Framer Motion equivalent for one animation.' },
]

export const examplePrompts = [
  'Build a pricing section in the Swiss Design style, using the UI Explorer component code as a starting point.',
  'Which design style suits a kids’ learning app? Explain the trade-offs before you pick one.',
  'Restyle this login form in Neo-Brutalism and make sure the text still meets WCAG contrast.',
  'Add a fade-up entrance animation to these cards, in both CSS and Framer Motion.',
]

export const steps = [
  { title: 'Add the server', desc: 'Paste one command or one JSON block into your AI tool. Nothing to install first.' },
  { title: 'Ask for a style', desc: 'Describe what you are building. Your assistant looks up real guidance instead of guessing.' },
  { title: 'Ship the code', desc: 'It pulls copy-ready HTML, CSS and Tailwind for the exact component and style you chose.' },
]

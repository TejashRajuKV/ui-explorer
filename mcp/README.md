# ui-explorer-mcp

An [MCP](https://modelcontextprotocol.io) server that gives your AI coding tool the **[UI Explorer](https://github.com/TejashRajuKV/ui-explorer)** library — an interactive guide to modern UI design styles, components and motion:

- **18 design styles** — glassmorphism, neo-brutalism, swiss-design, aurora-ui, y2k… each with principles, accessibility notes, best practices and common mistakes
- **36 components** × every style — copy-ready **HTML, CSS and Tailwind**
- **24 animations** — CSS keyframes and Framer Motion equivalents

Ask your assistant things like *"Build a pricing section in the Swiss Design style"* or *"What style suits a kids' learning app?"* and it can look up real guidance and code instead of guessing.

## Install

Add it to your MCP client's config. It runs with `npx`, so there is nothing to install first (Node 18+).

**Claude Code**

```bash
claude mcp add ui-explorer -- npx -y ui-explorer-mcp
```

**Claude Desktop / Cursor / Windsurf / any client using `mcpServers` JSON**

```json
{
  "mcpServers": {
    "ui-explorer": { "command": "npx", "args": ["-y", "ui-explorer-mcp"] }
  }
}
```

**VS Code (`.vscode/mcp.json`)**

```json
{
  "servers": {
    "ui-explorer": { "type": "stdio", "command": "npx", "args": ["-y", "ui-explorer-mcp"] }
  }
}
```

## Tools

| Tool | What it does |
| --- | --- |
| `list_styles` | List design styles; filter by `category`, `difficulty` or `query` |
| `get_style` | Full guidance for one style |
| `get_style_tokens` | Concrete CSS values (background, surface, radius, shadow, text, accent, font) to theme a UI |
| `recommend_styles` | Describe your project; get best-matching styles and why |
| `list_components` | The 36 component types |
| `get_component_code` | HTML / CSS / Tailwind for a component in a style (`format`: `all`, `html`, `css`, `tailwind`) |
| `list_animations` | The 24 motion recipes |
| `get_animation` | CSS and Framer Motion code for one animation |

There is also an `apply_style` prompt that asks the assistant to restyle your UI using the library.

## About UI Explorer

UI Explorer is a React app for learning why a design style works, seeing it on real components, and copying the code. This server exposes the same data as the site, so your assistant and the website always agree. Browse the project, run the site locally, or contribute at [github.com/TejashRajuKV/ui-explorer](https://github.com/TejashRajuKV/ui-explorer).

## Develop

This package lives in the UI Explorer repo (`mcp/`) and bundles the website's own data files, so the site and the server never drift apart.

```bash
cd mcp
npm install
npm run build   # bundles ../src/data into dist/index.js
npm test        # starts the built server and calls every tool through a real MCP client
```

To try a local build in Claude Code: `claude mcp add ui-explorer -- node /path/to/ui-explorer/mcp/dist/index.js`

## License

MIT © Tejash Raju K V

# UI Explorer

An interactive guide to modern UI design: learn **why** a style works, see it on real components, tweak it live, and copy the code.

- **18 design styles** — Glassmorphism, Neumorphism, Brutalism, Neo-Brutalism, Aurora UI, Swiss Design, Y2K and more, each with history, principles, accessibility notes, best practices and common mistakes
- **36 components × every style** — live previews with copy-ready **HTML, CSS and Tailwind**
- **24 animations** — entrances, loaders, text effects and micro-interactions, with CSS and Framer Motion code
- **Playground, Code Library and Compare** — experiment with blur, radius and shadow, search snippets, and put two styles side by side
- **[MCP server](#use-it-from-your-ai-tool)** — give your AI coding assistant the same library

## Getting started

Requires Node 18+.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with Oxlint |
| `npx vitest run` | Run the unit tests |

## Use it from your AI tool

The library is also published as an MCP server, so tools like Claude Code, Claude Desktop, Cursor, Windsurf and VS Code can look up design guidance and pull component code while they build your UI:

```bash
claude mcp add ui-explorer -- npx -y ui-explorer-mcp
```

Setup for other clients and the full tool list are in [mcp/README.md](mcp/README.md).

## Project structure

```
src/
  pages/        Home, Library, Components, Animations, Playground, Code, Compare…
  components/
    home/       Landing page sections (sunset hero, bento grid, style showcase)
    gallery/    Component previews and the code viewer
    animations/ Animation cards, stage and detail dialog
    library/    Style cards and live style previews
    layout/     Navbar, footer, logo
  data/
    styles.js            The 18 design styles
    components.js        The 36 component types
    animations.js        The 24 motion recipes
    styleTokens.js       Shared per-style design tokens
    componentCode.js     Copy-ready code (hand-written snippets)
    extraComponentCode.js  Code generated from the tokens
  styles/
    dynamic-themes.css   Per-style page themes for Library detail pages
mcp/            The ui-explorer-mcp server (bundles src/data)
server/         Small Express + Prisma API for profile and progress
```

## Adding to the library

**A new design style**
1. Add an entry to `src/data/styles.js` (definition, principles, accessibility, examples…).
2. Add its tokens to `newStyleMap` in `src/data/styleTokens.js` and its text colour to `onFillMap`.
3. Add a live card to `src/components/library/StylePreview.jsx`, and a page theme in `src/styles/dynamic-themes.css`.

Every component then renders in the new style automatically, using a preview and code generated from its tokens. Hand-written previews can still override any combination.

**A new component**
1. Add it to `src/data/components.js`.
2. Add a preview in `src/components/gallery/tokenPreviews.jsx` (or `extraPreviews.jsx`).
3. Add its code generator in `src/data/extraComponentCode.js`.

**A new animation** — add an entry to `src/data/animations.js` with its `css` and `framer` code.

The site and the MCP server read the same data files, so they stay in sync. After changing `src/data`, rebuild the server with `cd mcp && npm run build`.

## Tech stack

React 19 · Vite · React Router · Framer Motion · Tailwind CSS 4 · Vitest · Oxlint

## Palette

The site theme uses a sunset palette on a dark plum base: `#200432` · `#4A0730` · `#7A0C31` · `#CD1A30` · `#FE8932` · `#FEE7B5`.

## License

The `ui-explorer-mcp` package is MIT licensed ([mcp/LICENSE](mcp/LICENSE)). The rest of the repository does not have a license file yet.

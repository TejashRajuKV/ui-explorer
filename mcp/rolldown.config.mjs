import { defineConfig } from 'rolldown'

// Bundle the website's data modules into one file; keep the MCP SDK and zod as real dependencies.
export default defineConfig({
  input: 'src/index.js',
  platform: 'node',
  external: [/^@modelcontextprotocol\/sdk/, 'zod'],
  output: { file: 'dist/index.js', format: 'esm', banner: '#!/usr/bin/env node' },
})

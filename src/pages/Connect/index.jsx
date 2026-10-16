import { motion } from 'framer-motion'
import CodeViewer from '../../components/gallery/CodeViewer'
import CopyButton from '../../components/ui/CopyButton'
import FadeIn from '../../components/ui/FadeIn'
import { clients, mcpTools, examplePrompts, steps, installCommand, NPM_URL, REPO_URL } from '../../data/connect'
import { styles } from '../../data/styles'
import { componentTypes } from '../../data/components'
import { animations } from '../../data/animations'

const ease = [0.22, 1, 0.36, 1]

export default function Connect() {
  const code = Object.fromEntries(clients.map(c => [c.name, c.snippet]))
  const tabs = clients.map(c => c.name)

  return (
    <div>
      {/* Hero */}
      <section className="connect-hero">
        <div aria-hidden="true" className="connect-glow" />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <span className="eyebrow">AI integration · MCP</span>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 76px)', margin: '14px 0 16px', lineHeight: 1.02, maxWidth: 860 }}>
              Give your AI the whole <em className="text-sunset" style={{ fontWeight: 500 }}>library</em>.
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 620, lineHeight: 1.7, marginBottom: 28 }}>
              Connect UI Explorer to Claude, Cursor, VS Code, Windsurf or any MCP-capable tool. Your assistant can look up
              {' '}{styles.length} design styles, {componentTypes.length} components and {animations.length} animations, and pull copy-ready code instead of guessing.
            </p>

            <div className="cmd-card">
              <span className="cmd-dots" aria-hidden="true"><i /><i /><i /></span>
              <code className="cmd-text"><span style={{ color: 'var(--orange)' }}>$</span> {installCommand}</code>
              <CopyButton value={installCommand} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 12 }}>
              Runs with npx on Node 18+. Not using Claude Code? Pick your tool below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '72px 0 24px' }}>
        <div className="container">
          <div className="steps">
            {steps.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="step">
                  <span className="step-n">{i + 1}</span>
                  <h3 style={{ fontSize: 20, margin: '12px 0 6px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Setup per tool */}
      <section style={{ padding: '56px 0' }}>
        <div className="container setup-grid">
          <FadeIn>
            <span className="eyebrow">Setup</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', margin: '12px 0 14px', lineHeight: 1.08 }}>Pick your tool</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>
              Every client uses the same server: <code className="inline-code">npx -y ui-explorer-mcp</code>. Only the place you put it differs.
            </p>
            <ul className="where-list">
              {clients.map(c => (
                <li key={c.id}>
                  <strong>{c.name}</strong>
                  <span>{c.where}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CodeViewer tabs={tabs} code={code} />
          </FadeIn>
        </div>
      </section>

      {/* Tools */}
      <section style={{ padding: '56px 0' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: 32 }}>
            <span className="eyebrow">What your AI can do</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', margin: '12px 0 8px', lineHeight: 1.08 }}>{mcpTools.length} tools, one library</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, maxWidth: 560, lineHeight: 1.7 }}>
              Your assistant decides when to call them. You just describe what you want to build.
            </p>
          </FadeIn>
          <div className="tools-grid">
            {mcpTools.map((t, i) => (
              <FadeIn key={t.name} delay={Math.min(i * 0.04, 0.2)}>
                <div className="tool">
                  <span className="tool-icon" aria-hidden="true">{t.icon}</span>
                  <code className="tool-name">{t.name}</code>
                  <p>{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts */}
      <section style={{ padding: '56px 0 40px' }}>
        <div className="container">
          <FadeIn style={{ marginBottom: 28 }}>
            <span className="eyebrow">Try asking</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', margin: '12px 0 0', lineHeight: 1.08 }}>Prompts to get started</h2>
          </FadeIn>
          <div className="prompts">
            {examplePrompts.map((p, i) => (
              <FadeIn key={p} delay={i * 0.05}>
                <div className="prompt">
                  <span className="prompt-q" aria-hidden="true">“</span>
                  <p>{p}</p>
                  <CopyButton value={p} label="Copy prompt" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section style={{ padding: '24px 0 96px' }}>
        <div className="container">
          <FadeIn>
            <div className="links-card">
              <div>
                <h3 style={{ fontSize: 24, marginBottom: 6 }}>Open source and on npm</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>The server bundles the same data as this site, so the two always agree.</p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a className="btn-sunset" href={NPM_URL} target="_blank" rel="noopener noreferrer">View on npm ↗</a>
                <a className="btn-ghost" href={REPO_URL} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .connect-hero { position: relative; overflow: hidden; padding: 64px 0 56px; border-bottom: 1px solid var(--border); }
        .connect-glow { position: absolute; right: -140px; top: -180px; width: 560px; height: 560px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle at 40% 60%, rgba(254,137,50,0.4), rgba(205,26,48,0.22) 45%, transparent 70%); filter: blur(10px); }

        .cmd-card { display: flex; align-items: center; gap: 14px; max-width: 760px; padding: 12px 14px 12px 16px; border-radius: 16px;
          background: #12011c; border: 1px solid rgba(254,231,181,0.12); box-shadow: 0 18px 50px rgba(8,0,14,0.5); }
        .cmd-dots { display: flex; gap: 5px; flex-shrink: 0; }
        .cmd-dots i { width: 9px; height: 9px; border-radius: 50%; background: var(--red); }
        .cmd-dots i:nth-child(2) { background: var(--orange); }
        .cmd-dots i:nth-child(3) { background: var(--cream); }
        .cmd-text { flex: 1; min-width: 0; overflow-x: auto; white-space: nowrap; font: 13.5px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--cream); scrollbar-width: none; }

        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .step { height: 100%; padding: 24px; border-radius: 22px; background: linear-gradient(180deg, #230636, #1a0428); border: 1px solid var(--border); }
        .step-n { display: inline-grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; font: 800 14px 'Space Grotesk', sans-serif; color: var(--plum); background: linear-gradient(135deg, var(--cream), var(--orange)); }

        .setup-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 48px; align-items: start; }
        .inline-code { padding: 2px 8px; border-radius: 6px; font: 13px ui-monospace, monospace; color: var(--orange); background: rgba(254,137,50,0.1); }
        .where-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .where-list li { display: flex; flex-direction: column; gap: 2px; padding: 12px 14px; border-radius: 14px; border: 1px solid var(--border); background: rgba(254,231,181,0.03); }
        .where-list strong { font-size: 14px; color: var(--cream); }
        .where-list span { font-size: 13px; color: var(--text-secondary); line-height: 1.55; }

        .tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .tool { height: 100%; padding: 20px; border-radius: 20px; background: linear-gradient(180deg, #230636, #1a0428); border: 1px solid var(--border); transition: border-color .25s ease, transform .3s ease; }
        .tool:hover { border-color: var(--border-hover); transform: translateY(-3px); }
        .tool-icon { display: block; font-size: 22px; margin-bottom: 10px; }
        .tool-name { display: inline-block; padding: 2px 8px; margin-bottom: 8px; border-radius: 6px; font: 600 12.5px ui-monospace, monospace; color: var(--orange); background: rgba(254,137,50,0.1); }
        .tool p { font-size: 13px; line-height: 1.6; color: var(--text-secondary); }

        .prompts { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .prompt { position: relative; height: 100%; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; padding: 22px 22px 18px; border-radius: 20px; border: 1px solid var(--border); background: rgba(254,231,181,0.03); }
        .prompt-q { position: absolute; top: 4px; left: 14px; font: 700 54px/1 var(--font-display); color: rgba(254,137,50,0.25); pointer-events: none; }
        .prompt p { padding-top: 14px; font-size: 15px; line-height: 1.65; color: var(--cream); flex: 1; }

        .links-card { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; padding: 28px 32px; border-radius: 26px;
          background: linear-gradient(135deg, rgba(254,137,50,0.14), rgba(205,26,48,0.1)); border: 1px solid var(--border-hover); }

        @media (max-width: 960px) {
          .steps { grid-template-columns: 1fr; }
          .setup-grid { grid-template-columns: 1fr; gap: 28px; }
          .tools-grid { grid-template-columns: repeat(2, 1fr); }
          .prompts { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .tools-grid { grid-template-columns: 1fr; }
          .cmd-card { flex-wrap: wrap; }
          .cmd-text { flex-basis: 100%; order: 2; }
        }
      `}</style>
    </div>
  )
}

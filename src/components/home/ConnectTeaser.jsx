import { Link } from 'react-router-dom'
import FadeIn from '../ui/FadeIn'
import CopyButton from '../ui/CopyButton'
import { installCommand, clients } from '../../data/connect'

export default function ConnectTeaser() {
  return (
    <section style={{ position: 'relative', background: 'var(--bg-primary)', padding: '40px 0 96px' }}>
      <div className="container">
        <FadeIn>
          <div className="teaser">
            <div aria-hidden="true" className="teaser-glow" />
            <div style={{ position: 'relative', flex: '1 1 380px', minWidth: 0 }}>
              <span className="eyebrow">New · AI integration</span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', margin: '12px 0 12px', lineHeight: 1.06 }}>
                Bring the library <em className="text-sunset" style={{ fontWeight: 500 }}>into your AI tool</em>.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.7, maxWidth: 480, marginBottom: 22 }}>
                One command connects UI Explorer to your assistant, so it can recommend styles and write copy-ready code for you.
              </p>
              <Link to="/connect" className="btn-sunset">See how it works →</Link>
            </div>

            <div style={{ position: 'relative', flex: '1 1 380px', minWidth: 0 }}>
              <div className="teaser-term">
                <div className="teaser-bar"><i /><i /><i /><span>terminal</span></div>
                <div className="teaser-body">
                  <code><span style={{ color: 'var(--orange)' }}>$</span> {installCommand}</code>
                  <CopyButton value={installCommand} />
                </div>
              </div>
              <div className="teaser-chips" aria-label="Works with">
                <span>Works with</span>
                {clients.map(c => <b key={c.id}>{c.name}</b>)}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .teaser { position: relative; overflow: hidden; display: flex; flex-wrap: wrap; align-items: center; gap: 36px; padding: clamp(24px, 4vw, 48px); border-radius: 32px;
          background: linear-gradient(135deg, #2a0a3a, #1a0428); border: 1px solid var(--border-hover); }
        .teaser-glow { position: absolute; right: -120px; bottom: -160px; width: 440px; height: 440px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(254,137,50,0.3), rgba(205,26,48,0.16) 50%, transparent 70%); }
        .teaser-term { border-radius: 16px; overflow: hidden; background: #12011c; border: 1px solid rgba(254,231,181,0.12); box-shadow: 0 18px 44px rgba(8,0,14,0.5); }
        .teaser-bar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; border-bottom: 1px solid rgba(254,231,181,0.07); }
        .teaser-bar i { width: 9px; height: 9px; border-radius: 50%; background: var(--red); }
        .teaser-bar i:nth-child(2) { background: var(--orange); }
        .teaser-bar i:nth-child(3) { background: var(--cream); }
        .teaser-bar span { margin-left: 8px; font: 11px ui-monospace, monospace; color: var(--text-muted); }
        .teaser-body { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; padding: 16px; }
        .teaser-body code { font: 13px/1.6 ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--cream); word-break: break-all; }
        .teaser-chips { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-top: 14px; }
        .teaser-chips span { font-size: 12px; color: var(--text-muted); margin-right: 4px; }
        .teaser-chips b { padding: 4px 11px; border-radius: 100px; font-size: 12px; font-weight: 600; color: var(--text-secondary); border: 1px solid var(--border); background: rgba(254,231,181,0.04); }
      `}</style>
    </section>
  )
}

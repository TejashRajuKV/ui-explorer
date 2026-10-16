import { Link } from 'react-router-dom'
import ComponentPreview from '../gallery/ComponentPreview'
import FadeIn from '../ui/FadeIn'
import { styles } from '../../data/styles'

const miniPreviews = [
  ['button', 'glassmorphism'], ['toggle', 'neumorphism'], ['badge', 'brutalism'],
  ['progress', 'cyberpunk'], ['avatar', 'claymorphism'], ['tabs', 'dark-ui'],
]

/* Tracks the cursor for the spotlight gradient */
const spotlight = e => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function Tile({ to, area, eyebrow, title, desc, children, delay = 0 }) {
  return (
    <FadeIn delay={delay} style={{ gridArea: area }} className="bento-cell">
      <Link to={to} className="bento-tile" onMouseMove={spotlight}>
        <div className="bento-visual">{children}</div>
        <div className="bento-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h3 style={{ fontSize: 24, margin: '8px 0 6px', color: 'var(--cream)' }}>{title}</h3>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 420 }}>{desc}</p>
        </div>
        <span className="bento-arrow" aria-hidden="true">↗</span>
      </Link>
    </FadeIn>
  )
}

export default function FeatureBento() {
  return (
    <section style={{ background: 'var(--bg-primary)', padding: '96px 0' }}>
      <div className="container">
        <FadeIn style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow">Everything in one place</span>
          <h2 style={{ fontSize: 'clamp(34px, 5vw, 60px)', marginTop: 14, lineHeight: 1.05 }}>
            A studio for <em className="text-sunset" style={{ fontWeight: 500 }}>curious</em> builders
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, margin: '16px auto 0', lineHeight: 1.7 }}>
            Learn why a style works, see it on real components, tweak it live, and ship the code.
          </p>
        </FadeIn>

        <div className="bento-grid">
          <Tile to="/components" area="comp" eyebrow="Gallery" title="Component Gallery" desc="Every component in every style, with HTML, CSS and Tailwind ready to copy.">
            <div className="mini-grid">
              {miniPreviews.map(([c, s]) => (
                <div key={c} className="mini-cell">
                  <div style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', pointerEvents: 'none' }}>
                    <ComponentPreview componentId={c} styleId={s} height={220} />
                  </div>
                </div>
              ))}
            </div>
          </Tile>

          <Tile to="/library" area="lib" eyebrow="Library" title="Design Style Library" desc={`Deep dives into ${styles.length} aesthetics: their history, principles, dos and don'ts.`} delay={0.08}>
            <div className="swatch-row">
              {styles.map(s => (
                <div key={s.id} className="swatch-col" title={s.name}>
                  {s.colors.slice(0, 4).map((c, i) => <span key={i} style={{ background: c }} />)}
                </div>
              ))}
            </div>
          </Tile>

          <Tile to="/animations" area="anim" eyebrow="Motion" title="Animations" desc="Copyable CSS and Framer Motion recipes." delay={0.12}>
            <div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
              <div className="bento-orbit"><span /><span /></div>
            </div>
          </Tile>

          <Tile to="/code" area="code" eyebrow="Snippets" title="Code Library" desc="Search the snippets and copy what you need." delay={0.16}>
            <pre className="bento-code">
              <span style={{ color: '#FE8932' }}>.glass</span> {'{'}{'\n'}
              {'  '}<span style={{ color: '#ff7a8a' }}>backdrop-filter</span>: blur(16px);{'\n'}
              {'  '}<span style={{ color: '#ff7a8a' }}>border</span>: 1px solid <span style={{ color: '#FEE7B5' }}>#fff3</span>;{'\n'}
              {'}'}<span className="bento-caret" />
            </pre>
          </Tile>

          <Tile to="/playground" area="play" eyebrow="Playground" title="Live Playground" desc="Drag sliders and watch blur, radius and shadow reshape a card in real time." delay={0.2}>
            <div className="play-demo">
              <div className="play-card" />
              <div className="play-sliders">
                {['Blur', 'Radius', 'Shadow'].map((l, i) => (
                  <div key={l} className="play-slider">
                    <span>{l}</span>
                    <div><i style={{ animationDelay: `${i * -1.3}s` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </Tile>

          <Tile to="/compare" area="cmp" eyebrow="Compare" title="Side-by-side" desc="Put two styles head to head and see the trade-offs." delay={0.24}>
            <div className="cmp-demo">
              <div className="cmp-a">Aa</div>
              <div className="cmp-b">Aa</div>
              <span className="cmp-bar" />
            </div>
          </Tile>
        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid; gap: 18px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas:
            "comp comp lib lib"
            "comp comp anim code"
            "play play cmp cmp";
        }
        .bento-cell { min-width: 0; }
        .bento-tile {
          position: relative; display: flex; flex-direction: column; height: 100%; min-height: 250px;
          border-radius: 28px; overflow: hidden; isolation: isolate;
          background: linear-gradient(180deg, #230636, #1a0428);
          border: 1px solid rgba(254,231,181,0.08);
          transition: border-color .3s ease, transform .4s cubic-bezier(.22,1,.36,1);
        }
        .bento-tile::before {
          content: ''; position: absolute; inset: 0; z-index: -1; opacity: 0; transition: opacity .3s ease;
          background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(254,137,50,0.16), transparent 60%);
        }
        .bento-tile:hover { border-color: rgba(254,137,50,0.35); transform: translateY(-4px); }
        .bento-tile:hover::before { opacity: 1; }
        .bento-visual { flex: 1; min-height: 120px; padding: 20px 20px 0; position: relative; }
        .bento-copy { padding: 18px 24px 24px; }
        .bento-arrow {
          position: absolute; top: 18px; right: 18px; width: 36px; height: 36px; border-radius: 50%;
          display: grid; place-items: center; font-size: 16px; color: var(--cream);
          background: rgba(254,231,181,0.06); border: 1px solid rgba(254,231,181,0.1);
          transition: background .3s ease, transform .3s ease, color .3s ease; z-index: 2;
        }
        .bento-tile:hover .bento-arrow { background: var(--orange); color: var(--plum); transform: rotate(45deg); }

        .mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .mini-cell { height: 110px; overflow: hidden; border-radius: 12px; border: 1px solid rgba(254,231,181,0.06); }

        .swatch-row { display: flex; gap: 6px; height: 100%; min-height: 96px; }
        .swatch-col { flex: 1; display: flex; flex-direction: column; border-radius: 10px; overflow: hidden; transition: flex .4s cubic-bezier(.22,1,.36,1); }
        .swatch-col span { flex: 1; }
        .swatch-col:hover { flex: 3; }

        .bento-orbit { position: relative; width: 96px; height: 96px; }
        .bento-orbit::before { content: ''; position: absolute; inset: 32px; border-radius: 50%; background: var(--grad-sunset); box-shadow: 0 0 30px #FE8932; }
        .bento-orbit span { position: absolute; inset: 0; border-radius: 50%; border: 1px dashed rgba(254,231,181,0.15); animation: spin 3s linear infinite; }
        .bento-orbit span:last-child { inset: 14px; animation-duration: 2s; animation-direction: reverse; }
        .bento-orbit span::after { content: ''; position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; margin-left: -5px; border-radius: 50%; background: var(--cream); }

        .bento-code { font: 12.5px/1.7 ui-monospace, SFMono-Regular, Menlo, monospace; color: rgba(254,231,181,0.8); background: #12011c; border-radius: 14px; padding: 14px 16px; border: 1px solid rgba(254,231,181,0.06); white-space: pre; overflow: hidden; }
        .bento-caret { display: inline-block; width: 7px; height: 14px; background: var(--orange); vertical-align: middle; margin-left: 2px; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }

        .play-demo { display: flex; gap: 24px; align-items: center; height: 100%; }
        .play-card { width: 120px; height: 90px; flex-shrink: 0; background: rgba(254,231,181,0.12); border: 1px solid rgba(254,231,181,0.25); animation: play-morph 4s ease-in-out infinite; }
        @keyframes play-morph {
          0%,100% { border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,.2); backdrop-filter: blur(2px); background: rgba(254,231,181,0.1); }
          50% { border-radius: 32px; box-shadow: 0 20px 40px rgba(205,26,48,.45); background: rgba(254,137,50,0.3); }
        }
        .play-sliders { flex: 1; display: flex; flex-direction: column; gap: 14px; }
        .play-slider { display: grid; grid-template-columns: 60px 1fr; align-items: center; gap: 10px; font-size: 12px; color: var(--text-muted); }
        .play-slider div { position: relative; height: 4px; border-radius: 4px; background: rgba(254,231,181,0.1); }
        .play-slider i { position: absolute; top: 50%; width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius: 50%; background: var(--cream); box-shadow: 0 0 0 4px rgba(254,137,50,.3); animation: knob 4s ease-in-out infinite; }
        @keyframes knob { 0%,100% { left: 15%; } 50% { left: 85%; } }

        .cmp-demo { position: relative; display: grid; grid-template-columns: 1fr 1fr; height: 100%; min-height: 110px; border-radius: 16px; overflow: hidden; }
        .cmp-a, .cmp-b { display: grid; place-items: center; font-size: 40px; font-weight: 800; }
        .cmp-a { background: linear-gradient(135deg,#FE8932,#CD1A30); color: #FEE7B5; font-family: var(--font-display); }
        .cmp-b { background: #FEE7B5; color: #200432; font-family: monospace; box-shadow: inset 4px 0 0 #200432; }
        .cmp-bar { position: absolute; top: 12%; bottom: 12%; left: 50%; width: 4px; margin-left: -2px; border-radius: 4px; background: #200432; animation: cmp-slide 5s ease-in-out infinite; }
        @keyframes cmp-slide { 0%,100% { left: 30%; } 50% { left: 70%; } }

        @media (max-width: 960px) {
          .bento-grid { grid-template-columns: 1fr 1fr; grid-template-areas: "comp comp" "lib lib" "anim code" "play play" "cmp cmp"; }
        }
        @media (max-width: 560px) {
          .bento-grid { grid-template-columns: 1fr; grid-template-areas: "comp" "lib" "anim" "code" "play" "cmp"; }
          .mini-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}

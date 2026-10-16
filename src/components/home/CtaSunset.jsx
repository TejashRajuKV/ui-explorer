import { Link } from 'react-router-dom'
import FadeIn from '../ui/FadeIn'

/* Deterministic star field */
const stars = Array.from({ length: 48 }, (_, i) => ({
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 23.3) % 62}%`,
  size: 1 + ((i * 7) % 3),
  delay: `${(i % 7) * 0.6}s`,
}))

export default function CtaSunset() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--bg-primary) 0%, #200432 35%, #4A0730 70%, #7A0C31 100%)', padding: '140px 0 0', textAlign: 'center' }}>
      {stars.map((s, i) => (
        <span key={i} className="cta-star" aria-hidden="true" style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <FadeIn>
          <span className="eyebrow" style={{ color: 'var(--cream)', opacity: 0.7 }}>Golden hour is short</span>
          <h2 style={{ fontSize: 'clamp(38px, 6vw, 80px)', margin: '16px auto 22px', lineHeight: 1.02, maxWidth: 900 }}>
            Start building something <em className="text-sunset" style={{ fontWeight: 500 }}>beautiful</em> tonight.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Open the playground, pick a style, and copy production-ready code in seconds.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/playground" className="btn-sunset">Open Playground →</Link>
            <Link to="/library" className="btn-ghost">Browse styles</Link>
          </div>
        </FadeIn>
      </div>

      {/* Setting sun + ridges */}
      <div aria-hidden="true" style={{ position: 'relative', height: 260, marginTop: 80 }}>
        <div className="cta-sun" />
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <path d="M0,170 L120,120 L220,150 L340,90 L460,140 L560,110 L660,150 L720,100 L800,140 L920,96 L1040,140 L1160,112 L1280,150 L1440,118 L1440,260 L0,260Z" fill="#CD1A30" opacity="0.9" />
          <path d="M0,200 L140,168 L260,194 L380,160 L520,196 L640,172 L760,200 L900,166 L1040,198 L1180,170 L1320,196 L1440,176 L1440,260 L0,260Z" fill="#4A0730" />
          <path d="M0,232 L160,210 L300,228 L460,206 L620,230 L780,212 L940,232 L1100,210 L1260,230 L1440,214 L1440,260 L0,260Z" fill="var(--bg-primary)" />
        </svg>
      </div>

      <style>{`
        .cta-star { position: absolute; border-radius: 50%; background: #FEE7B5; animation: twinkle 3.6s ease-in-out infinite; }
        @keyframes twinkle { 0%,100% { opacity: .15 } 50% { opacity: .9 } }
        .cta-sun {
          position: absolute; left: 50%; bottom: 40px; width: 360px; height: 360px; margin-left: -180px; border-radius: 50%;
          background: radial-gradient(circle at 50% 40%, #FEE7B5, #FE8932 55%, #CD1A30);
          box-shadow: 0 0 120px 40px rgba(254,137,50,0.35);
          animation: cta-sun-rise 8s ease-in-out infinite alternate;
        }
        @keyframes cta-sun-rise { from { transform: translateY(40px) } to { transform: translateY(0) } }
      `}</style>
    </section>
  )
}

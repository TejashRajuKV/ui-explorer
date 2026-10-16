/* StylePreview.jsx — Pure CSS live previews for each design style */

const previews = {
  glassmorphism: (
    <div style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#ffffff33', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 16, padding: '24px 28px', width: '100%', maxWidth: 260 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.2)', marginBottom: 12 }} />
        <div style={{ height: 10, background: 'rgba(255,255,255,0.7)', borderRadius: 5, marginBottom: 8, width: '70%' }} />
        <div style={{ height: 8, background: 'rgba(255,255,255,0.4)', borderRadius: 5, marginBottom: 8, width: '90%' }} />
        <div style={{ height: 8, background: 'rgba(255,255,255,0.4)', borderRadius: 5, marginBottom: 18, width: '60%' }} />
        <div style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 8, padding: '8px 16px', textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#fff' }}>Explore →</div>
      </div>
    </div>
  ),

  neumorphism: (
    <div style={{ background: '#e0e0f0', borderRadius: 16, padding: 28, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#e0e0f0', borderRadius: 20, padding: 24, boxShadow: '8px 8px 16px #c8c8e0, -8px -8px 16px #ffffff', width: '100%', maxWidth: 240 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: '#e0e0f0', boxShadow: '4px 4px 8px #c8c8e0, -4px -4px 8px #ffffff', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg, #6c63ff, #6c63ff)' }} />
        </div>
        <div style={{ height: 8, background: '#a0a0c0', borderRadius: 4, marginBottom: 8, width: '65%', boxShadow: 'inset 2px 2px 4px #c8c8e0, inset -2px -2px 4px #ffffff' }} />
        <div style={{ height: 8, background: '#a0a0c0', borderRadius: 4, marginBottom: 20, width: '80%', boxShadow: 'inset 2px 2px 4px #c8c8e0, inset -2px -2px 4px #ffffff' }} />
        <div style={{ background: '#e0e0f0', borderRadius: 10, padding: '10px 0', textAlign: 'center', boxShadow: '4px 4px 8px #c8c8e0, -4px -4px 8px #ffffff', fontSize: 13, fontWeight: 700, color: '#6c63ff' }}>Action</div>
      </div>
    </div>
  ),

  minimalism: (
    <div style={{ background: '#ffffff', borderRadius: 16, padding: '28px 32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ fontSize: 10, letterSpacing: '0.2em', color: '#999', marginBottom: 14 }}>01 — STUDIO</div>
      <div style={{ fontSize: 26, fontWeight: 600, color: '#111', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 12 }}>Less, but<br />better.</div>
      <div style={{ height: 6, background: '#e5e5e5', borderRadius: 3, width: '70%', marginBottom: 6 }} />
      <div style={{ height: 6, background: '#e5e5e5', borderRadius: 3, width: '50%', marginBottom: 22 }} />
      <div style={{ fontSize: 12, fontWeight: 600, color: '#111', borderBottom: '1px solid #111', alignSelf: 'flex-start', paddingBottom: 2 }}>Read more →</div>
    </div>
  ),

  brutalism: (
    <div style={{ background: '#ffffff', borderRadius: 0, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#ffffff', border: '3px solid #000000', width: '100%', maxWidth: 240, boxShadow: '6px 6px 0px #000000' }}>
        <div style={{ background: '#000000', padding: '10px 14px' }}>
          <div style={{ height: 14, background: '#ffff00', width: '60%' }} />
        </div>
        <div style={{ padding: '14px' }}>
          <div style={{ height: 10, background: '#000000', marginBottom: 8, width: '80%' }} />
          <div style={{ height: 10, background: '#000000', marginBottom: 8, width: '60%' }} />
          <div style={{ height: 10, background: '#000000', marginBottom: 16, width: '70%' }} />
          <div style={{ border: '3px solid #000000', padding: '10px', textAlign: 'center', fontWeight: 900, fontSize: 14, background: '#ff0000', color: '#ffffff', letterSpacing: 2 }}>CLICK</div>
        </div>
      </div>
    </div>
  ),

  'material-design': (
    <div style={{ background: '#f5f5f5', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#ffffff', borderRadius: 8, padding: 20, boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)', width: '100%', maxWidth: 240 }}>
        <div style={{ height: 6, background: '#6200ee', borderRadius: '8px 8px 0 0', margin: '-20px -20px 16px', width: 'calc(100% + 40px)' }} />
        <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#03dac6', marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#6200ee' }} />
        </div>
        <div style={{ height: 10, background: '#212121', borderRadius: 3, marginBottom: 8, width: '60%' }} />
        <div style={{ height: 7, background: '#757575', borderRadius: 3, marginBottom: 6, width: '85%' }} />
        <div style={{ height: 7, background: '#757575', borderRadius: 3, marginBottom: 20, width: '70%' }} />
        <div style={{ background: '#6200ee', borderRadius: 4, padding: '10px', textAlign: 'center', color: '#ffffff', fontWeight: 700, fontSize: 13, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>LEARN MORE</div>
      </div>
    </div>
  ),

  'fluent-design': (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(circle at 20% 80%, #7fb2ff 0%, transparent 45%), radial-gradient(circle at 85% 20%, #b3a4ff 0%, transparent 45%), linear-gradient(135deg, #cfe3ff, #e8eeff)', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Segoe UI Variable", "Segoe UI", system-ui, sans-serif' }}>
      <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', background: '#0078d4', opacity: 0.55, filter: 'blur(28px)', left: '38%', top: '30%' }} />
      <div style={{ position: 'relative', background: 'rgba(252,252,252,0.62)', backdropFilter: 'blur(30px) saturate(160%)', WebkitBackdropFilter: 'blur(30px) saturate(160%)', border: '1px solid rgba(255,255,255,0.7)', borderRadius: 8, padding: 18, width: '100%', maxWidth: 240, boxShadow: '0 8px 16px rgba(0,0,0,0.14), 0 0 2px rgba(0,0,0,0.12)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 32, height: 32, borderRadius: 6, background: 'linear-gradient(135deg, #2b88d8, #0063b1)' }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>Settings</div>
            <div style={{ fontSize: 10, color: '#5c5c5c' }}>Acrylic surface</div>
          </div>
        </div>
        {['Bluetooth', 'Night light'].map((l, i) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', marginBottom: 4, borderRadius: 4, background: 'rgba(255,255,255,0.55)', fontSize: 11, color: '#1a1a1a' }}>
            {l}
            <span style={{ width: 28, height: 14, borderRadius: 10, background: i === 0 ? '#0078d4' : 'transparent', border: i === 0 ? 'none' : '1px solid #5c5c5c', position: 'relative', boxSizing: 'border-box' }}>
              <span style={{ position: 'absolute', top: i === 0 ? 3 : 2, left: i === 0 ? 17 : 3, width: 8, height: 8, borderRadius: '50%', background: i === 0 ? '#fff' : '#5c5c5c' }} />
            </span>
          </div>
        ))}
        <div style={{ marginTop: 10, background: '#0078d4', borderRadius: 4, padding: '7px', textAlign: 'center', color: '#ffffff', fontWeight: 600, fontSize: 12, borderBottom: '1px solid #005a9e' }}>Continue</div>
      </div>
    </div>
  ),

  'bento-ui': (
    <div style={{ background: '#16213e', borderRadius: 16, padding: 16, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto auto', gap: 10, width: '100%', maxWidth: 260 }}>
        <div style={{ gridColumn: '1 / -1', background: '#1a1a2e', borderRadius: 24, padding: 14 }}>
          <div style={{ height: 8, background: '#6c63ff', borderRadius: 3, width: '50%', marginBottom: 6 }} />
          <div style={{ height: 6, background: '#ffffff', borderRadius: 3, width: '80%' }} />
        </div>
        <div style={{ background: '#1a1a2e', borderRadius: 24, padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#ff6584' }} />
          <div style={{ height: 6, background: '#ffffff', borderRadius: 3 }} />
        </div>
        <div style={{ background: '#6c63ff', borderRadius: 24, padding: 14, display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ height: 8, background: '#ffffff', borderRadius: 3, width: '70%' }} />
        </div>
        <div style={{ gridColumn: '1 / -1', background: '#1a1a2e', borderRadius: 24, padding: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff6584' }} />
          <div style={{ height: 6, background: '#ffffff', borderRadius: 3, flex: 1 }} />
        </div>
      </div>
    </div>
  ),

  claymorphism: (
    <div style={{ background: '#fdf2f5', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ background: '#ffd6e0', borderRadius: 36, padding: 22, width: '100%', maxWidth: 240, boxShadow: '0 18px 36px rgba(217,72,106,0.25), inset -8px -8px 16px rgba(160,60,90,0.18), inset 8px 8px 16px rgba(255,255,255,0.8)' }}>
        <div style={{ width: 52, height: 52, borderRadius: 20, background: '#a8d8ea', boxShadow: '0 10px 18px rgba(47,127,166,0.3), inset -5px -5px 10px rgba(26,92,122,0.22), inset 5px 5px 10px rgba(255,255,255,0.75)', marginBottom: 16 }} />
        <div style={{ height: 10, background: '#5a3a44', borderRadius: 6, marginBottom: 8, width: '60%' }} />
        <div style={{ height: 8, background: '#8c6a73', borderRadius: 6, marginBottom: 6, width: '85%' }} />
        <div style={{ height: 8, background: '#8c6a73', borderRadius: 6, marginBottom: 18, width: '70%' }} />
        <div style={{ background: '#c3f0ca', borderRadius: 22, padding: '11px', textAlign: 'center', color: '#2b5a34', fontWeight: 800, fontSize: 14, boxShadow: '0 10px 18px rgba(63,154,84,0.28), inset -4px -4px 8px rgba(43,90,52,0.18), inset 4px 4px 8px rgba(255,255,255,0.8)' }}>Let&apos;s go!</div>
      </div>
    </div>
  ),

  skeuomorphism: (
    <div style={{ background: '#d4a76a', borderRadius: 16, padding: 20, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 2px, transparent 2px, transparent 4px)' }}>
      <div style={{ background: 'linear-gradient(to bottom, #d4a76a, #c49658)', borderRadius: 8, padding: 20, border: '1px solid #8b4513', boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.4)', width: '100%', maxWidth: 240 }}>
        <div style={{ background: 'linear-gradient(to bottom, #8B4513, #5a2e0c)', borderRadius: 4, padding: '8px 12px', marginBottom: 14, boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)' }}>
          <div style={{ height: 8, background: '#ffffff', borderRadius: 2, width: '60%', opacity: 0.9 }} />
        </div>
        <div style={{ height: 7, background: '#2c1a0e', borderRadius: 2, marginBottom: 6, width: '80%' }} />
        <div style={{ height: 7, background: '#5c4433', borderRadius: 2, marginBottom: 6, width: '65%' }} />
        <div style={{ height: 7, background: '#5c4433', borderRadius: 2, marginBottom: 16, width: '75%' }} />
        <div style={{ background: '#2c5f2e', borderRadius: 6, padding: '10px', textAlign: 'center', color: '#ffffff', fontWeight: 700, fontSize: 13, border: '1px solid #1a3c1c', boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)' }}>Confirm</div>
      </div>
    </div>
  ),

  cyberpunk: (
    <div style={{ background: '#0d0d1e', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(0,255,255,0.05) 0 1px, transparent 1px 3px)', pointerEvents: 'none' }} />
      <div style={{ border: '1px solid #00ffff', borderRadius: 0, padding: 20, width: '100%', maxWidth: 240, position: 'relative', clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))', background: 'rgba(0,255,255,0.03)', boxShadow: '0 0 10px rgba(0,255,255,0.3), inset 0 0 10px rgba(255,0,255,0.1)' }}>
        <div style={{ position: 'absolute', top: -1, left: 20, right: 20, height: 2, background: '#00ffff', boxShadow: '0 0 10px #00ffff' }} />
        <div style={{ fontSize: 11, color: '#00ffff', fontFamily: 'monospace', marginBottom: 12, letterSpacing: 2, textShadow: '0 0 8px #00ffff' }}>SYS://USER</div>
        <div style={{ height: 8, background: '#ff00ff', borderRadius: 0, marginBottom: 6, width: '70%', boxShadow: '0 0 10px #ff00ff' }} />
        <div style={{ height: 8, background: '#ffff00', borderRadius: 0, marginBottom: 6, width: '85%', boxShadow: '0 0 10px #ffff00' }} />
        <div style={{ height: 8, background: '#00ffff', borderRadius: 0, marginBottom: 18, width: '55%', boxShadow: '0 0 10px #00ffff' }} />
        <div style={{ border: '1px solid #ff00ff', borderRadius: 0, padding: '9px', textAlign: 'center', color: '#ff00ff', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)', fontWeight: 700, fontSize: 12, fontFamily: 'monospace', letterSpacing: 3, boxShadow: '0 0 10px rgba(255,0,255,0.4)' }}>ENGAGE</div>
      </div>
    </div>
  ),

  retro: (
    <div style={{ background: '#f7c59f', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }}>
      <div style={{ background: '#e8c547', borderRadius: 0, padding: 20, border: '3px solid #1a1a2e', width: '100%', maxWidth: 240, position: 'relative', boxShadow: '6px 6px 0px rgba(0,0,0,0.15)' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 900, color: '#1a1a2e', marginBottom: 12, letterSpacing: 1, textTransform: 'uppercase' }}>Retro™</div>
        <div style={{ height: 7, background: '#3a3a4e', borderRadius: 0, marginBottom: 5, width: '75%' }} />
        <div style={{ height: 7, background: '#3a3a4e', borderRadius: 0, marginBottom: 5, width: '55%' }} />
        <div style={{ height: 7, background: '#3a3a4e', borderRadius: 0, marginBottom: 16, width: '65%' }} />
        <div style={{ background: '#ff6b35', border: '3px solid #1a1a2e', padding: '10px', textAlign: 'center', color: '#1a1a2e', fontWeight: 900, fontSize: 13, fontFamily: 'monospace', letterSpacing: 3, boxShadow: '4px 4px 0px #1a1a2e' }}>◄ START ►</div>
      </div>
    </div>
  ),

  'dark-ui': (
    <div style={{ background: '#0a0a0f', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#1a1a2e', borderRadius: 14, padding: 22, border: '1px solid rgba(255,255,255,0.08)', width: '100%', maxWidth: 240, boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: '#6c63ff', boxShadow: '0 0 16px rgba(108,99,255,0.4)' }} />
          <div>
            <div style={{ height: 7, background: '#f0f0ff', borderRadius: 3, width: 70, marginBottom: 5 }} />
            <div style={{ height: 5, background: '#9999bb', borderRadius: 3, width: 45 }} />
          </div>
        </div>
        <div style={{ height: 7, background: '#9999bb', borderRadius: 3, marginBottom: 5, width: '85%' }} />
        <div style={{ height: 7, background: '#9999bb', borderRadius: 3, marginBottom: 18, width: '65%' }} />
        <div style={{ background: '#6c63ff', borderRadius: 8, padding: '10px', textAlign: 'center', color: '#f0f0ff', fontWeight: 700, fontSize: 13, boxShadow: '0 0 16px rgba(108,99,255,0.4)' }}>Explore</div>
      </div>
    </div>
  ),

  'light-ui': (
    <div style={{ background: '#fafafa', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#ffffff', borderRadius: 12, padding: 22, boxShadow: '0 4px 24px rgba(0,0,0,0.04)', width: '100%', maxWidth: 240, border: '1px solid #eaeaea' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#ffffff' }} />
          </div>
          <div>
            <div style={{ height: 8, background: '#1a1a1a', borderRadius: 3, width: 70, marginBottom: 4 }} />
            <div style={{ height: 6, background: '#868e96', borderRadius: 3, width: 50 }} />
          </div>
        </div>
        <div style={{ height: 7, background: '#868e96', borderRadius: 3, marginBottom: 5, width: '90%' }} />
        <div style={{ height: 7, background: '#868e96', borderRadius: 3, marginBottom: 20, width: '70%' }} />
        <div style={{ background: '#3b5bdb', borderRadius: 6, padding: '10px', textAlign: 'center', color: '#ffffff', fontWeight: 600, fontSize: 13, boxShadow: '0 2px 8px rgba(59,91,219,0.2)' }}>Get Started</div>
      </div>
    </div>
  ),

  'gradient-ui': (
    <div style={{ background: 'radial-gradient(circle at 0% 0%, rgba(65,88,208,0.35), transparent 50%), radial-gradient(circle at 100% 100%, rgba(255,204,112,0.4), transparent 50%), #140b2e', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ padding: 2, borderRadius: 16, background: 'linear-gradient(135deg, #4158D0, #C850C0 50%, #FFCC70)', width: '100%', maxWidth: 240 }}>
        <div style={{ background: '#140b2e', borderRadius: 14, padding: 20 }}>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 10, background: 'linear-gradient(90deg, #4158D0, #C850C0, #FFCC70)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Go vivid.</div>
          <div style={{ height: 7, background: 'rgba(255,255,255,0.55)', borderRadius: 3, marginBottom: 6, width: '85%' }} />
          <div style={{ height: 7, background: 'rgba(255,255,255,0.35)', borderRadius: 3, marginBottom: 18, width: '60%' }} />
          <div style={{ background: 'linear-gradient(135deg, #4158D0 0%, #C850C0 50%, #FFCC70 100%)', borderRadius: 10, padding: '10px', textAlign: 'center', color: '#ffffff', fontWeight: 700, fontSize: 13, boxShadow: '0 8px 20px rgba(200,80,192,0.45)' }}>Discover →</div>
        </div>
      </div>
    </div>
  ),

  'neo-brutalism': (
    <div style={{ background: '#fdf6e3', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ background: '#ffffff', border: '3px solid #111', borderRadius: 12, boxShadow: '6px 6px 0 #111', padding: 18, width: '100%', maxWidth: 240 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <span style={{ padding: '3px 10px', background: '#ffc900', border: '2px solid #111', borderRadius: 100, fontSize: 11, fontWeight: 800, color: '#111' }}>NEW</span>
          <span style={{ padding: '3px 10px', background: '#a7f3d0', border: '2px solid #111', borderRadius: 100, fontSize: 11, fontWeight: 800, color: '#111' }}>v2.0</span>
        </div>
        <div style={{ fontSize: 22, fontWeight: 900, color: '#111', lineHeight: 1.1, marginBottom: 8 }}>Make it<br />pop.</div>
        <div style={{ height: 7, background: '#111', opacity: 0.25, borderRadius: 4, width: '80%', marginBottom: 16 }} />
        <div style={{ background: '#ff90e8', border: '3px solid #111', borderRadius: 10, boxShadow: '4px 4px 0 #111', padding: '9px', textAlign: 'center', fontSize: 14, fontWeight: 900, color: '#111' }}>Get started →</div>
      </div>
    </div>
  ),

  'aurora-ui': (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#0b1020', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', background: '#38bdf8', filter: 'blur(50px)', opacity: 0.7, top: -40, left: -30 }} />
      <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', background: '#a855f7', filter: 'blur(50px)', opacity: 0.7, top: -20, right: -40 }} />
      <div style={{ position: 'absolute', width: 200, height: 160, borderRadius: '50%', background: '#34d399', filter: 'blur(55px)', opacity: 0.5, bottom: -70, left: '30%' }} />
      <div style={{ position: 'relative', background: 'rgba(11,16,32,0.55)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 18, padding: 20, width: '100%', maxWidth: 240 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#a5f3fc', marginBottom: 8 }}>INTRODUCING</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: '#f1f5ff', lineHeight: 1.15, marginBottom: 8 }}>Light that<br />feels alive.</div>
        <div style={{ height: 7, background: 'rgba(226,232,255,0.5)', borderRadius: 4, width: '85%', marginBottom: 16 }} />
        <div style={{ background: 'linear-gradient(135deg,#38bdf8,#a855f7)', borderRadius: 12, padding: '9px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#fff', boxShadow: '0 8px 24px rgba(168,85,247,0.45)' }}>Join the beta</div>
      </div>
    </div>
  ),

  'swiss-design': (
    <div style={{ background: '#ffffff', borderRadius: 16, padding: 22, height: '100%', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'auto 1fr auto', columnGap: 8, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <div style={{ gridColumn: '1 / 7', display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 700, color: '#111', borderBottom: '2px solid #111', paddingBottom: 6 }}>
        <span>Nr. 04</span><span>Zürich</span><span>1957</span>
      </div>
      <div style={{ gridColumn: '1 / 5', alignSelf: 'center', fontSize: 34, fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em', color: '#111' }}>Form<br />follows<br />content.</div>
      <div style={{ gridColumn: '5 / 7', gridRow: '2', alignSelf: 'center', justifySelf: 'end', width: '100%', maxWidth: 96, aspectRatio: '1', background: '#e3000f', borderRadius: '50%' }} />
      <div style={{ gridColumn: '1 / 4', fontSize: 9, lineHeight: 1.4, color: '#555' }}>Objective typography on a modular grid.</div>
      <div style={{ gridColumn: '5 / 7', fontSize: 9, fontWeight: 700, color: '#e3000f', textAlign: 'right' }}>Mehr →</div>
    </div>
  ),

  y2k: (
    <div style={{ background: 'linear-gradient(135deg,#c9d6ff 0%,#f8c8ff 50%,#bdf6ff 100%)', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Trebuchet MS", Verdana, sans-serif' }}>
      <div style={{ background: 'linear-gradient(180deg,#ffffff,#e4e9f5)', border: '1px solid #9aa7c7', borderRadius: 22, padding: 18, width: '100%', maxWidth: 240, boxShadow: 'inset 0 2px 0 #fff, 0 10px 24px rgba(58,141,255,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #b8c4dc 35%, #6b7a99 100%)', boxShadow: '0 2px 6px rgba(0,0,0,0.25)' }} />
          <div style={{ fontSize: 16, fontWeight: 700, color: '#2b2d6e' }}>CyberSurf 2000</div>
        </div>
        <div style={{ height: 7, background: 'rgba(43,45,110,0.35)', borderRadius: 4, width: '85%', marginBottom: 6 }} />
        <div style={{ height: 7, background: 'rgba(43,45,110,0.25)', borderRadius: 4, width: '60%', marginBottom: 16 }} />
        <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg,#6fb6ff,#1f5fe0)', border: '1px solid #1a4fb8', borderRadius: 100, padding: '9px', textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,0.3)', boxShadow: '0 4px 10px rgba(31,95,224,0.4)' }}>
          <span style={{ position: 'absolute', left: 6, right: 6, top: 2, height: '45%', borderRadius: 100, background: 'linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.1))' }} />
          <span style={{ position: 'relative' }}>Connect ✦</span>
        </div>
      </div>
    </div>
  ),
}

export default function StylePreview({ styleId, height = 220 }) {
  return (
    <div style={{ height, borderRadius: 16, overflow: 'hidden', flexShrink: 0 }}>
      {previews[styleId] || (
        <div style={{ height: '100%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>
          🎨
        </div>
      )}
    </div>
  )
}

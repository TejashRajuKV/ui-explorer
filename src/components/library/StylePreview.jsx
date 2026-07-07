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
    <div style={{ background: '#f5f5f5', borderRadius: 16, padding: 32, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#ffffff', width: '100%', maxWidth: 240, padding: 20, border: '1px solid #111111' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#111111', marginBottom: 20 }} />
        <div style={{ height: 22, background: '#111111', borderRadius: 0, marginBottom: 12, width: '55%' }} />
        <div style={{ height: 8, background: '#333333', borderRadius: 0, marginBottom: 6, width: '90%' }} />
        <div style={{ height: 8, background: '#333333', borderRadius: 0, marginBottom: 6, width: '75%' }} />
        <div style={{ height: 8, background: '#333333', borderRadius: 0, marginBottom: 24, width: '85%' }} />
        <div style={{ height: 40, background: '#111111', borderRadius: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ height: 8, background: '#ffffff', borderRadius: 0, width: '40%' }} />
        </div>
      </div>
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
    <div style={{ background: 'linear-gradient(135deg, #f3f3f3 0%, #ffffff 100%)', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 12, padding: 22, width: '100%', maxWidth: 240, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: '#0078d4', border: '1px solid rgba(255,255,255,0.3)' }} />
          <div>
            <div style={{ height: 8, background: '#000000', borderRadius: 3, width: 80, marginBottom: 4 }} />
            <div style={{ height: 6, background: '#333333', borderRadius: 3, width: 55 }} />
          </div>
        </div>
        <div style={{ height: 7, background: '#333333', borderRadius: 3, marginBottom: 6, width: '90%' }} />
        <div style={{ height: 7, background: '#333333', borderRadius: 3, marginBottom: 18, width: '70%' }} />
        <div style={{ background: '#0078d4', borderRadius: 4, padding: '9px', textAlign: 'center', color: '#ffffff', fontWeight: 600, fontSize: 13, border: '1px solid rgba(255,255,255,0.2)' }}>Continue</div>
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
    <div style={{ background: '#ffd6e0', borderRadius: 16, padding: 24, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#ffd6e0', borderRadius: 40, padding: 24, boxShadow: '10px 10px 24px #e6c1c9, -10px -10px 24px #ffebf7, inset 4px 4px 8px rgba(255,255,255,0.8)', width: '100%', maxWidth: 240 }}>
        <div style={{ width: 52, height: 52, borderRadius: 20, background: '#a8d8ea', boxShadow: '6px 6px 12px #e6c1c9, -6px -6px 12px #ffebf7, inset 2px 2px 4px rgba(255,255,255,0.5)', marginBottom: 16 }} />
        <div style={{ height: 10, background: '#5a3a44', borderRadius: 6, marginBottom: 8, width: '60%' }} />
        <div style={{ height: 8, background: '#8c6a73', borderRadius: 6, marginBottom: 6, width: '85%' }} />
        <div style={{ height: 8, background: '#8c6a73', borderRadius: 6, marginBottom: 20, width: '70%' }} />
        <div style={{ background: '#c3f0ca', borderRadius: 24, padding: '12px', textAlign: 'center', color: '#5a3a44', fontWeight: 700, fontSize: 14, boxShadow: '6px 6px 12px #e6c1c9, -6px -6px 12px #ffebf7, inset 2px 2px 4px rgba(255,255,255,0.5)' }}>Let's go!</div>
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
      <div style={{ border: '1px solid #00ffff', borderRadius: 0, padding: 20, width: '100%', maxWidth: 240, position: 'relative', boxShadow: '0 0 10px rgba(0,255,255,0.3), inset 0 0 10px rgba(255,0,255,0.1)' }}>
        <div style={{ position: 'absolute', top: -1, left: 20, right: 20, height: 2, background: '#00ffff', boxShadow: '0 0 10px #00ffff' }} />
        <div style={{ fontSize: 11, color: '#00ffff', fontFamily: 'monospace', marginBottom: 12, letterSpacing: 2, textShadow: '0 0 8px #00ffff' }}>SYS://USER</div>
        <div style={{ height: 8, background: '#ff00ff', borderRadius: 0, marginBottom: 6, width: '70%', boxShadow: '0 0 10px #ff00ff' }} />
        <div style={{ height: 8, background: '#ffff00', borderRadius: 0, marginBottom: 6, width: '85%', boxShadow: '0 0 10px #ffff00' }} />
        <div style={{ height: 8, background: '#00ffff', borderRadius: 0, marginBottom: 18, width: '55%', boxShadow: '0 0 10px #00ffff' }} />
        <div style={{ border: '1px solid #ff00ff', borderRadius: 0, padding: '9px', textAlign: 'center', color: '#ff00ff', fontWeight: 700, fontSize: 12, fontFamily: 'monospace', letterSpacing: 3, boxShadow: '0 0 10px rgba(255,0,255,0.4)' }}>ENGAGE</div>
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
            <div style={{ height: 8, background: '#000000', borderRadius: 3, width: 70, marginBottom: 4 }} />
            <div style={{ height: 6, background: '#666666', borderRadius: 3, width: 50 }} />
          </div>
        </div>
        <div style={{ height: 7, background: '#666666', borderRadius: 3, marginBottom: 5, width: '90%' }} />
        <div style={{ height: 7, background: '#666666', borderRadius: 3, marginBottom: 20, width: '70%' }} />
        <div style={{ background: '#3b5bdb', borderRadius: 6, padding: '10px', textAlign: 'center', color: '#ffffff', fontWeight: 600, fontSize: 13, boxShadow: '0 2px 8px rgba(59,91,219,0.2)' }}>Get Started</div>
      </div>
    </div>
  ),

  'gradient-ui': (
    <div style={{ background: 'linear-gradient(135deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)', borderRadius: 16, padding: 3, height: '100%' }}>
      <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.5)', borderRadius: 14, padding: 22, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 240 }}>
          <div style={{ height: 18, background: '#ffffff', borderRadius: 4, marginBottom: 8, width: '55%' }} />
          <div style={{ height: 8, background: 'rgba(255,255,255,0.85)', borderRadius: 3, marginBottom: 6, width: '85%' }} />
          <div style={{ height: 8, background: 'rgba(255,255,255,0.85)', borderRadius: 3, marginBottom: 6, width: '70%' }} />
          <div style={{ height: 8, background: 'rgba(255,255,255,0.6)', borderRadius: 3, marginBottom: 20, width: '55%' }} />
          <div style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 8, padding: '11px', textAlign: 'center', color: '#ffffff', fontWeight: 700, fontSize: 14 }}>Discover →</div>
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

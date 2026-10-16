/* ─────────────────────────────────────────────────────────
   ComponentPreview.jsx
   Live CSS-rendered previews for every component type × style
   No images — pure inline React/CSS
───────────────────────────────────────────────────────── */
import { newStyleMap as baseStyleMap, getStyleTokens, withAllStyles } from '../../data/styleTokens'
import { extraPreviews } from './extraPreviews'
import { tokenComponentPreviews, tokenFallbackPreview } from './tokenPreviews'

// Base tokens plus derived values (onPill etc.) for the generated previews
const newStyleMap = Object.fromEntries(Object.keys(baseStyleMap).map(id => [id, getStyleTokens(id)]))


/* ══════════════════════════════════════════
   BUTTON PREVIEWS
══════════════════════════════════════════ */
const buttonPreviews = {
  glassmorphism: (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'linear-gradient(135deg,#6c63ff,#ff6584)', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'12px 28px', background:'rgba(255,255,255,0.15)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,0.3)', borderRadius:12, color:'#fff', fontWeight:700, fontSize:14, cursor:'pointer', letterSpacing:'0.02em' }}>Primary</button>
      <button style={{ padding:'12px 28px', background:'rgba(255,255,255,0.05)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:12, color:'rgba(255,255,255,0.8)', fontWeight:600, fontSize:14, cursor:'pointer' }}>Secondary</button>
    </div>
  ),
  neumorphism: (
    <div style={{ display:'flex', gap:16, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:32, background:'#e0e5ec', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'12px 28px', background:'#e0e5ec', border:'none', borderRadius:12, color:'#6c63ff', fontWeight:700, fontSize:14, cursor:'pointer', boxShadow:'5px 5px 12px #b8bec7,-5px -5px 12px #ffffff' }}>Click Me</button>
      <button style={{ padding:'12px 28px', background:'#e0e5ec', border:'none', borderRadius:12, color:'#566170', fontWeight:600, fontSize:14, cursor:'pointer', boxShadow:'inset 3px 3px 8px #b8bec7,inset -3px -3px 8px #ffffff' }}>Pressed</button>
    </div>
  ),
  minimalism: (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'#fff', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'12px 28px', background:'#111', border:'none', borderRadius:4, color:'#fff', fontWeight:600, fontSize:14, cursor:'pointer' }}>Primary</button>
      <button style={{ padding:'12px 28px', background:'transparent', border:'1.5px solid #111', borderRadius:4, color:'#111', fontWeight:600, fontSize:14, cursor:'pointer' }}>Secondary</button>
      <button style={{ padding:'12px 0', background:'transparent', border:'none', color:'#111', fontWeight:600, fontSize:14, cursor:'pointer', textDecoration:'underline', textUnderlineOffset:4 }}>Ghost</button>
    </div>
  ),
  brutalism: (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'#f5f500', borderRadius:0, minHeight:100 }}>
      <button style={{ padding:'12px 24px', background:'#000', border:'3px solid #000', color:'#f5f500', fontWeight:900, fontSize:15, cursor:'pointer', fontFamily:'monospace', letterSpacing:2, textTransform:'uppercase', boxShadow:'4px 4px 0 #000' }}>CLICK</button>
      <button style={{ padding:'12px 24px', background:'#fff', border:'3px solid #000', color:'#000', fontWeight:900, fontSize:15, cursor:'pointer', fontFamily:'monospace', letterSpacing:2, textTransform:'uppercase', boxShadow:'4px 4px 0 #000' }}>SUBMIT</button>
    </div>
  ),
  'material-design': (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'#f5f5f5', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'10px 24px', background:'#6200ee', border:'none', borderRadius:4, color:'#fff', fontWeight:600, fontSize:14, cursor:'pointer', boxShadow:'0 2px 4px rgba(98,0,238,0.3),0 4px 12px rgba(98,0,238,0.2)', letterSpacing:'0.08em', textTransform:'uppercase', fontSize:13 }}>CONTAINED</button>
      <button style={{ padding:'10px 24px', background:'transparent', border:'1.5px solid #6200ee', borderRadius:4, color:'#6200ee', fontWeight:600, fontSize:13, cursor:'pointer', letterSpacing:'0.08em', textTransform:'uppercase' }}>OUTLINED</button>
    </div>
  ),
  'fluent-design': (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'linear-gradient(135deg,#0078d4,#005a9e)', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'10px 24px', background:'#0078d4', border:'1px solid rgba(255,255,255,0.3)', borderRadius:6, color:'#fff', fontWeight:600, fontSize:14, cursor:'pointer', boxShadow:'0 2px 8px rgba(0,0,0,0.2)' }}>Confirm</button>
      <button style={{ padding:'10px 24px', background:'rgba(255,255,255,0.1)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:6, color:'#fff', fontWeight:600, fontSize:14, cursor:'pointer' }}>Cancel</button>
    </div>
  ),
  'bento-ui': (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'#0f0f1a', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'11px 24px', background:'linear-gradient(135deg,#6c63ff,#ff6584)', border:'none', borderRadius:12, color:'#fff', fontWeight:700, fontSize:14, cursor:'pointer', boxShadow:'0 4px 16px rgba(108,99,255,0.4)' }}>Explore</button>
      <button style={{ padding:'11px 24px', background:'#1a1a2e', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, color:'rgba(255,255,255,0.7)', fontWeight:600, fontSize:14, cursor:'pointer' }}>Details</button>
    </div>
  ),
  claymorphism: (
    <div style={{ display:'flex', gap:16, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:28, background:'#f0f4ff', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'13px 28px', background:'#a8d8ea', border:'none', borderRadius:20, color:'#1a5276', fontWeight:800, fontSize:14, cursor:'pointer', boxShadow:'0 8px 20px rgba(0,120,180,0.3),inset 0 3px 6px rgba(255,255,255,0.7),inset 0 -3px 0 rgba(0,0,0,0.1)' }}>Let's go!</button>
      <button style={{ padding:'13px 28px', background:'#ffd6e0', border:'none', borderRadius:20, color:'#922b21', fontWeight:800, fontSize:14, cursor:'pointer', boxShadow:'0 8px 20px rgba(200,80,100,0.2),inset 0 3px 6px rgba(255,255,255,0.7),inset 0 -3px 0 rgba(0,0,0,0.08)' }}>Nope!</button>
    </div>
  ),
  skeuomorphism: (
    <div style={{ display:'flex', gap:16, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'linear-gradient(180deg,#c9a96e,#8B6914)', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'11px 24px', background:'linear-gradient(180deg,#4a8c3f,#2d6b22)', border:'1px solid #1a4d12', borderRadius:6, color:'#c8f0c2', fontWeight:700, fontSize:14, cursor:'pointer', boxShadow:'0 3px 6px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.2)', textShadow:'0 1px 2px rgba(0,0,0,0.4)' }}>Confirm</button>
      <button style={{ padding:'11px 24px', background:'linear-gradient(180deg,#c0392b,#922b21)', border:'1px solid #7b241c', borderRadius:6, color:'#fde8e8', fontWeight:700, fontSize:14, cursor:'pointer', boxShadow:'0 3px 6px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.2)' }}>Cancel</button>
    </div>
  ),
  cyberpunk: (
    <div style={{ display:'flex', gap:14, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'#050510', borderRadius:0, minHeight:100 }}>
      <button style={{ padding:'11px 24px', background:'transparent', border:'1px solid #00ffff', color:'#00ffff', fontWeight:700, fontSize:13, cursor:'pointer', fontFamily:'monospace', letterSpacing:3, textTransform:'uppercase', boxShadow:'0 0 12px rgba(0,255,255,0.3),inset 0 0 12px rgba(0,255,255,0.05)', textShadow:'0 0 8px #00ffff' }}>ENGAGE</button>
      <button style={{ padding:'11px 24px', background:'rgba(255,0,255,0.1)', border:'1px solid #ff00ff', color:'#ff00ff', fontWeight:700, fontSize:13, cursor:'pointer', fontFamily:'monospace', letterSpacing:3, textTransform:'uppercase', boxShadow:'0 0 12px rgba(255,0,255,0.2)' }}>ABORT</button>
    </div>
  ),
  retro: (
    <div style={{ display:'flex', gap:14, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'#1a0a00', borderRadius:0, minHeight:100 }}>
      <button style={{ padding:'11px 24px', background:'#ff6b35', border:'3px solid #ff9d4d', color:'#1a0a00', fontWeight:900, fontSize:14, cursor:'pointer', fontFamily:'monospace', letterSpacing:2, boxShadow:'4px 4px 0 #ff9d4d' }}>► START</button>
      <button style={{ padding:'11px 24px', background:'transparent', border:'3px solid #ff6b35', color:'#ff6b35', fontWeight:900, fontSize:14, cursor:'pointer', fontFamily:'monospace', letterSpacing:2 }}>◄ BACK</button>
    </div>
  ),
  'dark-ui': (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'#0a0a0f', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'11px 26px', background:'linear-gradient(135deg,#6c63ff,#9b5de5)', border:'none', borderRadius:10, color:'#fff', fontWeight:700, fontSize:14, cursor:'pointer', boxShadow:'0 0 20px rgba(108,99,255,0.35)' }}>Explore</button>
      <button style={{ padding:'11px 26px', background:'#1a1a2e', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, color:'rgba(255,255,255,0.7)', fontWeight:600, fontSize:14, cursor:'pointer' }}>Cancel</button>
    </div>
  ),
  'light-ui': (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'#f8f9ff', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'11px 26px', background:'#3f51b5', border:'none', borderRadius:8, color:'#fff', fontWeight:600, fontSize:14, cursor:'pointer', boxShadow:'0 2px 8px rgba(63,81,181,0.3)' }}>Get Started</button>
      <button style={{ padding:'11px 26px', background:'transparent', border:'1.5px solid #3f51b5', borderRadius:8, color:'#3f51b5', fontWeight:600, fontSize:14, cursor:'pointer' }}>Learn More</button>
    </div>
  ),
  'gradient-ui': (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:24, background:'linear-gradient(135deg,#6c63ff,#ff6584,#43e97b)', borderRadius:16, minHeight:100 }}>
      <button style={{ padding:'12px 28px', background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)', border:'2px solid rgba(255,255,255,0.4)', borderRadius:12, color:'#fff', fontWeight:800, fontSize:14, cursor:'pointer', letterSpacing:'0.02em' }}>Discover →</button>
      <button style={{ padding:'12px 28px', background:'#fff', border:'none', borderRadius:12, color:'#6c63ff', fontWeight:800, fontSize:14, cursor:'pointer', boxShadow:'0 4px 20px rgba(0,0,0,0.15)' }}>Sign Up</button>
    </div>
  ),
}

/* ══════════════════════════════════════════
   CARD PREVIEWS
══════════════════════════════════════════ */
const cardPreviews = {
  glassmorphism: (
    <div style={{ background:'linear-gradient(135deg,#6c63ff,#ff6584)', padding:24, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'rgba(255,255,255,0.12)', backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.25)', borderRadius:16, padding:20, width:'100%', maxWidth:220 }}>
        <div style={{ height:80, background:'rgba(255,255,255,0.1)', borderRadius:10, marginBottom:14 }} />
        <div style={{ height:10, background:'rgba(255,255,255,0.8)', borderRadius:4, marginBottom:8, width:'65%' }} />
        <div style={{ height:7, background:'rgba(255,255,255,0.4)', borderRadius:4, marginBottom:6, width:'90%' }} />
        <div style={{ height:7, background:'rgba(255,255,255,0.4)', borderRadius:4, marginBottom:14, width:'75%' }} />
        <div style={{ background:'rgba(255,255,255,0.2)', border:'1px solid rgba(255,255,255,0.35)', borderRadius:8, padding:'8px 0', textAlign:'center', color:'#fff', fontSize:13, fontWeight:600 }}>View Details</div>
      </div>
    </div>
  ),
  neumorphism: (
    <div style={{ background:'#e0e5ec', padding:28, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'#e0e5ec', borderRadius:20, padding:20, boxShadow:'8px 8px 18px #b8bec7,-8px -8px 18px #ffffff', width:'100%', maxWidth:210 }}>
        <div style={{ height:75, background:'linear-gradient(135deg,#d1d9e6,#c8d0e0)', borderRadius:12, marginBottom:14, boxShadow:'inset 3px 3px 6px #b8bec7,inset -3px -3px 6px #ffffff' }} />
        <div style={{ height:9, background:'#b0b8c5', borderRadius:4, marginBottom:8, width:'60%', boxShadow:'inset 1px 1px 3px #a0a8b5' }} />
        <div style={{ height:7, background:'#c8d0dc', borderRadius:4, marginBottom:6, width:'85%' }} />
        <div style={{ height:7, background:'#c8d0dc', borderRadius:4, marginBottom:14, width:'70%' }} />
        <div style={{ background:'#e0e5ec', borderRadius:10, padding:'9px 0', textAlign:'center', boxShadow:'4px 4px 8px #b8bec7,-4px -4px 8px #ffffff', color:'#6c63ff', fontSize:13, fontWeight:700 }}>View</div>
      </div>
    </div>
  ),
  minimalism: (
    <div style={{ background:'#fff', padding:24, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ border:'1px solid #ebebeb', borderRadius:4, overflow:'hidden', width:'100%', maxWidth:220 }}>
        <div style={{ height:80, background:'#f5f5f5' }} />
        <div style={{ padding:'16px 18px' }}>
          <div style={{ height:11, background:'#111', borderRadius:2, marginBottom:8, width:'55%' }} />
          <div style={{ height:7, background:'#ddd', borderRadius:2, marginBottom:6, width:'90%' }} />
          <div style={{ height:7, background:'#ddd', borderRadius:2, marginBottom:14, width:'70%' }} />
          <div style={{ height:0, borderBottom:'1px solid #eee', marginBottom:12 }} />
          <div style={{ color:'#111', fontSize:13, fontWeight:600 }}>Read more →</div>
        </div>
      </div>
    </div>
  ),
  brutalism: (
    <div style={{ background:'#f5f500', padding:20, borderRadius:0, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'#fff', border:'3px solid #000', width:'100%', maxWidth:220, position:'relative' }}>
        <div style={{ height:75, background:'#000', position:'relative' }}>
          <div style={{ position:'absolute', bottom:8, left:10, color:'#f5f500', fontWeight:900, fontSize:12, fontFamily:'monospace', letterSpacing:2 }}>IMAGE</div>
        </div>
        <div style={{ padding:'14px 12px' }}>
          <div style={{ height:12, background:'#000', marginBottom:8, width:'70%' }} />
          <div style={{ height:7, background:'#555', marginBottom:6, width:'90%' }} />
          <div style={{ height:7, background:'#555', marginBottom:14, width:'65%' }} />
          <div style={{ background:'#000', border:'2px solid #000', padding:'9px 0', textAlign:'center', color:'#f5f500', fontSize:12, fontWeight:900, fontFamily:'monospace', letterSpacing:2 }}>READ →</div>
        </div>
      </div>
    </div>
  ),
  'material-design': (
    <div style={{ background:'#f5f5f5', padding:24, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'#fff', borderRadius:8, overflow:'hidden', boxShadow:'0 2px 4px rgba(0,0,0,0.08),0 8px 24px rgba(0,0,0,0.06)', width:'100%', maxWidth:220 }}>
        <div style={{ height:80, background:'linear-gradient(135deg,#6200ee,#03dac6)' }} />
        <div style={{ padding:'16px' }}>
          <div style={{ height:10, background:'#1a1a1a', borderRadius:3, marginBottom:8, width:'60%' }} />
          <div style={{ height:7, background:'#9e9e9e', borderRadius:3, marginBottom:6, width:'90%' }} />
          <div style={{ height:7, background:'#9e9e9e', borderRadius:3, marginBottom:14, width:'75%' }} />
          <div style={{ background:'#6200ee', borderRadius:4, padding:'8px 0', textAlign:'center', color:'#fff', fontSize:12, fontWeight:700, letterSpacing:'0.06em' }}>LEARN MORE</div>
        </div>
      </div>
    </div>
  ),
  'fluent-design': (
    <div style={{ background:'linear-gradient(135deg,#0078d4,#005a9e)', padding:24, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'rgba(255,255,255,0.1)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:10, overflow:'hidden', width:'100%', maxWidth:220 }}>
        <div style={{ height:75, background:'rgba(255,255,255,0.08)', borderBottom:'1px solid rgba(255,255,255,0.1)' }} />
        <div style={{ padding:'14px 16px' }}>
          <div style={{ height:9, background:'rgba(255,255,255,0.9)', borderRadius:3, marginBottom:8, width:'60%' }} />
          <div style={{ height:7, background:'rgba(255,255,255,0.45)', borderRadius:3, marginBottom:6, width:'85%' }} />
          <div style={{ height:7, background:'rgba(255,255,255,0.45)', borderRadius:3, marginBottom:14, width:'70%' }} />
          <div style={{ background:'#0078d4', borderRadius:6, padding:'8px 0', textAlign:'center', color:'#fff', fontSize:13, fontWeight:600 }}>Open</div>
        </div>
      </div>
    </div>
  ),
  'bento-ui': (
    <div style={{ background:'#0f0f1a', padding:20, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'#1a1a2e', border:'1px solid rgba(255,255,255,0.08)', borderRadius:16, overflow:'hidden', width:'100%', maxWidth:220 }}>
        <div style={{ height:75, background:'linear-gradient(135deg,rgba(108,99,255,0.3),rgba(255,101,132,0.2))' }} />
        <div style={{ padding:'14px 16px' }}>
          <div style={{ height:9, background:'rgba(255,255,255,0.85)', borderRadius:3, marginBottom:8, width:'60%' }} />
          <div style={{ height:7, background:'rgba(255,255,255,0.25)', borderRadius:3, marginBottom:5, width:'88%' }} />
          <div style={{ height:7, background:'rgba(255,255,255,0.25)', borderRadius:3, marginBottom:14, width:'68%' }} />
          <div style={{ background:'linear-gradient(135deg,#6c63ff,#ff6584)', borderRadius:10, padding:'8px 0', textAlign:'center', color:'#fff', fontSize:13, fontWeight:700 }}>Explore →</div>
        </div>
      </div>
    </div>
  ),
  claymorphism: (
    <div style={{ background:'#f0f4ff', padding:24, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'#c3f0ca', borderRadius:24, overflow:'hidden', boxShadow:'0 16px 40px rgba(100,200,120,0.35),inset 0 3px 6px rgba(255,255,255,0.7)', width:'100%', maxWidth:220 }}>
        <div style={{ height:75, background:'linear-gradient(135deg,#a8e6cf,#88d8b0)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28 }}>🌿</div>
        <div style={{ padding:'14px 16px' }}>
          <div style={{ height:10, background:'#2d6a4f', borderRadius:8, marginBottom:8, width:'58%', boxShadow:'0 2px 6px rgba(45,106,79,0.3)' }} />
          <div style={{ height:7, background:'rgba(45,106,79,0.3)', borderRadius:6, marginBottom:5, width:'88%' }} />
          <div style={{ height:7, background:'rgba(45,106,79,0.3)', borderRadius:6, marginBottom:14, width:'70%' }} />
          <div style={{ background:'#2d6a4f', borderRadius:14, padding:'9px 0', textAlign:'center', color:'#c3f0ca', fontSize:13, fontWeight:800, boxShadow:'0 6px 16px rgba(45,106,79,0.4)' }}>Let's go!</div>
        </div>
      </div>
    </div>
  ),
  skeuomorphism: (
    <div style={{ background:'#8B6914', padding:20, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'linear-gradient(180deg,#f5e6c3,#e8d4a0)', border:'2px solid #c4a054', borderRadius:6, overflow:'hidden', boxShadow:'0 4px 12px rgba(0,0,0,0.4)', width:'100%', maxWidth:210 }}>
        <div style={{ height:72, background:'linear-gradient(180deg,#d4a017,#b8860b)', borderBottom:'2px solid #c4a054', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22 }}>📓</div>
        <div style={{ padding:'12px 14px' }}>
          <div style={{ height:9, background:'rgba(101,67,33,0.7)', borderRadius:2, marginBottom:8, width:'58%' }} />
          <div style={{ height:6, background:'rgba(101,67,33,0.35)', borderRadius:2, marginBottom:5, width:'88%' }} />
          <div style={{ height:6, background:'rgba(101,67,33,0.35)', borderRadius:2, marginBottom:13, width:'70%' }} />
          <div style={{ background:'linear-gradient(180deg,#4a8c3f,#2d6b22)', border:'1px solid #1a4d12', borderRadius:4, padding:'8px 0', textAlign:'center', color:'#c8f0c2', fontSize:12, fontWeight:700, boxShadow:'0 2px 4px rgba(0,0,0,0.3)' }}>Open</div>
        </div>
      </div>
    </div>
  ),
  cyberpunk: (
    <div style={{ background:'#050510', padding:20, borderRadius:0, display:'flex', justifyContent:'center', minHeight:200, position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,255,0.02) 3px,rgba(0,255,255,0.02) 4px)', pointerEvents:'none' }} />
      <div style={{ border:'1px solid rgba(0,255,255,0.4)', width:'100%', maxWidth:220, boxShadow:'0 0 20px rgba(0,255,255,0.1)', position:'relative' }}>
        <div style={{ height:72, background:'linear-gradient(180deg,#0d0d2e,#050510)', borderBottom:'1px solid rgba(0,255,255,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ width:36, height:36, border:'2px solid #00ffff', boxShadow:'0 0 12px #00ffff', display:'flex', alignItems:'center', justifyContent:'center', color:'#00ffff', fontFamily:'monospace', fontWeight:700 }}>{'◈'}</div>
        </div>
        <div style={{ padding:'12px 14px' }}>
          <div style={{ height:9, background:'rgba(0,255,255,0.7)', borderRadius:0, marginBottom:8, width:'62%', boxShadow:'0 0 6px rgba(0,255,255,0.3)' }} />
          <div style={{ height:6, background:'rgba(0,255,255,0.2)', marginBottom:5, width:'88%' }} />
          <div style={{ height:6, background:'rgba(255,0,255,0.2)', marginBottom:13, width:'65%' }} />
          <div style={{ border:'1px solid #00ffff', padding:'8px 0', textAlign:'center', color:'#00ffff', fontSize:12, fontWeight:700, fontFamily:'monospace', letterSpacing:3, boxShadow:'0 0 10px rgba(0,255,255,0.2)' }}>ENGAGE</div>
        </div>
      </div>
    </div>
  ),
  retro: (
    <div style={{ background:'#1a0a00', padding:20, borderRadius:0, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'#fff', border:'3px solid #ff6b35', width:'100%', maxWidth:220 }}>
        <div style={{ height:72, background:'#ff6b35', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'monospace', fontWeight:900, fontSize:18, color:'#1a0a00', letterSpacing:2 }}>RETRO™</div>
        <div style={{ padding:'12px 14px' }}>
          <div style={{ height:10, background:'#1a0a00', marginBottom:8, width:'60%' }} />
          <div style={{ height:6, background:'#ccc', marginBottom:5, width:'88%' }} />
          <div style={{ height:6, background:'#ccc', marginBottom:13, width:'70%' }} />
          <div style={{ background:'#1a0a00', padding:'9px 0', textAlign:'center', color:'#ff6b35', fontSize:12, fontWeight:900, fontFamily:'monospace', letterSpacing:3 }}>► PLAY</div>
        </div>
      </div>
    </div>
  ),
  'dark-ui': (
    <div style={{ background:'#0a0a0f', padding:20, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'#1a1a2e', border:'1px solid rgba(255,255,255,0.06)', borderRadius:14, overflow:'hidden', width:'100%', maxWidth:220 }}>
        <div style={{ height:72, background:'linear-gradient(135deg,rgba(108,99,255,0.2),rgba(255,101,132,0.1))' }} />
        <div style={{ padding:'14px 16px' }}>
          <div style={{ height:9, background:'rgba(255,255,255,0.85)', borderRadius:3, marginBottom:8, width:'58%' }} />
          <div style={{ height:7, background:'rgba(255,255,255,0.2)', borderRadius:3, marginBottom:5, width:'88%' }} />
          <div style={{ height:7, background:'rgba(255,255,255,0.2)', borderRadius:3, marginBottom:14, width:'68%' }} />
          <div style={{ background:'linear-gradient(135deg,#6c63ff,#9b5de5)', borderRadius:8, padding:'9px 0', textAlign:'center', color:'#fff', fontSize:13, fontWeight:700, boxShadow:'0 0 16px rgba(108,99,255,0.3)' }}>Explore</div>
        </div>
      </div>
    </div>
  ),
  'light-ui': (
    <div style={{ background:'#f8f9ff', padding:20, borderRadius:16, display:'flex', justifyContent:'center', minHeight:200 }}>
      <div style={{ background:'#fff', border:'1px solid rgba(0,0,0,0.07)', borderRadius:12, overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,0.06)', width:'100%', maxWidth:220 }}>
        <div style={{ height:72, background:'linear-gradient(135deg,#eef2ff,#e8eaf6)' }} />
        <div style={{ padding:'14px 16px' }}>
          <div style={{ height:9, background:'#1a1a2e', borderRadius:3, marginBottom:8, width:'58%' }} />
          <div style={{ height:7, background:'#ddd', borderRadius:3, marginBottom:5, width:'88%' }} />
          <div style={{ height:7, background:'#ddd', borderRadius:3, marginBottom:14, width:'68%' }} />
          <div style={{ background:'#3f51b5', borderRadius:6, padding:'8px 0', textAlign:'center', color:'#fff', fontSize:13, fontWeight:600 }}>Learn More</div>
        </div>
      </div>
    </div>
  ),
  'gradient-ui': (
    <div style={{ background:'linear-gradient(135deg,#6c63ff,#ff6584)', padding:3, borderRadius:16, minHeight:200 }}>
      <div style={{ background:'#0a0a0f', borderRadius:14, overflow:'hidden', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div style={{ height:72, background:'linear-gradient(135deg,rgba(108,99,255,0.4),rgba(255,101,132,0.4))' }} />
        <div style={{ padding:'14px 16px' }}>
          <div style={{ height:9, background:'linear-gradient(90deg,#6c63ff,#ff6584)', borderRadius:3, marginBottom:8, width:'60%' }} />
          <div style={{ height:7, background:'rgba(255,255,255,0.15)', borderRadius:3, marginBottom:5, width:'88%' }} />
          <div style={{ height:7, background:'rgba(255,255,255,0.15)', borderRadius:3, marginBottom:14, width:'70%' }} />
          <div style={{ background:'linear-gradient(135deg,#6c63ff,#ff6584)', borderRadius:10, padding:'9px 0', textAlign:'center', color:'#fff', fontSize:13, fontWeight:800, boxShadow:'0 6px 20px rgba(108,99,255,0.4)' }}>Discover →</div>
        </div>
      </div>
    </div>
  ),
}

/* ══════════════════════════════════════════
   INPUT PREVIEWS
══════════════════════════════════════════ */
const makeInput = (bg, fieldStyle, labelColor, focusColor, btnStyle, containerStyle={}) => (
  <div style={{ padding:24, borderRadius:16, minHeight:160, display:'flex', alignItems:'center', justifyContent:'center', background:bg, ...containerStyle }}>
    <div style={{ width:'100%', maxWidth:260 }}>
      <label style={{ display:'block', fontSize:12, fontWeight:600, color:labelColor, marginBottom:6, letterSpacing:'0.04em', textTransform:'uppercase' }}>Email address</label>
      <input readOnly value="hello@example.com" style={{ width:'100%', padding:'10px 14px', marginBottom:12, fontFamily:'inherit', fontSize:14, outline:'none', ...fieldStyle, boxSizing:'border-box' }} />
      <label style={{ display:'block', fontSize:12, fontWeight:600, color:labelColor, marginBottom:6, letterSpacing:'0.04em', textTransform:'uppercase' }}>Password</label>
      <input readOnly type="password" value="••••••••" style={{ width:'100%', padding:'10px 14px', marginBottom:16, fontFamily:'inherit', fontSize:14, outline:'none', ...fieldStyle, boxSizing:'border-box' }} />
      <div style={{ ...btnStyle, padding:'11px 0', textAlign:'center', fontWeight:700, fontSize:14, cursor:'pointer' }}>Submit</div>
    </div>
  </div>
)

const inputPreviews = {
  glassmorphism: makeInput('linear-gradient(135deg,#6c63ff,#ff6584)',{background:'rgba(255,255,255,0.1)',backdropFilter:'blur(10px)',WebkitBackdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.25)',borderRadius:10,color:'#fff'},'rgba(255,255,255,0.7)','#fff',{background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.35)',borderRadius:10,color:'#fff'}),
  neumorphism: makeInput('#e0e5ec',{background:'#e0e5ec',border:'none',borderRadius:10,color:'#555',boxShadow:'inset 3px 3px 7px #b8bec7,inset -3px -3px 7px #ffffff'},'#566170','#6c63ff',{background:'#e0e5ec',borderRadius:10,color:'#6c63ff',boxShadow:'4px 4px 10px #b8bec7,-4px -4px 10px #ffffff',border:'none'}),
  minimalism: makeInput('#fff',{background:'transparent',border:'none',borderBottom:'2px solid #ddd',borderRadius:0,color:'#111',padding:'8px 2px'},'#888','#111',{background:'#111',borderRadius:2,color:'#fff',border:'none'}),
  brutalism: makeInput('#f5f500',{background:'#fff',border:'3px solid #000',borderRadius:0,color:'#000',fontFamily:'monospace',fontWeight:700},'#000','#000',{background:'#000',color:'#f5f500',fontFamily:'monospace',letterSpacing:2,border:'3px solid #000',borderRadius:0}),
  'material-design': makeInput('#f5f5f5',{background:'#fff',border:'none',borderBottom:'2px solid #9e9e9e',borderRadius:'4px 4px 0 0',color:'#111',padding:'10px 12px'},'#757575','#6200ee',{background:'#6200ee',borderRadius:4,color:'#fff',border:'none',boxShadow:'0 2px 8px rgba(98,0,238,0.3)'}),
  'fluent-design': makeInput('linear-gradient(135deg,#0078d4,#005a9e)',{background:'rgba(255,255,255,0.1)',backdropFilter:'blur(8px)',border:'none',borderBottom:'2px solid rgba(255,255,255,0.4)',borderRadius:'6px 6px 0 0',color:'#fff'},'rgba(255,255,255,0.7)','#fff',{background:'#0078d4',border:'1px solid rgba(255,255,255,0.3)',borderRadius:6,color:'#fff'}),
  'bento-ui': makeInput('#0f0f1a',{background:'#1a1a2e',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,color:'rgba(255,255,255,0.85)'},'rgba(255,255,255,0.5)','#6c63ff',{background:'linear-gradient(135deg,#6c63ff,#ff6584)',borderRadius:10,color:'#fff',border:'none'}),
  claymorphism: makeInput('#f0f4ff',{background:'#fff',border:'none',borderRadius:14,color:'#1a5276',boxShadow:'inset 2px 2px 6px rgba(0,120,180,0.15),inset -2px -2px 6px rgba(255,255,255,0.8)'},'#2a6f96','#a8d8ea',{background:'#a8d8ea',borderRadius:16,color:'#1a5276',border:'none',boxShadow:'0 6px 16px rgba(0,120,180,0.25),inset 0 2px 4px rgba(255,255,255,0.6)'}),
  skeuomorphism: makeInput('linear-gradient(180deg,#c9a96e,#8B6914)',{background:'linear-gradient(180deg,#f5e6c3,#eddcaf)',border:'2px solid #c4a054',borderRadius:4,color:'#5a3e0a',boxShadow:'inset 2px 2px 4px rgba(0,0,0,0.2)'},'#fff9e6','#d4a017',{background:'linear-gradient(180deg,#4a8c3f,#2d6b22)',borderRadius:4,color:'#c8f0c2',border:'1px solid #1a4d12',boxShadow:'0 2px 4px rgba(0,0,0,0.3)'}),
  cyberpunk: makeInput('#050510',{background:'rgba(0,255,255,0.05)',border:'1px solid rgba(0,255,255,0.4)',borderRadius:0,color:'#00ffff',fontFamily:'monospace',boxShadow:'0 0 8px rgba(0,255,255,0.1)'},'rgba(0,255,255,0.6)','#00ffff',{background:'transparent',border:'1px solid #00ffff',color:'#00ffff',fontFamily:'monospace',letterSpacing:3,boxShadow:'0 0 12px rgba(0,255,255,0.3)'}),
  retro: makeInput('#1a0a00',{background:'#fff',border:'3px solid #ff6b35',borderRadius:0,color:'#1a0a00',fontFamily:'monospace',fontWeight:700},'#ff6b35','#ff6b35',{background:'#ff6b35',color:'#1a0a00',fontFamily:'monospace',fontWeight:900,letterSpacing:2,border:'3px solid #ff9d4d',borderRadius:0}),
  'dark-ui': makeInput('#0a0a0f',{background:'#1a1a2e',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,color:'rgba(255,255,255,0.85)'},'rgba(255,255,255,0.45)','#6c63ff',{background:'linear-gradient(135deg,#6c63ff,#9b5de5)',borderRadius:10,color:'#fff',border:'none',boxShadow:'0 0 16px rgba(108,99,255,0.3)'}),
  'light-ui': makeInput('#f8f9ff',{background:'#fff',border:'1.5px solid #ddd',borderRadius:8,color:'#111'},'#555','#3f51b5',{background:'#3f51b5',borderRadius:8,color:'#fff',border:'none',boxShadow:'0 2px 8px rgba(63,81,181,0.25)'}),
  'gradient-ui': makeInput('linear-gradient(135deg,#6c63ff,#ff6584)',{background:'rgba(255,255,255,0.15)',backdropFilter:'blur(8px)',border:'2px solid rgba(255,255,255,0.35)',borderRadius:12,color:'#fff'},'rgba(255,255,255,0.8)','#fff',{background:'#fff',borderRadius:12,color:'#6c63ff',border:'none',fontWeight:800,boxShadow:'0 4px 16px rgba(0,0,0,0.15)'}),
}

/* ══════════════════════════════════════════
   PRICING CARD PREVIEWS
══════════════════════════════════════════ */
const makePricing = (wrapBg, cardStyle, accentColor, textColor, subColor, btnStyle, featureColor, highlighted=false) => (
  <div style={{ background:wrapBg, padding:20, borderRadius:16, display:'flex', justifyContent:'center', minHeight:260 }}>
    <div style={{ ...cardStyle, padding:'22px 20px', width:'100%', maxWidth:200, position:'relative' }}>
      {highlighted && <div style={{ position:'absolute', top:-1, left:20, right:20, height:3, background:accentColor, borderRadius:'0 0 4px 4px' }} />}
      <div style={{ fontSize:11, fontWeight:700, color:subColor, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8 }}>PRO</div>
      <div style={{ fontSize:28, fontWeight:900, color:textColor, lineHeight:1, marginBottom:4, fontFamily:'Space Grotesk,sans-serif' }}>$29<span style={{ fontSize:14, fontWeight:500 }}>/mo</span></div>
      <div style={{ fontSize:12, color:subColor, marginBottom:16 }}>Perfect for teams</div>
      <div style={{ height:1, background:typeof featureColor === 'string' ? featureColor : 'rgba(0,0,0,0.1)', marginBottom:14, opacity:0.2 }} />
      {['Unlimited projects','Priority support','Analytics','Custom domain'].map((f,i) => (
        <div key={i} style={{ display:'flex', gap:8, alignItems:'center', marginBottom:8, fontSize:12, color:subColor }}>
          <span style={{ color:accentColor, fontWeight:700 }}>✓</span>{f}
        </div>
      ))}
      <div style={{ ...btnStyle, padding:'10px 0', textAlign:'center', fontWeight:700, fontSize:13, marginTop:14, cursor:'pointer' }}>Get Started</div>
    </div>
  </div>
)

const pricingPreviews = {
  glassmorphism: makePricing('linear-gradient(135deg,#6c63ff,#ff6584)',{background:'rgba(255,255,255,0.12)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,0.25)',borderRadius:16},'#fff','#fff','rgba(255,255,255,0.7)',{background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.35)',borderRadius:10,color:'#fff'},'rgba(255,255,255,0.15)'),
  neumorphism: makePricing('#e0e5ec',{background:'#e0e5ec',borderRadius:20,boxShadow:'8px 8px 18px #b8bec7,-8px -8px 18px #ffffff'},'#6c63ff','#333','#566170',{background:'#e0e5ec',borderRadius:10,color:'#6c63ff',boxShadow:'4px 4px 10px #b8bec7,-4px -4px 10px #ffffff',border:'none'},'#b0b8c5'),
  minimalism: makePricing('#fff',{background:'#fff',border:'2px solid #111',borderRadius:0},'#111','#111','#666',{background:'#111',borderRadius:0,color:'#fff',border:'none'},'#eee',true),
  brutalism: makePricing('#f5f500',{background:'#fff',border:'3px solid #000',borderRadius:0,boxShadow:'6px 6px 0 #000'},'#000','#000','#555',{background:'#000',color:'#f5f500',fontFamily:'monospace',letterSpacing:2,border:'3px solid #000',borderRadius:0},'#000'),
  'material-design': makePricing('#f5f5f5',{background:'#fff',borderRadius:8,boxShadow:'0 4px 12px rgba(0,0,0,0.1),0 12px 40px rgba(0,0,0,0.08)'},'#6200ee','#1a1a1a','#757575',{background:'#6200ee',borderRadius:4,color:'#fff',border:'none',boxShadow:'0 2px 8px rgba(98,0,238,0.3)'},'#e0e0e0',true),
  'fluent-design': makePricing('linear-gradient(135deg,#0078d4,#005a9e)',{background:'rgba(255,255,255,0.1)',backdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:10},'#fff','#fff','rgba(255,255,255,0.65)',{background:'#0078d4',border:'1px solid rgba(255,255,255,0.3)',borderRadius:6,color:'#fff'},'rgba(255,255,255,0.15)'),
  'bento-ui': makePricing('#0f0f1a',{background:'#1a1a2e',border:'1px solid rgba(108,99,255,0.35)',borderRadius:16,boxShadow:'0 0 24px rgba(108,99,255,0.12)'},'#6c63ff','rgba(255,255,255,0.9)','rgba(255,255,255,0.45)',{background:'linear-gradient(135deg,#6c63ff,#ff6584)',borderRadius:10,color:'#fff',border:'none'},'rgba(255,255,255,0.08)',true),
  claymorphism: makePricing('#f0f4ff',{background:'#ffd6e0',borderRadius:28,boxShadow:'0 20px 48px rgba(200,80,100,0.25),inset 0 3px 8px rgba(255,255,255,0.7)'},'#c0392b','#922b21','rgba(146,43,33,0.7)',{background:'#c0392b',borderRadius:16,color:'#fff',border:'none',boxShadow:'0 8px 20px rgba(192,57,43,0.4),inset 0 2px 4px rgba(255,255,255,0.2)'},'rgba(192,57,43,0.2)'),
  skeuomorphism: makePricing('#8B6914',{background:'linear-gradient(180deg,#f5e6c3,#e8d4a0)',border:'2px solid #c4a054',borderRadius:6,boxShadow:'0 4px 12px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.5)'},'#4a8c3f','#5a3e0a','rgba(90,62,10,0.6)',{background:'linear-gradient(180deg,#4a8c3f,#2d6b22)',border:'1px solid #1a4d12',borderRadius:4,color:'#c8f0c2',boxShadow:'0 2px 6px rgba(0,0,0,0.3)'},'rgba(101,67,33,0.2)'),
  cyberpunk: makePricing('#050510',{background:'rgba(0,255,255,0.03)',border:'1px solid rgba(0,255,255,0.45)',borderRadius:0,boxShadow:'0 0 24px rgba(0,255,255,0.08),inset 0 0 24px rgba(0,255,255,0.03)'},'#00ffff','#00ffff','rgba(0,255,255,0.55)',{background:'transparent',border:'1px solid #00ffff',color:'#00ffff',fontFamily:'monospace',letterSpacing:2,boxShadow:'0 0 12px rgba(0,255,255,0.3)'},'rgba(0,255,255,0.1)'),
  retro: makePricing('#1a0a00',{background:'#ff6b35',border:'3px solid #ff9d4d',borderRadius:0,boxShadow:'5px 5px 0 #ff9d4d'},'#1a0a00','#1a0a00','rgba(26,10,0,0.7)',{background:'#1a0a00',color:'#ff6b35',fontFamily:'monospace',fontWeight:900,letterSpacing:2,border:'3px solid #ff9d4d',borderRadius:0},'rgba(26,10,0,0.2)'),
  'dark-ui': makePricing('#0a0a0f',{background:'#1a1a2e',border:'1px solid rgba(108,99,255,0.3)',borderRadius:16,boxShadow:'0 0 24px rgba(108,99,255,0.1)'},'#6c63ff','rgba(255,255,255,0.9)','rgba(255,255,255,0.45)',{background:'linear-gradient(135deg,#6c63ff,#9b5de5)',borderRadius:10,color:'#fff',border:'none',boxShadow:'0 0 20px rgba(108,99,255,0.35)'},'rgba(255,255,255,0.07)',true),
  'light-ui': makePricing('#f8f9ff',{background:'#fff',border:'1.5px solid #e0e0e0',borderRadius:12,boxShadow:'0 4px 20px rgba(0,0,0,0.07)'},'#3f51b5','#1a1a2e','#666',{background:'#3f51b5',borderRadius:8,color:'#fff',border:'none',boxShadow:'0 2px 8px rgba(63,81,181,0.3)'},'#f0f0f0',true),
  'gradient-ui': makePricing('linear-gradient(135deg,#6c63ff,#ff6584)',{background:'#0a0a0f',border:'2px solid transparent',backgroundClip:'padding-box',borderRadius:16},'#6c63ff','rgba(255,255,255,0.9)','rgba(255,255,255,0.5)',{background:'linear-gradient(135deg,#6c63ff,#ff6584)',borderRadius:12,color:'#fff',border:'none',boxShadow:'0 6px 20px rgba(108,99,255,0.4)'},'rgba(255,255,255,0.08)',true),
}

/* ══════════════════════════════════════════
   MODAL PREVIEWS
══════════════════════════════════════════ */
const makeModal = (overlayBg, modalStyle, titleColor, textColor, btnStyle, closeColor) => (
  <div style={{ position:'relative', minHeight:220, borderRadius:16, overflow:'hidden', background:overlayBg, display:'flex', alignItems:'center', justifyContent:'center' }}>
    <div style={{ ...modalStyle, padding:'22px 24px', width:'85%', maxWidth:240, position:'relative' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
        <div style={{ height:11, background:titleColor, borderRadius:3, width:'50%', opacity:0.9 }} />
        <div style={{ width:22, height:22, border:`2px solid ${closeColor}`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:closeColor, fontSize:12, fontWeight:700, cursor:'pointer' }}>×</div>
      </div>
      <div style={{ height:7, background:textColor, borderRadius:3, marginBottom:6, width:'88%', opacity:0.4 }} />
      <div style={{ height:7, background:textColor, borderRadius:3, marginBottom:6, width:'72%', opacity:0.4 }} />
      <div style={{ height:7, background:textColor, borderRadius:3, marginBottom:18, width:'80%', opacity:0.4 }} />
      <div style={{ display:'flex', gap:10 }}>
        <div style={{ ...btnStyle.cancel, flex:1, padding:'9px 0', textAlign:'center', fontWeight:600, fontSize:13, cursor:'pointer' }}>Cancel</div>
        <div style={{ ...btnStyle.confirm, flex:1, padding:'9px 0', textAlign:'center', fontWeight:700, fontSize:13, cursor:'pointer' }}>Confirm</div>
      </div>
    </div>
  </div>
)

const modalPreviews = {
  glassmorphism: makeModal('linear-gradient(135deg,rgba(108,99,255,0.8),rgba(255,101,132,0.8))',{background:'rgba(255,255,255,0.15)',backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',border:'1px solid rgba(255,255,255,0.3)',borderRadius:20},'#fff','#fff',{cancel:{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.25)',borderRadius:10,color:'rgba(255,255,255,0.8)'},confirm:{background:'rgba(255,255,255,0.25)',border:'1px solid rgba(255,255,255,0.4)',borderRadius:10,color:'#fff'}},'rgba(255,255,255,0.6)'),
  neumorphism: makeModal('#d0d5de',{background:'#e0e5ec',borderRadius:20,boxShadow:'10px 10px 20px #b8bec7,-10px -10px 20px #ffffff'},'#333','#555',{cancel:{background:'#e0e5ec',borderRadius:10,boxShadow:'3px 3px 8px #b8bec7,-3px -3px 8px #ffffff',color:'#666'},confirm:{background:'#e0e5ec',borderRadius:10,boxShadow:'3px 3px 8px #b8bec7,-3px -3px 8px #ffffff',color:'#6c63ff'}},'#aaa'),
  minimalism: makeModal('rgba(0,0,0,0.5)',{background:'#fff',border:'none',borderRadius:4,boxShadow:'0 20px 60px rgba(0,0,0,0.3)'},'#111','#111',{cancel:{border:'1.5px solid #ddd',borderRadius:2,color:'#666',background:'transparent'},confirm:{background:'#111',borderRadius:2,color:'#fff'}},'#ccc'),
  brutalism: makeModal('rgba(0,0,0,0.85)',{background:'#fff',border:'3px solid #000',borderRadius:0,boxShadow:'6px 6px 0 #000'},'#000','#000',{cancel:{border:'3px solid #000',color:'#000',background:'#fff',fontFamily:'monospace',fontWeight:700},confirm:{background:'#000',color:'#f5f500',fontFamily:'monospace',fontWeight:900}},'#000'),
  'material-design': makeModal('rgba(0,0,0,0.5)',{background:'#fff',borderRadius:8,boxShadow:'0 8px 32px rgba(0,0,0,0.3),0 24px 64px rgba(0,0,0,0.2)'},'#1a1a1a','#333',{cancel:{color:'#6200ee',background:'transparent',border:'none',fontWeight:600,letterSpacing:'0.06em'},confirm:{background:'#6200ee',borderRadius:4,color:'#fff',boxShadow:'0 2px 6px rgba(98,0,238,0.3)'}},'#bbb'),
  'fluent-design': makeModal('rgba(0,0,0,0.5)',{background:'rgba(255,255,255,0.85)',backdropFilter:'blur(24px)',WebkitBackdropFilter:'blur(24px)',border:'1px solid rgba(255,255,255,0.6)',borderRadius:12,boxShadow:'0 16px 48px rgba(0,0,0,0.25)'},'#1a1a1a','#333',{cancel:{border:'1.5px solid #ddd',borderRadius:6,color:'#555',background:'transparent'},confirm:{background:'#0078d4',borderRadius:6,color:'#fff'}},'#bbb'),
  'bento-ui': makeModal('rgba(0,0,0,0.7)',{background:'#1a1a2e',border:'1px solid rgba(108,99,255,0.3)',borderRadius:20,boxShadow:'0 0 40px rgba(108,99,255,0.15)'},'rgba(255,255,255,0.9)','rgba(255,255,255,0.6)',{cancel:{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,color:'rgba(255,255,255,0.6)'},confirm:{background:'linear-gradient(135deg,#6c63ff,#ff6584)',borderRadius:10,color:'#fff'}},'rgba(255,255,255,0.3)'),
  claymorphism: makeModal('rgba(200,240,220,0.8)',{background:'#c3f0ca',borderRadius:28,boxShadow:'0 20px 50px rgba(100,200,120,0.35),inset 0 3px 8px rgba(255,255,255,0.7)'},'#2d6a4f','#2d6a4f',{cancel:{background:'rgba(45,106,79,0.1)',border:'none',borderRadius:14,color:'#2d6a4f'},confirm:{background:'#2d6a4f',borderRadius:14,color:'#c3f0ca',boxShadow:'0 6px 16px rgba(45,106,79,0.4)'}},'rgba(45,106,79,0.4)'),
  skeuomorphism: makeModal('rgba(0,0,0,0.6)',{background:'linear-gradient(180deg,#f5e6c3,#e8d4a0)',border:'3px solid #c4a054',borderRadius:8,boxShadow:'0 8px 24px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.5)'},'#5a3e0a','#5a3e0a',{cancel:{background:'linear-gradient(180deg,#c0392b,#922b21)',border:'1px solid #7b241c',borderRadius:4,color:'#fde8e8'},confirm:{background:'linear-gradient(180deg,#4a8c3f,#2d6b22)',border:'1px solid #1a4d12',borderRadius:4,color:'#c8f0c2'}},'#c4a054'),
  cyberpunk: makeModal('rgba(0,0,20,0.92)',{background:'rgba(0,255,255,0.03)',border:'1px solid rgba(0,255,255,0.45)',borderRadius:0,boxShadow:'0 0 40px rgba(0,255,255,0.1)'},'#00ffff','rgba(0,255,255,0.6)',{cancel:{border:'1px solid rgba(255,0,255,0.4)',color:'rgba(255,0,255,0.8)',background:'transparent',fontFamily:'monospace'},confirm:{border:'1px solid #00ffff',color:'#00ffff',background:'rgba(0,255,255,0.08)',fontFamily:'monospace',boxShadow:'0 0 10px rgba(0,255,255,0.2)'}},'rgba(0,255,255,0.4)'),
  retro: makeModal('rgba(26,10,0,0.9)',{background:'#fff',border:'4px solid #ff6b35',borderRadius:0,boxShadow:'6px 6px 0 #ff9d4d'},'#1a0a00','#333',{cancel:{border:'3px solid #ccc',color:'#666',background:'transparent',fontFamily:'monospace'},confirm:{background:'#ff6b35',border:'3px solid #ff9d4d',color:'#1a0a00',fontFamily:'monospace',fontWeight:900}},'#ccc'),
  'dark-ui': makeModal('rgba(0,0,10,0.8)',{background:'#1a1a2e',border:'1px solid rgba(255,255,255,0.1)',borderRadius:16,boxShadow:'0 24px 64px rgba(0,0,0,0.6),0 0 0 1px rgba(108,99,255,0.2)'},'rgba(255,255,255,0.9)','rgba(255,255,255,0.4)',{cancel:{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:8,color:'rgba(255,255,255,0.5)'},confirm:{background:'linear-gradient(135deg,#6c63ff,#9b5de5)',borderRadius:8,color:'#fff',boxShadow:'0 0 16px rgba(108,99,255,0.3)'}},'rgba(255,255,255,0.2)'),
  'light-ui': makeModal('rgba(0,0,0,0.4)',{background:'#fff',border:'1px solid rgba(0,0,0,0.1)',borderRadius:12,boxShadow:'0 16px 48px rgba(0,0,0,0.15)'},'#1a1a2e','#555',{cancel:{border:'1.5px solid #e0e0e0',borderRadius:6,color:'#666',background:'transparent'},confirm:{background:'#3f51b5',borderRadius:6,color:'#fff',boxShadow:'0 2px 8px rgba(63,81,181,0.3)'}},'#bbb'),
  'gradient-ui': makeModal('linear-gradient(135deg,rgba(108,99,255,0.85),rgba(255,101,132,0.85))',{background:'rgba(10,10,20,0.9)',border:'1px solid rgba(108,99,255,0.4)',borderRadius:20,boxShadow:'0 0 40px rgba(108,99,255,0.2)'},'rgba(255,255,255,0.9)','rgba(255,255,255,0.5)',{cancel:{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:12,color:'rgba(255,255,255,0.6)'},confirm:{background:'linear-gradient(135deg,#6c63ff,#ff6584)',borderRadius:12,color:'#fff',boxShadow:'0 6px 20px rgba(108,99,255,0.4)'}},'rgba(255,255,255,0.4)'),
}

/* ══════════════════════════════════════════
   HERO SECTION PREVIEWS (simplified mini)
══════════════════════════════════════════ */
const heroStyleMap = {
  glassmorphism: { bg:'linear-gradient(135deg,#6c63ff,#ff6584)', card:{background:'rgba(255,255,255,0.12)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,0.25)',borderRadius:16}, titleColor:'#fff', subColor:'rgba(255,255,255,0.7)', btnBg:'rgba(255,255,255,0.25)', btnBorder:'1px solid rgba(255,255,255,0.4)', btnColor:'#fff' },
  neumorphism: { bg:'#dde1e7', card:{background:'#dde1e7',borderRadius:20,boxShadow:'10px 10px 20px #b8bec7,-10px -10px 20px #ffffff'}, titleColor:'#333', subColor:'#566170', btnBg:'#dde1e7', btnBorder:'none', btnColor:'#6c63ff', btnShadow:'5px 5px 12px #b8bec7,-5px -5px 12px #ffffff' },
  minimalism: { bg:'#fff', card:{background:'#fff',border:'1px solid #eee'}, titleColor:'#111', subColor:'#888', btnBg:'#111', btnBorder:'none', btnColor:'#fff' },
  brutalism: { bg:'#f5f500', card:{background:'#fff',border:'4px solid #000'}, titleColor:'#000', subColor:'#333', btnBg:'#000', btnBorder:'3px solid #000', btnColor:'#f5f500' },
  'material-design': { bg:'#f5f5f5', card:{background:'#fff',borderRadius:8,boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}, titleColor:'#1a1a1a', subColor:'#757575', btnBg:'#6200ee', btnBorder:'none', btnColor:'#fff', btnShadow:'0 2px 8px rgba(98,0,238,0.3)' },
  'fluent-design': { bg:'linear-gradient(135deg,#0078d4,#005a9e)', card:{background:'rgba(255,255,255,0.1)',backdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:10}, titleColor:'#fff', subColor:'rgba(255,255,255,0.65)', btnBg:'#0078d4', btnBorder:'1px solid rgba(255,255,255,0.3)', btnColor:'#fff' },
  'bento-ui': { bg:'#0f0f1a', card:{background:'#1a1a2e',border:'1px solid rgba(255,255,255,0.07)',borderRadius:18}, titleColor:'rgba(255,255,255,0.9)', subColor:'rgba(255,255,255,0.4)', btnBg:'linear-gradient(135deg,#6c63ff,#ff6584)', btnBorder:'none', btnColor:'#fff' },
  claymorphism: { bg:'#f0f4ff', card:{background:'#a8d8ea',borderRadius:28,boxShadow:'0 16px 40px rgba(0,120,180,0.25),inset 0 3px 6px rgba(255,255,255,0.7)'}, titleColor:'#1a5276', subColor:'rgba(26,82,118,0.65)', btnBg:'#1a5276', btnBorder:'none', btnColor:'#a8d8ea', btnShadow:'0 8px 20px rgba(0,120,180,0.3)' },
  skeuomorphism: { bg:'linear-gradient(180deg,#c9a96e,#8B6914)', card:{background:'linear-gradient(180deg,#f5e6c3,#e8d4a0)',border:'2px solid #c4a054',borderRadius:6,boxShadow:'0 4px 12px rgba(0,0,0,0.4)'}, titleColor:'#5a3e0a', subColor:'rgba(90,62,10,0.6)', btnBg:'linear-gradient(180deg,#4a8c3f,#2d6b22)', btnBorder:'1px solid #1a4d12', btnColor:'#c8f0c2' },
  cyberpunk: { bg:'#050510', card:{background:'rgba(0,255,255,0.03)',border:'1px solid rgba(0,255,255,0.4)',borderRadius:0,boxShadow:'0 0 20px rgba(0,255,255,0.08)'}, titleColor:'#00ffff', subColor:'rgba(0,255,255,0.5)', btnBg:'transparent', btnBorder:'1px solid #00ffff', btnColor:'#00ffff', btnShadow:'0 0 12px rgba(0,255,255,0.3)' },
  retro: { bg:'#1a0a00', card:{background:'#fff',border:'4px solid #ff6b35',borderRadius:0,boxShadow:'6px 6px 0 #ff9d4d'}, titleColor:'#1a0a00', subColor:'#555', btnBg:'#ff6b35', btnBorder:'3px solid #ff9d4d', btnColor:'#1a0a00' },
  'dark-ui': { bg:'#0a0a0f', card:{background:'#1a1a2e',border:'1px solid rgba(255,255,255,0.07)',borderRadius:16}, titleColor:'rgba(255,255,255,0.9)', subColor:'rgba(255,255,255,0.35)', btnBg:'linear-gradient(135deg,#6c63ff,#9b5de5)', btnBorder:'none', btnColor:'#fff', btnShadow:'0 0 20px rgba(108,99,255,0.3)' },
  'light-ui': { bg:'#f8f9ff', card:{background:'#fff',border:'1px solid rgba(0,0,0,0.07)',borderRadius:12,boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}, titleColor:'#1a1a2e', subColor:'#666', btnBg:'#3f51b5', btnBorder:'none', btnColor:'#fff', btnShadow:'0 2px 10px rgba(63,81,181,0.3)' },
  'gradient-ui': { bg:'linear-gradient(135deg,#6c63ff,#ff6584,#43e97b)', card:{background:'rgba(10,10,20,0.75)',backdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:18}, titleColor:'#fff', subColor:'rgba(255,255,255,0.6)', btnBg:'rgba(255,255,255,0.15)', btnBorder:'2px solid rgba(255,255,255,0.35)', btnColor:'#fff' },
}

const heroPreviews = Object.fromEntries(
  Object.entries(heroStyleMap).map(([sid, s]) => [
    sid,
    <div key={sid} style={{ background:s.bg, padding:20, borderRadius:16, minHeight:220, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
      <div style={{ ...s.card, padding:'24px 22px', width:'100%', maxWidth:280, textAlign:'center' }}>
        <div style={{ height:10, background:s.titleColor, borderRadius:4, marginBottom:8, width:'65%', margin:'0 auto 8px', opacity:0.9 }} />
        <div style={{ height:8, background:s.titleColor, borderRadius:4, marginBottom:4, width:'80%', margin:'0 auto 4px', opacity:0.9 }} />
        <div style={{ height:6, background:s.subColor || s.titleColor, borderRadius:3, marginBottom:6, width:'88%', margin:'8px auto', opacity:0.55 }} />
        <div style={{ height:6, background:s.subColor || s.titleColor, borderRadius:3, marginBottom:14, width:'72%', margin:'4px auto 16px', opacity:0.55 }} />
        <div style={{ display:'flex', gap:10, justifyContent:'center' }}>
          <div style={{ flex:1, padding:'9px 0', background:s.btnBg, border:s.btnBorder, color:s.btnColor, borderRadius:typeof s.card.borderRadius === 'number' ? Math.min(s.card.borderRadius * 0.5, 10) : 6, fontWeight:700, fontSize:12, cursor:'pointer', boxShadow:s.btnShadow }}>Get Started</div>
          <div style={{ flex:1, padding:'9px 0', background:'transparent', border:`1px solid ${s.titleColor}`, color:s.titleColor, borderRadius:typeof s.card.borderRadius === 'number' ? Math.min(s.card.borderRadius * 0.5, 10) : 6, fontWeight:600, fontSize:12, cursor:'pointer', opacity:0.65 }}>Learn More</div>
        </div>
      </div>
    </div>
  ])
)

/* ══════════════════════════════════════════
   NAVBAR PREVIEWS
══════════════════════════════════════════ */
const navbarStyleMap = {
  glassmorphism: { bg:'linear-gradient(135deg,#6c63ff,#ff6584)', navBg:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', logoColor:'#fff', linkColor:'rgba(255,255,255,0.7)', activeColor:'#fff', btnBg:'rgba(255,255,255,0.2)', btnColor:'#fff' },
  neumorphism: { bg:'#dde1e7', navBg:'#dde1e7', border:'none', shadow:'0 2px 8px #b8bec7,-2px -2px 8px #ffffff', logoColor:'#333', linkColor:'#566170', activeColor:'#6c63ff', btnBg:'#dde1e7', btnColor:'#6c63ff', btnShadow:'3px 3px 6px #b8bec7,-3px -3px 6px #ffffff' },
  minimalism: { bg:'#fff', navBg:'#fff', border:'none', borderBottom:'1px solid #eee', logoColor:'#111', linkColor:'#666', activeColor:'#111', btnBg:'#111', btnColor:'#fff' },
  brutalism: { bg:'#f5f500', navBg:'#000', border:'3px solid #000', logoColor:'#f5f500', linkColor:'rgba(245,245,0,0.7)', activeColor:'#f5f500', btnBg:'#f5f500', btnColor:'#000' },
  'material-design': { bg:'#f5f5f5', navBg:'#6200ee', border:'none', shadow:'0 2px 8px rgba(0,0,0,0.2)', logoColor:'#fff', linkColor:'rgba(255,255,255,0.7)', activeColor:'#fff', btnBg:'rgba(255,255,255,0.15)', btnColor:'#fff' },
  'fluent-design': { bg:'linear-gradient(135deg,#0078d4,#004b96)', navBg:'rgba(255,255,255,0.08)', border:'none', borderBottom:'1px solid rgba(255,255,255,0.15)', logoColor:'#fff', linkColor:'rgba(255,255,255,0.65)', activeColor:'#fff', btnBg:'#0078d4', btnColor:'#fff' },
  'bento-ui': { bg:'#0a0a0f', navBg:'#12121a', border:'1px solid rgba(255,255,255,0.06)', logoColor:'rgba(255,255,255,0.9)', linkColor:'rgba(255,255,255,0.4)', activeColor:'#6c63ff', btnBg:'linear-gradient(135deg,#6c63ff,#ff6584)', btnColor:'#fff' },
  claymorphism: { bg:'#f0f4ff', navBg:'#a8d8ea', border:'none', shadow:'0 4px 12px rgba(0,120,180,0.2),0 -2px 0 rgba(255,255,255,0.5)', logoColor:'#1a5276', linkColor:'rgba(26,82,118,0.85)', activeColor:'#1a5276', btnBg:'#1a5276', btnColor:'#a8d8ea' },
  skeuomorphism: { bg:'#8B6914', navBg:'linear-gradient(180deg,#d4a017,#b8860b)', border:'2px solid #c4a054', logoColor:'#fff9e6', linkColor:'rgba(255,249,230,0.7)', activeColor:'#fff9e6', btnBg:'linear-gradient(180deg,#4a8c3f,#2d6b22)', btnColor:'#c8f0c2' },
  cyberpunk: { bg:'#050510', navBg:'rgba(0,0,20,0.9)', border:'none', borderBottom:'1px solid rgba(0,255,255,0.3)', logoColor:'#00ffff', linkColor:'rgba(0,255,255,0.5)', activeColor:'#00ffff', btnBg:'transparent', btnColor:'#00ffff', btnBorder:'1px solid rgba(0,255,255,0.5)' },
  retro: { bg:'#1a0a00', navBg:'#ff6b35', border:'3px solid #ff9d4d', logoColor:'#1a0a00', linkColor:'rgba(26,10,0,0.6)', activeColor:'#1a0a00', btnBg:'#1a0a00', btnColor:'#ff6b35' },
  'dark-ui': { bg:'#0a0a0f', navBg:'rgba(18,18,26,0.95)', border:'1px solid rgba(255,255,255,0.06)', logoColor:'rgba(255,255,255,0.9)', linkColor:'rgba(255,255,255,0.4)', activeColor:'#6c63ff', btnBg:'linear-gradient(135deg,#6c63ff,#9b5de5)', btnColor:'#fff' },
  'light-ui': { bg:'#f8f9ff', navBg:'#fff', border:'1px solid rgba(0,0,0,0.07)', shadow:'0 2px 8px rgba(0,0,0,0.05)', logoColor:'#1a1a2e', linkColor:'#666', activeColor:'#3f51b5', btnBg:'#3f51b5', btnColor:'#fff' },
  'gradient-ui': { bg:'linear-gradient(135deg,#6c63ff,#ff6584)', navBg:'rgba(10,10,20,0.6)', border:'none', borderBottom:'1px solid rgba(255,255,255,0.1)', logoColor:'#fff', linkColor:'rgba(255,255,255,0.6)', activeColor:'#fff', btnBg:'rgba(255,255,255,0.15)', btnColor:'#fff', btnBorder:'1px solid rgba(255,255,255,0.3)' },
}

const navbarPreviews = Object.fromEntries(
  Object.entries(navbarStyleMap).map(([sid, s]) => [
    sid,
    <div key={sid} style={{ background:s.bg, padding:0, borderRadius:16, minHeight:180, overflow:'hidden' }}>
      {/* Navbar */}
      <div style={{ background:s.navBg, backdropFilter:s.navBg?.includes('rgba') ? 'blur(16px)' : undefined, WebkitBackdropFilter:s.navBg?.includes('rgba') ? 'blur(16px)' : undefined, border:s.border, borderBottom:s.borderBottom, boxShadow:s.shadow, padding:'0 16px', height:48, display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ height:8, background:s.logoColor, borderRadius:3, width:60, opacity:0.9, marginRight:'auto' }} />
        {['Home','About','Work'].map(l => (
          <div key={l} style={{ fontSize:12, color:l==='Home' ? s.activeColor : s.linkColor, fontWeight:l==='Home' ? 700 : 500 }}>{l}</div>
        ))}
        <div style={{ padding:'5px 12px', background:s.btnBg, border:s.btnBorder, borderRadius:6, color:s.btnColor, fontSize:11, fontWeight:700, boxShadow:s.btnShadow, cursor:'pointer' }}>CTA</div>
      </div>
      {/* Page content stub */}
      <div style={{ padding:20 }}>
        <div style={{ height:8, background:s.logoColor, opacity:0.5, borderRadius:3, width:'45%', marginBottom:8 }} />
        <div style={{ height:6, background:s.logoColor, opacity:0.2, borderRadius:3, width:'70%', marginBottom:6 }} />
        <div style={{ height:6, background:s.logoColor, opacity:0.2, borderRadius:3, width:'55%' }} />
      </div>
    </div>
  ])
)

/* ══════════════════════════════════════════
   DISPATCHER
══════════════════════════════════════════ */
// Text colour directly on a badge-map background. Token-derived entries carry their own.
const LIGHT_BADGE_BGS = ['#fff', '#f5f5f5', '#e0e5ec', '#f5f500', '#f0f4ff', '#f8f9ff']
const badgeLabel = s => s.label ?? (LIGHT_BADGE_BGS.includes(s.bg) ? '#111' : '#fff')

const badgeStyleMap = withAllStyles({
  glassmorphism: { bg: 'linear-gradient(135deg,#6c63ff,#ff6584)', pillBg: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', radius: 100 },
  neumorphism: { bg: '#e0e5ec', pillBg: '#e0e5ec', border: 'none', shadow: '3px 3px 6px #b8bec7,-3px -3px 6px #ffffff', color: '#6c63ff', radius: 12 },
  minimalism: { bg: '#fff', pillBg: '#111', border: '1px solid #111', color: '#fff', radius: 0 },
  brutalism: { bg: '#f5f500', pillBg: '#fff', border: '2px solid #000', color: '#000', shadow: '2px 2px 0 #000', radius: 0, font: 'monospace', textTransform: 'uppercase' },
  'material-design': { bg: '#f5f5f5', pillBg: '#6200ee', border: 'none', shadow: '0 2px 4px rgba(0,0,0,0.2)', color: '#fff', radius: 16 },
  'fluent-design': { bg: 'linear-gradient(135deg,#0078d4,#005a9e)', pillBg: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', shadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#fff', radius: 4 },
  'bento-ui': { bg: '#0f0f1a', pillBg: 'linear-gradient(135deg,#6c63ff,#ff6584)', border: 'none', color: '#fff', radius: 8 },
  claymorphism: { bg: '#f0f4ff', pillBg: '#a8d8ea', border: 'none', shadow: '0 6px 14px rgba(47,127,166,0.25),inset -3px -3px 6px rgba(26,92,122,0.18),inset 3px 3px 6px rgba(255,255,255,0.8)', color: '#1a5276', radius: 16 },
  skeuomorphism: { bg: '#8B6914', pillBg: 'linear-gradient(180deg,#d4a017,#b8860b)', border: '1px solid #8b4513', shadow: 'inset 0 1px 0 rgba(255,255,255,0.4),0 2px 4px rgba(0,0,0,0.4)', color: '#fff9e6', radius: 4 },
  cyberpunk: { bg: '#050510', pillBg: 'transparent', border: '1px solid #00ffff', shadow: '0 0 8px rgba(0,255,255,0.4),inset 0 0 8px rgba(0,255,255,0.2)', color: '#00ffff', radius: 0, font: 'monospace', textTransform: 'uppercase' },
  retro: { bg: '#1a0a00', pillBg: '#ff6b35', border: '2px solid #ff9d4d', shadow: '2px 2px 0 #ff9d4d', color: '#1a0a00', radius: 0, font: 'monospace', textTransform: 'uppercase' },
  'dark-ui': { bg: '#0a0a0f', pillBg: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', shadow: '0 4px 12px rgba(0,0,0,0.3)', color: '#fff', radius: 100 },
  'light-ui': { bg: '#f8f9ff', pillBg: '#3f51b5', border: 'none', shadow: '0 2px 8px rgba(63,81,181,0.25)', color: '#fff', radius: 100 },
  'gradient-ui': { bg: '#140b2e', pillBg: 'linear-gradient(135deg,#4158D0,#C850C0,#FFCC70)', border: 'none', shadow: '0 4px 14px rgba(200,80,192,0.4)', color: '#fff', radius: 100 },
})

const badgePreviews = Object.fromEntries(Object.entries(badgeStyleMap).map(([id, s]) => [
  id,
  (
    <div style={{ background:s.bg, height:'100%', minHeight:160, display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
      <div style={{ padding:'4px 12px', background:s.pillBg, border:s.border, borderRadius:s.radius, color:s.color, boxShadow:s.shadow, fontSize:12, fontWeight:700, fontFamily:s.font||'inherit', textTransform:s.textTransform||'none', backdropFilter:s.bg.includes('gradient') ? 'blur(8px)' : undefined }}>Active</div>
      <div style={{ padding:'4px 12px', background:s.pillBg, border:s.border, borderRadius:s.radius, color:s.color, boxShadow:s.shadow, fontSize:12, fontWeight:700, fontFamily:s.font||'inherit', textTransform:s.textTransform||'none', opacity:0.6, backdropFilter:s.bg.includes('gradient') ? 'blur(8px)' : undefined }}>Pending</div>
    </div>
  )
]))

const togglePreviews = Object.fromEntries(Object.entries(badgeStyleMap).map(([id, s]) => [
  id,
  (
    <div style={{ background:s.bg, height:'100%', minHeight:160, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
      
      {/* Active Toggle */}
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ width:44, height:24, borderRadius:s.radius===0?0:24, background:s.pillBg, border:s.border, boxShadow:s.shadow, position:'relative', display:'flex', alignItems:'center', padding:2, boxSizing:'border-box' }}>
           <div style={{ width:18, height:18, borderRadius:s.radius===0?0:18, background:id==='minimalism'?'#fff':(id==='brutalism'?'#000':s.color), transform:'translateX(20px)', boxShadow:s.bg==='#f0f4ff'?'2px 2px 4px rgba(0,0,0,0.2)':'none', transition:'transform 0.2s ease' }} />
        </div>
        <span style={{ fontSize:14, fontWeight:600, color:badgeLabel(s), fontFamily:s.font||'inherit' }}>On</span>
      </div>

      {/* Inactive Toggle */}
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ width:44, height:24, borderRadius:s.radius===0?0:24, background:id==='minimalism'?'#fff':(id==='brutalism'?'#fff':'rgba(128,128,128,0.3)'), border:id==='minimalism'?'1px solid #111':(id==='brutalism'?'2px solid #000':s.border), position:'relative', display:'flex', alignItems:'center', padding:2, boxSizing:'border-box', boxShadow:id==='brutalism'?'2px 2px 0 #000':(id==='retro'?'2px 2px 0 #ff9d4d':'none') }}>
           <div style={{ width:18, height:18, borderRadius:s.radius===0?0:18, background:id==='minimalism'?'#111':(id==='brutalism'?'#000':'#fff'), transform:'translateX(0px)', opacity:0.8, transition:'transform 0.2s ease' }} />
        </div>
        <span style={{ fontSize:14, fontWeight:600, color:badgeLabel(s), fontFamily:s.font||'inherit', opacity:0.6 }}>Off</span>
      </div>

    </div>
  )
]))

const avatarPreviews = Object.fromEntries(Object.entries(badgeStyleMap).map(([id, s]) => [
  id,
  (
    <div style={{ background:s.bg, height:'100%', minHeight:160, display:'flex', alignItems:'center', justifyContent:'center', gap:32 }}>
      {/* Avatar with Status */}
      <div style={{ position:'relative', width:64, height:64, borderRadius:s.radius===0?0:64, border:id==='minimalism'?'2px solid #111':(id==='brutalism'?'3px solid #000':(s.border!=='none'?s.border:'2px solid '+s.pillBg)), boxShadow:id==='brutalism'?'4px 4px 0 #000':(id==='retro'?'4px 4px 0 #ff9d4d':s.shadow), background:s.pillBg, display:'flex', alignItems:'center', justifyContent:'center', color:s.color, fontSize:20, fontWeight:700, fontFamily:s.font }}>
        JD
        {/* Status indicator */}
        <div style={{ position:'absolute', bottom:-4, right:-4, width:18, height:18, borderRadius:s.radius===0?0:18, background:'#10b981', border:`3px solid ${s.bg.includes('gradient')?'rgba(0,0,0,0.2)':(s.bg==='#1a0a00'?'#1a0a00':s.bg)}` }} />
      </div>

      {/* Avatar Group */}
      <div style={{ display:'flex' }}>
        {['AB','CD','EF'].map((initials, i) => (
          <div key={initials} style={{ width:48, height:48, borderRadius:s.radius===0?0:48, border:id==='minimalism'?'2px solid #111':(id==='brutalism'?'2px solid #000':(s.border!=='none'?s.border:`2px solid ${s.bg}`)), boxShadow:s.shadow, background:s.pillBg, marginLeft:i===0?0:-16, position:'relative', zIndex:4-i, display:'flex', alignItems:'center', justifyContent:'center', color:s.color, fontSize:14, fontWeight:700, fontFamily:s.font }}>
            {initials}
          </div>
        ))}
      </div>
    </div>
  )
]))

const progressPreviews = Object.fromEntries(Object.entries(badgeStyleMap).map(([id, s]) => [
  id,
  (
    <div style={{ background:s.bg, height:'100%', minHeight:160, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:24, padding:32, boxSizing:'border-box' }}>
      {/* Standard Progress */}
      <div style={{ width:'100%', maxWidth:300 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8, color:badgeLabel(s), fontSize:14, fontWeight:600, fontFamily:s.font }}>
          <span>Loading...</span>
          <span>65%</span>
        </div>
        <div style={{ width:'100%', height:id==='minimalism'||id==='brutalism'?16:8, borderRadius:s.radius===0?0:8, background:id==='minimalism'?'#fff':(id==='brutalism'?'#fff':'rgba(128,128,128,0.2)'), border:id==='minimalism'?'1px solid #111':(id==='brutalism'?'2px solid #000':s.border), boxShadow:id==='brutalism'?'2px 2px 0 #000':(id==='retro'?'2px 2px 0 #ff9d4d':'none'), overflow:'hidden' }}>
          <div style={{ width:'65%', height:'100%', background:id==='minimalism'?'#111':(id==='brutalism'?'#000':(s.color==='#fff'?s.pillBg:s.color)), borderRadius:s.radius===0?0:8, transition:'width 1s ease-in-out' }} />
        </div>
      </div>
    </div>
  )
]))

/* shared style tokens reused across new previews */

/* ── TOAST PREVIEWS ── */
const toastPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:20, borderRadius:16, display:'flex', flexDirection:'column', gap:10, justifyContent:'center', minHeight:220 }}>
    {[['✓','#4caf50','Saved successfully!','Changes saved to cloud.'],['ℹ','#3b82f6','Update ready','New version available.']].map(([icon,ic,title,msg]) => (
      <div key={title} style={{ display:'flex', alignItems:'flex-start', gap:10, padding:'11px 14px', background:s.card, border:s.border, borderRadius:s.radius, boxShadow:s.shadow, fontFamily:s.font, backdropFilter:s.blur?'blur(14px)':'none' }}>
        <span style={{ fontSize:16, fontWeight:900, color:ic, flexShrink:0 }}>{icon}</span>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:13, fontWeight:700, color:s.text, marginBottom:2 }}>{title}</div>
          <div style={{ fontSize:11, color:s.sub }}>{msg}</div>
        </div>
        <span style={{ color:s.sub, fontSize:16, cursor:'pointer' }}>×</span>
      </div>
    ))}
  </div>
]))

/* ── TOOLTIP PREVIEWS ── */
const tooltipPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:28, borderRadius:16, display:'flex', gap:40, alignItems:'flex-end', justifyContent:'center', minHeight:220, flexWrap:'wrap' }}>
    {[['Hover Me','above'],['More Info','right']].map(([label, pos]) => (
      <div key={label} style={{ position:'relative', display:'inline-flex', flexDirection:'column', alignItems:'center', gap:8 }}>
        <div style={{ padding:'7px 16px', background:s.pill, border:s.border, borderRadius:s.radius, color:s.onPill, fontWeight:700, fontSize:12, fontFamily:s.font, boxShadow:s.shadow, cursor:'pointer', backdropFilter:s.blur?'blur(10px)':'none', textTransform:['brutalism','cyberpunk','retro'].includes(id)?'uppercase':'none' }}>{label}</div>
        <div style={{ padding:'6px 12px', background:s.dark?'rgba(0,0,0,0.82)':'#1a1a2e', border:id==='cyberpunk'?'1px solid #00ffff':id==='brutalism'?'2px solid #f5f500':'none', borderRadius:s.radius===0?0:6, color:'#fff', fontSize:11, fontWeight:600, fontFamily:s.font, whiteSpace:'nowrap', boxShadow:'0 4px 12px rgba(0,0,0,0.25)' }}>
          {pos === 'above' ? '⬆ Helpful info' : '➡ Side tooltip'}
        </div>
      </div>
    ))}
  </div>
]))

/* ── DROPDOWN PREVIEWS ── */
const dropdownPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:20, borderRadius:16, display:'flex', justifyContent:'center', alignItems:'flex-start', minHeight:220, paddingTop:24 }}>
    <div style={{ width:200, position:'relative' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 14px', background:s.card, border:s.border, borderRadius:s.radius, color:s.text, fontWeight:600, fontSize:13, fontFamily:s.font, boxShadow:s.shadow, marginBottom:4, backdropFilter:s.blur?'blur(14px)':'none' }}>
        <span>Select option...</span><span style={{ opacity:0.5, fontSize:11 }}>▾</span>
      </div>
      <div style={{ background:s.card, border:s.border, borderRadius:s.radius, boxShadow:s.shadow, overflow:'hidden', backdropFilter:s.blur?'blur(14px)':'none' }}>
        {[['🎨 Design',true],['⚡ Motion',false],['🧩 Components',false]].map(([item, active]) => (
          <div key={item} style={{ padding:'9px 14px', fontSize:13, fontFamily:s.font, background:active?(s.dark?'rgba(255,255,255,0.12)':'rgba(108,99,255,0.08)'):'transparent', color:active?s.accent:s.text, fontWeight:active?700:400, cursor:'pointer' }}>{item}</div>
        ))}
        <div style={{ height:1, background:s.dark?'rgba(255,255,255,0.07)':'rgba(0,0,0,0.06)', margin:'3px 0' }} />
        <div style={{ padding:'9px 14px', fontSize:13, fontFamily:s.font, color:s.sub, cursor:'pointer' }}>📦 Resources</div>
      </div>
    </div>
  </div>
]))

/* ── TABS PREVIEWS ── */
const tabsPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:18, borderRadius:16, minHeight:220 }}>
    <div style={{ display:'flex', gap:4, marginBottom:14, background:id==='neumorphism'?'#dde1e7':'transparent', borderRadius:id==='neumorphism'?10:0, padding:id==='neumorphism'?4:0 }}>
      {['Overview','Features','Pricing','Docs'].map((tab, i) => (
        <button key={tab} style={{ padding:'8px 14px', background:i===0?s.pill:'transparent', border:i===0?s.border:'none', borderRadius:s.radius, color:i===0?s.onPill:s.sub, fontSize:12, fontWeight:i===0?700:500, fontFamily:s.font, cursor:'pointer', boxShadow:i===0?s.shadow:'none', backdropFilter:s.blur&&i===0?'blur(10px)':'none' }}>{tab}</button>
      ))}
    </div>
    <div style={{ padding:16, background:s.dark?'rgba(255,255,255,0.05)':id==='brutalism'?'#fff':'rgba(0,0,0,0.03)', border:s.dark?'1px solid rgba(255,255,255,0.06)':id==='brutalism'?'2px solid #000':'1px solid rgba(0,0,0,0.06)', borderRadius:s.radius }}>
      <div style={{ height:11, width:'55%', background:s.text, borderRadius:3, marginBottom:8, opacity:0.85 }} />
      <div style={{ height:8, width:'90%', background:s.sub, borderRadius:3, marginBottom:5, opacity:0.5 }} />
      <div style={{ height:8, width:'75%', background:s.sub, borderRadius:3, opacity:0.5 }} />
    </div>
  </div>
]))

/* ── BREADCRUMB PREVIEWS ── */
const breadcrumbPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:24, borderRadius:16, display:'flex', flexDirection:'column', gap:14, justifyContent:'center', minHeight:220 }}>
    {[['Home','Components','Breadcrumb'],['🏠 Home','Library','Button']].map((crumbs, ci) => (
      <div key={ci} style={{ display:'inline-flex', alignItems:'center', gap:4, padding:'8px 16px', background:id==='glassmorphism'||id==='gradient-ui'?'rgba(255,255,255,0.1)':id==='brutalism'?'#f5f500':s.dark?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.04)', border:s.border, borderRadius:s.radius, boxShadow:s.shadow, backdropFilter:s.blur?'blur(10px)':'none' }}>
        {crumbs.map((crumb, i) => [
          <span key={crumb} style={{ fontSize:12, fontWeight:i<crumbs.length-1?600:400, color:i<crumbs.length-1?s.accent:s.sub, fontFamily:s.font, textTransform:s.font==='monospace'?'uppercase':'none', textDecoration:i<crumbs.length-1?'underline':'none' }}>{crumb}</span>,
          i < crumbs.length-1 && <span key={`sep-${i}`} style={{ color:s.sub, fontSize:13, fontFamily:s.font }}>›</span>
        ])}
      </div>
    ))}
  </div>
]))

/* ── ACCORDION PREVIEWS ── */
const accordionPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:16, borderRadius:16, display:'flex', flexDirection:'column', gap:8, minHeight:220 }}>
    {[['What is glassmorphism?',true],['When to use neumorphism?',false],['What is brutalism?',false]].map(([q,open]) => (
      <div key={q} style={{ background:s.card, border:s.border, borderRadius:s.radius, boxShadow:s.shadow, overflow:'hidden', backdropFilter:s.blur?'blur(10px)':'none' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'11px 14px', color:s.text, fontSize:12, fontWeight:600, fontFamily:s.font, cursor:'pointer', textTransform:s.font==='monospace'?'uppercase':'none' }}>
          <span>{q}</span><span style={{ color:s.accent, fontSize:10 }}>{open?'▲':'▼'}</span>
        </div>
        {open && <div style={{ padding:'0 14px 12px', paddingTop:10, color:s.sub, fontSize:11, lineHeight:1.6, fontFamily:s.font, borderTop:s.dark?'1px solid rgba(255,255,255,0.06)':'1px solid rgba(0,0,0,0.05)' }}>A frosted glass design style using backdrop blur and transparency.</div>}
      </div>
    ))}
  </div>
]))

/* ── STEPPER PREVIEWS ── */
const stepperPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:28, borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', minHeight:220 }}>
    <div style={{ display:'flex', alignItems:'flex-start', width:'100%', maxWidth:320 }}>
      {[['✓','Account','done'],['2','Profile','active'],['3','Review','up'],['4','Done','up']].map(([num, label, state], i) => [
        <div key={label} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, flexShrink:0 }}>
          <div style={{
            width:34, height:34,
            borderRadius: s.font==='monospace'?0:'50%',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:13, fontWeight:800, fontFamily:s.font,
            background: state==='done'?(s.dark?'rgba(255,255,255,0.15)':'rgba(108,99,255,0.1)'):state==='active'?s.pill:(s.dark?'rgba(255,255,255,0.07)':'rgba(0,0,0,0.06)'),
            color: state==='done'?s.accent:state==='active'?s.onPill:s.sub,
            boxShadow: state!=='up'?s.shadow:'none',
            border: s.border==='none'?'none':state!=='up'?s.border:'none',
            backdropFilter: s.blur&&state==='active'?'blur(8px)':'none',
          }}>{num}</div>
          <div style={{ textAlign:'center' }}>
            <div style={{ fontSize:10, fontWeight:700, color:s.text, fontFamily:s.font }}>{label}</div>
            <div style={{ fontSize:9, color:s.sub, marginTop:2, fontFamily:s.font }}>{state==='done'?'Done':state==='active'?'Active':'Pending'}</div>
          </div>
        </div>,
        i < 3 && <div key={`line-${i}`} style={{ flex:1, height:2, background:s.dark?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.09)', marginTop:17, minWidth:16 }} />
      ])}
    </div>
  </div>
]))

/* ── TIMELINE PREVIEWS ── */
const timelinePreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:18, borderRadius:16, minHeight:220 }}>
    {[['Just now','Component Created','Added to library.'],['2h ago','Design Updated','Styles refreshed.'],['Yesterday','v2.0 Released','12 new components.']].map(([ time, title, desc], i, arr) => (
      <div key={time} style={{ display:'flex', gap:12, position:'relative', paddingBottom: i<arr.length-1?14:0 }}>
        {i<arr.length-1 && <div style={{ position:'absolute', left:6, top:17, bottom:0, width:2, background:s.dark?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.08)' }} />}
        <div style={{ width:14, height:14, borderRadius:s.font==='monospace'?0:'50%', background:s.pill, flexShrink:0, marginTop:4, boxShadow:id==='cyberpunk'?'0 0 6px rgba(0,255,255,0.5)':'none', backdropFilter:s.blur?'blur(6px)':'none' }} />
        <div style={{ flex:1, padding:'10px 12px', background:s.card, border:s.border, borderRadius:s.radius, boxShadow:s.shadow, backdropFilter:s.blur?'blur(10px)':'none' }}>
          <div style={{ fontSize:10, fontWeight:600, color:id==='cyberpunk'?'#00ffff':id==='retro'?'#ff6b35':s.sub, fontFamily:s.font, marginBottom:3 }}>{time}</div>
          <div style={{ fontSize:12, fontWeight:700, color:s.text, fontFamily:s.font, marginBottom:3 }}>{title}</div>
          <div style={{ fontSize:11, color:s.sub, fontFamily:s.font }}>{desc}</div>
        </div>
      </div>
    ))}
  </div>
]))

/* ── SKELETON PREVIEWS ── */
const skeletonPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => {
  const base = s.dark ? 'rgba(255,255,255,0.09)' : id==='neumorphism'?'#d0d5dc':'rgba(0,0,0,0.07)'
  const shine = s.dark ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.9)'
  const anim = `@keyframes sk-shimmer-${id}{0%{background-position:-400px 0}100%{background-position:400px 0}}`
  return [id,
    <div key={id} style={{ background:s.bg, padding:20, borderRadius:16, display:'flex', justifyContent:'center', minHeight:220 }}>
      <style>{anim}</style>
      <div style={{ width:230, background:s.card, border:s.border, borderRadius:s.radius, boxShadow:s.shadow, overflow:'hidden', backdropFilter:s.blur?'blur(10px)':'none' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, padding:14 }}>
          <div style={{ width:36, height:36, borderRadius:s.font==='monospace'?0:'50%', background:`linear-gradient(90deg,${base} 25%,${shine} 50%,${base} 75%)`, backgroundSize:'800px 100%', animation:`sk-shimmer-${id} 1.6s infinite linear`, flexShrink:0 }} />
          <div style={{ flex:1, display:'flex', flexDirection:'column', gap:7 }}>
            <div style={{ height:11, width:'65%', background:`linear-gradient(90deg,${base} 25%,${shine} 50%,${base} 75%)`, backgroundSize:'800px 100%', animation:`sk-shimmer-${id} 1.6s infinite linear`, borderRadius:4 }} />
            <div style={{ height:8, width:'40%', background:`linear-gradient(90deg,${base} 25%,${shine} 50%,${base} 75%)`, backgroundSize:'800px 100%', animation:`sk-shimmer-${id} 1.6s infinite linear`, borderRadius:4 }} />
          </div>
        </div>
        <div style={{ height:100, background:`linear-gradient(90deg,${base} 25%,${shine} 50%,${base} 75%)`, backgroundSize:'800px 100%', animation:`sk-shimmer-${id} 1.6s infinite linear` }} />
        <div style={{ padding:14, display:'flex', flexDirection:'column', gap:8 }}>
          {[100,90,60].map(w => <div key={w} style={{ height:9, width:`${w}%`, background:`linear-gradient(90deg,${base} 25%,${shine} 50%,${base} 75%)`, backgroundSize:'800px 100%', animation:`sk-shimmer-${id} 1.6s infinite linear`, borderRadius:4 }} />)}
        </div>
      </div>
    </div>
  ]
}))

/* ── CHIP PREVIEWS ── */
const chipPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:20, borderRadius:16, minHeight:220 }}>
    <div style={{ fontSize:10, fontWeight:600, color:s.sub, fontFamily:s.font, textTransform:'uppercase', marginBottom:10, letterSpacing:0.8 }}>Filter by:</div>
    <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
      {[['All',true],['Design',true],['Motion',false],['Typography',false],['Color',true],['Layout',false],['Icons',false]].map(([tag, active]) => (
        <div key={tag} style={{
          padding:'5px 13px', fontFamily:s.font, fontSize:12, fontWeight:active?700:500,
          background: active?s.pill:(s.dark?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.05)'),
          border: active?s.border:(s.dark?'1px solid rgba(255,255,255,0.1)':'1px solid rgba(0,0,0,0.1)'),
          borderRadius: s.radius===0?0:100,
          color: active?s.onPill:s.sub,
          boxShadow: active?s.shadow:'none',
          cursor:'pointer',
          textTransform: s.font==='monospace'?'uppercase':'none',
          backdropFilter: s.blur&&active?'blur(8px)':'none',
        }}>{tag}</div>
      ))}
    </div>
  </div>
]))

/* ── TABLE PREVIEWS ── */
const tablePreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:16, borderRadius:16, minHeight:220, overflow:'hidden' }}>
    <table style={{ width:'100%', borderCollapse:'collapse', background:s.card, border:s.border, borderRadius:s.radius, boxShadow:s.shadow, overflow:'hidden', fontFamily:s.font, backdropFilter:s.blur?'blur(10px)':'none' }}>
      <thead>
        <tr>
          {['Component','Style','Status','Views'].map(h => (
            <th key={h} style={{ padding:'8px 10px', textAlign:'left', fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:0.5, color: id==='material-design'?'#fff':id==='brutalism'?'#000':id==='cyberpunk'?'#00ffff':id==='retro'?'#ff6b35':s.text, background: id==='material-design'?'#6200ee':id==='brutalism'?'#f5f500':id==='cyberpunk'?'rgba(0,255,255,0.08)':id==='retro'?'rgba(255,107,53,0.12)':(s.dark?'rgba(255,255,255,0.1)':'rgba(108,99,255,0.07)'), borderBottom:`1px solid ${s.dark?'rgba(255,255,255,0.07)':id==='brutalism'?'#000':'rgba(0,0,0,0.07)'}` }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[['Button','Glass',true,'12k'],['Card','Neu',true,'9k'],['Modal','Brut',false,'4k']].map(([c,st,active,v], i) => (
          <tr key={c} style={{ background: i%2!==0?(s.dark?'rgba(255,255,255,0.03)':'rgba(0,0,0,0.025)'):'transparent' }}>
            <td style={{ padding:'7px 10px', fontSize:11, color:s.text, borderBottom:`1px solid ${s.dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)'}` }}>{c}</td>
            <td style={{ padding:'7px 10px', fontSize:11, color:s.sub, borderBottom:`1px solid ${s.dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)'}` }}>{st}</td>
            <td style={{ padding:'7px 10px', borderBottom:`1px solid ${s.dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)'}` }}>
              <span style={{ padding:'2px 8px', borderRadius:100, fontSize:10, fontWeight:700, background:active?'rgba(34,197,94,0.14)':'rgba(234,179,8,0.14)', color:active?(s.dark?'#4ade80':'#166534'):(s.dark?'#facc15':'#854d0e') }}>{active?'Active':'Draft'}</span>
            </td>
            <td style={{ padding:'7px 10px', fontSize:11, color:s.sub, borderBottom:`1px solid ${s.dark?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)'}` }}>{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
]))

/* ── SIDEBAR PREVIEWS ── */
const sidebarPreviews = Object.fromEntries(Object.entries(newStyleMap).map(([id, s]) => [id,
  <div key={id} style={{ background:s.bg, padding:16, borderRadius:16, display:'flex', justifyContent:'center', minHeight:220 }}>
    <div style={{ width:170, background:s.card, border:s.border, borderRadius:s.radius, boxShadow:s.shadow, padding:'14px 10px', display:'flex', flexDirection:'column', gap:14, backdropFilter:s.blur?'blur(14px)':'none' }}>
      {/* Logo */}
      <div style={{ display:'flex', alignItems:'center', gap:8, paddingBottom:10, borderBottom:s.dark?'1px solid rgba(255,255,255,0.07)':'1px solid rgba(0,0,0,0.07)' }}>
        <div style={{ width:26, height:26, background:s.pill, borderRadius:s.radius===0?0:6, display:'flex', alignItems:'center', justifyContent:'center', fontSize:9, fontWeight:900, color:s.onPill, fontFamily:s.font, backdropFilter:s.blur?'blur(8px)':'none' }}>UI</div>
        <span style={{ fontSize:13, fontWeight:800, color:s.text, fontFamily:s.font, textTransform:s.font==='monospace'?'uppercase':'none' }}>Explorer</span>
      </div>
      {/* Nav */}
      <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
        <div style={{ fontSize:9, fontWeight:700, color:s.sub, textTransform:'uppercase', letterSpacing:1, fontFamily:s.font, padding:'0 6px', marginBottom:3 }}>Main</div>
        {[['🏠','Dashboard',true],['🧩','Components',false],['🎨','Library',false],['⚡','Playground',false]].map(([icon, label, active]) => (
          <div key={label} style={{ display:'flex', alignItems:'center', gap:8, padding:'7px 10px', borderRadius:s.radius===0?0:7, background:active?(s.dark?'rgba(108,99,255,0.18)':'rgba(108,99,255,0.09)'):'transparent', color:active?s.accent:s.sub, fontSize:12, fontWeight:active?700:500, fontFamily:s.font, cursor:'pointer', textTransform:s.font==='monospace'?'uppercase':'none' }}>
            <span style={{ fontSize:13 }}>{icon}</span>{label}
          </div>
        ))}
      </div>
    </div>
  </div>
]))

const allPreviews = {
  button: buttonPreviews,
  card: cardPreviews,
  input: inputPreviews,
  pricing: pricingPreviews,
  modal: modalPreviews,
  hero: heroPreviews,
  navbar: navbarPreviews,
  login: inputPreviews,
  badge: badgePreviews,
  toggle: togglePreviews,
  avatar: avatarPreviews,
  progress: progressPreviews,
  toast: toastPreviews,
  tooltip: tooltipPreviews,
  dropdown: dropdownPreviews,
  tabs: tabsPreviews,
  breadcrumb: breadcrumbPreviews,
  accordion: accordionPreviews,
  stepper: stepperPreviews,
  timeline: timelinePreviews,
  skeleton: skeletonPreviews,
  chip: chipPreviews,
  table: tablePreviews,
  sidebar: sidebarPreviews,
  ...extraPreviews,
  ...tokenComponentPreviews,
}


export default function ComponentPreview({ componentId, styleId, height = 220 }) {
  // Hand-written previews win; otherwise fall back to one built from the style's tokens
  const preview = allPreviews[componentId]?.[styleId] ?? tokenFallbackPreview(componentId, styleId)
  if (!preview) {
    return (
      <div style={{ height, background:'var(--bg-secondary)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-muted)', fontSize:13 }}>
        Preview coming soon
      </div>
    )
  }
  return (
    <div style={{ height, borderRadius:12, overflow:'hidden', flexShrink:0 }}>
      {preview}
    </div>
  )
}

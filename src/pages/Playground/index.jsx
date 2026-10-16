import { useState } from 'react'
import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'
import { styles } from '../../data/styles'

export default function Playground() {
  const [activeStyle, setActiveStyle] = useState('glassmorphism')
  
  // Base CSS variables for the playground
  const [controls, setControls] = useState({
    borderRadius: 20,
    padding: 32,
    opacity: 0.15,
    blur: 20,
    borderWidth: 1,
    shadowOpacity: 0,
    primaryColor: '#ffffff',
    bgLightness: 50,
    rotation: 0,
    scale: 1,
  })

  // Pre-configured presets, one per style in data/styles.js
  const presets = {
    glassmorphism: { borderRadius: 16, padding: 32, opacity: 0.15, blur: 24, borderWidth: 1, shadowOpacity: 0.2, primaryColor: 'transparent', bgLightness: 50, rotation: 0, scale: 1 },
    neumorphism: { borderRadius: 20, padding: 32, opacity: 1, blur: 0, borderWidth: 0, shadowOpacity: 0.5, primaryColor: '#e0e0f0', bgLightness: 90, rotation: 0, scale: 1 },
    brutalism: { borderRadius: 0, padding: 24, opacity: 1, blur: 0, borderWidth: 3, shadowOpacity: 1, primaryColor: '#ffffff', bgLightness: 100, rotation: 0, scale: 1 },
    minimalism: { borderRadius: 0, padding: 40, opacity: 1, blur: 0, borderWidth: 1, shadowOpacity: 0, primaryColor: '#ffffff', bgLightness: 100, rotation: 0, scale: 1 },
    'material-design': { borderRadius: 4, padding: 24, opacity: 1, blur: 0, borderWidth: 0, shadowOpacity: 0.2, primaryColor: '#ffffff', bgLightness: 100, rotation: 0, scale: 1 },
    'fluent-design': { borderRadius: 8, padding: 24, opacity: 0.8, blur: 40, borderWidth: 1, shadowOpacity: 0.1, primaryColor: 'transparent', bgLightness: 95, rotation: 0, scale: 1 },
    'bento-ui': { borderRadius: 32, padding: 32, opacity: 1, blur: 0, borderWidth: 1, shadowOpacity: 0.2, primaryColor: '#1a1a2e', bgLightness: 10, rotation: 0, scale: 1 },
    claymorphism: { borderRadius: 40, padding: 32, opacity: 1, blur: 0, borderWidth: 0, shadowOpacity: 0.8, primaryColor: '#ffd6e0', bgLightness: 85, rotation: 0, scale: 1 },
    skeuomorphism: { borderRadius: 8, padding: 24, opacity: 1, blur: 0, borderWidth: 1, shadowOpacity: 0.6, primaryColor: '#d4a76a', bgLightness: 60, rotation: 0, scale: 1 },
    cyberpunk: { borderRadius: 0, padding: 24, opacity: 1, blur: 0, borderWidth: 1, shadowOpacity: 0.8, primaryColor: '#050510', bgLightness: 5, rotation: 0, scale: 1 },
    retro: { borderRadius: 0, padding: 24, opacity: 1, blur: 0, borderWidth: 3, shadowOpacity: 1, primaryColor: '#e8c547', bgLightness: 60, rotation: 0, scale: 1 },
    'dark-ui': { borderRadius: 12, padding: 32, opacity: 1, blur: 0, borderWidth: 1, shadowOpacity: 0.4, primaryColor: '#1a1a2e', bgLightness: 15, rotation: 0, scale: 1 },
    'light-ui': { borderRadius: 12, padding: 32, opacity: 1, blur: 0, borderWidth: 1, shadowOpacity: 0.04, primaryColor: '#ffffff', bgLightness: 100, rotation: 0, scale: 1 },
    'gradient-ui': { borderRadius: 20, padding: 32, opacity: 1, blur: 0, borderWidth: 0, shadowOpacity: 0.2, primaryColor: '#0a0a0f', bgLightness: 50, rotation: 0, scale: 1 },
    'neo-brutalism': { borderRadius: 12, padding: 28, opacity: 1, blur: 0, borderWidth: 3, shadowOpacity: 0.6, primaryColor: '#ffffff', bgLightness: 95, rotation: 0, scale: 1 },
    'aurora-ui': { borderRadius: 18, padding: 28, opacity: 0.55, blur: 18, borderWidth: 1, shadowOpacity: 0.3, primaryColor: '#0b1020', bgLightness: 10, rotation: 0, scale: 1 },
    'swiss-design': { borderRadius: 0, padding: 32, opacity: 1, blur: 0, borderWidth: 4, shadowOpacity: 0, primaryColor: '#ffffff', bgLightness: 95, rotation: 0, scale: 1 },
    y2k: { borderRadius: 24, padding: 28, opacity: 1, blur: 0, borderWidth: 1, shadowOpacity: 0.3, primaryColor: '#e4e9f5', bgLightness: 90, rotation: 0, scale: 1 },
  }

  const handleStyleChange = (styleId) => {
    setActiveStyle(styleId)
    if (presets[styleId]) {
      setControls(presets[styleId])
    }
  }

  const handleControlChange = (key, value) => {
    setControls(prev => ({ ...prev, [key]: Number(value) || value }))
  }

  // Dynamic CSS generation based on selected style and controls
  const getPreviewStyle = () => {
    const { borderRadius, padding, opacity, blur, borderWidth, shadowOpacity, primaryColor } = controls
    
    const baseStyle = {
      borderRadius: `${borderRadius}px`,
      padding: `${padding}px`,
      width: '100%',
      maxWidth: 340,
      transition: 'all 0.3s ease',
      position: 'relative',
    }

    switch (activeStyle) {
      case 'glassmorphism':
        return { ...baseStyle, background: `rgba(255, 255, 255, ${opacity})`, backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, border: `${borderWidth}px solid rgba(255, 255, 255, 0.3)`, boxShadow: `0 8px 32px rgba(0, 0, 0, ${shadowOpacity})`, color: '#fff' }
      case 'neumorphism':
        return { ...baseStyle, background: primaryColor, border: 'none', boxShadow: `${shadowOpacity * 20}px ${shadowOpacity * 20}px ${shadowOpacity * 40}px #b8bec7, -${shadowOpacity * 20}px -${shadowOpacity * 20}px ${shadowOpacity * 40}px #ffffff`, color: '#333' }
      case 'brutalism':
        return { ...baseStyle, background: primaryColor, border: `${borderWidth}px solid #000`, boxShadow: `${shadowOpacity * 8}px ${shadowOpacity * 8}px 0 #000`, color: '#000' }
      case 'material-design':
        return { ...baseStyle, background: primaryColor, border: 'none', boxShadow: `0 4px ${shadowOpacity * 40}px rgba(0,0,0,${shadowOpacity})`, color: '#111' }
      case 'fluent-design':
        return { ...baseStyle, background: `rgba(255, 255, 255, ${opacity})`, backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, border: `${borderWidth}px solid rgba(255, 255, 255, 0.4)`, boxShadow: `0 16px 40px rgba(0, 0, 0, ${shadowOpacity})`, color: '#111' }
      case 'bento-ui':
        return { ...baseStyle, background: primaryColor, border: `${borderWidth}px solid rgba(255,255,255,0.1)`, boxShadow: `0 0 40px rgba(108,99,255,${shadowOpacity})`, color: '#fff' }
      case 'claymorphism':
        return { ...baseStyle, background: primaryColor, border: 'none', boxShadow: `0 20px 40px rgba(100,200,120,${shadowOpacity}), inset 0 4px 8px rgba(255,255,255,0.7)`, color: '#2d6a4f' }
      case 'skeuomorphism':
        return { ...baseStyle, background: `linear-gradient(180deg, ${primaryColor}, #d4a017)`, border: `${borderWidth}px solid #c4a054`, boxShadow: `0 8px 24px rgba(0,0,0,${shadowOpacity}), inset 0 1px 0 rgba(255,255,255,0.5)`, color: '#5a3e0a' }
      case 'cyberpunk':
        return { ...baseStyle, background: `rgba(0, 255, 255, ${opacity * 0.05})`, border: `${borderWidth}px solid #00ffff`, boxShadow: `0 0 20px rgba(0,255,255,${shadowOpacity}), inset 0 0 10px rgba(0,255,255,${shadowOpacity * 0.5})`, color: '#00ffff' }
      case 'retro':
        return { ...baseStyle, background: primaryColor, border: `${borderWidth}px solid #ff6b35`, boxShadow: `${shadowOpacity * 8}px ${shadowOpacity * 8}px 0 #ff9d4d`, color: '#1a0a00' }
      case 'dark-ui':
        return { ...baseStyle, background: primaryColor, border: `${borderWidth}px solid rgba(255, 255, 255, 0.1)`, boxShadow: `0 20px 40px rgba(0, 0, 0, ${shadowOpacity})`, color: '#fff' }
      case 'light-ui':
        return { ...baseStyle, background: primaryColor, border: `${borderWidth}px solid rgba(0, 0, 0, 0.07)`, boxShadow: `0 8px 24px rgba(0, 0, 0, ${shadowOpacity})`, color: '#111' }
      case 'gradient-ui':
        return { ...baseStyle, background: primaryColor, border: 'none', boxShadow: `0 16px 40px rgba(200, 80, 192, ${shadowOpacity})`, color: '#fff' }
      case 'neo-brutalism':
        return { ...baseStyle, background: primaryColor, border: `${borderWidth}px solid #111`, boxShadow: `${shadowOpacity * 8}px ${shadowOpacity * 8}px 0 #111`, color: '#111' }
      case 'aurora-ui':
        return { ...baseStyle, background: `rgba(11, 16, 32, ${opacity})`, backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, border: `${borderWidth}px solid rgba(255, 255, 255, 0.14)`, boxShadow: `0 12px 40px rgba(56, 189, 248, ${shadowOpacity})`, color: '#f1f5ff' }
      case 'swiss-design':
        return { ...baseStyle, background: primaryColor, border: 'none', borderTop: `${borderWidth}px solid #e3000f`, boxShadow: 'none', color: '#111', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }
      case 'y2k':
        return { ...baseStyle, background: `linear-gradient(180deg, #ffffff, ${primaryColor})`, border: `${borderWidth}px solid #9aa7c7`, boxShadow: `inset 0 2px 0 #fff, 0 12px 28px rgba(58, 141, 255, ${shadowOpacity})`, color: '#2b2d6e', fontFamily: '"Trebuchet MS", Verdana, sans-serif' }
      case 'minimalism':
      default:
        return { ...baseStyle, background: primaryColor, border: `${borderWidth}px solid #111`, boxShadow: `none`, color: '#111' }
    }
  }

  const getWrapperStyle = () => {
    switch (activeStyle) {
      case 'glassmorphism': return { background: 'linear-gradient(135deg, #6c63ff, #ff6584)' }
      case 'neumorphism': return { background: '#e0e5ec' }
      case 'brutalism': return { background: '#f5f500' }
      case 'fluent-design': return { background: 'linear-gradient(135deg, #0078d4, #005a9e)' }
      case 'bento-ui': return { background: '#0f0f1a' }
      case 'claymorphism': return { background: '#f0f4ff' }
      case 'skeuomorphism': return { background: '#8B6914' }
      case 'cyberpunk': return { background: '#050510' }
      case 'retro': return { background: '#1a0a00' }
      case 'dark-ui': return { background: '#0a0a0f' }
      case 'light-ui': return { background: '#f8f9ff' }
      case 'gradient-ui': return { background: 'linear-gradient(135deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' }
      case 'material-design': return { background: '#f5f5f5' }
      case 'neo-brutalism': return { background: '#fdf6e3' }
      case 'aurora-ui': return { background: 'radial-gradient(at 15% 20%, rgba(56,189,248,0.6), transparent 50%), radial-gradient(at 85% 25%, rgba(168,85,247,0.6), transparent 50%), radial-gradient(at 50% 100%, rgba(52,211,153,0.5), transparent 55%), #0b1020' }
      case 'swiss-design': return { background: '#f2f2f2' }
      case 'y2k': return { background: 'linear-gradient(135deg, #c9d6ff 0%, #f8c8ff 50%, #bdf6ff 100%)' }
      case 'minimalism':
      default: return { background: `hsl(0, 0%, ${controls.bgLightness}%)` }
    }
  }

  const getButtonStyles = () => {
    const { borderRadius } = controls
    const baseBtn = { width: '100%', padding: 12, borderRadius: Math.max(0, borderRadius - 8), fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }
    
    switch (activeStyle) {
      case 'brutalism': return { ...baseBtn, background: '#000', color: '#f5f500', border: '3px solid #000', fontFamily: 'monospace' }
      case 'retro': return { ...baseBtn, background: '#1a0a00', color: '#ff6b35', border: '3px solid #ff9d4d', fontFamily: 'monospace' }
      case 'cyberpunk': return { ...baseBtn, background: 'transparent', color: '#00ffff', border: '1px solid #00ffff', fontFamily: 'monospace' }
      case 'glassmorphism':
      case 'fluent-design': return { ...baseBtn, background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)' }
      case 'neumorphism': return { ...baseBtn, background: '#e0e5ec', color: '#4a42c4', border: 'none', boxShadow: '4px 4px 10px #b8bec7, -4px -4px 10px #ffffff' }
      case 'minimalism': return { ...baseBtn, background: '#111', color: '#fff', border: 'none' }
      case 'claymorphism': return { ...baseBtn, background: '#2d6a4f', color: '#c3f0ca', border: 'none' }
      case 'skeuomorphism': return { ...baseBtn, background: 'linear-gradient(180deg, #4a8c3f, #2d6b22)', color: '#c8f0c2', border: '1px solid #1a4d12' }
      case 'material-design': return { ...baseBtn, background: '#6200ee', color: '#fff', border: 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', textTransform: 'uppercase', letterSpacing: '0.06em' }
      case 'light-ui': return { ...baseBtn, background: '#3b5bdb', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(59,91,219,0.25)' }
      case 'gradient-ui': return { ...baseBtn, background: 'linear-gradient(135deg, #4158D0, #C850C0 50%, #FFCC70)', color: '#fff', border: 'none', boxShadow: '0 8px 20px rgba(200,80,192,0.4)' }
      case 'neo-brutalism': return { ...baseBtn, background: '#ff90e8', color: '#111', border: '3px solid #111', boxShadow: '4px 4px 0 #111', fontWeight: 800 }
      case 'aurora-ui': return { ...baseBtn, background: 'linear-gradient(135deg, #38bdf8, #a855f7)', color: '#fff', border: 'none', boxShadow: '0 8px 24px rgba(168,85,247,0.4)' }
      case 'swiss-design': return { ...baseBtn, background: '#e3000f', color: '#fff', border: 'none', borderRadius: 0 }
      case 'y2k': return { ...baseBtn, background: 'linear-gradient(180deg, #6fb6ff, #1f5fe0)', color: '#fff', border: '1px solid #1a4fb8', borderRadius: 100, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7), 0 4px 10px rgba(31,95,224,0.35)' }
      case 'bento-ui':
      case 'dark-ui': return { ...baseBtn, background: 'linear-gradient(135deg, #6c63ff, #ff6584)', color: '#fff', border: 'none' }
      default: return { ...baseBtn, background: 'var(--accent)', color: '#fff', border: 'none' }
    }
  }

  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="accent" style={{ marginBottom: 16 }}>🛠️ Live Playground</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            Interactive Design <span style={{ color: 'var(--accent)' }}>Playground</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            Tweak CSS parameters in real-time to understand how different design styles are constructed under the hood.
          </p>
        </div>
      </section>

      <section style={{ padding: '48px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 32 }} className="playground-grid">
            
            {/* Controls Sidebar */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, height: 'fit-content' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>1. Select Style</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32, maxHeight: 300, overflowY: 'auto', paddingRight: 8 }}>
                {styles.map(s => (
                  <div
                    key={s.id}
                    role="button"
                    onClick={() => handleStyleChange(s.id)}
                    style={{
                      padding: '10px 14px',
                      textAlign: 'left',
                      background: activeStyle === s.id ? 'rgba(254,137,50,0.12)' : 'transparent',
                      border: `1px solid ${activeStyle === s.id ? 'var(--accent)' : 'var(--border)'}`,
                      borderRadius: 8,
                      color: activeStyle === s.id ? 'var(--accent)' : 'var(--text-primary)',
                      fontWeight: activeStyle === s.id ? 600 : 500,
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {s.name}
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>2. Tweak Parameters</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Border Radius */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8, color: 'var(--text-secondary)' }}>
                    <span>Border Radius</span>
                    <span>{controls.borderRadius}px</span>
                  </div>
                  <input type="range" min="0" max="40" value={controls.borderRadius} onChange={(e) => handleControlChange('borderRadius', e.target.value)} style={{ width: '100%' }} />
                </div>

                {/* Padding */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8, color: 'var(--text-secondary)' }}>
                    <span>Padding</span>
                    <span>{controls.padding}px</span>
                  </div>
                  <input type="range" min="10" max="60" value={controls.padding} onChange={(e) => handleControlChange('padding', e.target.value)} style={{ width: '100%' }} />
                </div>

                {/* Blur (Glass, Fluent & Aurora) */}
                {['glassmorphism', 'fluent-design', 'aurora-ui'].includes(activeStyle) && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8, color: 'var(--text-secondary)' }}>
                      <span>Backdrop Blur</span>
                      <span>{controls.blur}px</span>
                    </div>
                    <input type="range" min="0" max="40" value={controls.blur} onChange={(e) => handleControlChange('blur', e.target.value)} style={{ width: '100%' }} />
                  </div>
                )}

                {/* Opacity (Glass, Fluent, Cyberpunk & Aurora) */}
                {['glassmorphism', 'fluent-design', 'cyberpunk', 'aurora-ui'].includes(activeStyle) && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8, color: 'var(--text-secondary)' }}>
                      <span>Background Opacity</span>
                      <span>{controls.opacity}</span>
                    </div>
                    <input type="range" min="0" max="1" step="0.05" value={controls.opacity} onChange={(e) => handleControlChange('opacity', e.target.value)} style={{ width: '100%' }} />
                  </div>
                )}

                {/* Border Width */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8, color: 'var(--text-secondary)' }}>
                    <span>Border Width</span>
                    <span>{controls.borderWidth}px</span>
                  </div>
                  <input type="range" min="0" max="10" value={controls.borderWidth} onChange={(e) => handleControlChange('borderWidth', e.target.value)} style={{ width: '100%' }} />
                </div>
                
                 {/* Shadow Intensity */}
                 <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8, fontWeight: 600 }}>
                    <span>Shadow Opacity</span>
                    <span>{controls.shadowOpacity}</span>
                  </div>
                  <input type="range" min="0" max="1" step="0.05" value={controls.shadowOpacity} onChange={(e) => handleControlChange('shadowOpacity', e.target.value)} style={{ width: '100%' }} />
                </div>
                
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8, fontWeight: 600 }}>
                    <span>Rotation</span>
                    <span>{controls.rotation}°</span>
                  </div>
                  <input type="range" min="-15" max="15" value={controls.rotation} onChange={(e) => handleControlChange('rotation', e.target.value)} style={{ width: '100%' }} />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8, fontWeight: 600 }}>
                    <span>Scale</span>
                    <span>{controls.scale}x</span>
                  </div>
                  <input type="range" min="0.8" max="1.2" step="0.05" value={controls.scale} onChange={(e) => handleControlChange('scale', e.target.value)} style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            {/* Live Preview Area */}
            <div style={{ 
              ...getWrapperStyle(),
              borderRadius: 'var(--radius-lg)', 
              minHeight: 600, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: 24,
              overflow: 'hidden',
              transition: 'background 0.4s ease'
            }}>
               <motion.div 
                 key={activeStyle}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: parseFloat(controls.scale) || 1, rotate: parseFloat(controls.rotation) || 0 }}
                 style={getPreviewStyle()}
               >
                 <div style={{ height: 160, background: 'rgba(128,128,128,0.2)', borderRadius: Math.max(0, controls.borderRadius - 8), marginBottom: 20 }} />
                 <h2 style={{ fontSize: 24, fontWeight: ['brutalism', 'retro'].includes(activeStyle) ? 900 : 700, marginBottom: 12, fontFamily: ['brutalism', 'retro', 'cyberpunk'].includes(activeStyle) ? 'monospace' : 'inherit', color: 'inherit' }}>Interactive Card</h2>
                 <p style={{ opacity: 0.8, fontSize: 15, lineHeight: 1.6, marginBottom: 24, color: 'inherit' }}>Adjust the sliders to see how CSS properties fundamentally change the aesthetic of this UI component.</p>
                 <div role="button" style={getButtonStyles()}>Action Button</div>
               </motion.div>
            </div>

          </div>
        </div>
        <style>{`
          @media(max-width:800px){.playground-grid{grid-template-columns:1fr!important;}}
          input[type=range] { accent-color: var(--accent); }
        `}</style>
      </section>
    </div>
  )
}

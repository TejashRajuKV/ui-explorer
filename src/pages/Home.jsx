import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

/* ─── Shared Components ──────────────────────── */
function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function OrganicShape({ d, color, style, animate = true }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', zIndex: 0, ...style }}
      animate={animate ? { y: [0, -10, 0] } : {}}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path fill={color} d={d} />
    </motion.svg>
  )
}

export default function Home() {
  // We apply a specific local style block to ensure the cream/editorial theme
  // works regardless of the global dark/light mode context.
  
  return (
    <div style={{ 
      background: '#f4f2ea', // Warm cream background from inspiration
      color: '#1a1a1a', 
      minHeight: '100vh',
      overflowX: 'hidden',
      fontFamily: '"Inter", sans-serif'
    }}>
      <style>{`
        .serif-heading {
          font-family: "Playfair Display", "Georgia", serif;
          font-weight: 500;
          color: #1a1a1a;
          line-height: 1.1;
        }
        .pill-button {
          background: #1a1a1a;
          color: #f4f2ea;
          padding: 12px 32px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          display: inline-block;
          transition: transform 0.2s, background 0.2s;
        }
        .pill-button:hover {
          background: #333;
          transform: translateY(-2px);
        }
        .feature-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.05);
          transition: transform 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 80 }}>
        
        {/* Background Organic Shapes */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          {/* Large pale blue cloud top right */}
          <OrganicShape 
            color="#cce0e3" 
            style={{ width: '60vw', top: '-10%', right: '-10%', opacity: 0.6 }}
            d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.5,-40.5C85.9,-25.7,92.5,-10.1,90.3,4.4C88.1,18.9,77.1,32.3,65.8,44.7C54.5,57.1,42.9,68.5,28.8,74.5C14.7,80.5,-1.9,81.1,-17.7,77.3C-33.5,73.5,-48.5,65.3,-60.1,53.4C-71.7,41.5,-79.9,25.9,-83.4,9.4C-86.9,-7.1,-85.7,-24.5,-77.3,-38.3C-68.9,-52.1,-53.3,-62.3,-38.3,-68.4C-23.3,-74.5,-8.9,-76.5,6.7,-84.5C22.3,-92.5,32.5,-83.3,45.7,-76.3Z" 
          />
          {/* Soft sage green shape middle left */}
          <OrganicShape 
            color="#d3e2c9" 
            style={{ width: '45vw', top: '20%', left: '-15%' }}
            d="M38.1,-60.6C48.7,-51.7,56.1,-38.1,62.1,-24.1C68.1,-10.1,72.7,4.3,69.5,16.7C66.3,29.1,55.3,39.5,43.2,46.9C31.1,54.3,17.9,58.7,4.3,51.8C-9.3,44.9,-22.6,26.7,-34.5,13.6C-46.4,0.5,-56.9,-7.5,-59.8,-18.2C-62.7,-28.9,-58,-42.3,-48.1,-51.4C-38.2,-60.5,-23.1,-65.3,-7.9,-56C7.3,-46.7,27.5,-69.5,38.1,-60.6Z" 
          />
          {/* Large textured circle center right */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '5%',
            width: '45vw',
            height: '45vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffffff 0%, #f4f2ea 70%)',
            border: '2px solid rgba(0,0,0,0.03)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
            zIndex: 1
          }}>
            {/* Dotted texture overlay */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%', opacity: 0.1,
              backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }} />
          </div>

          {/* Plant shapes */}
          <OrganicShape 
            color="#eba9b6" // Dusty pink leaf
            style={{ width: '25vw', bottom: '10%', right: '15%', zIndex: 3 }}
            d="M48.5,-68.8C59.9,-59.3,63.9,-40.4,68.3,-22.6C72.7,-4.8,77.5,11.9,72,25.6C66.5,39.3,50.7,50,34.4,59.2C18.1,68.4,1.3,76.1,-13.4,73.1C-28.1,70.1,-40.7,56.4,-51.3,42.1C-61.9,27.8,-70.5,12.9,-70.7,-2.1C-70.9,-17.1,-62.7,-32.2,-51.4,-44.6C-40.1,-57,-25.7,-66.7,-9.6,-66.3C6.5,-65.9,22.6,-55.4,37.1,-78.3C51.6,-101.2,37.1,-78.3,48.5,-68.8Z" 
          />
          <OrganicShape 
            color="#f2c166" // Warm yellow plant
            style={{ width: '15vw', bottom: '20%', left: '15%', zIndex: 3 }}
            d="M42.3,-58.5C53.6,-48.5,60.8,-32.8,63.6,-16.8C66.4,-0.8,64.8,15.5,57.1,28.8C49.4,42.1,35.6,52.4,20.8,58.3C6,64.2,-9.8,65.7,-24.1,60.8C-38.4,55.9,-51.2,44.6,-59.8,30.5C-68.4,16.4,-72.8,-0.5,-68.9,-15.7C-65,-30.9,-52.8,-44.4,-39.3,-53.4C-25.8,-62.4,-11,-66.9,3.5,-71.1C18,-75.3,27,-59.3,42.3,-58.5Z" 
          />

          {/* Abstract wavy ground */}
          <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: '30vh', zIndex: 2 }} preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="#222" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,144C384,160,480,224,576,234.7C672,245,768,203,864,170.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: '20vh', zIndex: 1 }} preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="#e3a032" fillOpacity="0.8" d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,122.7C840,96,960,64,1080,69.3C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ maxWidth: 640 }}
          >
            <h1 className="serif-heading" style={{ fontSize: 'clamp(46px, 6vw, 72px)', marginBottom: 24, letterSpacing: '-0.02em' }}>
              Let design transport you to any style, anywhere.
            </h1>

            <p style={{ fontSize: 'clamp(17px, 2vw, 21px)', color: '#4a4a4a', maxWidth: 500, lineHeight: 1.6, marginBottom: 40, fontWeight: 400 }}>
              An interactive educational platform exploring modern UI styles, driven by creativity and the art of implementation.
            </p>

            <div>
              <Link to="/library" className="pill-button">
                Library
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTENT SECTION
      ══════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: '#f4f2ea', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <h2 className="serif-heading" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: 24 }}>
                Explore the Collection
              </h2>
              <p style={{ color: '#4a4a4a', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
                Mastering UI design begins with understanding the core principles behind every visual aesthetic.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {[
              { title: 'Design Library', desc: 'Deep dives into Neumorphism, Glassmorphism, Brutalism, and more.', path: '/library' },
              { title: 'Interactive Playground', desc: 'Tweak CSS variables live and watch styles transform instantly.', path: '/playground' },
              { title: 'Component Gallery', desc: 'Browse hundreds of ready-to-use components across different aesthetics.', path: '/components' },
            ].map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.15}>
                <Link to={feature.path} style={{ textDecoration: 'none' }}>
                  <div className="feature-card">
                    <h3 className="serif-heading" style={{ fontSize: 24, marginBottom: 12 }}>{feature.title}</h3>
                    <p style={{ color: '#666', lineHeight: 1.6, fontSize: 15 }}>{feature.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section style={{ padding: '100px 0 160px', background: '#f4f2ea', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <FadeIn>
            <h2 className="serif-heading" style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: 32 }}>
              Ready to start your journey?
            </h2>
            <Link to="/playground" className="pill-button" style={{ padding: '16px 40px', fontSize: 18 }}>
              Open Playground
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

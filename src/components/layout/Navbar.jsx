import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'


const navLinks = [
  { label: 'Library',     path: '/library' },
  { label: 'Components',  path: '/components' },
  { label: 'Playground',  path: '/playground' },
  { label: 'Code',        path: '/code' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'var(--bg-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: 72, gap: 8 }}>
          {/* Logo */}
          <Link
            to="/"
            id="nav-logo"
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginRight: 'auto' }}
          >
            <div style={{
              width: 36, height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 900, color: '#fff',
              boxShadow: '0 4px 16px rgba(108,99,255,0.4)',
            }}>
              UI
            </div>
            <span style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 18,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}>
              UI <span style={{ color: 'var(--accent)' }}>Explorer</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            id="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            className="desktop-nav"
          >
            {navLinks.map(link => {
              const isActive = location.pathname.startsWith(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-${link.label.toLowerCase()}`}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    background: isActive ? 'rgba(108,99,255,0.1)' : 'transparent',
                    transition: 'color 0.2s ease, background 0.2s ease',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)'
                      e.currentTarget.style.background = 'var(--bg-glass)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>



          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle mobile menu"
            className="hamburger-btn"
            style={{
              display: 'none',
              width: 44, height: 44,
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border)',
              background: 'var(--bg-glass)',
              cursor: 'pointer',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <span style={{ width: 20, height: 2, background: 'var(--text-primary)', borderRadius: 2, display: 'block', transition: 'all 0.3s ease', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ width: 20, height: 2, background: 'var(--text-primary)', borderRadius: 2, display: 'block', transition: 'all 0.3s ease', opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: 20, height: 2, background: 'var(--text-primary)', borderRadius: 2, display: 'block', transition: 'all 0.3s ease', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'var(--bg-secondary)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '16px 24px 24px',
            }}
          >
            {navLinks.map(link => {
              const isActive = location.pathname.startsWith(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    display: 'block',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 16,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    background: isActive ? 'rgba(108,99,255,0.1)' : 'transparent',
                    marginBottom: 4,
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

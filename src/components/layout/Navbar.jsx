import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { label: 'Library',     path: '/library' },
  { label: 'Components',  path: '/components' },
  { label: 'Animations',  path: '/animations' },
  { label: 'Playground',  path: '/playground' },
  { label: 'Code',        path: '/code' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const activePath = navLinks.find(l => location.pathname.startsWith(l.path))?.path
  const highlight = hovered ?? activePath

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? '10px 0' : '16px 0', transition: 'padding 0.35s ease' }}
      >
        <div className="container">
          <div
            className="nav-shell"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: 56,
              gap: 8,
              padding: '0 8px 0 16px',
              borderRadius: 100,
              transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
              background: scrolled ? 'rgba(20, 2, 31, 0.78)' : 'rgba(32, 4, 50, 0.5)',
              backdropFilter: 'blur(18px) saturate(140%)',
              WebkitBackdropFilter: 'blur(18px) saturate(140%)',
              border: `1px solid ${scrolled ? 'rgba(254,231,181,0.1)' : 'rgba(254,231,181,0.14)'}`,
              boxShadow: scrolled ? '0 12px 40px rgba(8,0,14,0.5)' : 'none',
            }}
          >
            <Link to="/" id="nav-logo" style={{ marginRight: 'auto' }} aria-label="UI Explorer home">
              <Logo />
            </Link>

            {/* Desktop Nav Links */}
            <nav
              id="desktop-nav"
              className="desktop-nav"
              style={{ display: 'flex', alignItems: 'center', gap: 2 }}
              onMouseLeave={() => setHovered(null)}
            >
              {navLinks.map(link => {
                const isActive = activePath === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    id={`nav-${link.label.toLowerCase()}`}
                    onMouseEnter={() => setHovered(link.path)}
                    style={{
                      position: 'relative',
                      padding: '8px 16px',
                      borderRadius: 100,
                      fontSize: 14,
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--cream)' : 'rgba(254,231,181,0.7)',
                      transition: 'color 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {highlight === link.path && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        style={{
                          position: 'absolute', inset: 0, borderRadius: 100, zIndex: -1,
                          background: isActive ? 'linear-gradient(135deg, rgba(254,137,50,0.28), rgba(205,26,48,0.28))' : 'rgba(254,231,181,0.08)',
                          border: `1px solid ${isActive ? 'rgba(254,137,50,0.4)' : 'transparent'}`,
                        }}
                      />
                    )}
                    <span style={{ position: 'relative' }}>{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            <Link to="/components" className="btn-sunset nav-cta" style={{ padding: '9px 18px', fontSize: 13, marginLeft: 8 }}>
              Get started
            </Link>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              className="hamburger-btn"
              style={{
                display: 'none',
                width: 42, height: 42,
                borderRadius: '50%',
                border: '1px solid rgba(254,231,181,0.15)',
                background: 'rgba(254,231,181,0.06)',
                cursor: 'pointer',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
              }}
            >
              <span style={{ width: 18, height: 2, background: 'var(--cream)', borderRadius: 2, display: 'block', transition: 'all 0.3s ease', transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ width: 18, height: 2, background: 'var(--cream)', borderRadius: 2, display: 'block', transition: 'all 0.3s ease', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ width: 18, height: 2, background: 'var(--cream)', borderRadius: 2, display: 'block', transition: 'all 0.3s ease', transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 84,
              left: 16,
              right: 16,
              zIndex: 999,
              background: 'rgba(20, 2, 31, 0.94)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(254,231,181,0.1)',
              borderRadius: 24,
              padding: 12,
              boxShadow: '0 24px 60px rgba(8,0,14,0.6)',
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = activePath === link.path
              return (
                <motion.div key={link.path} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <Link
                    to={link.path}
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      borderRadius: 14,
                      fontSize: 16,
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--orange)' : 'var(--cream)',
                      background: isActive ? 'rgba(254,137,50,0.1)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .nav-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

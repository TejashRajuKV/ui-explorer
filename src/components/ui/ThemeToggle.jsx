import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      id="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.9 }}
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        transition: 'border-color 0.2s ease, background 0.2s ease',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-hover)'
        e.currentTarget.style.background = 'var(--bg-glass-hover)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.background = 'var(--bg-glass)'
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </motion.button>
  )
}

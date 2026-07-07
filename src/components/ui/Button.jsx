import { motion } from 'framer-motion'

const variants = {
  primary: {
    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
    color: '#fff',
    border: 'none',
  },
  secondary: {
    background: 'var(--bg-glass)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent',
  },
}

const sizes = {
  sm: { padding: '8px 16px', fontSize: '13px', borderRadius: 'var(--radius-sm)' },
  md: { padding: '12px 24px', fontSize: '15px', borderRadius: 'var(--radius-sm)' },
  lg: { padding: '16px 32px', fontSize: '16px', borderRadius: 'var(--radius-md)' },
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  id,
  fullWidth,
  style = {},
  ...props
}) {
  const variantStyles = variants[variant] || variants.primary
  const sizeStyles = sizes[size] || sizes.md

  return (
    <motion.button
      id={id}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      style={{
        ...variantStyles,
        ...sizeStyles,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 600,
        letterSpacing: '-0.01em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        width: fullWidth ? '100%' : 'auto',
        justifyContent: 'center',
        transition: 'box-shadow 0.2s ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

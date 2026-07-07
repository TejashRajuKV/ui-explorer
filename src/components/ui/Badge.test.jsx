import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Badge from './Badge'

describe('Badge Component', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('applies default muted color classes if no color is provided', () => {
    const { container } = render(<Badge>Default</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveStyle({
      background: 'rgba(108, 99, 255, 0.15)',
      color: 'var(--accent)'
    })
  })
})

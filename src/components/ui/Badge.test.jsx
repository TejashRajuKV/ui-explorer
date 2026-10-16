import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Badge from './Badge'

describe('Badge Component', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('applies default accent colors if no color is provided', () => {
    const { container } = render(<Badge>Default</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveStyle({ color: 'var(--accent)' })
  })
})

import { useState } from 'react'

/* Copies `value` to the clipboard and briefly confirms. Works without the async clipboard API. */
export default function CopyButton({ value, label = 'Copy', className = '', style = {} }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const el = document.createElement('textarea')
      el.value = value
      el.setAttribute('readonly', '')
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button type="button" onClick={copy} className={`copy-btn ${copied ? 'is-copied' : ''} ${className}`} style={style} aria-live="polite">
      {copied ? '✓ Copied' : `⧉ ${label}`}
    </button>
  )
}

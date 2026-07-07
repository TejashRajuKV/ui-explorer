import { useState } from 'react'
import { motion } from 'framer-motion'

const tabs = ['HTML', 'CSS', 'Tailwind']

export default function CodeViewer({ code }) {
  const [activeTab, setActiveTab] = useState('HTML')
  const [copied, setCopied] = useState(false)

  const codeMap = { HTML: code?.html, CSS: code?.css, Tailwind: code?.tailwind }
  const activeCode = codeMap[activeTab] || '/* No code available */'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = activeCode
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div style={{ background: '#0d0d18', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Tab bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', background: '#12121f', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {tabs.map(tab => (
          <div
            key={tab}
            role="button"
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 16px',
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${activeTab === tab ? '#8b83f6' : 'transparent'}`,
              color: activeTab === tab ? '#8b83f6' : 'rgba(255,255,255,0.4)',
              fontSize: 13,
              fontWeight: activeTab === tab ? 700 : 500,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'color 0.2s ease',
              marginBottom: -1,
            }}
          >
            {tab}
          </div>
        ))}

        {/* Copy button — right side */}
        <motion.div
          role="button"
          id={`copy-${activeTab.toLowerCase()}`}
          onClick={handleCopy}
          whileTap={{ scale: 0.95 }}
          style={{
            marginLeft: 'auto',
            padding: '6px 14px',
            background: copied ? 'rgba(67,233,123,0.15)' : 'rgba(139,131,246,0.15)',
            border: `1px solid ${copied ? 'rgba(67,233,123,0.3)' : 'rgba(139,131,246,0.3)'}`,
            borderRadius: 8,
            color: copied ? '#43e97b' : '#8b83f6',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.2s ease',
          }}
        >
          {copied ? '✓ Copied!' : '⧉ Copy'}
        </motion.div>
      </div>

      {/* Code block */}
      <div style={{ overflowX: 'auto', maxHeight: 380, overflowY: 'auto' }}>
        <pre style={{
          margin: 0,
          padding: '20px 24px',
          fontFamily: '"Fira Code", "JetBrains Mono", "Fira Mono", monospace',
          fontSize: 13,
          lineHeight: 1.7,
          color: '#e2e8f0',
          whiteSpace: 'pre',
          tabSize: 2,
        }}>
          <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(activeCode) }} />
        </pre>
      </div>
    </div>
  )
}

/* Basic syntax highlight — injects colored spans via safe tokens */
function syntaxHighlight(code) {
  let hl = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/("(?:[^"\\]|\\.)*")/g, '___TOKEN_STR___$1___TOKEN_END___')
    .replace(/('(?:[^'\\]|\\.)*')/g, '___TOKEN_STR___$1___TOKEN_END___')
    .replace(/(\/\*[\s\S]*?\*\/)/g, '___TOKEN_COM___$1___TOKEN_END___')
    .replace(/(\/\/.*)/g, '___TOKEN_COM___$1___TOKEN_END___')
    .replace(/\b(background|color|border|padding|margin|display|flex|grid|width|height|font|border-radius|box-shadow|backdrop-filter|position|transform|transition|opacity|overflow|cursor|gap|align-items|justify-content)\b(?=\s*:)/g, '___TOKEN_PROP___$1___TOKEN_END___')
    .replace(/\b(class|style|type|href|src|id|placeholder|value|readonly)\b/g, '___TOKEN_ATTR___$1___TOKEN_END___')
    .replace(/(&lt;\/?)([\w-]+)/g, '$1___TOKEN_TAG___$2___TOKEN_END___')
    .replace(/\b(rgba|linear-gradient|url|blur|calc|var)\b/g, '___TOKEN_FUNC___$1___TOKEN_END___')
    .replace(/\b(px|em|rem|vw|vh|%|deg)\b/g, '___TOKEN_UNIT___$1___TOKEN_END___');

  return hl
    .replace(/___TOKEN_STR___/g, '<span style="color:#a8ff78">')
    .replace(/___TOKEN_COM___/g, '<span style="color:#636e7b">')
    .replace(/___TOKEN_PROP___/g, '<span style="color:#79b8ff">')
    .replace(/___TOKEN_ATTR___/g, '<span style="color:#b8add2">')
    .replace(/___TOKEN_TAG___/g, '<span style="color:#ff7b72">')
    .replace(/___TOKEN_FUNC___/g, '<span style="color:#d2a8ff">')
    .replace(/___TOKEN_UNIT___/g, '<span style="color:#f97583">')
    .replace(/___TOKEN_END___/g, '</span>');
}

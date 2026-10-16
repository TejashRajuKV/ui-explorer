import { useState } from 'react'
import { motion } from 'framer-motion'

const defaultTabs = ['HTML', 'CSS', 'Tailwind']

/* `tabs` lets callers supply their own labels; `code` is then keyed by those labels */
export default function CodeViewer({ code, tabs }) {
  const tabList = tabs || defaultTabs
  const [activeTab, setActiveTab] = useState(tabList[0])
  const [copied, setCopied] = useState(false)

  const codeMap = tabs ? (code || {}) : { HTML: code?.html, CSS: code?.css, Tailwind: code?.tailwind }
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
    <div style={{ background: '#12011c', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(254,231,181,0.08)' }}>
      {/* Tab bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', background: '#1a0428', borderBottom: '1px solid rgba(254,231,181,0.07)' }}>
        {tabList.map(tab => (
          <div
            key={tab}
            role="button"
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 16px',
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${activeTab === tab ? '#FE8932' : 'transparent'}`,
              color: activeTab === tab ? '#FE8932' : 'rgba(254,231,181,0.45)',
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
          id={`copy-${activeTab.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={handleCopy}
          whileTap={{ scale: 0.95 }}
          style={{
            marginLeft: 'auto',
            padding: '6px 14px',
            background: copied ? 'rgba(254,231,181,0.14)' : 'rgba(254,137,50,0.14)',
            border: `1px solid ${copied ? 'rgba(254,231,181,0.35)' : 'rgba(254,137,50,0.32)'}`,
            borderRadius: 8,
            color: copied ? '#FEE7B5' : '#FE8932',
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
          color: '#f3dcc0',
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
    .replace(/\b(background|color|border|padding|margin|display|flex|grid|width|height|font|border-radius|box-shadow|backdrop-filter|position|transform|transition|opacity|overflow|cursor|gap|align-items|justify-content|animation|animation-delay|filter|inset|top|left|border-right|background-size|background-position|transform-origin)\b(?=\s*:)/g, '___TOKEN_PROP___$1___TOKEN_END___')
    .replace(/\b(class|style|type|href|src|id|placeholder|value|readonly)\b/g, '___TOKEN_ATTR___$1___TOKEN_END___')
    .replace(/(&lt;\/?)([\w-]+)/g, '$1___TOKEN_TAG___$2___TOKEN_END___')
    .replace(/\b(rgba|linear-gradient|url|blur|calc|var)\b/g, '___TOKEN_FUNC___$1___TOKEN_END___')
    .replace(/\b(px|em|rem|vw|vh|%|deg)\b/g, '___TOKEN_UNIT___$1___TOKEN_END___');

  return hl
    .replace(/___TOKEN_STR___/g, '<span style="color:#FEE7B5">')
    .replace(/___TOKEN_COM___/g, '<span style="color:#8a6a86">')
    .replace(/___TOKEN_PROP___/g, '<span style="color:#FE8932">')
    .replace(/___TOKEN_ATTR___/g, '<span style="color:#b8add2">')
    .replace(/___TOKEN_TAG___/g, '<span style="color:#ff6b7d">')
    .replace(/___TOKEN_FUNC___/g, '<span style="color:#ffb37a">')
    .replace(/___TOKEN_UNIT___/g, '<span style="color:#ff8a9a">')
    .replace(/___TOKEN_END___/g, '</span>');
}

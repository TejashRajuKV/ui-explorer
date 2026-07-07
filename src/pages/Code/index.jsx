import { useState } from 'react'
import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'
import CodeViewer from '../../components/gallery/CodeViewer'

const codeSnippets = [
  {
    id: 'glass-card',
    title: 'Glassmorphism Card',
    category: 'CSS Effects',
    language: 'CSS',
    description: 'A beautiful frosted glass effect using backdrop-filter.',
    code: {
      html: `<div class="glass-card">
  <h2>Glass Card</h2>
</div>`,
      css: `.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}`,
      tailwind: `<div class="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg">
  <h2>Glass Card</h2>
</div>`
    }
  },
  {
    id: 'neu-button',
    title: 'Neumorphic Button',
    category: 'Components',
    language: 'CSS',
    description: 'Soft UI button with light and dark box shadows.',
    code: {
      html: `<button class="neu-btn">Click Me</button>`,
      css: `.neu-btn {
  background: #e0e5ec;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  color: #333;
  font-weight: bold;
  box-shadow: 5px 5px 10px #b8bec7, -5px -5px 10px #ffffff;
  transition: all 0.2s ease;
}
.neu-btn:active {
  box-shadow: inset 3px 3px 6px #b8bec7, -3px -3px 6px #ffffff;
}`,
      tailwind: `<button class="bg-[#e0e5ec] rounded-xl px-6 py-3 text-gray-800 font-bold" style="box-shadow: 5px 5px 10px #b8bec7, -5px -5px 10px #ffffff;">
  Click Me
</button>`
    }
  },
  {
    id: 'gradient-text',
    title: 'Gradient Text',
    category: 'Typography',
    language: 'CSS',
    description: 'Text that is filled with a linear gradient.',
    code: {
      html: `<h1 class="gradient-text">Beautiful Text</h1>`,
      css: `.gradient-text {
  background: linear-gradient(135deg, #6c63ff, #ff6584);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`,
      tailwind: `<h1 class="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
  Beautiful Text
</h1>`
    }
  }
]

export default function CodeLibrary() {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('All')
  const categories = ['All', 'CSS Effects', 'Components', 'Typography']

  const filtered = codeSnippets.filter(s => {
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeTab === 'All' || s.category === activeTab
    return matchSearch && matchCat
  })

  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="pink" style={{ marginBottom: 16 }}>💻 Code Library</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            Snippets & <span style={{ color: 'var(--accent-2)' }}>Utilities</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            A collection of handy code snippets, CSS tricks, and utility classes to speed up your UI development.
          </p>
        </div>
      </section>

      <section style={{ padding: '48px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          
          {/* Filters */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', flex: 1, maxWidth: 300 }}>
               <input
                type="text"
                placeholder="Search snippets..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveTab(c)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 20,
                    background: activeTab === c ? 'var(--accent)' : 'var(--bg-glass)',
                    color: activeTab === c ? '#fff' : 'var(--text-secondary)',
                    border: `1px solid ${activeTab === c ? 'var(--accent)' : 'var(--border)'}`,
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >{c}</button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: 24 }} className="code-grid">
            {filtered.map(snippet => (
              <div key={snippet.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{snippet.title}</h3>
                    <Badge color="muted" style={{ fontSize: 11 }}>{snippet.category}</Badge>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{snippet.description}</p>
                </div>
                <div>
                   <CodeViewer code={snippet.code} />
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
               <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
                 No snippets found.
               </div>
            )}
          </div>

        </div>
        <style>{`
          @media(max-width: 600px) { .code-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
  )
}

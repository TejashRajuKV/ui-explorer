import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/dynamic-themes.css'
import React, { Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/layout/Layout'

// Lazy loaded routes for Code Splitting (Chunk 14 Optimization)
const Home = React.lazy(() => import('./pages/Home'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const LibraryIndex = React.lazy(() => import('./pages/Library/index'))
const StyleDetail = React.lazy(() => import('./pages/Library/StyleDetail'))
const ComponentsIndex = React.lazy(() => import('./pages/Components/index'))
const ComponentDetail = React.lazy(() => import('./pages/Components/ComponentDetail'))
const Playground = React.lazy(() => import('./pages/Playground/index'))
const CodeLibrary = React.lazy(() => import('./pages/Code/index'))
const Compare = React.lazy(() => import('./pages/Compare/index'))
const Learning = React.lazy(() => import('./pages/Learning/index'))
const Inspiration = React.lazy(() => import('./pages/Inspiration/index'))
const Resources = React.lazy(() => import('./pages/Resources/index'))
const Themes = React.lazy(() => import('./pages/Themes/index'))
const Profile = React.lazy(() => import('./pages/Profile/index'))

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div style={{ padding: 120, textAlign: 'center', color: 'var(--text-secondary)' }}>Loading...</div>}>
            <Routes>
            <Route path="/" element={<Home />} />

            {/* Chunk 2 — UI Library */}
            <Route path="/library" element={<LibraryIndex />} />
            <Route path="/library/:styleId" element={<StyleDetail />} />

            {/* Chunk 3 — Component Gallery */}
            <Route path="/components" element={<ComponentsIndex />} />
            <Route path="/components/:componentId" element={<ComponentDetail />} />

            {/* Chunk 4 — Playground */}
            <Route path="/playground" element={<Playground />} />

            {/* Chunk 5 — Code Library */}
            <Route path="/code" element={<CodeLibrary />} />

            {/* Chunk 6 — Compare */}
            <Route path="/compare" element={<Compare />} />

            {/* Chunk 8 — Learning Hub */}
            <Route path="/learn/*" element={<Learning />} />

            {/* Chunk 9 — Inspiration */}
            <Route path="/inspiration" element={<Inspiration />} />

            {/* Chunk 10 — Resources */}
            <Route path="/resources" element={<Resources />} />

            {/* Chunk 11 — Themes */}
            <Route path="/themes" element={<Themes />} />
            
            {/* Chunk 12 — Profile */}
            <Route path="/profile" element={<Profile />} />



            {/* 404 */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

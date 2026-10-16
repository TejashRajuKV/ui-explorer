import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './styles/dynamic-themes.css'
import React, { Suspense, useEffect } from 'react'
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
const Animations = React.lazy(() => import('./pages/Animations/index'))

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }} aria-label="Loading">
      <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'conic-gradient(from 0deg, transparent, #FE8932 70%, #CD1A30)', WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), #000 0)', mask: 'radial-gradient(farthest-side, transparent calc(100% - 5px), #000 0)', animation: 'spin 0.9s linear infinite' }} />
    </div>
  )
}

/* Fades pages in and out, and scrolls to top on navigation */
function AnimatedRoutes() {
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
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
            
            {/* Animations */}
            <Route path="/animations" element={<Animations />} />

            {/* Chunk 12 — Profile */}
            <Route path="/profile" element={<Profile />} />



            {/* 404 */}
            <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

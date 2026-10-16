import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  // The landing hero is full-bleed and sits under the floating navbar
  const isHome = pathname === '/'

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: isHome ? 0 : 88 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

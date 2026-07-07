import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Badge from '../../components/ui/Badge'
import ComponentPreview from '../../components/gallery/ComponentPreview'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/api/profile')
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 24px', color: 'var(--text-secondary)' }}>
        Loading profile...
      </div>
    )
  }

  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 24px', color: 'var(--text-secondary)' }}>
        Failed to load profile. Make sure the backend server is running.
      </div>
    )
  }

  return (
    <div>
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '64px 0 40px' }}>
        <div className="container">
          <Badge color="accent" style={{ marginBottom: 16 }}>👤 Profile</Badge>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>
            {user.name}'s <span style={{ color: 'var(--accent-2)' }}>Dashboard</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
            Track your learning progress and saved components.
          </p>
        </div>
      </section>

      <section style={{ padding: '48px 0 80px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 32 }} className="profile-grid">
            
            {/* Sidebar */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, height: 'fit-content', textAlign: 'center' }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, color: '#fff' }}>
                {user.name ? user.name[0] : 'U'}
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{user.name}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24 }}>{user.email}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 700 }}>{user.savedComponents?.length || 0}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Saved</div>
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 700 }}>{user.progress?.completed || 0}%</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Progress</div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Saved Components</h3>
                {user.savedComponents?.length === 0 ? (
                  <p style={{ color: 'var(--text-secondary)' }}>You haven't saved any components yet. Browse the gallery to find inspiration!</p>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                    {user.savedComponents?.map(saved => (
                      <div key={saved.id} style={{ border: '1px solid var(--border)', borderRadius: 12, padding: 12, background: 'var(--bg-secondary)' }}>
                        <div style={{ marginBottom: 12, fontWeight: 600, fontSize: 14 }}>{saved.componentId} ({saved.styleId})</div>
                        <div style={{ transform: 'scale(0.8)', transformOrigin: 'top left' }}>
                          <ComponentPreview componentId={saved.componentId} styleId={saved.styleId} height={120} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Learning Progress</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ flex: 1, height: 8, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${user.progress?.completed || 0}%`, height: '100%', background: 'var(--accent)' }} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{user.progress?.completed || 0}%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <style>{`
          @media(max-width: 768px) { .profile-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
  )
}

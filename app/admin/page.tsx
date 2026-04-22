'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'petinggi') {
      router.push('/admin/dashboard')
    } else {
      setError('Akses Ditolak: Password salah!')
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary-deeper)', padding: '20px' }}>
      <div className="glass-premium" style={{ padding: '50px 40px', borderRadius: '16px', maxWidth: '420px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '8px', fontSize: '28px' }}>Portal Admin</h2>
        <p style={{ color: 'var(--muted-blue)', marginBottom: '40px', fontSize: '14px' }}>Masukan sandi akses (tes: petinggi)</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            type="password" 
            placeholder="Ketik password..." 
            style={{ padding: '16px', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '16px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span style={{ color: 'var(--accent-red)', fontSize: '14px', fontWeight: 'bold' }}>{error}</span>}
          <button type="submit" className="btn btn-primary" style={{ marginTop: '12px', width: '100%', padding: '16px', fontSize: '16px', backgroundColor: 'white', color: 'var(--primary-deeper)' }}>
            Akses Dasbor
          </button>
        </form>
      </div>
    </main>
  )
}

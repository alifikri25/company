'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'
import Image from 'next/image'

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
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
          <Image src="/logo-panjang.png" alt="Logo" width={200} height={48} style={{ objectFit: 'contain' }} priority />
        </div>
        <h2 style={{ color: 'white', marginBottom: 8, fontSize: 24, fontWeight: 700 }}>Portal Admin</h2>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            type="password" 
            placeholder="Ketik password..." 
            style={{ padding: '16px', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', fontSize: '16px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span style={{ color: 'var(--accent-red)', fontSize: '14px', fontWeight: 'bold' }}>{error}</span>}
          <button type="submit" className="btn btn-primary" style={{ marginTop: '12px', width: '100%', padding: '16px', fontSize: '16px', backgroundColor: 'white', color: 'var(--primary-deeper)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Lock size={18} />
            Akses Dasbor
          </button>
        </form>
      </div>
    </main>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/admin/dashboard/berita', label: 'Kelola Berita', icon: '📰' },
  { href: '/admin/dashboard/karir', label: 'Kelola Karir', icon: '💼' },
  { href: '/admin/dashboard/pesan', label: 'Inbox Pesan', icon: '📩' },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside style={{
      width: 260,
      minHeight: '100vh',
      background: 'white',
      borderRight: '1px solid #e8ecf0',
      padding: '32px 0',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ padding: '0 24px', marginBottom: 40 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo-1.jpeg" alt="Logo" style={{ height: 32, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: 'var(--primary-blue)' }}>
            PT. Tangguh Jaya<br/>Semesta
          </span>
        </Link>
      </div>

      <div style={{ padding: '0 16px', marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted-blue)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0 8px' }}>
          Menu Utama
        </span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '0 16px' }}>
        {menuItems.map(item => {
          const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 14px', borderRadius: 10,
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
              color: isActive ? 'var(--primary-blue)' : 'var(--neutral-500)',
              background: isActive ? 'rgba(21, 38, 115, 0.06)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div style={{ marginTop: 'auto', padding: '0 16px' }}>
        <div style={{ borderTop: '1px solid #e8ecf0', paddingTop: 20 }}>
          <Link href="/" style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 14px', borderRadius: 10,
            fontSize: 14, fontWeight: 600,
            color: 'var(--accent-red)',
            textDecoration: 'none',
            fontFamily: 'var(--font-display)'
          }}>
            ← Kembali ke Website
          </Link>
        </div>
      </div>
    </aside>
  )
}

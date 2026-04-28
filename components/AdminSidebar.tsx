'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { 
  LayoutDashboard, 
  Newspaper, 
  Briefcase, 
  Mail, 
  ArrowLeft,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useSidebar } from './AdminSidebarContext'

const menuItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/dashboard/berita', label: 'Kelola Berita', icon: Newspaper },
  { href: '/admin/dashboard/karir', label: 'Kelola Karir', icon: Briefcase },
  { href: '/admin/dashboard/pesan', label: 'Inbox Pesan', icon: Mail },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const { isCollapsed, toggleCollapse, isMobileOpen } = useSidebar()

  return (
    <aside className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
      {/* Sidebar Header */}
      <div style={{ height: 64, padding: '0 24px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f1f5f9', flexShrink: 0 }}>
        <Link href="/" className="sidebar-logo-full" style={{ textDecoration: 'none', display: isCollapsed ? 'none' : 'block' }}>
          <Image src="/logo-panjang.png" alt="Logo" width={160} height={32} style={{ objectFit: 'contain' }} priority />
        </Link>
        {isCollapsed && (
          <div className="sidebar-logo-collapsed" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 32, height: 32, background: 'var(--primary-blue)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 14 }}>T</div>
          </div>
        )}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 12px' }}>
        <div style={{ padding: '0 12px', marginBottom: 12 }}>
          <span className="sidebar-section-title" style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em', textTransform: 'uppercase', display: isCollapsed ? 'none' : 'block' }}>
            Navigation
          </span>
          {isCollapsed && <div className="sidebar-divider" style={{ height: 1, background: '#f1f5f9', margin: '0 4px' }} />}
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {menuItems.map(item => {
            const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))
            return (
              <Link key={item.href} href={item.href} title={isCollapsed ? item.label : ''} className="sidebar-menu-item" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '9px 12px', borderRadius: 8,
                fontSize: 14, fontWeight: 500,
                color: isActive ? 'var(--primary-blue)' : '#475569',
                background: isActive ? '#f1f5f9' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.15s ease-in-out',
                justifyContent: isCollapsed ? 'center' : 'flex-start'
              }}>
                <item.icon size={20} style={{ color: isActive ? 'var(--primary-blue)' : '#64748b' }} />
                {!isCollapsed && <span className="sidebar-menu-text">{item.label}</span>}
                {isCollapsed && <span className="sidebar-menu-text" style={{ display: 'none' }}>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div style={{ padding: '12px', borderTop: '1px solid #f1f5f9' }}>
        <Link href="/" title={isCollapsed ? 'Exit to Website' : ''} style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '9px 12px', borderRadius: 8,
          fontSize: 14, fontWeight: 500,
          color: '#ef4444',
          textDecoration: 'none',
          justifyContent: isCollapsed ? 'center' : 'flex-start'
        }}>
          <ArrowLeft size={18} />
          {!isCollapsed && <span className="sidebar-menu-text">Exit to Website</span>}
          {isCollapsed && <span className="sidebar-menu-text" style={{ display: 'none' }}>Exit to Website</span>}
        </Link>
      </div>

      {/* Toggle Button for Desktop */}
      <button 
        onClick={toggleCollapse}
        className="hide-on-non-desktop"
        style={{
          position: 'absolute',
          bottom: 80,
          right: -12,
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'white',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 100,
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          color: '#64748b'
        }}
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </aside>
  )
}

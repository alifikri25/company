'use client'
import React from 'react'
import { SidebarProvider, useSidebar } from '@/components/AdminSidebarContext'
import AdminSidebar from '@/components/AdminSidebar'
import AdminMobileHeader from '@/components/AdminMobileHeader'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed, isMobileOpen, closeMobile, toggleCollapse, toggleMobile } = useSidebar()
  const pathname = usePathname()
  
  if (pathname === '/admin') {
    return <>{children}</>
  }

  // Simple breadcrumb logic
  const breadcrumbs = pathname.split('/').filter(p => p && p !== 'admin')

  return (
    <main className="admin-layout">
      <div 
        className={`sidebar-overlay ${isMobileOpen ? 'visible' : ''}`} 
        onClick={closeMobile}
      />
      <AdminSidebar />
      
      <div className={`admin-main ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Desktop Header */}
        <header className="admin-header hide-on-non-desktop">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button 
              onClick={toggleCollapse}
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center' }}
            >
              <Menu size={20} />
            </button>
            <div style={{ fontSize: 13, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>Admin</span>
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={i}>
                  <span style={{ fontSize: 10 }}>/</span>
                  <span style={{ color: i === breadcrumbs.length - 1 ? 'var(--primary-blue)' : 'inherit', fontWeight: i === breadcrumbs.length - 1 ? 600 : 400, textTransform: 'capitalize' }}>
                    {b.replace(/-/g, ' ')}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary-blue)' }}>Administrator</div>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>admin@tjs.co.id</div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#f1f5f9', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--primary-blue)', fontSize: 13 }}>A</div>
             </div>
          </div>
        </header>

        <AdminMobileHeader />
        
        <div className="admin-content">
          {children}
        </div>
      </div>
    </main>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminLayoutContent>
        {children}
      </AdminLayoutContent>
    </SidebarProvider>
  )
}

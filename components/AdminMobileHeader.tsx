'use client'
import React from 'react'
import { Menu, X } from 'lucide-react'

import { useSidebar } from './AdminSidebarContext'

export default function AdminMobileHeader() {
  const { isMobileOpen, toggleMobile } = useSidebar()

  return (
    <div className="admin-mobile-header">
      <div style={{ fontWeight: 800, color: 'var(--primary-blue)', fontSize: 16 }}>Admin Panel</div>
      <button 
        onClick={toggleMobile}
        style={{ 
          background: 'none', 
          border: 'none', 
          color: 'var(--primary-blue)',
          cursor: 'pointer',
          padding: 4
        }}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

    </div>
  )
}

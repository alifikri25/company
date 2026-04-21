'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Layanan & Solusi', href: '/layanan' },
    { label: 'Media & TJSL', href: '/berita' },
    { label: 'Karir', href: '/karir' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image 
            src="/logo-panjang.png" 
            alt="Tangguh Jaya Semesta" 
            width={180} 
            height={40} 
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              style={{ 
                textDecoration: 'none',
                fontFamily: 'var(--font-display)', 
                fontSize: 13.5, 
                fontWeight: isActive(link.href) ? 700 : 500, 
                color: isActive(link.href) ? 'var(--primary-blue)' : '#2c3e50', 
                padding: '8px 12px', 
                borderRadius: 6, 
                position: 'relative',
                transition: 'var(--transition)'
              }}
            >
              {link.label}
              {isActive(link.href) && (
                <div style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 20, height: 2, background: 'var(--accent-red)', borderRadius: 2 }} />
              )}
            </Link>
          ))}
        </nav>

        <Link href="/kontak" className="btn btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}>
          Hubungi Kami
        </Link>
      </div>
    </header>
  )
}

export default Navbar

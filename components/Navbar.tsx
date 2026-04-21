'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = newState ? 'hidden' : 'auto'
    }
  }

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
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', zIndex: 110 }}>
          <Image 
            src="/logo-panjang.png" 
            alt="Tangguh Jaya Semesta" 
            width={scrolled ? 150 : 180} 
            height={scrolled ? 34 : 40} 
            priority
            style={{ objectFit: 'contain', transition: 'all 0.3s ease' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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

        <div className="btn-desktop">
          <Link href="/kontak" className="btn btn-primary" style={{ fontSize: 13, padding: '10px 20px' }}>
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="mobile-toggle"
          style={{ 
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            zIndex: 110
          }}
        >
          <div style={{ width: 24, height: 18, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span style={{ width: '100%', height: 2, background: 'var(--primary-blue)', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
            <span style={{ width: '100%', height: 2, background: 'var(--primary-blue)', transition: 'all 0.3s ease', opacity: isMenuOpen ? 0 : 1 }} />
            <span style={{ width: '100%', height: 2, background: 'var(--primary-blue)', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'white',
          zIndex: 105,
          padding: '100px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden'
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                textDecoration: 'none',
                fontFamily: 'var(--font-display)', 
                fontSize: 18, 
                fontWeight: 700, 
                color: isActive(link.href) ? 'var(--primary-blue)' : '#2c3e50',
                padding: '12px 0',
                borderBottom: '1px solid var(--neutral-100)'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/kontak" 
            className="btn btn-primary" 
            onClick={() => setIsMenuOpen(false)}
            style={{ marginTop: 20, padding: '16px' }}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

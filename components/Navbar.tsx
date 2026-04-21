'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  const [currentPath, setCurrentPath] = useState(pathname)
  if (pathname !== currentPath) {
    setCurrentPath(pathname)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link href="/" className="nav-brand">
          <Image 
            src="/logo-panjang.png" 
            alt="PT. Tangguh Jaya Semesta Logo" 
            width={160} 
            height={40} 
            className="h-9 w-auto object-contain"
          />
        </Link>
        
        <div className={`mobile-menu-wrapper ${isMenuOpen ? 'active' : ''}`}>
          <nav className="nav-main">
            <ul className="nav-links">
            <li>
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                Beranda
              </Link>
            </li>
            <li className="has-dropdown">
              <Link href="/tentang-kami" className={`nav-link ${pathname.startsWith('/tentang-kami') ? 'active' : ''}`}>
                Tentang Perusahaan <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/tentang-kami">Profil Perusahaan</Link></li>
                <li><Link href="/tentang-kami#visi">Visi & Misi</Link></li>
                <li><Link href="/tentang-kami#manajemen">Manajemen</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link href="/layanan" className={`nav-link ${pathname.startsWith('/layanan') ? 'active' : ''}`}>
                Layanan & Solusi <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/layanan#kendaraan">Penyewaan Kendaraan</Link></li>
                <li><Link href="/layanan#alat">Perangkat IT & Furniture</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link href="/berita" className={`nav-link ${pathname.startsWith('/berita') ? 'active' : ''}`}>
                Media & TJSL <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/berita">Berita Terbaru</Link></li>
                <li><Link href="/berita#tjsl">Program TJSL</Link></li>
              </ul>
            </li>
            <li><Link href="/karir" className={`nav-link ${pathname === '/karir' ? 'active' : ''}`}>Karir</Link></li>
            <li><Link href="/kontak" className={`nav-link ${pathname === '/kontak' ? 'active' : ''}`}>Hubungi Kami</Link></li>
          </ul>
        </nav>

        <div className="nav-utilities">
          <div className="search-wrapper">
            <input type="text" placeholder="Pencarian" className="search-input" />
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <div className="lang-switcher">
            <button className="lang-btn active">ID</button>
            <button className="lang-btn">EN</button>
          </div>
        </div>
        </div>
        
        <button 
          className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar

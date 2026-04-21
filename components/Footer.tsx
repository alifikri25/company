'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const cols = [
    { 
      title: "Lini Bisnis", 
      links: [
        { label: "Penyewaan Kendaraan", href: "/layanan#kendaraan" }, 
        { label: "Perangkat IT & Furniture", href: "/layanan#alat" }
      ] 
    },
    { 
      title: "Tentang Kami", 
      links: [
        { label: "Profil Perusahaan", href: "/tentang-kami" }, 
        { label: "Visi & Misi", href: "/tentang-kami#visi" }, 
        { label: "Manajemen", href: "/tentang-kami#manajemen" }
      ] 
    },
    { 
      title: "Tautan Cepat", 
      links: [
        { label: "Media & Informasi", href: "/berita" }, 
        { label: "Karir", href: "/karir" }, 
        { label: "Hubungi Kami", href: "/kontak" }
      ] 
    },
  ]

  return (
    <footer style={{ background: 'var(--neutral-900)', padding: '64px 24px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--primary-blue), var(--accent-red) 50%, var(--primary-blue))' }} />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: 20 }}>
              <Image 
                src="/logo-panjang.png" 
                alt="Tangguh Jaya Semesta" 
                width={200} 
                height={45} 
                className="brightness-0 invert"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Gedung Prima Headquarter Lt. 12<br />
              Jl. Jend. Sudirman Kav 19,<br />
              Jakarta Selatan 12920
            </p>
          </div>

          {cols.map((col, i) => (
            <div key={i}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 20 }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((l, j) => (
                  <li key={j}>
                    <Link 
                      href={l.href} 
                      style={{ 
                        textDecoration: 'none',
                        fontFamily: 'var(--font-body)', 
                        fontSize: 13.5, 
                        color: 'rgba(255,255,255,0.55)', 
                        transition: 'var(--transition)'
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }} className="stack-on-mobile text-center-mobile">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © {currentYear} PT. Tangguh Jaya Semesta. Authorized Enterprise Solution.
          </p>
          <div style={{ display: 'flex', gap: 20 }} className="hide-on-mobile">
            <Link href="/privacy" style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

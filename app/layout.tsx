import { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PT Prima Abadi - Penyediaan Alat & Transportasi Nasional',
  description: 'Enterprise solusi sewa transportasi dan peralatan IT di seluruh wilayah operasional Indonesia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="navbar">
          <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '20px'}}>
            <Link href="/" className="nav-brand" style={{flexShrink: 0}}>
              <span style={{color: 'var(--primary-blue)'}}>PT</span>
              <span style={{color: 'var(--accent-green)'}}> Prima Abadi</span>
            </Link>
            
            <nav className="nav-main">
              <ul className="nav-links">
                <li><Link href="/" className="nav-link active">Beranda</Link></li>
                <li className="has-dropdown">
                  <Link href="/tentang-kami" className="nav-link">
                    Tentang Perusahaan <span className="caret"></span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/tentang-kami">Profil Perusahaan</Link></li>
                    <li><Link href="/tentang-kami#visi">Visi & Misi</Link></li>
                    <li><Link href="/tentang-kami#manajemen">Manajemen</Link></li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="/layanan" className="nav-link">
                    Layanan & Solusi <span className="caret"></span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/layanan#kendaraan">Penyewaan Kendaraan</Link></li>
                    <li><Link href="/layanan#alat">Perangkat IT & Furniture</Link></li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="/berita" className="nav-link">
                    Media & TJSL <span className="caret"></span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/berita">Berita Terbaru</Link></li>
                    <li><Link href="/berita#tjsl">Program TJSL</Link></li>
                  </ul>
                </li>
                <li><Link href="/karir" className="nav-link">Karir</Link></li>
                <li><Link href="/kontak" className="nav-link">Hubungi Kami</Link></li>
              </ul>
            </nav>

            <div className="nav-utilities" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div className="search-wrapper">
                <input type="text" placeholder="Pencarian" className="search-input" />
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <div className="lang-switcher">
                <button className="lang-btn active">ID</button>
                <button className="lang-btn">EN</button>
              </div>
            </div>
            
            <button className="mobile-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>
        {children}
        <footer className="mega-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-column">
                <div className="nav-brand" style={{fontSize: '24px', marginBottom: '20px', display: 'block'}}>
                  <span style={{color: 'white'}}>PT</span>
                  <span style={{color: 'var(--accent-green)'}}> Prima Abadi</span>
                </div>
                <p style={{fontSize: '14px', lineHeight:'1.8'}}>Gedung Prima Headquarter Lt. 12<br/>Jl. Jend. Sudirman Kav 19,<br/>Jakarta Selatan 12920</p>
                <br/>
                <p style={{fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    (021) 1500-751
                  </span>
                  <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    cs@prima-abadi.co.id
                  </span>
                </p>
              </div>
              <div className="footer-column">
                <h4>Lini Bisnis</h4>
                <ul>
                  <li><Link href="/layanan#kendaraan">Penyewaan Kendaraan</Link></li>
                  <li><Link href="/layanan#alat">Perangkat IT & Furniture</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Tentang Kami</h4>
                <ul>
                  <li><Link href="/tentang-kami">Profil Perusahaan</Link></li>
                  <li><Link href="/tentang-kami#visi">Visi, Misi & Tata Nilai</Link></li>
                  <li><Link href="/tentang-kami#manajemen">Jajaran Manajemen</Link></li>
                  <li><Link href="/tentang-kami#cgv">Corporate Governance</Link></li>
                  <li><Link href="/tentang-kami#annual">Annual Report</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Tautan Cepat</h4>
                <ul>
                  <li><Link href="/berita">Media & Informasi</Link></li>
                  <li><Link href="/karir">Karir / Lowongan Baru</Link></li>
                  <li><Link href="/pengadaan">e-Procurement (Pengadaan)</Link></li>
                  <li><Link href="/bantuan">Pusat Bantuan 24/7</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} PT Prima Abadi. Anak Perusahaan Fiktif (Demo).</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

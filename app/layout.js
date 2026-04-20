import './globals.css'
import Link from 'next/link'
export const metadata = {
  title: 'PT Prima Abadi - Penyediaan Alat & Transportasi Nasional',
  description: 'Enterprise solusi sewa transportasi dan peralatan IT di seluruh wilayah operasional Indonesia.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header className="navbar">
          <Link href="/" className="nav-brand">PT Prima Abadi</Link>
          <ul className="nav-links">
            <li><Link href="/tentang-kami" className="nav-link">Tentang Perusahaan</Link></li>
            <li><Link href="/layanan" className="nav-link">Layanan & Solusi</Link></li>
            <li><Link href="/berita" className="nav-link">Media & TJSL</Link></li>
            <li><Link href="/karir" className="nav-link">Karir</Link></li>
            <li><a href="https://wa.me/628123456789" className="nav-link btn btn-primary" style={{padding: '8px 15px', color:'#020C1B'}}>Hubungi Kami</a></li>
          </ul>
        </header>
        {children}
        <footer className="mega-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-column">
                <div className="nav-brand" style={{fontSize: '24px', marginBottom: '20px', display: 'block'}}>PT Prima Abadi</div>
                <p style={{fontSize: '14px', lineHeight:'1.8'}}>Gedung Prima Headquarter Lt. 12<br/>Jl. Jend. Sudirman Kav 19,<br/>Jakarta Selatan 12920</p>
                <br/>
                <p style={{fontSize: '14px'}}><span style={{color:'var(--accent-color)'}}>T.</span> (021) 1500-751<br/><span style={{color:'var(--accent-color)'}}>E.</span> cs@prima-abadi.co.id</p>
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
                <h4>Lini Bisnis</h4>
                <ul>
                  <li><Link href="/layanan#kendaraan">Penyewaan Kendaraan</Link></li>
                  <li><Link href="/layanan#alat">Perangkat IT & Furniture</Link></li>
                  <li><Link href="/layanan#driver">Jasa Pengemudi Profesi</Link></li>
                  <li><Link href="/layanan#maintenance">Penjualan Bekas (Used Car)</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Tautan Cepat</h4>
                <ul>
                  <li><Link href="/berita">Media & Informasi</Link></li>
                  <li><Link href="/karir">Karir / Lowongan Baru</Link></li>
                  <li><Link href="/pengadaan">e-Procurement (Pengadaan)</Link></li>
                  <li><Link href="/privacy">Kebijakan Privasi</Link></li>
                  <li><Link href="/bantuan">Pusat Bantuan 24/7</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} PT Prima Abadi. Anak Perusahaan Fiktif Terdaftar (Hanya Untuk Demo Eksekutif).</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

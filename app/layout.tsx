import { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'PT Prima Abadi - Penyediaan Alat & Transportasi Nasional',
  description: 'Enterprise solusi sewa transportasi dan peralatan IT di seluruh wilayah operasional Indonesia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <footer className="mega-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-column">
                <div className="nav-brand mb-6 block text-[24px]">
                  <span className="text-white">PT</span>
                  <span className="text-[--accent-green]"> Prima Abadi</span>
                </div>
                <p className="text-[14px] leading-relaxed">Gedung Prima Headquarter Lt. 12<br/>Jl. Jend. Sudirman Kav 19,<br/>Jakarta Selatan 12920</p>
                <div className="mt-6 flex flex-col gap-2 text-[14px]">
                  <span className="flex items-center gap-2 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    (021) 1500-751
                  </span>
                  <span className="flex items-center gap-2 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    cs@prima-abadi.co.id
                  </span>
                </div>
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
                  <li><Link href="/tentang-kami#visi">Visi & Misi</Link></li>
                  <li><Link href="/tentang-kami#manajemen">Manajemen</Link></li>
                  <li><Link href="/tentang-kami#cgv">Corporate Governance</Link></li>
                  <li><Link href="/tentang-kami#annual">Annual Report</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Tautan Cepat</h4>
                <ul>
                  <li><Link href="/berita">Media & Informasi</Link></li>
                  <li><Link href="/karir">Karir</Link></li>
                  <li><Link href="/pengadaan">e-Procurement</Link></li>
                  <li><Link href="/bantuan">Pusat Bantuan</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} PT Prima Abadi. Authorized Enterprise Solution.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

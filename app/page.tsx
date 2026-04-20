import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <main>
            <section className="hero">
        <Image 
          className="hero-bg-img" 
          src="/hero-banner-demo.png" 
          alt="Corporate" 
          fill 
          priority 
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="container hero-content animate-fade-up">
          <span className="hero-subtitle">BUMN & SWASTA PARTNER</span>
          <h1 className="[text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">Mendukung Mobilitas.<br />Memberdayakan Kinerja.</h1>
          <p className="max-w-[600px]">Hadir di seluruh titik industrial strategis, PT Prima Abadi memberikan kepastian logistik kendaraan komersil dan sarana prasarana IT tanpa kompromi kualitas dan keamanan bagi perusahaan Anda.</p>
          <div className="flex gap-8 mt-10 flex-wrap">
            <Link href="/layanan" className="btn btn-accent">Solusi Kami</Link>
            <Link href="/tentang-kami" className="btn btn-ghost-white">Profil Manajemen</Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path></svg>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <p className="partners-label">DIPERCAYA OLEH PERUSAHAAN TERKEMUKA INDONESIA</p>
        </div>
        <div className="partners-marquee-container">
          <div className="partners-track">
            {/* Original Set */}
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" alt="Pertamina" width={180} height={60} /></div>
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/commons/1/11/Logo_BUMN_Untuk_Indonesia_2020.svg" alt="BUMN" width={180} height={60} /></div>
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Patra_Jasa_Logo.svg" alt="Patra Jasa" width={180} height={60} /></div>
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/id/c/c4/Telkom_Indonesia_2013.svg" alt="Telkom Indonesia" width={180} height={60} /></div>
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/id/a/a6/Logo_MIND_ID.svg" alt="MIND ID" width={180} height={60} /></div>
            {/* Duplicated Set for Infinite Loop */}
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" alt="Pertamina" width={180} height={60} /></div>
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/commons/1/11/Logo_BUMN_Untuk_Indonesia_2020.svg" alt="BUMN" width={180} height={60} /></div>
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Patra_Jasa_Logo.svg" alt="Patra Jasa" width={180} height={60} /></div>
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/id/c/c4/Telkom_Indonesia_2013.svg" alt="Telkom Indonesia" width={180} height={60} /></div>
            <div className="partner-logo-item bg-[--bg-alt]"><Image src="https://upload.wikimedia.org/wikipedia/id/a/a6/Logo_MIND_ID.svg" alt="MIND ID" width={180} height={60} /></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header centered animate-fade-up">
          <span className="section-eyebrow">Line of Business</span>
          <h2 className="section-title">Lini Bisnis Utama</h2>
          <p>Fokus dedikasi kami ada pada kehandalan peralatan yang kami sediakan bersama jaminan <i>zero-downtime maintenance</i>.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <Image src="/rental-vehicle-demo.png" alt="Sewa Kendaraan" width={600} height={220} className="service-img" />
            <div className="service-card-body">
              <span className="service-card-tag">Armada Korporat</span>
              <h3>Penyewaan Kendaraan</h3>
              <p>Jaringan fleet terbesar mencakup kendaraan ringan operasional, SUV direksi, hingga bus transportasi staff lapangan.</p>
              <Link href="/layanan#kendaraan" className="service-card-link">Pelajari Detail &rarr;</Link>
            </div>
          </div>
          <div className="service-card">
            <Image src="/office-equipment-demo.png" alt="Sewa Perangkat" width={600} height={220} className="service-img" />
            <div className="service-card-body">
              <span className="service-card-tag">Solusi Infrastruktur</span>
              <h3>Sewa Perangkat IT & Kantor</h3>
              <p>Memenuhi pengadaan massif PC Desktop, Server, Laptop Pro, dan furniture kantor ergonomis siap hantar antar provinsi.</p>
              <Link href="/layanan#alat" className="service-card-link">Pelajari Detail &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
            <div className="section-header mb-0">
              <span className="section-eyebrow">Press & CSR</span>
              <h2 className="section-title">Berita Paripurna & TJSL</h2>
              <p>Agenda dan aksi kepedulian lingkungan terbaru PT Prima Abadi.</p>
            </div>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-img relative">
                <Image src="/berita/news-ev-fleet.png" alt="EV Fleet" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="news-img-overlay">
                  <span className="news-overlay-text">Peremajaan 500 Unit Fleet Ev (Listrik)</span>
                </div>
              </div>
              <div className="news-content">
                <span className="news-date">24 April 2026</span>
                <h4>Peremajaan 500 Unit Fleet Ev (Listrik)</h4>
                <p className="text-[14px]">Mendukung emisi nol, Prima Abadi meresmikan masuknya armada listrik.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img relative">
                <Image src="/berita/news-education-csr.png" alt="Pendidikan" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="news-img-overlay">
                  <span className="news-overlay-text">Program TJSL: Bantuan Pendidikan</span>
                </div>
              </div>
              <div className="news-content">
                <span className="news-date">10 April 2026</span>
                <h4>Program TJSL: Bantuan Pendidikan</h4>
                <p className="text-[14px]">Penyerahan 1500 unit perangkat komputasi di perbatasan negara.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img relative">
                <Image src="/berita/news-audit-report.png" alt="Audit" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="news-img-overlay">
                  <span className="news-overlay-text">Audit Eksternal Tata Kelola 2025 WTP</span>
                </div>
              </div>
              <div className="news-content">
                <span className="news-date">02 Maret 2026</span>
                <h4>Audit Eksternal Tata Kelola 2025 WTP</h4>
                <p className="text-[14px]">Pencapaian dan transparansi standar pelaporan internasional terkini.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link href="/berita" className="btn btn-primary text-[14px]">Lihat Semua Berita</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

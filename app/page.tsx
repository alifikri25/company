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
          style={{ objectFit: 'cover' }}
        />
        <div className="container hero-content animate-fade-up">
          <span className="hero-subtitle" style={{color: 'var(--accent-green)', fontWeight: '600'}}>BUMN & SWASTA PARTNER</span>
          <h1 style={{textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>Mendukung Mobilitas.<br />Memberdayakan Kinerja.</h1>
          <p style={{maxWidth: '600px'}}>Hadir di seluruh titik industrial strategis, PT Prima Abadi memberikan kepastian logistik kendaraan komersil dan sarana prasarana IT tanpa kompromi kualitas dan keamanan bagi perusahaan Anda.</p>
          <div style={{display: 'flex', gap: '15px', marginTop: '30px', flexWrap: 'wrap'}}>
            <Link href="/layanan" className="btn btn-accent" style={{border: 'none', color: 'white'}}>Solusi Kami</Link>
            <Link href="/tentang-kami" className="btn" style={{borderColor: 'white', color: 'white'}}>Profil Manajemen</Link>
          </div>
        </div>
      </section>

      <section className="partners-section" style={{backgroundColor: 'white', padding: '60px 0'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <p style={{fontFamily: 'monospace', color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '14px', letterSpacing: '1px'}}>DIPERCAYA OLEH PERUSAHAAN TERKEMUKA INDONESIA</p>
        </div>
        <div className="partners-marquee-container">
          <div className="partners-track">
            {/* Original Set */}
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" alt="Pertamina" width={180} height={60} /></div>
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/commons/1/11/Logo_BUMN_Untuk_Indonesia_2020.svg" alt="BUMN" width={180} height={60} /></div>
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Patra_Jasa_Logo.svg" alt="Patra Jasa" width={180} height={60} /></div>
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/id/c/c4/Telkom_Indonesia_2013.svg" alt="Telkom Indonesia" width={180} height={60} /></div>
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/id/a/a6/Logo_MIND_ID.svg" alt="MIND ID" width={180} height={60} /></div>
            {/* Duplicated Set for Infinite Loop */}
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" alt="Pertamina" width={180} height={60} /></div>
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/commons/1/11/Logo_BUMN_Untuk_Indonesia_2020.svg" alt="BUMN" width={180} height={60} /></div>
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Patra_Jasa_Logo.svg" alt="Patra Jasa" width={180} height={60} /></div>
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/id/c/c4/Telkom_Indonesia_2013.svg" alt="Telkom Indonesia" width={180} height={60} /></div>
            <div className="partner-logo-item"><Image src="https://upload.wikimedia.org/wikipedia/id/a/a6/Logo_MIND_ID.svg" alt="MIND ID" width={180} height={60} /></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px'}}>
          <h2 className="animate-fade-up">Lini Bisnis Utama</h2>
          <p className="animate-fade-up">Fokus dedikasi kami ada pada kehandalan peralatan yang kami sediakan bersama jaminan <i>zero-downtime maintenance</i>.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <Image src="/rental-vehicle-demo.png" alt="Sewa Kendaraan" width={400} height={250} className="service-img" style={{ height: 'auto' }} />
            <h3>Penyewaan Kendaraan</h3>
            <p>Jaringan fleet terbesar mencakup kendaraan ringan operasional, SUV direksi, hingga bus transportasi staff lapangan.</p>
            <Link href="/layanan#kendaraan" style={{color: 'var(--primary-blue)', fontWeight: '600', textDecoration:'none', marginTop:'15px', display:'block'}}>Pelajari Detail &rarr;</Link>
          </div>
          <div className="service-card">
            <Image src="/office-equipment-demo.png" alt="Sewa Perangkat" width={400} height={250} className="service-img" style={{ height: 'auto' }} />
            <h3>Sewa Perangkat IT & Kantor</h3>
            <p>Memenuhi pengadaan massif PC Desktop, Server, Laptop Pro, dan furniture kantor ergonomis siap hantar antar provinsi.</p>
            <Link href="/layanan#alat" style={{color: 'var(--primary-blue)', fontWeight: '600', textDecoration:'none', marginTop:'15px', display:'block'}}>Pelajari Detail &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: 'var(--bg-alt)'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap:'wrap'}}>
            <div>
              <h2>Berita Paripurna & TJSL</h2>
              <p>Agenda dan aksi kepedulian lingkungan terbaru PT Prima Abadi.</p>
            </div>
            <Link href="/berita" className="btn" style={{fontSize:'14px'}}>Lihat Semua Berita</Link>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #0054A6, #8DC63F)'}}></div>
              <div className="news-content">
                <span className="news-date">24 April 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '12px'}}>Peremajaan 500 Unit Fleet Ev (Listrik)</h4>
                <p style={{fontSize: '14px'}}>Mendukung emisi nol, Prima Abadi meresmikan masuknya armada listrik.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #003366, #0054A6)'}}></div>
              <div className="news-content">
                <span className="news-date">10 April 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '12px'}}>Program TJSL: Bantuan Pendidikan</h4>
                <p style={{fontSize: '14px'}}>Penyerahan 1500 unit perangkat komputasi di perbatasan negara.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #66A3E0, #8DC63F)'}}></div>
              <div className="news-content">
                <span className="news-date">02 Maret 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '12px'}}>Audit Eksternal Tata Kelola 2025 WTP</h4>
                <p style={{fontSize: '14px'}}>Pencapaian dan transparansi standar pelaporan internasional terkini.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

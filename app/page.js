import Link from 'next/link'
export default function Home() {
  return (
    <main>
            <section className="hero">
        <img className="hero-bg-img" src="/hero-banner-demo.png" alt="Fleet Management" />
        <div className="container hero-content animate-fade-up">
          <span className="hero-subtitle">BUMN & SWASTA PARTNER</span>
          <h1>Mendukung Mobilitas.<br />Memberdayakan Kinerja.</h1>
          <p>Hadir di seluruh titik industrial strategis, PT Prima Abadi memberikan kepastian logistik kendaraan komersil dan sarana prasarana IT tanpa kompromi kualitas dan keamanan bagi perusahaan Anda.</p>
          <div style={{display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap'}}>
            <Link href="/layanan" className="btn btn-primary">Solusi Kami</Link>
            <Link href="/tentang-kami" className="btn">Profil Manajemen</Link>
          </div>
        </div>
      </section>
            <section className="partners-section">
        <div className="container">
          <p style={{fontFamily: 'monospace', color: 'var(--text-secondary)'}}>DIPERCAYA OLEH PERUSAHAAN TERKEMUKA INDONESIA</p>
          <div className="partners-grid animate-fade-up">
            <div className="partner-logo">PERTAMINA GROUP</div>
            <div className="partner-logo">BUMN KARYA</div>
            <div className="partner-logo">PATRA JASA</div>
            <div className="partner-logo">TELKOM INDONESIA</div>
            <div className="partner-logo">MIND ID</div>
          </div>
        </div>
      </section>
            <section className="section container">
        <div style={{maxWidth: '800px', marginBottom: '50px'}}>
          <h2 className="animate-fade-up">Lini Bisnis Utama</h2>
          <p className="animate-fade-up">Fokus dedikasi kami ada pada kehandalan peralatan yang kami sediakan bersama jaminan <i>zero-downtime maintenance</i>.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <img src="/rental-vehicle-demo.png" alt="Sewa Kendaraan" className="service-img" />
            <h3>Penyewaan Kendaraan</h3>
            <p>Jaringan fleet terbesar mencakup kendaraan ringan operasional, SUV direksi, hingga bus transportasi staff lapangan.</p>
            <Link href="/layanan" style={{color: 'var(--accent-color)', textDecoration:'none', marginTop:'10px', display:'block'}}>Pelajari Detail &rarr;</Link>
          </div>
          <div className="service-card">
            <img src="/office-equipment-demo.png" alt="Sewa Perangkat" className="service-img" />
            <h3>Sewa Perangkat IT & Kantor</h3>
            <p>Memenuhi pengadaan massif PC Desktop, Server, Laptop Pro, dan furniture kantor ergonomis siap hantar antar provinsi.</p>
            <Link href="/layanan" style={{color: 'var(--accent-color)', textDecoration:'none', marginTop:'10px', display:'block'}}>Pelajari Detail &rarr;</Link>
          </div>
          <div className="service-card" style={{background: 'var(--secondary-color)'}}>
            <h3>Layanan Pengemudi & Teknisi</h3>
            <p>Tidak hanya perangkat, kami memasok Sumber Daya Manusia tersertifikasi pelatihan khusus untuk operasional.</p>
            <Link href="/layanan" style={{color: 'var(--accent-color)', textDecoration:'none', marginTop:'10px', display:'block'}}>Pelajari Detail &rarr;</Link>
          </div>
        </div>
      </section>
            <section className="section" style={{backgroundColor: 'var(--secondary-color)'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap:'wrap'}}>
            <div>
              <h2>Berita Paripurna & TJSL</h2>
              <p>Agenda dan aksi kepedulian lingkungan terbaru PT Prima Abadi.</p>
            </div>
            <Link href="/berita" className="btn" style={{padding: '10px 20px', fontSize:'14px', marginTop:'20px'}}>Lihat Semua</Link>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #1d2d50, #00C6FF)'}}></div>
              <div className="news-content">
                <span className="news-date">24 April 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Peremajaan 500 Unit Fleet Ev (Listrik) </h4>
                <p style={{fontSize: '14px'}}>Mendukung emisi nol, Prima Abadi meresmikan masuknya armada listrik.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #0d324d, #7f5a83)'}}></div>
              <div className="news-content">
                <span className="news-date">10 April 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Program TJSL: Bantuan Pendidikan</h4>
                <p style={{fontSize: '14px'}}>Penyerahan 1500 unit perangkat komputasi di perbatasan negara.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #112240, #64FFDA)'}}></div>
              <div className="news-content">
                <span className="news-date">02 Maret 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Audit Eksternal Tata Kelola 2025 WTP</h4>
                <p style={{fontSize: '14px'}}>Pencapaian dan transparansi standar pelaporan internasional terkini.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

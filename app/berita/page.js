export const metadata = {
  title: 'Berita & TJSL | PT Prima Abadi',
}
export default function Berita() {
  return (
    <main>
      <section className="hero-sub" style={{background: 'linear-gradient(to right, #020C1B, #1d2d50)'}}>
        <div className="container animate-fade-up">
          <span className="hero-subtitle">MEDIA & PUBLIKASI</span>
          <h1>Berita & Tanggung Jawab Sosial</h1>
          <p style={{maxWidth:'600px'}}>Portal transparansi aktivitas internal, kepedulian lingkungan (TJSL), dan press release kelembagaan PT Prima Abadi.</p>
        </div>
      </section>
      <section className="section container">
        <div className="news-grid">
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #1d2d50, #00C6FF)'}}></div>
              <div className="news-content">
                <span className="news-date">24 April 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Peremajaan 500 Unit Fleet Ev (Kendaraan Listrik) </h4>
                <p style={{fontSize: '14px'}}>Mendukung emisi nol, Prima Abadi meresmikan masuknya kloter pertama armada mobil listrik.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #0d324d, #7f5a83)'}}></div>
              <div className="news-content">
                <span className="news-date">10 April 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Program TJSL: Bantuan Sektor Pendidikan Tapal Batas</h4>
                <p style={{fontSize: '14px'}}>Penyerahan 1500 unit perangkat komputasi layak pakai untuk 20 titik di perbatasan.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #112240, #64FFDA)'}}></div>
              <div className="news-content">
                <span className="news-date">02 Maret 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Tata Kelola Perusahaan: Audit Eksternal 2025 WTP</h4>
                <p style={{fontSize: '14px'}}>Berita keuangan dengan pencapaian dan transparansi standar internasional terkini.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #020C1B, #112240)'}}></div>
              <div className="news-content">
                <span className="news-date">14 Februari 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '10px'}}>Gelar Pasukan Keselamatan Berkendara</h4>
                <p style={{fontSize: '14px'}}>Sertifikasi tahunan 2.000 pengemudi komersial Prima Abadi bekerja sama dengan Korlantas Polri.</p>
              </div>
            </div>
          </div>
      </section>
    </main>
  )
}

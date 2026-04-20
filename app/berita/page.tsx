import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Berita & TJSL | PT Prima Abadi',
}
export default function Berita() {
  return (
    <main>
      <section className="hero-sub" style={{background: 'linear-gradient(to right, var(--primary-blue), #003366)', color: 'white'}}>
        <div className="container animate-fade-up">
          <span className="hero-subtitle" style={{color: 'var(--accent-green)'}}>MEDIA & PUBLIKASI</span>
          <h1 style={{color: 'white'}}>Berita & Tanggung Jawab Sosial</h1>
          <p style={{maxWidth:'600px', color: 'rgba(255, 255, 255, 0.9)'}}>Portal transparansi aktivitas internal, kepedulian lingkungan (TJSL), dan press release kelembagaan PT Prima Abadi.</p>
        </div>
      </section>
      <section className="section container">
        <div className="news-grid">
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #0054A6, #8DC63F)'}}></div>
              <div className="news-content">
                <span className="news-date">24 April 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '12px'}}>Peremajaan 500 Unit Fleet Ev (Kendaraan Listrik) </h4>
                <p style={{fontSize: '14px'}}>Mendukung emisi nol, Prima Abadi meresmikan masuknya kloter pertama armada mobil listrik.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #003366, #0054A6)'}}></div>
              <div className="news-content">
                <span className="news-date">10 April 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '12px'}}>Program TJSL: Bantuan Sektor Pendidikan Tapal Batas</h4>
                <p style={{fontSize: '14px'}}>Penyerahan 1500 unit perangkat komputasi layak pakai untuk 20 titik di perbatasan.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #66A3E0, #8DC63F)'}}></div>
              <div className="news-content">
                <span className="news-date">02 Maret 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '12px'}}>Tata Kelola Perusahaan: Audit Eksternal 2025 WTP</h4>
                <p style={{fontSize: '14px'}}>Berita keuangan dengan pencapaian dan transparansi standar internasional terkini.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'linear-gradient(45deg, #001f3f, #003366)'}}></div>
              <div className="news-content">
                <span className="news-date">14 Februari 2026</span>
                <h4 style={{fontSize: '18px', marginBottom: '12px'}}>Gelar Pasukan Keselamatan Berkendara</h4>
                <p style={{fontSize: '14px'}}>Sertifikasi tahunan 2.000 pengemudi komersial Prima Abadi bekerja sama dengan Korlantas Polri.</p>
              </div>
            </div>
          </div>
      </section>
    </main>
  )
}

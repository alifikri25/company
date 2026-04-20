import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Berita & TJSL | PT Prima Abadi',
}
export default function Berita() {
  return (
    <main>
      <section className="hero-sub">
        <div className="container animate-fade-up">
          <span className="hero-subtitle">MEDIA & PUBLIKASI</span>
          <h1>Berita & Tanggung Jawab Sosial</h1>
          <p className="max-w-[600px]">Portal transparansi aktivitas internal, kepedulian lingkungan (TJSL), dan press release kelembagaan PT Prima Abadi.</p>
        </div>
      </section>
      <section className="section container">
        <div className="news-grid">
          <div className="news-card">
            <div className="news-img relative">
              <Image src="/berita/news-ev-fleet.png" alt="EV Fleet" fill className="object-cover" />
            </div>
            <div className="news-content">
              <span className="news-date">24 April 2026</span>
              <h4>Peremajaan 500 Unit Fleet Ev (Kendaraan Listrik)</h4>
              <p className="text-[14px]">Mendukung emisi nol, Prima Abadi meresmikan masuknya kloter pertama armada mobil listrik.</p>
            </div>
          </div>
          <div className="news-card">
            <div className="news-img relative">
              <Image src="/berita/news-education-csr.png" alt="Pendidikan" fill className="object-cover" />
            </div>
            <div className="news-content">
              <span className="news-date">10 April 2026</span>
              <h4>Program TJSL: Bantuan Sektor Pendidikan Tapal Batas</h4>
              <p className="text-[14px]">Penyerahan 1500 unit perangkat komputasi layak pakai untuk 20 titik di perbatasan.</p>
            </div>
          </div>
          <div className="news-card">
            <div className="news-img relative">
              <Image src="/berita/news-audit-report.png" alt="Audit" fill className="object-cover" />
            </div>
            <div className="news-content">
              <span className="news-date">02 Maret 2026</span>
              <h4>Tata Kelola Perusahaan: Audit Eksternal 2025 WTP</h4>
              <p className="text-[14px]">Berita keuangan dengan pencapaian dan transparansi standar internasional terkini.</p>
            </div>
          </div>
          <div className="news-card">
            <div className="news-img relative">
              <Image src="/berita/news-safety-training.png" alt="Safety" fill className="object-cover" />
            </div>
            <div className="news-content">
              <span className="news-date">14 Februari 2026</span>
              <h4>Gelar Pasukan Keselamatan Berkendara</h4>
              <p className="text-[14px]">Sertifikasi tahunan 2.000 pengemudi komersial Prima Abadi bekerja sama dengan Korlantas Polri.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

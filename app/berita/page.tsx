import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Berita & TJSL | PT. Tangguh Jaya Semesta',
}

export default function Berita() {
  return (
    <main>
      <section className="hero-sub bg-gradient-to-r from-[--primary-blue] to-[#0d1a52] text-white">
        <div className="container animate-fade-up">
          <span className="hero-subtitle text-white border-white">MEDIA & PUBLIKASI</span>
          <h1 className="text-white">Berita & Tanggung Jawab Sosial</h1>
          <p className="max-w-[600px] text-white font-medium">Portal transparansi aktivitas internal, kepedulian lingkungan (TJSL), dan press release kelembagaan PT. Tangguh Jaya Semesta.</p>
        </div>
      </section>

      <section className="section container">
        <div className="news-grid">
          <div className="news-card">
            <div className="news-img relative">
              <Image src="/berita/news-ev-fleet.png" alt="EV Fleet" fill className="object-cover" />
              <div className="news-img-overlay">
                <span className="news-overlay-text">Baca Selengkapnya</span>
              </div>
            </div>
            <div className="news-content">
              <span className="news-date">24 April 2026</span>
              <h4 className="text-[--text-primary]">Peremajaan 500 Unit Fleet Ev (Kendaraan Listrik)</h4>
              <p className="text-[14px] text-[--text-primary] font-medium leading-relaxed">Mendukung emisi nol, Tangguh Jaya Semesta meresmikan masuknya kloter pertama armada mobil listrik.</p>
            </div>
          </div>

          <div className="news-card">
            <div className="news-img relative">
              <Image src="/berita/news-education-csr.png" alt="Pendidikan" fill className="object-cover" />
              <div className="news-img-overlay">
                <span className="news-overlay-text">Baca Selengkapnya</span>
              </div>
            </div>
            <div className="news-content">
              <span className="news-date">10 April 2026</span>
              <h4 className="text-[--text-primary]">Program TJSL: Bantuan Sektor Pendidikan Tapal Batas</h4>
              <p className="text-[14px] text-[--text-primary] font-medium leading-relaxed">Penyerahan 1500 unit perangkat komputasi layak pakai untuk 20 titik di perbatasan.</p>
            </div>
          </div>

          <div className="news-card">
            <div className="news-img relative">
              <Image src="/berita/news-audit-report.png" alt="Audit" fill className="object-cover" />
              <div className="news-img-overlay">
                <span className="news-overlay-text">Baca Selengkapnya</span>
              </div>
            </div>
            <div className="news-content">
              <span className="news-date">02 Maret 2026</span>
              <h4 className="text-[--text-primary]">Tata Kelola Perusahaan: Audit Eksternal 2025 WTP</h4>
              <p className="text-[14px] text-[--text-primary] font-medium leading-relaxed">Berita keuangan dengan pencapaian dan transparansi standar internasional terkini.</p>
            </div>
          </div>

          <div className="news-card">
            <div className="news-img relative">
              <Image src="/berita/news-safety-training.png" alt="Safety" fill className="object-cover" />
              <div className="news-img-overlay">
                <span className="news-overlay-text">Baca Selengkapnya</span>
              </div>
            </div>
            <div className="news-content">
              <span className="news-date">14 Februari 2026</span>
              <h4 className="text-[--text-primary]">Gelar Pasukan Keselamatan Berkendara</h4>
              <p className="text-[14px] text-[--text-primary] font-medium leading-relaxed">Sertifikasi tahunan 2.000 pengemudi komersial Tangguh Jaya Semesta bekerja sama dengan Korlantas Polri.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


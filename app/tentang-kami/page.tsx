import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tentang Kami | PT Prima Abadi',
}
export default function TentangKami() {
  return (
    <main>
      <section className="hero-sub bg-gradient-to-r from-[--primary-blue] to-[#003366] text-white">
        <div className="container animate-fade-up">
          <span className="hero-subtitle text-[--accent-green]">PROFIL PERUSAHAAN</span>
          <h1 className="text-white">Tentang Kami</h1>
          <p className="max-w-[600px] text-white/90">Mengenal lebih dekat dedikasi dan sejarah perjalanan PT Prima Abadi dalam menyediakan pelayanan unggul untuk perusahaan Anda.</p>
        </div>
      </section>
      <section className="section container" id="sejarah">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="animate-fade-up">Jejak Langkah Prima Abadi</h2>
          <p className="animate-fade-up">Didirikan dengan semangat sinergi dan efisiensi logistik berkelanjutan, PT Prima Abadi mengelola lebih dari 5.000+ armada hidup tersebar di seluruh proyek industrial nusantara. Pengalaman lebih dari satu dekade menjadi bukti nyala tekad kami.</p>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>50+</h3>
              <p>Cabang Operasional</p>
            </div>
            <div className="stat-box">
              <h3>5,000+</h3>
              <p>Unit Armada</p>
            </div>
            <div className="stat-box">
              <h3>100k+</h3>
              <p>Unit Tersalurkan</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-[--bg-alt]" id="visi">
        <div className="container">
          <div className="flex flex-wrap gap-[40px]">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-[--primary-blue]">Visi</h2>
              <p>Menjadi mitra strategis berskala Asia Tenggara dalam penyediaan fasilitas alat operasi dan armada transportasi terintegrasi dengan mengedepankan inovasi, standar keselamatan premium, serta keberlanjutan bisnis par-excellence.</p>
            </div>
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-[--primary-blue]">Misi</h2>
              <ul className="list-inside text-[--text-secondary]">
                <li className="mb-[10px]">Optimalisasi kepuasan pelanggan lewat Zero-Downtime Guarantee.</li>
                <li className="mb-[10px]">Pemanfaatan SDM tersertifikasi ISO Internasional.</li>
                <li className="mb-[10px]">Integrasi teknologi hijau dan transformasi digital.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section container" id="manajemen">
        <div className="max-w-[800px]">
          <h2>Jajaran Eksekutif & Manajemen</h2>
          <p>Dipimpin oleh talenta-talenta terbaik bangsa, mencitrakan ketangguhan tata kelola (Good Corporate Governance) dan profesionalitas tingkat tinggi.</p>
          <div className="mt-[40px] p-[30px] border border-[--border-color] rounded-[12px] bg-[--bg-alt]">
            <h4 className="text-[20px] text-[--primary-blue] mb-[5px]">Bpk. Nama Direktur (Placeholder)</h4>
            <span className="text-[--accent-green] text-[14px] font-bold uppercase tracking-wider">Direktur Utama</span>
            <p className="mt-[15px] text-[--text-primary]"><i>&quot;Dedikasi tanpa batas untuk memastikan operasional tanpa henti bagi seluruh klien kami dari Sabang sampai Merauke.&quot;</i></p>
          </div>
        </div>
      </section>
    </main>
  )
}

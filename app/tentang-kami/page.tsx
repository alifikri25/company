import { Metadata } from 'next'
import Link from 'next/link'
import Counter from '../../components/Counter'

export const metadata: Metadata = {
  title: 'Tentang Kami | PT. Tangguh Jaya Semesta',
}

export default function TentangKami() {
  return (
    <main>
      <section className="hero-sub bg-gradient-to-r from-[--primary-blue] to-[#0d1a52] text-white">
        <div className="container animate-fade-up">
          <span className="hero-subtitle text-white border-white">PROFIL PERUSAHAAN</span>
          <h1 className="text-white">Tentang Kami</h1>
          <p className="max-w-[600px] text-white font-medium">Mengenal lebih dekat dedikasi dan sejarah perjalanan PT. Tangguh Jaya Semesta dalam menyediakan pelayanan unggul untuk perusahaan Anda.</p>
        </div>
      </section>

      <section className="section container" id="sejarah">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="animate-fade-up text-[--primary-blue]">Jejak Langkah Tangguh Jaya Semesta</h2>
          <p className="animate-fade-up text-[--text-primary] text-lg">Didirikan dengan semangat sinergi dan efisiensi logistik berkelanjutan, PT. Tangguh Jaya Semesta mengelola lebih dari 5.000+ armada hidup tersebar di seluruh proyek industrial nusantara. Pengalaman lebih dari satu dekade menjadi bukti nyala tekad kami.</p>
          
          <div className="stats-grid">
            <div className="stat-box">
              <h3><Counter end={50} suffix="+" /></h3>
              <p className="text-[--text-primary] font-bold">Cabang Operasional</p>
            </div>
            <div className="stat-box">
              <h3><Counter end={5000} suffix="+" /></h3>
              <p className="text-[--text-primary] font-bold">Unit Armada</p>
            </div>
            <div className="stat-box">
              <h3><Counter end={100} suffix="k+" /></h3>
              <p className="text-[--text-primary] font-bold">Unit Tersalurkan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[--neutral-100]" id="visi">
        <div className="container max-w-[800px]">
          <div className="flex flex-col gap-[60px]">
            <div className="text-center">
              <h2 className="text-[--primary-blue] mb-6 inline-block border-b-4 border-[--accent-green] pb-2">Visi</h2>
              <p className="text-[--text-primary] text-xl leading-relaxed italic">
                &quot;Menjadi mitra strategis berskala Asia Tenggara dalam penyediaan fasilitas alat operasi dan armada transportasi terintegrasi dengan mengedepankan inovasi, standar keselamatan premium, serta keberlanjutan bisnis par-excellence.&quot;
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-[--neutral-200]">
              <h2 className="text-[--primary-blue] mb-8 text-center">Misi Kami</h2>
              <ul className="flex flex-col gap-6 text-[--text-primary]">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[--primary-blue] text-white flex-shrink-0 flex items-center justify-center font-bold">1</span>
                  <p className="text-lg font-medium pt-1">Optimalisasi kepuasan pelanggan lewat <span className="text-[--primary-blue] font-bold">Zero-Downtime Guarantee</span>.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[--primary-blue] text-white flex-shrink-0 flex items-center justify-center font-bold">2</span>
                  <p className="text-lg font-medium pt-1">Pemanfaatan SDM tersertifikasi <span className="text-[--primary-blue] font-bold">ISO Internasional</span>.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[--primary-blue] text-white flex-shrink-0 flex items-center justify-center font-bold">3</span>
                  <p className="text-lg font-medium pt-1">Integrasi <span className="text-[--primary-blue] font-bold">teknologi hijau</span> dan transformasi digital.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="manajemen">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[--primary-blue]">Jajaran Eksekutif & Manajemen</h2>
          <p className="text-[--text-primary] text-lg mb-10">Dipimpin oleh talenta-talenta terbaik bangsa, mencitrakan ketangguhan tata kelola (Good Corporate Governance) dan profesionalitas tingkat tinggi.</p>
          
          <div className="p-[40px] border-2 border-[--primary-blue]/10 rounded-[20px] bg-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[--primary-blue]"></div>
            <h4 className="text-[24px] text-[--primary-blue] mb-1">Bpk. Nama Direktur (Placeholder)</h4>
            <span className="text-[--accent-green] text-[14px] font-extrabold uppercase tracking-widest">Direktur Utama</span>
            <p className="mt-[25px] text-[--text-primary] text-lg leading-relaxed">
              <i>&quot;Dedikasi tanpa batas untuk memastikan operasional tanpa henti bagi seluruh klien kami dari Sabang sampai Merauke.&quot;</i>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}


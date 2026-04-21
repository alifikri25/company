import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karir (e-Recruitment) | PT. Tangguh Jaya Semesta',
}

export default function Karir() {
  return (
    <main className="bg-[--neutral-50]">
      <section className="hero-sub bg-gradient-to-r from-[--primary-blue] to-[#0d1a52] text-white">
        <div className="container animate-fade-up">
          <span className="hero-subtitle text-white border-white">MENGUNDANG TALENTA BANGSA</span>
          <h1 className="text-white">Portal Karir Eksekutif</h1>
          <p className="max-w-[600px] text-white font-medium">Mari berkembang tak terbatas bersama raksasa penyedia jasa logistik utilitas dan fleet management nusantara.</p>
        </div>
      </section>

      <section className="section container">
        <div className="text-center py-20 px-6 bg-white border-2 border-dashed border-[--neutral-200] rounded-[32px] mb-20 shadow-sm">
          <div className="w-20 h-20 bg-[--neutral-100] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <h2 className="text-[--primary-blue] mb-4">Belum Ada Lowongan Aktif</h2>
          <p className="max-w-[500px] mx-auto mb-10 text-[--text-primary] text-lg font-medium opacity-80">Saat ini PT. Tangguh Jaya Semesta belum membuka rekrutmen baru. Silakan pantau portal ini secara berkala untuk pengumuman resmi posisi strategis mendatang.</p>
          <button className="btn btn-accent px-12 h-14 shadow-lg shadow-red-600/20">Daftarkan CV Kamu &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-10 bg-white border border-[--neutral-200] rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-[20px] text-[--primary-blue] mb-4 font-bold">Kultur Inovatif</h4>
            <p className="text-[--text-primary] font-medium leading-relaxed">Kami mendorong setiap individu untuk berkontribusi dalam transformasi digital industri logistik dan fleet management.</p>
          </div>
          <div className="p-10 bg-white border border-[--neutral-200] rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-[20px] text-[--primary-blue] mb-4 font-bold">Jenjang Karir</h4>
            <p className="text-[--text-primary] font-medium leading-relaxed">Program pengembangan kompetensi berkelanjutan untuk mencetak pemimpin masa depan di industri utilitas nasional.</p>
          </div>
          <div className="p-10 bg-white border border-[--neutral-200] rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-[20px] text-[--primary-blue] mb-4 font-bold">Kesejahteraan</h4>
            <p className="text-[--text-primary] font-medium leading-relaxed">Paket kompensasi kompetitif dengan perlindungan kesehatan menyeluruh bagi keluarga karyawan kami.</p>
          </div>
        </div>
      </section>
    </main>
  )
}


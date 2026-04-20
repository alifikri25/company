import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karir (e-Recruitment) | PT Prima Abadi',
}
export default function Karir() {
  return (
    <main>
      <section className="hero-sub bg-gradient-to-r from-[--primary-blue] to-[#003366] text-white">
        <div className="container animate-fade-up">
          <span className="hero-subtitle text-[--accent-green]">MENGUNDANG TALENTA BANGSA</span>
          <h1 className="text-white">Portal Karir Eksekutif</h1>
          <p className="max-w-[600px] text-white/90">Mari berkembang tak terbatas bersama raksasa penyedia jasa logistik utilitas dan fleet management nusantara.</p>
        </div>
      </section>
      <section className="section container">
        <div className="text-center py-[80px] bg-[--bg-alt] rounded-[20px] mb-[80px]">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-[20px] mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <h2 className="text-[--text-secondary]">Belum Ada Lowongan Baru</h2>
          <p className="max-w-[500px] mx-auto mb-[30px]">Saat ini PT Prima Abadi belum membuka lowongan baru. Segala bentuk rekrutmen akan diumumkan resmi melalui portal e-Recruitment ini.</p>
          <button className="btn btn-accent border-none text-white px-[40px]">Daftarkan CV Kamu &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-[40px]">
          <div className="p-[30px] border border-[--border-color] rounded-[12px]">
            <h4 className="text-[20px] mb-[15px]">Kultur Inovatif</h4>
            <p className="text-[14px]">Kami mendorong setiap individu untuk berkontribusi dalam transformasi digital industri logistik.</p>
          </div>
          <div className="p-[30px] border border-[--border-color] rounded-[12px]">
            <h4 className="text-[20px] mb-[15px]">Jenjang Karir</h4>
            <p className="text-[14px]">Program pengembangan kompetensi berkelanjutan untuk mencetak pemimpin masa depan.</p>
          </div>
          <div className="p-[30px] border border-[--border-color] rounded-[12px]">
            <h4 className="text-[20px] mb-[15px]">Kesejahteraan</h4>
            <p className="text-[14px]">Paket kompensasi kompetitif dengan perlindungan kesehatan menyeluruh bagi keluarga.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

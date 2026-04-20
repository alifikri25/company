import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karir (e-Recruitment) | PT Prima Abadi',
}
export default function Karir() {
  return (
    <main>
      <section className="hero-sub" style={{background: 'linear-gradient(to right, var(--primary-blue), #003366)', color: 'white'}}>
        <div className="container animate-fade-up">
          <span className="hero-subtitle" style={{color: 'var(--accent-green)'}}>MENGUNDANG TALENTA BANGSA</span>
          <h1 style={{color: 'white'}}>Portal Karir Eksekutif</h1>
          <p style={{maxWidth:'600px', color: 'rgba(255, 255, 255, 0.9)'}}>Mari berkembang tak terbatas bersama raksasa penyedia jasa logistik utilitas dan fleet management nusantara.</p>
        </div>
      </section>
      <section className="section container">
        <div style={{textAlign: 'center', padding: '100px 0'}}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '20px'}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <h2 style={{color: 'var(--text-secondary)'}}>Belum Ada Lowongan Baru</h2>
          <p style={{maxWidth: '500px', margin: '0 auto'}}>Saat ini PT Prima Abadi belum membuka lowongan baru. Segala bentuk rekrutmen akan diumumkan resmi melalui portal e-Recruitment ini. Hati-hati terhadap penipuan yang mengatasnamakan perusahaan kami.</p>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
export const metadata = {
  title: 'Tentang Kami | PT Prima Abadi',
}
export default function TentangKami() {
  return (
    <main>
      <section className="hero-sub" style={{background: 'linear-gradient(to right, #020C1B, var(--secondary-color))'}}>
        <div className="container animate-fade-up">
          <span className="hero-subtitle">PROFIL PERUSAHAAN</span>
          <h1>Tentang Kami</h1>
          <p style={{maxWidth:'600px'}}>Mengenal lebih dekat dedikasi dan sejarah perjalanan PT Prima Abadi dalam menyediakan pelayanan unggul untuk perusahaan Anda.</p>
        </div>
      </section>
      <section className="section container" id="sejarah">
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
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
      <section className="section" style={{background: 'var(--secondary-color)'}} id="visi">
        <div className="container">
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px'}}>
            <div style={{flex: '1', minWidth: '300px'}}>
              <h2 style={{color: 'var(--accent-color)'}}>Visi</h2>
              <p>Menjadi mitra strategis berskala Asia Tenggara dalam penyediaan fasilitas alat operasi dan armada transportasi terintegrasi dengan mengedepankan inovasi, standar keselamatan premium, serta keberlanjutan bisnis par-excellence.</p>
            </div>
            <div style={{flex: '1', minWidth: '300px'}}>
              <h2 style={{color: 'var(--accent-color)'}}>Misi</h2>
              <ul style={{listStylePosition: 'inside', color: 'var(--text-secondary)'}}>
                <li style={{marginBottom:'10px'}}>Optimalisasi kepuasan pelanggan lewat Zero-Downtime Guarantee.</li>
                <li style={{marginBottom:'10px'}}>Pemanfaatan SDM tersertifikasi ISO Internasional.</li>
                <li style={{marginBottom:'10px'}}>Integrasi teknologi hijau dan transformasi digital.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section container" id="manajemen">
        <div style={{maxWidth: '800px'}}>
          <h2>Jajaran Eksekutif & Manajemen</h2>
          <p>Dipimpin oleh talenta-talenta terbaik bangsa, mencitrakan ketangguhan tata kelola (Good Corporate Governance) dan profesionalitas tingkat tinggi.</p>
          <div style={{marginTop: '40px', padding: '30px', border: '1px solid var(--accent-color)', borderRadius: '12px', background: 'rgba(100, 255, 218, 0.05)'}}>
            <h4 style={{fontSize: '20px', color: 'var(--text-primary)', marginBottom: '5px'}}>Bpk. Nama Direktur (Placeholder)</h4>
            <span style={{color: 'var(--accent-color)', fontSize: '14px',fontFamily:'monospace'}}>DIREKTUR UTAMA</span>
            <p style={{marginTop: '15px'}}><i>"Dedikasi tanpa batas untuk memastikan operasional tanpa henti bagi seluruh klien kami dari Sabang sampai Merauke."</i></p>
          </div>
        </div>
      </section>
    </main>
  )
}

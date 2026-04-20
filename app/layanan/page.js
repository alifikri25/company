import Link from 'next/link'
export const metadata = {
  title: 'Layanan Eksekutif | PT Prima Abadi',
}
export default function Layanan() {
  return (
    <main>
      <section className="hero-sub" style={{background: 'linear-gradient(to right, #020C1B, #0a192f)'}}>
        <div className="container animate-fade-up">
          <span className="hero-subtitle">LINE OF BUSINESS</span>
          <h1>Layanan & Solusi Fasilitas</h1>
          <p style={{maxWidth:'600px'}}>Penyediaan unit siap pakai dengan kualitas jaminan mutu internasional, kami mendefinisikan ulang standar kemudahan korporat.</p>
        </div>
      </section>
      <section className="section container" id="kendaraan">
        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center'}}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <img src="/rental-vehicle-demo.png" style={{width: '100%', borderRadius: '12px'}} alt="Armada Korporat" />
          </div>
          <div style={{flex: '1', minWidth: '300px'}}>
            <h2>Penyewaan Berkala Armada Kendaraan</h2>
            <p>Pengadaan armada untuk kebutuhan jajaran eksekutif, operasional cabang, dan lapangan, mencakup sedan premium, SUV tangguh, hingga microbus pariwisata staf operasional lapangan.</p>
            <ul style={{marginTop: '20px', color: 'var(--text-secondary)'}}>
              <li style={{marginBottom: '10px'}}>✓ Skema Sewa Syarat Fleksibel (Jangka Menengah/Panjang)</li>
              <li style={{marginBottom: '10px'}}>✓ Termasuk Asuransi All-Risk Compehensive</li>
              <li style={{marginBottom: '10px'}}>✓ Perawatan Servis Rutin Ditanggung Penuh </li>
              <li style={{marginBottom: '10px'}}>✓ Unit Pengganti Maks 1x24 Jam jika Terjadi Kendala</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section" style={{background: 'var(--secondary-color)'}} id="alat">
        <div className="container">
          <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap-reverse', alignItems: 'center'}}>
            <div style={{flex: '1', minWidth: '300px'}}>
              <h2>Peralatan IT & Furnitur Penunjang</h2>
              <p>Mulai dari satu unit laptop hingga 10.000 unit workstation, Prima Abadi menjamin ketersediaan hardware mumpuni, software terlisensi resmi, hingga filing cabinet modular.</p>
              <ul style={{marginTop: '20px', color: 'var(--text-secondary)'}}>
                <li style={{marginBottom: '10px'}}>✓ Laptop Enterprise / PC Workstation (Intel/AMD Gen Terbaru)</li>
                <li style={{marginBottom: '10px'}}>✓ Fotokopi, Plotter & Printer Skala Pabrik</li>
                <li style={{marginBottom: '10px'}}>✓ Set Meja Direksi & Kursi Ergonomis Tahan Lama</li>
                <li style={{marginBottom: '10px'}}>✓ Dukungan Ahli IT Support On-Site (Opsional)</li>
              </ul>
            </div>
            <div style={{flex: '1', minWidth: '300px'}}>
              <img src="/office-equipment-demo.png" style={{width: '100%', borderRadius: '12px'}} alt="Workstation IT" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

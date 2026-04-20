import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Layanan Eksekutif | PT Prima Abadi',
}
export default function Layanan() {
  return (
    <main>
      <section className="hero-sub" style={{background: 'linear-gradient(to right, var(--primary-blue), #003366)', color: 'white'}}>
        <div className="container animate-fade-up">
          <span className="hero-subtitle" style={{color: 'var(--accent-green)'}}>LINE OF BUSINESS</span>
          <h1 style={{color: 'white'}}>Layanan & Solusi Fasilitas</h1>
          <p style={{maxWidth:'600px', color: 'rgba(255, 255, 255, 0.9)'}}>Penyediaan unit siap pakai dengan kualitas jaminan mutu internasional, kami mendefinisikan ulang standar kemudahan korporat.</p>
        </div>
      </section>
      <section className="section container" id="kendaraan">
        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center'}}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <Image 
              src="/rental-vehicle-demo.png" 
              width={800} 
              height={500} 
              style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: 'var(--shadow-md)'}} 
              alt="Armada Korporat" 
            />
          </div>
          <div style={{flex: '1', minWidth: '300px'}}>
            <h2>Penyewaan Berkala Armada Kendaraan</h2>
            <p>Pengadaan armada untuk kebutuhan jajaran eksekutif, operasional cabang, dan lapangan, mencakup sedan premium, SUV tangguh, hingga microbus pariwisata staf operasional lapangan.</p>
            <ul style={{marginTop: '20px', color: 'var(--text-secondary)', listStyle: 'none'}}>
              <li style={{marginBottom: '10px'}}><span style={{color: 'var(--accent-green)', fontWeight: 'bold', marginRight: '10px'}}>✓</span> Skema Sewa Syarat Fleksibel (Jangka Menengah/Panjang)</li>
              <li style={{marginBottom: '10px'}}><span style={{color: 'var(--accent-green)', fontWeight: 'bold', marginRight: '10px'}}>✓</span> Termasuk Asuransi All-Risk Compehensive</li>
              <li style={{marginBottom: '10px'}}><span style={{color: 'var(--accent-green)', fontWeight: 'bold', marginRight: '10px'}}>✓</span> Perawatan Servis Rutin Ditanggung Penuh</li>
              <li style={{marginBottom: '10px'}}><span style={{color: 'var(--accent-green)', fontWeight: 'bold', marginRight: '10px'}}>✓</span> Unit Pengganti Maks 1x24 Jam jika Terjadi Kendala</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section" style={{background: 'var(--bg-alt)'}} id="alat">
        <div className="container">
          <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap-reverse', alignItems: 'center'}}>
            <div style={{flex: '1', minWidth: '300px'}}>
              <h2>Peralatan IT & Furnitur Penunjang</h2>
              <p>Mulai dari satu unit laptop hingga 10.000 unit workstation, Prima Abadi menjamin ketersediaan hardware mumpuni, software terlisensi resmi, hingga filing cabinet modular.</p>
              <ul style={{marginTop: '20px', color: 'var(--text-secondary)', listStyle: 'none'}}>
                <li style={{marginBottom: '10px'}}><span style={{color: 'var(--accent-green)', fontWeight: 'bold', marginRight: '10px'}}>✓</span> Laptop Enterprise / PC Workstation (Intel/AMD Gen Terbaru)</li>
                <li style={{marginBottom: '10px'}}><span style={{color: 'var(--accent-green)', fontWeight: 'bold', marginRight: '10px'}}>✓</span> Fotokopi, Plotter & Printer Skala Pabrik</li>
                <li style={{marginBottom: '10px'}}><span style={{color: 'var(--accent-green)', fontWeight: 'bold', marginRight: '10px'}}>✓</span> Set Meja Direksi & Kursi Ergonomis Tahan Lama</li>
                <li style={{marginBottom: '10px'}}><span style={{color: 'var(--accent-green)', fontWeight: 'bold', marginRight: '10px'}}>✓</span> Dukungan Ahli IT Support On-Site (Opsional)</li>
              </ul>
            </div>
            <div style={{flex: '1', minWidth: '300px'}}>
              <Image 
                src="/office-equipment-demo.png" 
                width={800} 
                height={500} 
                style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: 'var(--shadow-md)'}} 
                alt="Workstation IT" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* Area Driver Dihapus sesuai issue.md */}
    </main>
  )
}

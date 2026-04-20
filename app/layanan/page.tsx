import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Layanan Eksekutif | PT Prima Abadi',
}
export default function Layanan() {
  return (
    <main>
      <section className="hero-sub bg-gradient-to-r from-[--primary-blue] to-[#003366] text-white">
        <div className="container animate-fade-up">
          <span className="hero-subtitle text-[--accent-green]">LINE OF BUSINESS</span>
          <h1 className="text-white">Layanan & Solusi Fasilitas</h1>
          <p className="max-w-[600px] text-white/90">Penyediaan unit siap pakai dengan kualitas jaminan mutu internasional, kami mendefinisikan ulang standar kemudahan korporat.</p>
        </div>
      </section>
      <section className="section container" id="kendaraan">
        <div className="flex gap-[40px] flex-wrap items-center">
          <div className="flex-1 min-w-[300px]">
            <Image 
              src="/rental-vehicle-demo.png" 
              width={800} 
              height={500} 
              className="w-full h-auto rounded-[12px] shadow-[--shadow-md]" 
              alt="Armada Korporat" 
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <h2>Penyewaan Berkala Armada Kendaraan</h2>
            <p>Pengadaan armada untuk kebutuhan jajaran eksekutif, operasional cabang, dan lapangan, mencakup sedan premium, SUV tangguh, hingga microbus pariwisata staf operasional lapangan.</p>
            <ul className="mt-[20px] text-[--text-secondary] list-none">
              <li className="mb-[10px]"><span className="text-[--accent-green] font-bold mr-[10px]">✓</span> Skema Sewa Syarat Fleksibel (Jangka Menengah/Panjang)</li>
              <li className="mb-[10px]"><span className="text-[--accent-green] font-bold mr-[10px]">✓</span> Termasuk Asuransi All-Risk Compehensive</li>
              <li className="mb-[10px]"><span className="text-[--accent-green] font-bold mr-[10px]">✓</span> Perawatan Servis Rutin Ditanggung Penuh</li>
              <li className="mb-[10px]"><span className="text-[--accent-green] font-bold mr-[10px]">✓</span> Unit Pengganti Maks 1x24 Jam jika Terjadi Kendala</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section bg-[--bg-alt]" id="alat">
        <div className="container">
          <div className="flex gap-[40px] flex-wrap-reverse items-center">
            <div className="flex-1 min-w-[300px]">
              <h2>Peralatan IT & Furnitur Penunjang</h2>
              <p>Mulai dari satu unit laptop hingga 10.000 unit workstation, Prima Abadi menjamin ketersediaan hardware mumpuni, software terlisensi resmi, hingga filing cabinet modular.</p>
              <ul className="mt-[20px] text-[--text-secondary] list-none">
                <li className="mb-[10px]"><span className="text-[--accent-green] font-bold mr-[10px]">✓</span> Laptop Enterprise / PC Workstation (Intel/AMD Gen Terbaru)</li>
                <li className="mb-[10px]"><span className="text-[--accent-green] font-bold mr-[10px]">✓</span> Fotokopi, Plotter & Printer Skala Pabrik</li>
                <li className="mb-[10px]"><span className="text-[--accent-green] font-bold mr-[10px]">✓</span> Set Meja Direksi & Kursi Ergonomis Tahan Lama</li>
                <li className="mb-[10px]"><span className="text-[--accent-green] font-bold mr-[10px]">✓</span> Dukungan Ahli IT Support On-Site (Opsional)</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[300px]">
              <Image 
                src="/office-equipment-demo.png" 
                width={800} 
                height={500} 
                className="w-full h-auto rounded-[12px] shadow-[--shadow-md]" 
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

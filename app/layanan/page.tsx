import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Layanan Eksekutif | PT. Tangguh Jaya Semesta',
}

export default function Layanan() {
  return (
    <main>
      <section className="hero-sub bg-gradient-to-r from-[--primary-blue] to-[#0d1a52] text-white">
        <div className="container animate-fade-up">
          <span className="hero-subtitle text-white border-white">LINE OF BUSINESS</span>
          <h1 className="text-white">Layanan & Solusi Fasilitas</h1>
          <p className="max-w-[600px] text-white font-medium">Penyediaan unit siap pakai dengan kualitas jaminan mutu internasional, kami mendefinisikan ulang standar kemudahan korporat.</p>
        </div>
      </section>

      <section className="section container" id="kendaraan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[--primary-blue] to-[--accent-green] rounded-[20px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <Image 
                src="/rental-vehicle-demo.png" 
                width={800} 
                height={500} 
                className="relative w-full h-auto rounded-[16px] shadow-2xl" 
                alt="Armada Korporat" 
              />
            </div>
          </div>
          <div className="animate-fade-up">
            <h2 className="text-[--primary-blue] mb-6">Penyewaan Berkala Armada Kendaraan</h2>
            <p className="text-[--text-primary] text-lg leading-relaxed mb-8">Pengadaan armada untuk kebutuhan jajaran eksekutif, operasional cabang, dan lapangan, mencakup sedan premium, SUV tangguh, hingga microbus pariwisata staf operasional lapangan.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[--accent-green]/10 text-[--accent-green] flex items-center justify-center font-bold text-sm">✓</span>
                <span className="text-[--text-primary] font-medium pt-0.5">Skema Sewa Syarat Fleksibel (Jangka Menengah/Panjang)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[--accent-green]/10 text-[--accent-green] flex items-center justify-center font-bold text-sm">✓</span>
                <span className="text-[--text-primary] font-medium pt-0.5">Termasuk Asuransi All-Risk Compehensive</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[--accent-green]/10 text-[--accent-green] flex items-center justify-center font-bold text-sm">✓</span>
                <span className="text-[--text-primary] font-medium pt-0.5">Perawatan Servis Rutin Ditanggung Penuh</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[--accent-green]/10 text-[--accent-green] flex items-center justify-center font-bold text-sm">✓</span>
                <span className="text-[--text-primary] font-medium pt-0.5">Unit Pengganti Maks 1x24 Jam jika Terjadi Kendala</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-[--neutral-100]" id="alat">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <h2 className="text-[--primary-blue] mb-6">Peralatan IT & Furnitur Penunjang</h2>
              <p className="text-[--text-primary] text-lg leading-relaxed mb-8">Mulai dari satu unit laptop hingga 10.000 unit workstation, Tangguh Jaya Semesta menjamin ketersediaan hardware mumpuni, software terlisensi resmi, hingga filing cabinet modular.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[--accent-green]/10 text-[--accent-green] flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-[--text-primary] font-medium pt-0.5">Laptop Enterprise / PC Workstation (Intel/AMD Gen Terbaru)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[--accent-green]/10 text-[--accent-green] flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-[--text-primary] font-medium pt-0.5">Fotokopi, Plotter & Printer Skala Pabrik</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[--accent-green]/10 text-[--accent-green] flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-[--text-primary] font-medium pt-0.5">Set Meja Direksi & Kursi Ergonomis Tahan Lama</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[--accent-green]/10 text-[--accent-green] flex items-center justify-center font-bold text-sm">✓</span>
                  <span className="text-[--text-primary] font-medium pt-0.5">Dukungan Ahli IT Support On-Site (Opsional)</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 animate-fade-up">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[--primary-blue] to-[--accent-green] rounded-[20px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Image 
                  src="/office-equipment-demo.png" 
                  width={800} 
                  height={500} 
                  className="relative w-full h-auto rounded-[16px] shadow-2xl" 
                  alt="Workstation IT" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


'use client'

import React from 'react'
import Image from 'next/image'

const SERVICES = [
  { 
    id: "kendaraan", 
    label: "Armada Korporat", 
    title: "Penyewaan Berkala Armada Kendaraan", 
    description: "Pengadaan armada eksekutif, operasional, dan lapangan — sedan premium, SUV, hingga microbus. Skema fleksibel dengan zero-downtime guarantee.", 
    features: ["Skema Sewa Fleksibel (Menengah/Panjang)", "Asuransi All-Risk Comprehensive", "Perawatan Servis Rutin Ditanggung Penuh", "Unit Pengganti Maks 1×24 Jam"], 
    image: "/rental-demo.png", 
    accent: "#152673" 
  },
  { 
    id: "alat", 
    label: "Infrastruktur IT", 
    title: "Perangkat IT & Furnitur Penunjang", 
    description: "Satu unit laptop hingga 10.000 workstation — hardware mumpuni, software terlisensi, dan furniture ergonomis siap kirim ke seluruh provinsi.", 
    features: ["Laptop Enterprise / PC Workstation Gen Terbaru", "Fotokopi, Plotter & Printer Skala Pabrik", "Set Meja Direksi & Kursi Ergonomis", "IT Support On-Site (Opsional)"], 
    image: "/equipment-demo.png", 
    accent: "#d12c2c" 
  },
]

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="eyebrow-container">
      <div className="eyebrow-line" />
      <span className="eyebrow-text">{text}</span>
    </div>
  )
}

function SubHero({ eyebrow, title, subtitle }: { eyebrow: string, title: string, subtitle: string }) {
  return (
    <section className="animate-fade-up section-padding-mobile" style={{ 
      background: "transparent", 
      padding: "100px 24px 72px", 
      position: "relative", 
      overflow: "hidden" 
    }}>
      <Image 
        src="/banner-layanan.png" 
        alt="Background" 
        fill 
        className="object-cover"
        style={{ zIndex: -1, opacity: 1 }}
      />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--primary-blue), var(--accent-red), var(--primary-blue))" }} />
      <div style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
      <div className="container" style={{ position: "relative" }}>
        <Eyebrow text={eyebrow} />
        <h1 className="text-white hero-title-mobile" style={{ 
          fontSize: "clamp(32px, 5vw, 52px)", 
          marginBottom: 20,
          textShadow: "0 2px 15px rgba(0,0,0,0.5)"
        }}>{title}</h1>
        <p style={{ fontSize: 17, color: "white", maxWidth: 560, textShadow: "0 1px 8px rgba(0,0,0,0.4)", fontWeight: 500 }}>{subtitle}</p>
      </div>
    </section>
  )
}

export default function Layanan() {
  return (
    <main>
      <SubHero 
        eyebrow="Line of Business" 
        title="Layanan & Solusi Fasilitas" 
        subtitle="Penyediaan unit siap pakai dengan kualitas jaminan mutu internasional, kami mendefinisikan ulang standar kemudahan korporat." 
      />

      {SERVICES.map((s, idx) => (
        <section key={s.id} id={s.id} className="section" style={{ background: idx % 2 === 0 ? "white" : "var(--neutral-100)" }}>
          <div className="container grid-1-on-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 6vw, 72px)", alignItems: "center" }}>
            <div style={{ order: idx % 2 === 0 ? 1 : 2, borderRadius: 24, overflow: "hidden", height: "clamp(240px, 40vw, 380px)", position: "relative" }} className="mobile-order-1">
              <Image 
                src={s.image} 
                alt={s.title} 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div style={{ order: idx % 2 === 0 ? 2 : 1 }} className="mobile-order-2">
              <Eyebrow text={s.label} />
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", marginBottom: 16 }}>{s.title}</h2>
              <p style={{ fontSize: 16, marginBottom: 28 }}>{s.description}</p>
              
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {s.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, fontWeight: 500 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${s.accent}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={s.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

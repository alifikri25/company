'use client'

import React from 'react'
import Image from 'next/image'

const NEWS = [
  { id: 1, date: "24 April 2026", category: "Fleet & Inovasi", title: "Peremajaan 500 Unit Fleet EV (Kendaraan Listrik)", excerpt: "Mendukung emisi nol, Tangguh Jaya Semesta meresmikan masuknya kloter pertama armada mobil listrik nasional.", image: "/berita/news-ev-fleet.png", color: "#1a3a6e" },
  { id: 2, date: "10 April 2026", category: "TJSL", title: "Program TJSL: Bantuan Sektor Pendidikan Tapal Batas", excerpt: "Penyerahan 1.500 unit perangkat komputasi layak pakai untuk 20 titik di perbatasan negeri.", image: "/berita/news-education-csr.png", color: "#d12c2c" },
  { id: 3, date: "02 Maret 2026", category: "Tata Kelola", title: "Audit Eksternal 2025: Raih Predikat WTP", excerpt: "Pencapaian dan transparansi pelaporan keuangan berstandar internasional.", image: "/berita/news-audit-report.png", color: "#152673" },
  { id: 4, date: "14 Februari 2026", category: "Keselamatan", title: "Gelar Pasukan Keselamatan Berkendara", excerpt: "Sertifikasi tahunan 2.000 pengemudi komersial bersama Korlantas Polri.", image: "/berita/news-safety-training.png", color: "#0d1a52" },
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
        src="/banner-media.png" 
        alt="Background" 
        fill 
        className="object-cover"
        style={{ zIndex: -1, opacity: 1 }}
        sizes="100vw"
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

export default function Berita() {
  return (
    <main>
      <SubHero 
        eyebrow="Media & Publikasi" 
        title="Berita & Tanggung Jawab Sosial" 
        subtitle="Portal transparansi aktivitas internal, kepedulian lingkungan (TJSL), dan press release kelembagaan PT. Tangguh Jaya Semesta." 
      />

      <section className="section" style={{ background: "var(--neutral-100)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
            {NEWS.map(n => (
              <div key={n.id} className="news-card" style={{ cursor: "pointer" }}>
                <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                  <Image 
                    src={n.image} 
                    alt={n.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="news-card-overlay" />
                  <div className="news-card-tag">
                     <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: 4 }}>{n.category}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600, color: "var(--muted-blue)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8, display: "block" }}>{n.date}</span>
                  <h4 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.45, marginBottom: 10, flex: 1 }}>{n.title}</h4>
                  <p style={{ fontSize: 13, color: "var(--muted-blue)", lineHeight: 1.65 }}>{n.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

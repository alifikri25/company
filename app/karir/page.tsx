'use client'

import React from 'react'
import Image from 'next/image'

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
        src="/banner-karir.png" 
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

export default function Karir() {
  return (
    <main>
      <SubHero 
        eyebrow="Mengundang Talenta Bangsa" 
        title="Portal Karir Eksekutif" 
        subtitle="Mari berkembang tak terbatas bersama raksasa penyedia jasa logistik utilitas dan fleet management nusantara." 
      />

      <section className="section" style={{ background: "var(--neutral-100)" }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ background: "white", border: "2px dashed var(--neutral-200)", borderRadius: 24, padding: "clamp(48px, 10vw, 72px) clamp(24px, 5vw, 40px)", textAlign: "center", marginBottom: 64 }}>
            <div style={{ width: 72, height: 72, background: "var(--neutral-100)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 32 }}>!</div>
            <h2 style={{ fontSize: 26, marginBottom: 12 }}>Belum Ada Lowongan Aktif</h2>
            <p style={{ maxWidth: 440, margin: "0 auto 36px" }}>Saat ini PT. Tangguh Jaya Semesta belum membuka rekrutmen baru. Pantau portal ini secara berkala.</p>
            <button className="btn btn-accent" style={{ padding: "14px 36px" }}>Daftarkan CV Kamu →</button>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { title: "Kultur Inovatif", desc: "Berkontribusi dalam transformasi digital industri logistik dan fleet management nasional." },
              { title: "Jenjang Karir", desc: "Program pengembangan kompetensi berkelanjutan untuk mencetak pemimpin masa depan." },
              { title: "Kesejahteraan", desc: "Paket kompensasi kompetitif dengan perlindungan kesehatan menyeluruh untuk keluarga." },
            ].map((p, i) => (
              <div key={i} style={{ background: "white", border: "1px solid var(--neutral-200)", borderRadius: 16, padding: "32px 28px" }}>
                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{p.title}</h4>
                <p style={{ fontSize: 14, color: "var(--muted-blue)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

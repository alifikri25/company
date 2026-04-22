'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Counter from '../../components/Counter'

const STATS = [
  { value: 50, suffix: "+", label: "Cabang Operasional" },
  { value: 5000, suffix: "+", label: "Unit Armada Aktif" },
  { value: 100, suffix: "k+", label: "Unit Tersalurkan" },
  { value: 15, suffix: "+", label: "Tahun Pengalaman" },
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
        src="/banner-tentang-kami.png" 
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

export default function TentangKami() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsActive, setStatsActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStatsActive(true)
    }, { threshold: 0.3 })
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <SubHero 
        eyebrow="Profil Perusahaan" 
        title="Tentang Kami" 
        subtitle="Mengenal lebih dekat dedikasi dan sejarah perjalanan PT. Tangguh Jaya Semesta dalam menyediakan pelayanan unggul bagi klien korporat." 
      />

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <Eyebrow text="Jejak Langkah" />
          <h2 style={{ marginBottom: 20 }}>Tangguh Jaya Semesta</h2>
          <p style={{ fontSize: 17, marginBottom: 64, maxWidth: 680, margin: "0 auto 64px" }}>
            Didirikan dengan semangat sinergi dan efisiensi logistik berkelanjutan, PT. Tangguh Jaya Semesta mengelola lebih dari 5.000+ armada tersebar di seluruh proyek industrial nusantara.
          </p>
          
          <div ref={statsRef} className="grid-1-on-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ background: "var(--neutral-100)", borderRadius: 16, padding: "32px 20px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "var(--primary-blue)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                  {statsActive ? <Counter end={s.value} suffix={s.suffix} /> : 0}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted-blue)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--neutral-100)" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div style={{ marginBottom: 64, textAlign: "center" }}>
            <Eyebrow text="Visi" />
            <div style={{ background: "linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark) 100%)", borderRadius: 20, padding: "32px 24px", position: "relative", overflow: "hidden" }}>
              <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.88)", lineHeight: 1.75, fontStyle: "italic", margin: 0 }}>
                &quot;Menjadi mitra strategis berskala Asia Tenggara dalam penyediaan fasilitas alat operasi dan armada transportasi terintegrasi dengan mengedepankan inovasi, standar keselamatan premium, serta keberlanjutan bisnis par-excellence.&quot;
              </p>
            </div>
          </div>
          
          <div>
            <Eyebrow text="Misi Kami" />
            <h2 style={{ fontSize: 28, marginBottom: 32 }}>Komitmen Kami</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { n: "01", text: "Optimalisasi kepuasan pelanggan lewat", highlight: "Zero-Downtime Guarantee." },
                { n: "02", text: "Pemanfaatan SDM tersertifikasi", highlight: "ISO Internasional." },
                { n: "03", text: "Integrasi", highlight: "teknologi hijau dan transformasi digital." },
              ].map((m, i) => (
                <div key={i} className="stack-on-mobile" style={{ background: "white", borderRadius: 14, padding: "24px 28px", display: "flex", alignItems: "center", gap: 24, border: "1px solid var(--neutral-200)" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--primary-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: "white", flexShrink: 0 }}>{m.n}</div>
                  <p style={{ fontSize: 16, color: "var(--neutral-700)", fontWeight: 500, lineHeight: 1.6, margin: 0 }}>{m.text} <strong style={{ color: "var(--primary-blue)" }}>{m.highlight}</strong></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: 800 }}>
          <Eyebrow text="Jajaran Eksekutif" />
          <h2 style={{ fontSize: 28, marginBottom: 12 }}>Manajemen Perusahaan</h2>
          <p style={{ marginBottom: 40 }}>Dipimpin oleh talenta-talenta terbaik bangsa dengan Good Corporate Governance premium.</p>
          
          <div className="stack-on-mobile" style={{ background: "white", border: "1.5px solid var(--neutral-200)", borderLeft: "4px solid var(--primary-blue)", borderRadius: 20, padding: "32px 24px", display: "flex", alignItems: "flex-start", gap: 28, boxShadow: "var(--shadow-md)" }}>
            <div style={{ width: 72, height: 72, borderRadius: 16, background: "var(--neutral-100)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--primary-blue)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h4 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Bpk. Nama Direktur</h4>
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-red)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Direktur Utama</span>
              <p style={{ fontSize: 16, color: "var(--muted-blue)", marginTop: 16, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                &quot;Dedikasi tanpa batas untuk memastikan operasional tanpa henti bagi seluruh klien kami dari Sabang sampai Merauke.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

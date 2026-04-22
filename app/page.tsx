'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Counter from '../components/Counter'

const STATS = [
  { value: 50, suffix: "+", label: "Cabang Operasional" },
  { value: 5000, suffix: "+", label: "Unit Armada Aktif" },
  { value: 100, suffix: "k+", label: "Unit Tersalurkan" },
  { value: 15, suffix: "+", label: "Tahun Pengalaman" },
]

const PARTNERS = [
  { name: "Jasa Marga", logo: "/logo-jasamarga.webp" },
  { name: "PLN", logo: "/logo-pln-v2.webp" },
  { name: "Mind ID", logo: "/logo-mindid.webp" },
  { name: "BUMN", logo: "/logo-bumn.webp" },
  { name: "Telkom", logo: "/logo-telkom.webp" },
  { name: "Pertamina", logo: "/logo-pertamina.webp" },
]

const SERVICES = [
  { 
    id: "kendaraan", 
    label: "Armada Korporat", 
    title: "Penyewaan Berkala Armada Kendaraan", 
    description: "Pengadaan armada eksekutif, operasional, dan lapangan — sedan premium, SUV, hingga microbus. Scema fleksibel dengan zero-downtime guarantee.", 
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

const NEWS = [
  { id: 1, date: "24 April 2026", category: "Fleet & Inovasi", title: "Peremajaan 500 Unit Fleet EV (Kendaraan Listrik)", excerpt: "Mendukung emisi nol, Tangguh Jaya Semesta meresmikan masuknya kloter pertama armada mobil listrik nasional.", image: "/berita/news-ev-fleet.png", color: "#1a3a6e" },
  { id: 2, date: "10 April 2026", category: "TJSL", title: "Program TJSL: Bantuan Sektor Pendidikan Tapal Batas", excerpt: "Penyerahan 1.500 unit perangkat komputasi layak pakai untuk 20 titik di perbatasan negeri.", image: "/berita/news-education-csr.png", color: "#d12c2c" },
  { id: 3, date: "02 Maret 2026", category: "Tata Kelola", title: "Audit Eksternal 2025: Raih Predikat WTP", excerpt: "Pencapaian dan transparansi pelaporan keuangan berstandar internasional.", image: "/berita/news-audit-report.png", color: "#152673" },
  { id: 4, date: "14 Februari 2026", category: "Keselamatan", title: "Gelar Pasukan Keselamatan Berkendara", excerpt: "Sertifikasi tahunan 2.000 pengemudi komersial bersama Korlantas Polri.", image: "/berita/news-safety-training.png", color: "#0d1a52" },
]

export default function Home() {
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
      {/* Hero Section */}
      <section style={{ 
        minHeight: "93vh", 
        background: "transparent", 
        display: "flex", 
        alignItems: "center", 
        position: "relative", 
        overflow: "hidden" 
      }}>
        <Image 
          src="/hero-banner.png" 
          alt="Business Banner" 
          fill 
          className="object-cover" 
          priority
          style={{ zIndex: -1, opacity: 1 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(209,44,44,0.08) 0%, transparent 70%)" }} />
        
        <div className="container grid-1-on-mobile" style={{ position: "relative", zIndex: 1, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: " clamp(32px, 5vw, 60px)", alignItems: "center" }}>
          <div className="animate-fade-up">
            <div className="glass-premium" style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 8, 
              borderRadius: 100, 
              padding: "6px 14px 6px 8px", 
              marginBottom: 32, 
            }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--accent-red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 1)" }}>BUMN & Swasta Partner</span>
            </div>
            
            <h1 className="text-white hero-title-mobile">
              Mendukung<br />
              <span style={{ background: "linear-gradient(135deg, #e85555, var(--accent-red))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Mobilitas.</span><br />
              Memberdayakan<br />Kinerja.
            </h1>
            
            <p style={{ color: "rgba(255,255,255,1)", fontSize: 17, marginBottom: 40, maxWidth: 460 }}>
              Hadir di seluruh titik industrial strategis, PT. Tangguh Jaya Semesta memberikan kepastian logistik kendaraan komersil dan sarana prasarana IT tanpa kompromi kualitas.
            </p>
            
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }} className="stack-on-mobile">
              <Link href="/layanan" className="btn btn-accent" style={{ gap: 8 }}>
                Solusi Kami <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/tentang-kami" className="btn btn-ghost glass-premium">
                Profil Manajemen
              </Link>
            </div>
          </div>
          
          <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card glass-premium">
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                  {statsActive ? <Counter end={s.value} suffix={s.suffix} /> : 0}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255, 255, 255, 1)", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section style={{ background: "white", borderTop: "1px solid var(--neutral-200)", padding: "40px 0", overflow: "hidden" }}>
        <div style={{ textAlign: "center", fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted-blue)", marginBottom: 20 }}>DIPERCAYA OLEH PERUSAHAAN TERKEMUKA INDONESIA</div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, white, transparent)", zIndex: 2 }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, white, transparent)", zIndex: 2 }} />
          <div className="marquee-track">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className="partner-logo-box">
                <Image 
                  src={p.logo} 
                  alt={p.name} 
                  width={140} 
                  height={60} 
                  className="partner-logo-img"
                  style={{ 
                    transition: "all 0.3s ease",
                    height: "auto"
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0) brightness(1) opacity(1)")}
                  onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(1) brightness(1.2) opacity(0.4)")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="eyebrow-container" style={{ justifyContent: 'center' }}>
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Line of Business</span>
            </div>
            <h2 style={{ marginBottom: 16 }}>Lini Bisnis Utama</h2>
            <p style={{ maxWidth: 480, margin: "0 auto" }}>Fokus dedikasi kami ada pada kehandalan peralatan dengan jaminan <em>zero-downtime maintenance</em>.</p>
          </div>
          
          <div className="grid-1-on-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28 }}>
            {SERVICES.map(s => (
              <Link key={s.id} href={`/layanan#${s.id}`} className="service-card" style={{ textDecoration: 'none' }}>
                <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
                  <Image 
                    src={s.image} 
                    alt={s.title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
                <div style={{ padding: "24px 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "inline-block", fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: s.accent, background: `${s.accent}12`, padding: "4px 10px", borderRadius: 4, marginBottom: 14, width: 'fit-content' }}>{s.label}</div>
                  <h3 style={{ fontSize: 20, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, marginBottom: 20 }}>{s.description}</p>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: s.accent, marginTop: "auto" }}>Pelajari Detail →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section" style={{ background: "var(--neutral-100)" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }} className="text-center-mobile">
            <div>
              <div className="eyebrow-container">
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Press & CSR</span>
              </div>
              <h2 style={{ marginBottom: 8 }}>Berita Paripurna & TJSL</h2>
              <p>Agenda dan aksi kepedulian terbaru PT. Tangguh Jaya Semesta.</p>
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
            {NEWS.map(n => (
              <div key={n.id} className="news-card">
                <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                  <Image 
                    src={n.image} 
                    alt={n.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/berita" className="btn" style={{ border: "1.5px solid var(--primary-blue)", color: "var(--primary-blue)", fontSize: 13 }}>Lihat Semua →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark) 100%)", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ color: "white", marginBottom: 16 }}>Siap Bermitra?</h2>
          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 17, marginBottom: 36, lineHeight: 1.65 }}>Diskusikan kebutuhan armada dan infrastruktur IT perusahaan Anda bersama tim ahli kami.</p>
          <Link href="/kontak" className="btn btn-accent" style={{ padding: "16px 36px", fontSize: 15 }}>
            Konsultasi Gratis →
          </Link>
        </div>
      </section>
    </main>
  )
}

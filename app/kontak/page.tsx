'use client'

import React, { useState } from 'react'
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
        src="/hero-banner.png" 
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

export default function Kontak() {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <SubHero 
        eyebrow="Hubungi Kami" 
        title="Solusi Tepat Untuk Bisnis Anda" 
        subtitle="Diskusikan kebutuhan armada dan operasional fasilitas bersama tim ahli kami." 
      />

      <section className="section" style={{ background: "var(--neutral-100)" }}>
        <div className="container grid-1-on-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 40, alignItems: "start" }}>
          
          <div style={{ background: "white", borderRadius: 24, padding: "clamp(24px, 5vw, 48px)", boxShadow: "0 8px 40px rgba(21,38,115,0.07)", border: "1px solid var(--neutral-200)" }}>
            <h2 style={{ fontSize: 26, marginBottom: 8 }}>Kirim Permintaan</h2>
            <p style={{ fontSize: 15, color: "var(--muted-blue)", marginBottom: 36 }}>Lengkapi formulir untuk konsultasi solusi fasilitas korporat Anda.</p>
            
            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ color: "#22c55e", marginBottom: 16, display: "flex", justifyContent: "center" }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Terima Kasih!</h3>
                <p style={{ fontSize: 15, color: "var(--muted-blue)" }}>Tim kami akan menghubungi Anda dalam 2-4 jam kerja.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div className="grid-1-on-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {[
                    { id: "name", label: "Nama Lengkap", type: "text", ph: "Budi Santoso" },
                    { id: "email", label: "Email Korporat", type: "email", ph: "budi@perusahaan.com" }
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, color: "var(--primary-blue)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>{f.label}</label>
                      <input 
                        type={f.type} 
                        placeholder={f.ph}
                        required
                        onFocus={() => setFocused(f.id)} 
                        onBlur={() => setFocused(null)} 
                        style={{ 
                          width: "100%", height: 52, padding: "0 16px", background: "var(--neutral-100)", 
                          border: `2px solid ${focused === f.id ? "var(--primary-blue)" : "var(--neutral-200)"}`, 
                          borderRadius: 10, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--neutral-900)", 
                          outline: "none", transition: "all 0.2s ease" 
                        }} 
                      />
                    </div>
                  ))}
                </div>
                
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, color: "var(--primary-blue)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Subjek Layanan</label>
                  <select 
                    onFocus={() => setFocused("subject")} 
                    onBlur={() => setFocused(null)} 
                    style={{ 
                      width: "100%", height: 52, padding: "0 16px", background: "var(--neutral-100)", 
                      border: `2px solid ${focused === "subject" ? "var(--primary-blue)" : "var(--neutral-200)"}`, 
                      borderRadius: 10, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--neutral-900)", 
                      outline: "none", cursor: "pointer" 
                    }}
                  >
                    <option>Penyewaan Kendaraan Korporat</option>
                    <option>Sewa Perangkat IT & Furnitur</option>
                    <option>Kemitraan Vendor</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, color: "var(--primary-blue)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Detail Kebutuhan</label>
                  <textarea 
                    rows={5} 
                    placeholder="Ceritakan solusi apa yang Anda perlukan..." 
                    required
                    onFocus={() => setFocused("msg")} 
                    onBlur={() => setFocused(null)} 
                    style={{ 
                      width: "100%", padding: "14px 16px", background: "var(--neutral-100)", 
                      border: `2px solid ${focused === "msg" ? "var(--primary-blue)" : "var(--neutral-200)"}`, 
                      borderRadius: 10, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--neutral-900)", 
                      outline: "none", resize: "vertical" 
                    }} 
                  />
                </div>
                
                <button type="submit" className="btn btn-accent" style={{ height: 56, fontSize: 15 }}>Kirim Permintaan Konsultasi</button>
              </form>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: "white", borderRadius: 20, padding: "36px", border: "1px solid var(--neutral-200)", boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ fontSize: 20, marginBottom: 32 }}>Hubungi Langsung</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  { 
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ), 
                    label: "Kantor Pusat", 
                    primary: "Gedung Prima Headquarter Lt. 12", 
                    secondary: "Jl. Jend. Sudirman Kav 19, Jakarta Selatan 12920", 
                    color: "var(--primary-blue)" 
                  },
                  { 
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ), 
                    label: "Hotline & Telp", 
                    primary: "(021) 1500-751", 
                    secondary: "Senin – Jumat, 08:00 – 17:00 WIB", 
                    color: "var(--accent-red)" 
                  },
                  { 
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ), 
                    label: "Surat Elektronik", 
                    primary: "cs@prima-abadi.co.id", 
                    secondary: "Respon dalam 2-4 jam kerja", 
                    color: "var(--primary-blue)" 
                  },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${c.color}12`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, color: "var(--muted-blue)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--primary-blue)", lineHeight: 1.3, marginBottom: 4 }}>{c.primary}</div>
                      <div style={{ fontSize: 13, color: "var(--muted-blue)" }}>{c.secondary}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: "linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark) 100%)", borderRadius: 20, padding: "40px 36px", textAlign: "center", cursor: "pointer" }}>
              <div style={{ color: "rgba(255,255,255,0.2)", marginBottom: 12, display: "flex", justifyContent: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
              </div>
              <h4 style={{ fontSize: 17, color: "white", marginBottom: 6 }}>Peta Lokasi Kantor</h4>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: 0 }}>Buka di Google Maps →</p>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  )
}

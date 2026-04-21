'use client'

import React from 'react'
import Image from 'next/image'

export default function Kontak() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Terima kasih! Permintaan Anda telah kami terima. Tim kami akan segera menghubungi Anda melalui email korporat yang diberikan.')
  }

  return (
    <main className="bg-[--neutral-50]">
      {/* Hero Section - Same as other subpages */}
      <section className="hero-sub bg-gradient-to-r from-[--primary-blue] to-[#0d1a52] text-white">
        <div className="container animate-fade-up">
          <span className="hero-subtitle text-white border-white">HUBUNGI KAMI</span>
          <h1 className="text-white">Solusi Tepat Untuk Bisnis Anda</h1>
          <p className="max-w-[600px] text-white font-medium">Jangan ragu untuk berdiskusi mengenai kebutuhan armada dan operasional fasilitas perusahaan Anda bersama tim ahli kami.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Contact Form Card */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="bg-white p-8 md:p-12 rounded-[24px] shadow-2xl shadow-blue-900/5 border border-[--neutral-200]">
              <div className="mb-10">
                <h2 className="text-[--primary-blue] mb-3">Kirim Permintaan</h2>
                <p className="text-[--text-primary] text-lg font-medium opacity-80">Lengkapi formulir di bawah ini untuk konsultasi solusi fasilitas.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-[12px] font-extrabold text-[--primary-blue] uppercase tracking-widest">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder="Contoh: Budi Santoso" 
                      className="h-14 px-5 bg-[--neutral-50] border-2 border-[--neutral-200] rounded-xl outline-none focus:border-[--primary-blue] focus:bg-white transition-all duration-200 text-[--text-primary] font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-[12px] font-extrabold text-[--primary-blue] uppercase tracking-widest">Email Korporat</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="budisantoso@perusahaan.com" 
                      className="h-14 px-5 bg-[--neutral-50] border-2 border-[--neutral-200] rounded-xl outline-none focus:border-[--primary-blue] focus:bg-white transition-all duration-200 text-[--text-primary] font-medium"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label htmlFor="subject" className="text-[12px] font-extrabold text-[--primary-blue] uppercase tracking-widest">Subjek Layanan</label>
                  <div className="relative">
                    <select 
                      id="subject" 
                      className="h-14 w-full px-5 bg-[--neutral-50] border-2 border-[--neutral-200] rounded-xl outline-none focus:border-[--primary-blue] focus:bg-white transition-all duration-200 text-[--text-primary] font-medium appearance-none"
                    >
                      <option>Penyewaan Kendaraan Korporat</option>
                      <option>Sewa Perangkat IT & Furnitur</option>
                      <option>Kemitraan Vendor</option>
                      <option>Lainnya</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[--primary-blue]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-[12px] font-extrabold text-[--primary-blue] uppercase tracking-widest">Detail Kebutuhan</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    placeholder="Ceritakan solusi apa yang Anda perlukan..." 
                    className="p-5 bg-[--neutral-50] border-2 border-[--neutral-200] rounded-xl outline-none focus:border-[--primary-blue] focus:bg-white transition-all duration-200 text-[--text-primary] font-medium"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-accent w-full h-16 text-lg font-bold shadow-lg shadow-red-600/20 hover:scale-[1.01] transition-transform">
                  Kirim Permintaan Konsultasi
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="lg:col-span-5 space-y-8 animate-fade-up">
            
            {/* Contact Details Card */}
            <div className="bg-white p-10 rounded-[24px] shadow-xl border border-[--neutral-200]">
              <h3 className="text-[--primary-blue] mb-8 font-bold text-2xl">Hubungi Kami Secara Langsung</h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[--primary-blue] rounded-[16px] flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-900/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 className="text-[--primary-blue] text-sm uppercase tracking-widest font-extrabold mb-1">Kantor Pusat</h4>
                    <p className="text-[--text-primary] text-lg font-bold leading-relaxed">Gedung Prima Headquarter Lt. 12</p>
                    <p className="text-[--text-primary] font-medium opacity-70">Jl. Jend. Sudirman Kav 19, Jakarta Selatan 12920</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[--accent-green] rounded-[16px] flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-600/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-[--primary-blue] text-sm uppercase tracking-widest font-extrabold mb-1">Hotline & Telp</h4>
                    <p className="text-[--text-primary] text-[28px] font-black leading-tight tracking-tight">(021) 1500-751</p>
                    <p className="text-[--text-primary] font-medium opacity-70">Senin - Jumat, 08:00 - 17:00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white border-2 border-[--primary-blue] rounded-[16px] flex items-center justify-center text-[--primary-blue] shrink-0 font-bold">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="text-[--primary-blue] text-sm uppercase tracking-widest font-extrabold mb-1">Surat Elektronik</h4>
                    <p className="text-[--text-primary] text-xl font-bold">cs@prima-abadi.co.id</p>
                    <p className="text-[--text-primary] font-medium opacity-70">Respon dalam waktu 2-4 jam kerja</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="group relative overflow-hidden bg-white rounded-[24px] shadow-lg border border-[--neutral-200] aspect-[16/10] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[--primary-blue]/5 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[--primary-blue] mb-4 group-hover:scale-110 transition-transform">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <h4 className="text-[--primary-blue] font-bold text-xl mb-1">Peta Lokasi Kantor</h4>
                <p className="text-[--text-primary] opacity-60 font-medium">Buka di Google Maps</p>
              </div>
              {/* Fake Map Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--primary-blue) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Banner - Simple divider */}
      <section className="bg-white border-y border-[--neutral-200] py-12">
        <div className="container text-center">
          <p className="text-[14px] font-bold text-[--text-primary] opacity-40 uppercase tracking-[0.2em] mb-0">Authorized Enterprise Solution Partner</p>
        </div>
      </section>
    </main>
  )
}

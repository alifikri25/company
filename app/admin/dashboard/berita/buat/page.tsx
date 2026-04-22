import { createBerita } from '@/app/actions/berita'
import AdminSidebar from '@/components/AdminSidebar'
import Link from 'next/link'

export default function BuatBerita() {
  return (
    <main style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <AdminSidebar />
      <div style={{ marginLeft: 260, flex: 1, padding: '40px 40px' }}>
        <Link href="/admin/dashboard/berita" style={{ color: 'var(--primary-blue)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>← Kembali</Link>
        <h1 style={{ fontSize: 28, color: 'var(--primary-blue)', marginBottom: 32 }}>Tulis Berita Baru</h1>

        <form action={createBerita} style={{ background: 'white', borderRadius: 16, border: '1px solid #e8ecf0', padding: 32, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 720, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Judul Publikasi</label>
            <input name="judul" required placeholder="Contoh: PT. TJS Raih Penghargaan Proper" style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>URL Gambar (Opsional)</label>
            <input name="gambarUrl" placeholder="https://..." style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Isi Konten</label>
            <textarea name="konten" required rows={8} placeholder="Tulis narasi lengkap berita..." style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none', resize: 'vertical' }}></textarea>
          </div>
          <button type="submit" style={{ background: 'var(--primary-blue)', color: 'white', padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-display)', alignSelf: 'flex-start' }}>
            Terbitkan Sekarang
          </button>
        </form>
      </div>
    </main>
  )
}

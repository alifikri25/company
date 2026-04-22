import { createKarir } from '@/app/actions/berita'
import AdminSidebar from '@/components/AdminSidebar'
import Link from 'next/link'

export default function BuatKarir() {
  return (
    <main style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <AdminSidebar />
      <div style={{ marginLeft: 260, flex: 1, padding: '40px 40px' }}>
        <Link href="/admin/dashboard/karir" style={{ color: 'var(--primary-blue)', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>← Kembali</Link>
        <h1 style={{ fontSize: 28, color: 'var(--primary-blue)', marginBottom: 32 }}>Buka Lowongan Baru</h1>

        <form action={createKarir} style={{ background: 'white', borderRadius: 16, border: '1px solid #e8ecf0', padding: 32, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 720, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Nama Posisi</label>
              <input name="posisi" required placeholder="Contoh: Staff Keuangan" style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Departemen</label>
              <input name="departemen" required placeholder="Contoh: Finance" style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Lokasi</label>
              <input name="lokasi" required placeholder="Contoh: Jakarta Selatan" style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Tipe Pekerjaan</label>
              <select name="tipe" style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none', background: 'white' }}>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Kontrak</option>
                <option>Magang</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Deskripsi Pekerjaan</label>
            <textarea name="deskripsi" required rows={5} placeholder="Jelaskan tanggung jawab posisi ini..." style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none', resize: 'vertical' }}></textarea>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>Persyaratan</label>
            <textarea name="persyaratan" required rows={5} placeholder="Tulis kualifikasi yang dibutuhkan..." style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1px solid #e8ecf0', fontSize: 15, outline: 'none', resize: 'vertical' }}></textarea>
          </div>
          <button type="submit" style={{ background: 'var(--primary-blue)', color: 'white', padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-display)', alignSelf: 'flex-start' }}>
            Publikasikan Lowongan
          </button>
        </form>
      </div>
    </main>
  )
}

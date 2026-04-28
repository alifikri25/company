import { getSemuaBerita, deleteBerita } from '@/app/actions/berita'
import AdminSidebar from '@/components/AdminSidebar'
import Link from 'next/link'

export default async function KelolaBerita() {
  const berita = await getSemuaBerita()

  return (
    <>
      <div className="center-content-non-desktop" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 4 }}>Kelola Berita</h1>
          <p style={{ color: 'var(--muted-blue)', fontSize: 15 }}>Tambah, edit, atau hapus publikasi perusahaan.</p>
        </div>
        <Link href="/admin/dashboard/berita/buat" style={{
          background: 'var(--primary-blue)', color: 'white', padding: '12px 24px',
          borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none',
          fontFamily: 'var(--font-display)'
        }}>
          + Tulis Berita Baru
        </Link>
      </div>

      <div className="admin-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: 16, color: 'var(--primary-blue)', fontWeight: 600 }}>Semua Berita ({berita.length})</h3>
        </div>
        {berita.length === 0 ? (
          <div style={{ padding: 48, textAlign: 'center', color: 'var(--muted-blue)' }}>Belum ada berita yang diterbitkan.</div>
        ) : berita.map(item => (
          <div key={item.id} style={{ padding: '20px 24px', borderBottom: '1px solid #f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }} className="center-content-non-desktop">
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 12, color: 'var(--muted-blue)', fontWeight: 600, marginBottom: 4, display: 'block' }}>{item.tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <h4 style={{ fontSize: 15, color: 'var(--text-primary)', marginBottom: 4 }}>{item.judul}</h4>
              <p style={{ fontSize: 13, color: 'var(--muted-blue)', display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>{item.konten}</p>
            </div>
            <form action={deleteBerita}>
              <input type="hidden" name="id" value={item.id} />
              <button type="submit" style={{ background: '#fef2f2', color: 'var(--accent-red)', border: '1px solid #fecaca', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Hapus</button>
            </form>
          </div>
        ))}
      </div>
    </>
  )
}

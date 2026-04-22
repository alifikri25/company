import { getSemuaKarir, deleteKarir, toggleKarir } from '@/app/actions/berita'
import AdminSidebar from '@/components/AdminSidebar'
import Link from 'next/link'

export default async function KelolaKarir() {
  const karir = await getSemuaKarir()

  return (
    <>
      <div className="center-content-non-desktop" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 4 }}>Kelola Karir</h1>
          <p style={{ color: 'var(--muted-blue)', fontSize: 15 }}>Buka atau tutup lowongan kerja perusahaan.</p>
        </div>
        <Link href="/admin/dashboard/karir/buat" style={{
          background: 'var(--primary-blue)', color: 'white', padding: '12px 24px',
          borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none',
          fontFamily: 'var(--font-display)'
        }}>
          + Buka Lowongan Baru
        </Link>
      </div>

      <div className="admin-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: 16, color: 'var(--primary-blue)', fontWeight: 600 }}>Daftar Lowongan ({karir.length})</h3>
        </div>
        {karir.length === 0 ? (
          <div style={{ padding: 48, textAlign: 'center', color: 'var(--muted-blue)' }}>Belum ada lowongan yang dibuka.</div>
        ) : karir.map(item => (
          <div key={item.id} style={{ padding: '20px 24px', borderBottom: '1px solid #f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }} className="center-content-non-desktop">
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }} className="center-content-non-desktop">
                <h4 style={{ fontSize: 15, color: 'var(--text-primary)' }}>{item.posisi}</h4>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: item.aktif ? '#ecfdf5' : '#fef2f2', color: item.aktif ? '#059669' : '#dc2626' }}>
                  {item.aktif ? 'Aktif' : 'Ditutup'}
                </span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted-blue)' }}>{item.departemen} · {item.lokasi} · {item.tipe}</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <form action={toggleKarir}>
                <input type="hidden" name="id" value={item.id} />
                <button type="submit" style={{ background: item.aktif ? '#fef9c3' : '#ecfdf5', color: item.aktif ? '#a16207' : '#059669', border: '1px solid ' + (item.aktif ? '#fde68a' : '#a7f3d0'), padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  {item.aktif ? 'Tutup' : 'Buka'}
                </button>
              </form>
              <form action={deleteKarir}>
                <input type="hidden" name="id" value={item.id} />
                <button type="submit" style={{ background: '#fef2f2', color: 'var(--accent-red)', border: '1px solid #fecaca', padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Hapus</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

import { getSemuaPesan, tandaiDibaca, deletePesan } from '@/app/actions/berita'
import AdminSidebar from '@/components/AdminSidebar'

export default async function InboxPesan() {
  const pesan = await getSemuaPesan()

  return (
    <main style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <AdminSidebar />
      <div style={{ marginLeft: 260, flex: 1, padding: '40px 40px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, color: 'var(--primary-blue)', marginBottom: 4 }}>Inbox Pesan</h1>
          <p style={{ color: 'var(--muted-blue)', fontSize: 15 }}>Pesan dari pengunjung melalui formulir Hubungi Kami.</p>
        </div>

        <div style={{ background: 'white', borderRadius: 16, border: '1px solid #e8ecf0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #e8ecf0' }}>
            <h3 style={{ fontSize: 16, color: 'var(--primary-blue)' }}>Semua Pesan ({pesan.length})</h3>
          </div>
          {pesan.length === 0 ? (
            <div style={{ padding: 48, textAlign: 'center', color: 'var(--muted-blue)' }}>Belum ada pesan masuk dari pengunjung.</div>
          ) : pesan.map(item => (
            <div key={item.id} style={{
              padding: '24px', borderBottom: '1px solid #f0f2f5',
              background: item.dibaca ? 'white' : '#f0f7ff'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, gap: 16 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <h4 style={{ fontSize: 15, color: 'var(--text-primary)' }}>{item.nama}</h4>
                    {!item.dibaca && <span style={{ fontSize: 10, background: 'var(--accent-red)', color: 'white', padding: '2px 8px', borderRadius: 20, fontWeight: 700 }}>Baru</span>}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--muted-blue)' }}>{item.email} · {item.subjek} · {item.tanggal.toLocaleDateString('id-ID')}</p>
                </div>
                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  {!item.dibaca && (
                    <form action={tandaiDibaca}>
                      <input type="hidden" name="id" value={item.id} />
                      <button type="submit" style={{ background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Tandai Dibaca</button>
                    </form>
                  )}
                  <form action={deletePesan}>
                    <input type="hidden" name="id" value={item.id} />
                    <button type="submit" style={{ background: '#fef2f2', color: 'var(--accent-red)', border: '1px solid #fecaca', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Hapus</button>
                  </form>
                </div>
              </div>
              <div style={{ background: '#f8fafc', padding: '16px 20px', borderRadius: 10, border: '1px solid #e8ecf0' }}>
                <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.7 }}>{item.pesan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

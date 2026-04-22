import { getStatistik, getSemuaBerita, getSemuaPesan } from '@/app/actions/berita'
import AdminSidebar from '@/components/AdminSidebar'
import Link from 'next/link'

export default async function AdminDashboard() {
  const stats = await getStatistik()
  const beritaTerbaru = await getSemuaBerita()
  const pesanTerbaru = await getSemuaPesan()

  return (
    <main style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <AdminSidebar />
      <div style={{ marginLeft: 260, flex: 1, padding: '40px 40px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, color: 'var(--primary-blue)', marginBottom: 4 }}>Dashboard</h1>
          <p style={{ color: 'var(--muted-blue)', fontSize: 15 }}>Selamat datang di Panel Administrasi PT. Tangguh Jaya Semesta</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 36 }}>
          {[
            { label: 'Total Berita', value: stats.totalBerita, icon: '📰', color: '#152673' },
            { label: 'Lowongan Aktif', value: stats.totalKarir, icon: '💼', color: '#0d8a4a' },
            { label: 'Total Pesan', value: stats.totalPesan, icon: '📩', color: '#2563eb' },
            { label: 'Pesan Baru', value: stats.pesanBaru, icon: '🔔', color: '#d12c2c' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 16, padding: '28px 24px',
              border: '1px solid #e8ecf0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontSize: 13, color: 'var(--muted-blue)', marginBottom: 8, fontWeight: 600 }}>{s.label}</p>
                  <p style={{ fontSize: 36, fontWeight: 800, color: s.color, fontFamily: 'var(--font-display)' }}>{s.value}</p>
                </div>
                <span style={{ fontSize: 32 }}>{s.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{
            background: 'white', borderRadius: 16, border: '1px solid #e8ecf0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden'
          }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #e8ecf0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: 16, color: 'var(--primary-blue)' }}>Berita Terbaru</h3>
              <Link href="/admin/dashboard/berita" style={{ fontSize: 13, color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'none' }}>Lihat Semua →</Link>
            </div>
            {beritaTerbaru.slice(0, 4).map(b => (
              <div key={b.id} style={{ padding: '16px 24px', borderBottom: '1px solid #f0f2f5' }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{b.judul}</p>
                <span style={{ fontSize: 12, color: 'var(--muted-blue)' }}>{b.tanggal.toLocaleDateString('id-ID')}</span>
              </div>
            ))}
            {beritaTerbaru.length === 0 && (
              <div style={{ padding: '40px 24px', textAlign: 'center', color: 'var(--muted-blue)', fontSize: 14 }}>Belum ada berita</div>
            )}
          </div>

          <div style={{
            background: 'white', borderRadius: 16, border: '1px solid #e8ecf0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden'
          }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #e8ecf0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: 16, color: 'var(--primary-blue)' }}>Pesan Masuk Terbaru</h3>
              <Link href="/admin/dashboard/pesan" style={{ fontSize: 13, color: 'var(--accent-red)', fontWeight: 600, textDecoration: 'none' }}>Lihat Semua →</Link>
            </div>
            {pesanTerbaru.slice(0, 4).map(p => (
              <div key={p.id} style={{ padding: '16px 24px', borderBottom: '1px solid #f0f2f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{p.nama}</p>
                  <p style={{ fontSize: 12, color: 'var(--muted-blue)' }}>{p.subjek}</p>
                </div>
                {!p.dibaca && <span style={{ fontSize: 10, background: 'var(--accent-red)', color: 'white', padding: '3px 8px', borderRadius: 20, fontWeight: 700 }}>Baru</span>}
              </div>
            ))}
            {pesanTerbaru.length === 0 && (
              <div style={{ padding: '40px 24px', textAlign: 'center', color: 'var(--muted-blue)', fontSize: 14 }}>Belum ada pesan masuk</div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

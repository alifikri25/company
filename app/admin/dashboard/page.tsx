import { getStatistik, getSemuaBerita, getSemuaPesan } from '@/app/actions/berita'
import Link from 'next/link'
import { Newspaper, Briefcase, Mail, Bell, ArrowRight } from 'lucide-react'

export default async function AdminDashboard() {
  const stats = await getStatistik()
  const beritaTerbaru = await getSemuaBerita()
  const pesanTerbaru = await getSemuaPesan()

  return (
    <>
      <header className="center-content-non-desktop" style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--primary-blue)', letterSpacing: '-0.02em' }}>Dashboard</h1>
      </header>

      <div className="admin-stats-grid">
        {[
          { label: 'Total Berita', value: stats.totalBerita, icon: Newspaper, color: '#3b82f6' },
          { label: 'Lowongan Aktif', value: stats.totalKarir, icon: Briefcase, color: '#10b981' },
          { label: 'Total Pesan', value: stats.totalPesan, icon: Mail, color: '#6366f1' },
          { label: 'Pesan Baru', value: stats.pesanBaru, icon: Bell, color: '#ef4444' },
        ].map((s, i) => (
          <div key={i} className="admin-card center-content-non-desktop" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="center-content-non-desktop">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.color}10`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <s.icon size={24} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }} className="stats-info">
                <p style={{ fontSize: 13, fontWeight: 500, color: '#64748b', marginBottom: 2 }}>{s.label}</p>
                <p style={{ fontSize: 24, fontWeight: 700, color: '#1e293b' }}>{s.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-content-grid">
        <div className="admin-card" style={{ overflow: 'hidden' }}>
          <div className="center-content-non-desktop" style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1e293b' }}>Berita Terbaru</h3>
            <Link href="/admin/dashboard/berita" style={{ fontSize: 12, color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              Manage <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {beritaTerbaru.slice(0, 5).map(b => (
              <div key={b.id} style={{ padding: '12px 20px', borderBottom: '1px solid #f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="center-content-non-desktop">
                <span style={{ fontSize: 13, color: '#334155', fontWeight: 500 }}>{b.judul}</span>
                <span style={{ fontSize: 11, color: '#94a3b8' }}>{b.tanggal.toLocaleDateString('id-ID')}</span>
              </div>
            ))}
            {beritaTerbaru.length === 0 && (
              <div style={{ padding: '32px', textAlign: 'center', color: '#94a3b8', fontSize: 13 }}>No news items yet</div>
            )}
          </div>
        </div>

        <div className="admin-card" style={{ overflow: 'hidden' }}>
          <div className="center-content-non-desktop" style={{ padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1e293b' }}>Recent Messages</h3>
            <Link href="/admin/dashboard/pesan" style={{ fontSize: 12, color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              Inbox <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {pesanTerbaru.slice(0, 5).map(p => (
              <div key={p.id} style={{ padding: '12px 20px', borderBottom: '1px solid #f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="center-content-non-desktop">
                <div style={{ display: 'flex', flexDirection: 'column' }} className="stats-info">
                  <p style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>{p.nama}</p>
                  <p style={{ fontSize: 11, color: '#64748b' }}>{p.subjek}</p>
                </div>
                {!p.dibaca && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }}></span>}
              </div>
            ))}
            {pesanTerbaru.length === 0 && (
              <div style={{ padding: '32px', textAlign: 'center', color: '#94a3b8', fontSize: 13 }}>Inbox is empty</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

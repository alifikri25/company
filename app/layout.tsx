import { Metadata } from 'next'
import './globals.css'
import Chrome from '../components/Chrome'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'PT. Tangguh Jaya Semesta - Penyediaan Alat & Transportasi Nasional',
  description: 'Enterprise solusi sewa transportasi dan peralatan IT di seluruh wilayah operasional Indonesia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Chrome footer={<Footer />}>
          {children}
        </Chrome>
      </body>
    </html>
  )
}

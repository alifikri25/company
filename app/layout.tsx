import { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'PT. Tangguh Jaya Semesta - Penyediaan Alat & Transportasi Nasional',
  description: 'Enterprise solusi sewa transportasi dan peralatan IT di seluruh wilayah operasional Indonesia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <html lang="id" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

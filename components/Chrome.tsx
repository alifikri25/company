'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function Chrome({ children, footer }: { children: React.ReactNode, footer: React.ReactNode }) {
  const pathname = usePathname()
  
  // Jika halaman admin, sembunyikan Navbar dan Footer
  if (pathname.startsWith('/admin')) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
      {footer}
    </>
  )
}

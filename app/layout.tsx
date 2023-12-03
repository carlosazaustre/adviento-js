import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

export const metadata: Metadata = {
  title: 'JavaScript: Calendario de Adviento',
  description: 'Un tip de JavaScript diario hasta Navidad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={GeistSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

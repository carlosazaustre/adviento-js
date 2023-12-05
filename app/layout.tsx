import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://advientojs.dev'),
  title: 'JavaScript: Calendario de Adviento',
  description: 'Un tip de JavaScript diario hasta Navidad',
  openGraph: {
    title: 'Adviento de JavaScript',
    description: 'Aprende JavaScript estas navidades, con un vídeo al día de menos de 1 minuto',
    url: 'https://advientojs.dev',
    siteName: 'Adviento JS',
    locale: 'es',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Adviento JS',
    card: 'summary_large_image',
  }
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
        <SpeedInsights />
      </body>
    </html>
  )
}

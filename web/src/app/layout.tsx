import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { PreloaderProvider } from '@/components/providers/PreloaderProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://joyeriaeterna.com'),
  title: 'Joyeria Eterna - Piezas de Alta Gama',
  description: 'Joyería artesanal de lujo en Polanco. Anillos de compromiso, diseño personalizado y restauración. 8 años creando legados que perduran.',
  keywords: 'joyería, Polanco, anillos compromiso, oro, diamantes, CDMX, joyería artesanal, alta gama',
  authors: [{ name: 'Joyería Eterna' }],
  creator: 'María González Rodríguez',
  publisher: 'Joyería Eterna',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Joyería Eterna - Elegancia que Perdura',
    description: 'Descubre piezas únicas de alta joyería en el corazón de Polanco. Anillos de compromiso, diseño personalizado y restauración.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Joyería Eterna',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Joyería Eterna Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joyería Eterna - Piezas de Alta Gama',
    description: 'Joyería artesanal de lujo en Polanco. 8 años creando legados que perduran.',
    images: ['/logo.png'],
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2F4F4F',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-luxury-dark`}>
        <PreloaderProvider>
          {children}
        </PreloaderProvider>
      </body>
    </html>
  )
}
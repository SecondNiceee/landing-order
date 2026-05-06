import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'ЛСК-НН | Материалы верхнего строения пути',
  description: 'Поставки железнодорожных материалов ВСП: рельсы, шпалы, крепежные материалы, путевой инструмент, запчасти для вагонов. Более 35 лет на рынке. Доставка по всей России.',
  keywords: 'ВСП, материалы ВСП, рельсы, шпалы, крепежные материалы, путевой инструмент, запчасти для вагонов, железнодорожные материалы, ЛСК-НН',
  icons: {
    icon: '/favicon.jpg',
  },
  openGraph: {
    title: 'ЛСК-НН | Материалы верхнего строения пути',
    description: 'Поставки железнодорожных материалов ВСП по всей России. Более 35 лет на рынке.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

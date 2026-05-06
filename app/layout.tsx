import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const siteUrl = 'https://asp-ekt.ru'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ЛСК-НН | Материалы верхнего строения пути',
    template: '%s | ЛСК-НН'
  },
  description: 'Поставки железнодорожных материалов ВСП: рельсы, шпалы, крепежные материалы, путевой инструмент, запчасти для вагонов. Более 35 лет на рынке. Доставка по всей России.',
  keywords: ['ВСП', 'материалы ВСП', 'рельсы', 'шпалы', 'крепежные материалы', 'путевой инструмент', 'запчасти для вагонов', 'железнодорожные материалы', 'ЛСК-НН', 'железнодорожные поставки', 'Нижний Новгород'],
  authors: [{ name: 'ЛСК-НН' }],
  creator: 'ЛСК-НН',
  publisher: 'ЛСК-НН',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: `${siteUrl}/favicon.ico`, sizes: 'any' },
      { url: `${siteUrl}/icon.svg`, type: 'image/svg+xml' },
    ],
    apple: `${siteUrl}/favicon.ico`,
    shortcut: `${siteUrl}/favicon.ico`,
  },
  openGraph: {
    title: 'ЛСК-НН | Материалы верхнего строения пути',
    description: 'Поставки железнодорожных материалов ВСП по всей России. Более 35 лет на рынке. Рельсы, шпалы, крепежные материалы, путевой инструмент.',
    url: siteUrl,
    siteName: 'ЛСК-НН',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ЛСК-НН - Материалы верхнего строения пути',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ЛСК-НН | Материалы верхнего строения пути',
    description: 'Поставки железнодорожных материалов ВСП по всей России. Более 35 лет на рынке.',
    images: [`${siteUrl}/og-image.jpg`],
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
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ЛСК-НН',
  alternateName: 'ЛСК-НН Материалы ВСП',
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description: 'Поставки железнодорожных материалов верхнего строения пути по всей России. Более 35 лет на рынке.',
  foundingDate: '1989',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Нижний Новгород',
    addressCountry: 'RU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['Russian'],
  },
  sameAs: [],
  areaServed: {
    '@type': 'Country',
    name: 'Россия',
  },
  knowsAbout: [
    'Рельсы',
    'Шпалы',
    'Крепежные материалы',
    'Путевой инструмент',
    'Запчасти для вагонов',
    'Материалы ВСП',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

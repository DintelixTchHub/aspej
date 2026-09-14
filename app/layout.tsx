import { Analytics } from '@vercel/analytics/next'
import { Bubblegum_Sans, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { PlatformSplash } from '@/components/layout/platform-splash'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const bubblegumSans = Bubblegum_Sans({
  subsets: ['latin'],
  variable: '--font-bubblegum-sans',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ASPEJ | Lycée du Lac Muhazi',
    template: '%s | ASPEJ',
  },
  description: 'ASPEJ Lycée du Lac Muhazi offers practical technical and vocational education in Rwamagana, Rwanda.',
  applicationName: 'ASPEJ',
  keywords: [
    'ASPEJ',
    'Lycée du Lac Muhazi',
    'TVET Rwanda',
    'technical education Rwamagana',
    'vocational training Rwanda',
  ],
  authors: [{ name: 'ASPEJ' }],
  creator: 'ASPEJ',
  publisher: 'ASPEJ',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/images/aspej-logo.jpg', type: 'image/jpeg' }],
    apple: [{ url: '/images/aspej-logo.jpg', type: 'image/jpeg' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'ASPEJ',
    title: 'ASPEJ | Lycée du Lac Muhazi',
    description: 'Practical technical and vocational education for the next generation in Rwanda.',
    url: '/',
    images: [{ url: '/images/Pixabc.com_Compressed_to_100percent_aspejSchool.jpg', width: 1200, height: 630, alt: 'ASPEJ campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASPEJ | Lycée du Lac Muhazi',
    description: 'Practical technical and vocational education for the next generation in Rwanda.',
    images: ['/images/Pixabc.com_Compressed_to_100percent_aspejSchool.jpg'],
  },
  generator: 'ASPEJ',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2BBBD7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`bg-background ${manrope.variable} ${bubblegumSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="antialiased">
        <PlatformSplash />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

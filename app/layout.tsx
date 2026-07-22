import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { jsonLd } from '@/lib/schema';
import { business } from '@/lib/content';

const editorial = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-editorial',
  display: 'swap',
});

const modern = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-modern',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#04141d',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: 'Georgia Plaster & Tile | Luxury Pool Tile, Plaster & Renovation · Atlanta',
    template: '%s | Georgia Plaster & Tile',
  },
  description:
    'Luxury pool tile installation, plaster & pebble finishes, glass mosaic and pool renovation across East Cobb and Greater Atlanta. Artisan craftsmanship for 20+ years.',
  keywords: [
    'pool tile installation Georgia',
    'luxury pool renovation Atlanta',
    'swimming pool remodeling',
    'glass mosaic pool tile',
    'pool plaster services',
    'pool restoration Georgia',
    'custom pool tile installation',
    'luxury outdoor living Atlanta',
    'waterline tile', 'travertine pool deck',
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  alternates: { canonical: business.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.url,
    siteName: business.name,
    title: 'Luxury Pool Tile & Plaster Artisans · Georgia Plaster & Tile',
    description:
      'Where craftsmanship meets water. Luxury pool tile, plaster, glass mosaic and renovation across Greater Atlanta.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Luxury pool with hand-set mosaic tile by Georgia Plaster & Tile' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgia Plaster & Tile · Luxury Pool Tile & Plaster',
    description: 'Artisan pool tile, plaster and renovation across Greater Atlanta.',
    images: ['/og.jpg'],
  },
  category: 'Home & Construction',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${editorial.variable} ${modern.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

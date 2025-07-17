import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SixthSenseFooter } from '@/components/ui/Footer';
import DarkVeil from '@/components/DarkVeil';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 metadataBase: new URL('http://localhost:3001'),
  title: 'Apple Leaf Disease Detection | AI-Powered Plant Health Analysis',
  description: 'Advanced AI-powered apple leaf disease detection system...',
  keywords: 'apple disease, leaf diagnosis, plant health, AI detection, agriculture, farming',
  authors: [{ name: 'Apple Disease AI Team' }],
  // viewport: 'width=device-width, initial-scale=1',
  // themeColor: '#9333EA',
  openGraph: {
    title: 'Apple Leaf Disease Detection',
    description: 'AI-powered disease detection for healthier apple crops',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Leaf Disease Detection',
    description: 'AI-powered disease detection for healthier apple crops',
  },
};
export const viewport = {
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#9333EA'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <DarkVeil />
        </div>
        <ErrorBoundary>
          <main className="flex flex-col min-h-screen relative">
            {children}
            <SixthSenseFooter />
          </main>
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  );
}
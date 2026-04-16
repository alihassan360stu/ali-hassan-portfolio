import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ali Hassan - Senior Automation & Web Solutions Engineer | Portfolio',
  description: 'Expert Senior Automation & Web Solutions Engineer with 4+ years of experience building scalable SaaS platforms, enterprise automation systems, and high-performance web applications. Specialized in workflow automation, full-stack development, and API integration.',
  keywords: [
    'Automation Engineer',
    'Senior Web Developer', 
    'SaaS Development',
    'Next.js Expert',
    'React Developer',
    'TypeScript Specialist',
    'Workflow Automation',
    'Enterprise Solutions',
    'Full Stack Developer',
    'API Development',
    'Performance Optimization',
    'DevOps Engineer'
  ],
  authors: [{ name: 'Ali Hassan' }],
  creator: 'Ali Hassan',
  publisher: 'Ali Hassan',
  metadataBase: new URL('https://alihassan.dev'),
  alternates: {
    canonical: 'https://alihassan.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alihassan.dev',
    title: 'Ali Hassan - Senior Automation & Web Solutions Engineer',
    description: 'Expert Senior Automation & Web Solutions Engineer with 4+ years of experience building scalable SaaS platforms, enterprise automation systems, and high-performance web applications.',
    siteName: 'Ali Hassan Portfolio',
    images: [
      {
        url: 'https://alihassan.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Hassan - Automation & Web Solutions Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Hassan - Senior Automation & Web Solutions Engineer',
    description: 'Expert Senior Automation & Web Solutions Engineer with 4+ years of experience building scalable SaaS platforms, enterprise automation systems, and high-performance web applications.',
    site: '@alihassan',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div id="root" className="min-h-screen bg-gray-950 text-gray-100">
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

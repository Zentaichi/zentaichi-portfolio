import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/app.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zentaichi - Full Stack Developer',
  description: 'Modern portfolio showcasing web development projects',
  openGraph: {
    title: 'Zentaichi - Full Stack Developer',
    description: 'Modern portfolio showcasing web development projects',
    url: 'https://yoursite.com',
    siteName: 'Zentaichi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
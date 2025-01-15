import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MotionConfig } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stars Preschool Registration',
  description: '2025 Applications for Stars Preschool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800`}>
        <MotionConfig reducedMotion="user">
          <div className="min-h-screen bg-gray-900">
            <header className="bg-gray-700 text-gray-300 p-4">
              <h1 className="text-2xl font-bold">Stars Preschool</h1>
            </header>
            <main className="container mx-auto p-4">
              {children}
            </main>
            <footer className="bg-gray-700 text-gray-300 p-4 mt-8">
              <p>&copy; 2025 Stars Preschool</p>
            </footer>
          </div>
        </MotionConfig>
      </body>
    </html>
  )
}


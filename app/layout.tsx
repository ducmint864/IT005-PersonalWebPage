import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopBar from './components/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT005 Personal Webpage',
  description: 'Powered by NextJS - TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex flex-col">
            <TopBar />
            {children}
          </div>
      </body>
    </html>
  )
}

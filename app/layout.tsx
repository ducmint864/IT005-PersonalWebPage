"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopBar from './components/TopBar'
import { BlurContext } from './components/ProjectModal'
import { useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const outsideBlurred: boolean = useContext(BlurContext);
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

'use client'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vignesh Manikandan | Software Engineer',
  description: 'Vignesh Manikandan is a software engineer specializing in building exceptional digital experiences.',
}

export function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy text-slate antialiased`}>
        {children}
      </body>
    </html>
  )
}
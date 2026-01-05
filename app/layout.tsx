import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alejandro Fernandez | AI-Powered Web Solutions',
  description: 'Fix broken websites, recover lost leads, and automate your business with AI-powered solutions. Same-day service available.',
  keywords: 'web development, AI automation, website fixes, lead recovery, chatbot development, Orlando developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

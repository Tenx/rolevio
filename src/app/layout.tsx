import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rolevio - AI Brand Agent Platform',
  description: 'Role + Evolution | 让每个品牌都拥有自己的AI营销团队',
  keywords: ['AI', 'Marketing', 'Brand Agent', 'Content Generation', 'Automation'],
  authors: [{ name: 'Rolevio' }],
  openGraph: {
    title: 'Rolevio - AI Brand Agent Platform',
    description: '让每个品牌都拥有自己的AI营销团队',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">{children}</body>
    </html>
  )
}

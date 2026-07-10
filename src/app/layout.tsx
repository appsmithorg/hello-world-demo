import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'A simple Hello World demo site built with Kite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

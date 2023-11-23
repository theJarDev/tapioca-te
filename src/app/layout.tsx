import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from './ui/Header';
import Footer from './ui/Footer';

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin'], weight: ['100', '300', '400', '500', '600', '700']})

export const metadata: Metadata = {
  title: 'Tapioca Té',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} h-screen flex flex-col`}>
        <Header />
        <main className='grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

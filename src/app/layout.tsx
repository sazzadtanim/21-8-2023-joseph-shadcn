'use client'
import { Actor, Averia_Libre, Lato } from 'next/font/google'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Suspense } from 'react'
import Aside from '../components/Other/Aside'
import Footer from '../components/Other/Footer'
import TopSection from '../components/Other/TopSection'
import Loading from './competing_products/loading'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
})

const averia = Averia_Libre({
  subsets: ['latin'],
  weight: ['400', '300'],
  variable: '--font-averia',
})

const actor = Actor({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-actor',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = useSelectedLayoutSegment()
  return (
    <html lang='en'>
      <body
        className={`${lato.variable} ${averia.variable} ${actor.variable} min-h-screen antialiased [&::-webkit-scrollbar]:hidden`}
      >
        <div className='flex h-screen bg-gray-light font-lato '>
          <Aside />
          <div className='bg-gray-800 relative mx-auto max-w-[1272px] flex-1 p-2'>
            <div className='flex flex-col gap-10'>
              {/* Header */}

              <Suspense fallback={<Loading />}>
                <TopSection />
              </Suspense>

              {/* main */}

              {children}

              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

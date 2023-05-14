import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modal/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'


export const metadata = {
  title: 'Airbnb Clone By Montasir Mahmud',
  description: 'This is practice app by montasir mahmud',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <main>{children}</main>
      </body>
    </html>
  )
}

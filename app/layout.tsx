import styles from './layout.module.css'
import './globals.css'
import Navbar from './ui/Navbar'
import { Footer } from './ui/Footer'

export const metadata = {
  title: 'Apps',
  description: 'Apps made by Seeingu',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <main className={styles.main}>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

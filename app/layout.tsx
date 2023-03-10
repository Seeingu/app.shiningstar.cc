import './globals.css'
import { MainPage } from './MainPage'

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
        <MainPage >
          {children}
        </MainPage>
      </body>
    </html>
  )
}

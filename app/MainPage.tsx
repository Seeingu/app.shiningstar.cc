'use client'
import styles from './layout.module.css'
import Navbar from './ui/Navbar'
import { Footer } from './ui/Footer'


interface Props {
    children: React.ReactNode
}

export const MainPage = ({ children }: Props) => {
    return <main className={styles.main}>
        <Navbar />
        {children}
        <Footer />
    </main>
}
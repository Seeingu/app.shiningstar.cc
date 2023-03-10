'use client'
import Link from "next/link"
import { CSSProperties } from "react"
import { useTranslation } from "../hooks/useLocale"
import { Center } from "./Center"

// MARK: style
const textStyle: CSSProperties = {
    color: 'gray'
}


// MARK: Component

const Divider = () => {
    return <div style={{ width: '1rem', background: 'transparent' }} />
}

export const Footer = () => {
    const t = useTranslation()
    return <Center>
        <Link target={'_blank'} href="https://github.com/Seeingu">
            <span style={textStyle}>
                {t('About')}
            </span>
        </Link>
        <Divider />
        <Link href="/contact">
            <span style={textStyle}>
                {t('Contact')}
            </span>
        </Link>
    </Center>
}
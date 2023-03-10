'use client'
import { CSSProperties } from "react"
import { useTranslation } from "../hooks/useLocale"
import { copyToClipboard } from "../useCopyToClipboard"

// MARK: style
const containerStyles: CSSProperties = {
    alignSelf: 'flex-start'
}
const linkStyle: CSSProperties = {
    color: 'lightcoral',
    cursor: 'pointer'
}

// MARK: Page
export default function Contact() {
    const t = useTranslation()

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement
        copyToClipboard(target.innerText)
    }
    return <div style={containerStyles}>
        <h2>{t('Contact')}</h2>
        <p>{t('contact.info')}</p>
        <ul>
            <li>
                <p>{t('Email:')} <span style={linkStyle} onClick={handleClick}>seeingasu@gmail.com
                </span></p>
            </li>
            <li>
                <p>{t('Social Media:')} <span style={linkStyle} onClick={handleClick}>mastodon.social/@seeingasu</span>
                </p>
            </li>
            <p></p>
        </ul>

    </div>
}
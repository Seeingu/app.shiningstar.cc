'use client'
import { CSSProperties } from "react"
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

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement
        copyToClipboard(target.innerText)
    }
    return <div style={containerStyles}>
        <h2>Contact</h2>
        <p>If you have any question or suggestion, contact me with following ways: (click link to copy)</p>
        <ul>
            <li>
                <p>Email: <span style={linkStyle} onClick={handleClick}>seeingasu@gmail.com
                </span></p>
            </li>
            <li>
                <p>Social Media: <span style={linkStyle} onClick={handleClick}>mastodon.social/@seeingasu</span>
                </p>
            </li>
            <p></p>
        </ul>

    </div>
}
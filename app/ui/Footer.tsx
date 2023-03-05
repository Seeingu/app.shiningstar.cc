import Link from "next/link"
import { CSSProperties } from "react"
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
    return <Center>
        <Link target={'_blank'} href="https://github.com/Seeingu">
            <span style={textStyle}>
                About
            </span>
        </Link>
        <Divider />
        <Link href="/contact">
            <span style={textStyle}>
                Contact
            </span>
        </Link>
    </Center>
}
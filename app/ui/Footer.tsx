import Link from "next/link"
import { CSSProperties } from "react"
import { Center } from "./Center"

// MARK: style
const textStyle: CSSProperties = {
    color: 'gray'
}


// MARK: Component

export const Footer = () => {
    return <Center>
        <Link target={'_blank'} href="https://github.com/Seeingu">
            <span style={textStyle}>
                About
            </span>
        </Link>


    </Center>
}
'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useRequestApps } from '../request'
import { AppIcon, Icon } from './Icon'
import { IoChevronBackOutline } from 'react-icons/io5'
import { useMemo } from 'react'
import { titleFont } from '../font'


const Brand = () => {
    let router = useRouter()
    const pathName = usePathname()


    const handleClick = () => {
        router.push('/')
    }

    const isRoot = useMemo(() => pathName === "/", [pathName])

    const size = 64
    return <div onClick={handleClick} style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '32px',
    }} >
        {!isRoot &&
            <IoChevronBackOutline color={'#3AD9BC'} size={size * 0.67} />
        }
        <Icon url={'/App_Icon.png'} width={size} height={size} />
    </div >
}

const NavList = () => {
    const apps = useRequestApps()
    return <div>
        {apps.map(app =>
            <Link key={app.name} href={`/${app.name.toLowerCase()}`}>
                <span
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: app.accentColor,
                        ...titleFont.style
                    }}>{app.name}</span>
            </Link>
        )}

    </div>
}
const Navbar = () => {
    return <nav
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
        }}>
        <Brand />
        <NavList />
    </nav>
}
export default Navbar
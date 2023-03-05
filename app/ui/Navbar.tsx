'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useRequestApps } from '../request'
import { Icon } from './Icon'
import { IoChevronBackOutline } from 'react-icons/io5'
import { useMemo } from 'react'
import { titleFont } from '../font'
import { AppStruct } from '../shared/AppStruct'


const useIsRootPath = () => {
    const pathName = usePathname()
    return useMemo(() => pathName === "/", [pathName])
}

const Brand = () => {
    let router = useRouter()


    const handleClick = () => {
        router.push('/')
    }

    const isRoot = useIsRootPath()

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

    const pathname = usePathname()

    const activeApp = useMemo<AppStruct | undefined>(() => {
        if (!pathname) return undefined
        return apps.find(app => pathname.startsWith(app.path))
    }, [apps, pathname])

    return <div>
        {activeApp ?
            activeApp.subpaths.map(subpath =>
                <Link key={subpath.name} href={subpath.path}>
                    <span
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: activeApp.accentColor,
                            opacity: 0.6,
                            ...titleFont.style
                        }}>{subpath.name}</span>
                </Link>
            )
            :
            apps.map(app =>
                <Link key={app.name} href={app.path}>
                    <span
                        style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: app.accentColor,
                            ...titleFont.style
                        }}>{app.name}</span>
                </Link>
            )
        }

    </div>
}
const Navbar = () => {
    return <nav
        style={{
            // FIXME: how sticky works?
            position: 'sticky',
            top: 20,
            zIndex: 100,
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
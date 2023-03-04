'use client'

import { AppStruct, Platform, PlatformOS } from '../shared/AppStruct'
import { HStack } from './HStack'
import { VStack } from './VStack'
import Link from 'next/link'
import { IoPhonePortraitOutline, IoDesktopOutline } from 'react-icons/io5'
import { AppIcon, DownloadOniOSStoreIcon, DownloadOnmacOSStoreIcon } from './Icon'
import { useIsModile } from '../platformCheck'
import { descriptionFont, titleFont } from '../font'

// MARK: App Intro
const PlatformLink = ({ platform }: { platform: Platform }) => {
    const isMobile = useIsModile()
    let link = platform.links[0]
    if (link == undefined) {
        return null
    }
    // phone or tablet
    if (isMobile && platform.os !== PlatformOS.macOS) {
        return <Link href={link.url}>
            <DownloadOniOSStoreIcon url={link.icon} />
        </Link>
    }
    // desktop
    if (!isMobile && platform.os === PlatformOS.macOS) {
        return <Link href={link.url}>
            <DownloadOnmacOSStoreIcon url={link.icon} />
        </Link>

    }

    // check platform failed, show all icons
    return <HStack>
        {platform.links.map(link =>
            <Link key={link.url} href={link.url}>
                {platform.os == PlatformOS.macOS ?
                    <DownloadOnmacOSStoreIcon url={link.icon} />
                    :
                    <DownloadOniOSStoreIcon url={link.icon} />
                }
            </Link>
        )}
    </HStack>
}

export const AppIntro = ({ app }: { app: AppStruct }) => {
    return <HStack key={app.name}>
        <AppIcon url={app.icon} />
        <VStack alignment="leading">
            <div>
                <h2 style={{ ...titleFont.style }}>{app.name}</h2>
                <p style={{ ...descriptionFont.style, color: 'gray' }}>{app.description}</p>
            </div>
            <HStack alignment={'leading'}>
                <IoDesktopOutline size={32} />
                <IoPhonePortraitOutline size={32} />
            </HStack>
            <HStack>
                {app.platforms.map(platform =>
                    <PlatformLink key={platform.os} platform={platform} />
                )}
            </HStack>
        </VStack>
    </HStack>
}
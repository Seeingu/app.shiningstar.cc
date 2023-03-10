'use client'

import { AppStruct, Platform, PlatformOS } from '../shared/AppStruct'
import { HStack } from './HStack'
import { VStack } from './VStack'
import Link from 'next/link'
import { IoPhonePortraitOutline, IoDesktopOutline } from 'react-icons/io5'
import { AppIcon, DownloadOniOSStoreIcon, DownloadOnmacOSStoreIcon } from './Icon'
import { useIsModile } from '../platformCheck'
import { descriptionFont, titleFont } from '../font'
import { useTranslation } from '../hooks/useLocale'

// MARK: App Intro
const PlatformLink = ({ platform }: { platform: Platform }) => {
    const isMobile = useIsModile()
    let link = platform.links[0]
    if (link == undefined) {
        return null
    }
    return <Link target={'_blank'} href={link.url}>
        <DownloadOniOSStoreIcon url={link.icon} />
    </Link>
}

export const AppIntro = ({ app }: { app: AppStruct }) => {
    const t = useTranslation()
    return <HStack>
        <AppIcon url={app.icon} />

        <VStack style={{
            minWidth: '16rem'
        }} alignment="leading">
            <div>
                <h2 style={{ ...titleFont.style }}>{t(app.name)}</h2>
                <p style={{ ...descriptionFont.style, color: 'gray' }}>{t(app.description)}</p>
            </div>
            <HStack alignment={'leading'}>
                <IoDesktopOutline size={32} />
                <IoPhonePortraitOutline size={32} />
            </HStack>
            <PlatformLink key={app.platform.os} platform={app.platform} />
        </VStack>
    </HStack>
}
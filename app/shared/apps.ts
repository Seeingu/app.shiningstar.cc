import { AppStruct, PlatformOS } from "./AppStruct"

export const knockApp: AppStruct = {
    name: 'KnockKnock',
    path: '/knock',
    description: 'Counter and notification',
    icon: '/Knock_Icon.png',
    accentColor: '#5AADD0',
    subpaths: [{ name: 'Privacy', path: '/knock/privacy' }],
    screenshots: [{
        os: PlatformOS.iOS,
        url: '/Knock_iOS Home_History_List.png'
    }, {
        os: PlatformOS.iOS,
        url: '/Knock_iOS_notification.png'
    }, {
        os: PlatformOS.macOS,
        url: '/Knock_macOS.png'
    }],
    platform: {
        os: PlatformOS.iOS,
        links: [
            {
                icon: '/Knock_download_iOS.svg',
                url: 'https://apps.apple.com/cn/app/knockknock/id6445857934'
            }
        ]
    }
}

export const apps: [AppStruct] = [knockApp]
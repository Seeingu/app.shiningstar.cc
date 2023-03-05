import { AppStruct, PlatformOS } from "./AppStruct"

export const knockApp: AppStruct = {
    name: 'Knock',
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
    platforms: [{
        os: PlatformOS.macOS,
        links: [{
            icon: '/Knock_download_macOS.svg',
            // TODO: add download link
            url: ''
        }]
    }, {
        os: PlatformOS.iOS,
        links: [
            {
                icon: '/Knock_download_iOS.svg',
                url: ''
            }
        ]
    }
    ],
}

export const apps: [AppStruct] = [knockApp]
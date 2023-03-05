type URL = string
export enum PlatformOS {
    macOS = 'macOS',
    iOS = 'iOS',
    iPadOS = 'iPadOS'
}
export interface CommonLink {
    icon: URL
    url: URL

}
export interface Platform {
    os: PlatformOS
    links: Array<CommonLink>
}

export interface Screenshot {
    os: PlatformOS
    url: URL
}
export interface AppStruct {
    name: string
    path: string
    subpaths: Array<{ name: string, path: string }>
    description: string
    icon: URL
    accentColor: string
    screenshots: Array<Screenshot>
    platforms: Array<Platform>
} 
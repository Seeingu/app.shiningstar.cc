import Image from "next/image"

interface Props {
    url: string,
    width?: number
    height?: number
}
export const Icon = (props: Props) => {
    const { url, width, height } = props

    return <Image alt={url} src={url} width={width} height={height} />
}
export const DownloadOniOSStoreIcon = ({ url }: { url: string }) => {
    return <Icon url={url} width={120} height={40} />
}
export const DownloadOnmacOSStoreIcon = ({ url }: { url: string }) => {
    return <Icon url={url} width={160} height={40} />
}
export const AppIcon = ({ url }: { url: string }) => {
    return <Icon url={url} width={256} height={256} />
}
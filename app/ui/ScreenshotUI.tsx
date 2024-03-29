import Image from "next/image";
import { titleFont } from "../font";
import { useTranslation } from "../hooks/useLocale";
import { AppStruct, PlatformOS, Screenshot } from "../shared/AppStruct";
import { HStack } from "../ui/HStack";
import { VStack } from "../ui/VStack";

const PlatformScreenshotSection = (props: { platform: PlatformOS, list: Screenshot[] }) => {
    const { platform, list } = props
    const title = platform === PlatformOS.macOS ? "macOS" : "iOS"
    return <div style={{ width: '100%', padding: '1rem 0' }}>
        <h3>{title}</h3>
        <HStack>
            {list.map(s => {
                let width = 1280 / 2
                let height = 960 / 2
                if (s.os !== PlatformOS.macOS) {
                    width = 1179 / 4
                    height = 2556 / 4
                }
                return <Image key={s.url} alt={s.url} src={s.url} width={width} height={height} />
            })}
        </HStack>
    </div>
}

export const Screenshots = ({ app }: { app: AppStruct }) => {
    // only show first three screenshots
    const iOSScreenshots = app.screenshots.filter(s => s.os === PlatformOS.iOS).slice(0, 3)
    const macOSScreenshots = app.screenshots.filter(s => s.os === PlatformOS.macOS).slice(0, 3)
    const t = useTranslation()

    return <div style={{ width: '100%' }}>
        <h2 style={{
            fontWeight: 'bold',
            padding: '16px 0',
            ...titleFont.style
        }} >{t('Screenshots')}</h2>
        <VStack >
            <PlatformScreenshotSection list={iOSScreenshots} platform={PlatformOS.iOS} />

            <PlatformScreenshotSection list={macOSScreenshots} platform={PlatformOS.macOS} />

        </VStack>
    </div>
}
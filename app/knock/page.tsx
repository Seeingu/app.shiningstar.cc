import Image from "next/image";
import { platform } from "os";
import { titleFont } from "../font";
import { knockApp } from "../shared/apps";
import { AppStruct, PlatformOS, Screenshot } from "../shared/AppStruct";
import { AppIntro } from "../ui/AppIntro";
import { HStack } from "../ui/HStack";
import { VStack } from "../ui/VStack";

const PlatformScreenshotSection = (props: { platform: PlatformOS, list: Screenshot[] }) => {
    const { platform, list } = props
    const title = platform === PlatformOS.macOS ? "macOS" : "iOS"
    return <div style={{ padding: '1rem 0' }}>
        <h3>{title}</h3>
        <HStack>
            {list.map(s => {
                let width = 1280 / 2
                let height = 960 / 2
                if (s.os !== PlatformOS.macOS) {
                    width = 1179 / 4
                    height = 2556 / 4
                }

                return <Image alt={s.url} src={s.url} width={width} height={height} />
            })}

        </HStack>

    </div>
}

const Screenshots = ({ app }: { app: AppStruct }) => {
    // only show first three screenshots
    const iOSScreenshots = app.screenshots.filter(s => s.os === PlatformOS.iOS).slice(0, 3)
    const macOSScreenshots = app.screenshots.filter(s => s.os === PlatformOS.macOS).slice(0, 3)

    return <div>
        <h2 style={{
            fontWeight: 'bold',
            padding: '16px 0',
            ...titleFont.style
        }} >Screenshots</h2>
        <VStack >
            <PlatformScreenshotSection list={iOSScreenshots} platform={PlatformOS.iOS} />

            <PlatformScreenshotSection list={macOSScreenshots} platform={PlatformOS.macOS} />

        </VStack>
    </div>
}

export default function Index() {
    return <VStack>
        <AppIntro app={knockApp} />
        <Screenshots app={knockApp} />
    </VStack>
} 
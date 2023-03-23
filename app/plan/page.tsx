'use client'
import { lifelongListApp } from "../shared/apps";
import { AppIntro } from "../ui/AppIntro";
import { Screenshots } from "../ui/ScreenshotUI";
import { VStack } from "../ui/VStack";


export default function Index() {
    return <VStack>
        <AppIntro app={lifelongListApp} />
        <Screenshots app={lifelongListApp} />
    </VStack>
} 
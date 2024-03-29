'use client'
import { knockApp } from "../shared/apps";
import { AppIntro } from "../ui/AppIntro";
import { Screenshots } from "../ui/ScreenshotUI";
import { VStack } from "../ui/VStack";

export default function Index() {
    return <VStack>
        <AppIntro app={knockApp} />
        <Screenshots app={knockApp} />
    </VStack>
} 
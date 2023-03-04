import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AppStruct } from "./shared/AppStruct"

export const useRequestApps = (): AppStruct[] => {
    const [apps, setApps] = useState<AppStruct[]>([])
    useEffect(() => {
        fetch('/api/apps').then(async (res) => {
            const data = await res.json()
            setApps(data.data)
        })

    }, [])
    return apps
}
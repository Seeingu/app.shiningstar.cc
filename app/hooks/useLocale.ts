import { useCallback, useEffect, useState } from "react"
import { defaultLocale, Locale, localeMessages, supportLocales } from "../lang/locales"

export const useLocale = (): Locale => {
    const [locale, setLocale] = useState(defaultLocale)
    useEffect(() => {
        const language = navigator.language
        for (const locale of supportLocales) {
            if (locale.startsWith(language)) {
                setLocale(locale)
                return
            }
        }
    }, [])

    return locale
}


export const useTranslation = (): (msg: string) => string => {
    const locale = useLocale()

    const t = useCallback((msg: string) => {
        const messages = localeMessages[locale]
        return messages[msg] || msg
    }, [locale])

    return t

}
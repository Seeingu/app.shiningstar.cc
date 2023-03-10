
import zh from './zh-CN.json'
import en from './en.json'

export enum Locale {
    zh = 'zh-CN',
    en = 'en'
}
export const defaultLocale = Locale.zh
export const localeMessages: Record<Locale, Record<string, string>> = {
    'zh-CN': zh,
    'en': en
}

export const supportLocales: Array<Locale> = Object.keys(localeMessages) as Array<Locale>
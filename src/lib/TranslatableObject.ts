// utils/getName.ts
export interface Localized {
    en: string;
    la: string;
    th: string;
}

export function translate(item: Localized, locale: string): string {
    return item[locale as keyof Localized];
}

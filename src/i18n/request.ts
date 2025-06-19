'use server'
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    let locale = 'en';
    const cookieStore = await cookies();
    // Get the 'locale' value from cookies if available
    const cookieLocale = cookieStore.get('locale')?.value;
    if (cookieLocale) {
        locale = cookieLocale;
    }
    try {
        const messages = (await import(`../../i18n/${locale}.json`)).default;
        return {
            locale,
            messages,
            timeZone: 'Asia/Vientiane'
        };
    } catch (error) {
        console.error(`Error loading messages for locale "${locale}":`, error);
        // Fallback to default locale if there was an error
        const fallbackMessages = (await import(`../../i18n/en.json`)).default;
        return {
            locale: 'en',
            messages: fallbackMessages,
            timeZone: 'Asia/Vientiane'
        };
    }
});
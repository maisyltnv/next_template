'use client';

import { useLocale } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';



export default function LocalSwitcher() {
    const [isPending] = useTransition();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        document.cookie = `locale=${nextLocale}; path=/`;
        window.location.reload();
    };

    return (
        <label className='border-2 rounded'>
            <p className='sr-only'>change language</p>
            <select
                defaultValue={localActive}
                className='bg-transparent py-2'
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value='en'>English</option>
                <option value='la'>Lao</option>
                <option value='th'>Thai</option>
            </select>
        </label>
    );
}
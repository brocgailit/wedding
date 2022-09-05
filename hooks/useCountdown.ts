import { useEffect, useState } from 'react';

const useCountdown = (targetDate: Date, locale: string) => {
    const countDownDate = new Date(targetDate);

    const [countDown, setCountDown] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCountDown(getTimeUntilDate(countDownDate));
        }, 1000);

        return () => window.clearInterval(interval);
    }, [countDownDate]);

    return getCountdownParts(countDown, locale);
}

const getTimeUntilDate = (date: Date) =>  date.getTime() - new Date().getTime();

const formatLocaleString = (locale: string, count: number, unit: string) => {
    const format = new Intl.NumberFormat(locale, {
        style: 'unit',
        unitDisplay: 'short',
        unit
    });
    const parts = format.formatToParts(count);
    return parts.find(p => p.type === 'unit')!.value;
}

const getCountdownParts = (countDown: number, locale: string) => {

    const s = 1000, m = s * 60, h = m * 60, d = h * 24;

    const days = Math.floor(countDown / d);
    const hours = Math.floor((countDown % d) / h);
    const minutes = Math.floor((countDown % h) / m);
    const seconds = Math.floor((countDown % m) / s);
   

    return [
        {count: days, label: formatLocaleString(locale, days, 'day')},
        {count: hours, label: formatLocaleString(locale, hours, 'hour')},
        {count: minutes, label: formatLocaleString(locale, minutes, 'minute')},
        {count: seconds, label: formatLocaleString(locale, seconds, 'second')}
    ];
}

export { useCountdown, getTimeUntilDate, getCountdownParts };
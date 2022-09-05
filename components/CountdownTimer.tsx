import { useCountdown } from '../hooks/useCountdown';
import styles from './CountdownTimer.module.css';
import CountDownTimerPart from './CountdownTimerPart';

type CountDownTimerProps = Partial<{
    targetDate: Date,
    locale: string
}>

const CountDownTimer = ({ targetDate = new Date('2022-10-08 09:00:00:00Z'), locale = 'en' } : CountDownTimerProps) => {
    const countdown = useCountdown(targetDate, locale);
    const isExpired = countdown.reduce((total, part) => total + part.count, 0) <= 0;

    if (isExpired) return null;
    
    return (
        <div className={styles.countdown}>
            <div className={styles.container}>
                {countdown.map(part => <CountDownTimerPart key={part.label} {...part}></CountDownTimerPart>)}
            </div>
        </div>
    );
};

export default CountDownTimer;
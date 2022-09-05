import styles from './CountdownTimer.module.css';

type CountDownTimerPartProps = {count: number, label: string};

const CountDownTimerPart = ({ count, label } : CountDownTimerPartProps) => {
    return (
        <div className={styles.part}>
            <span className={styles.count}>
                {count}
            </span>
            <span className={styles.label}>
                {label}
            </span>
        </div>
    );
};

export default CountDownTimerPart;
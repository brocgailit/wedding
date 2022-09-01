import styles from './Attendants.module.css';

type AttendantsProps = Partial<{
    title: string,
    names: string
}>;

const Attendants = ({ title = 'Attendants of Honor', names = 'TBD'}: AttendantsProps) => <div className={styles.attendants}>
    <div className={styles.container}>
        <h4>{title}</h4>
        <span className={styles.names}>
            {names}
        </span>
    </div>
</div>;

export default Attendants;
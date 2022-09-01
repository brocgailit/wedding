import styles from './Contact.module.css';

type ContactPerson = {
    name: string,
    phone: string
}

type ContactProps = Partial<{
    persons: ContactPerson[],
    children: React.ReactNode,
    dayOfContact: {
        description: string,
        persons: ContactPerson[]
    }
}>;

const People = ({people = []}: {people?: ContactPerson[]}) => <div className={styles.people}>
    {people.map(person => <Person key={person.name} {...person} />)}
</div>;

const Person = ({name, phone}: ContactPerson) => <div className={styles.person}>
    <span className={styles.name}>
        {name}
    </span>
    <a href={`tel:${phone}`}>{phone}</a>
</div>;

const Contact = ({ persons = [], children, dayOfContact}: ContactProps) => <div className={styles.contact}>
    <div className={styles.container}>
        <div>
            {children}
            <People people={persons} />
        </div>
        <div className={styles.dayOfContact}>
            {dayOfContact?.description}
            <People people={dayOfContact?.persons} />
        </div>
    </div>
</div>;

export default Contact;
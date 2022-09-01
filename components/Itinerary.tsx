import styles from './Itinerary.module.css';

type ItineraryLocation = {
    name?: string,
    address: string
}

type ItineraryProps = {
    title?: string,
    itinerary: {
        time: string,
        title: string
        location?: ItineraryLocation
    }[]
}

const Location = ({ name, address }: ItineraryLocation) =>
    
        <address className={styles.address}>
            <h4>{name}</h4>
            <a href={`https://maps.google.com?q=${address}`} target="_blank" rel="noreferrer">
                {address}
            </a>
        </address>

const Itinerary = ({ title, itinerary = [] }: ItineraryProps) =>
    <div className={styles.itinerary}>
        <div className={styles.container}>
            {title && <h3>{title}</h3>}
            <ul>
                {itinerary.map(({ time, title, location }) =>
                    <li key={time}>
                        <time>{time}</time>
                        <h4>{title}</h4>
                        { location && <Location {...location} /> }
                    </li>
                )}
            </ul>
        </div>
    </div>;

export default Itinerary;
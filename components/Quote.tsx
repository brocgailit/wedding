import styles from './Quote.module.css';

type QuoteProps = {
    source: string,
    url: string,
    author: string,
    children: React.ReactNode
}

const Quote = ({ source, url, author, children }: QuoteProps) => {
    return <div className={styles.quote}>
        <figure>
            <blockquote cite={url}>
                {children}
            </blockquote>
            <figcaption>
                <span className={styles.author}>{author}</span>
                <cite>{source}</cite>
            </figcaption>
        </figure>
    </div>
}

export default Quote;
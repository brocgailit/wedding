import Image from 'next/image';
import React from 'react';
import { ThemeColor } from '../types';
import styles from './Hero.module.css';

type HeroProps = Partial<{
    background: string,
    backgroundColor: ThemeColor,
    color: ThemeColor
}> & {
    children: {
        heading?: React.ReactNode,
        subheading?: React.ReactNode
        cta?: React.ReactNode,
        body?: React.ReactNode
    }
}

const Hero = ({ background, children, backgroundColor = 'foreground', color = 'white' }: HeroProps) => {
    const style = {
        '--hero-color-background': `var(--color-${backgroundColor})`,
        '--hero-color-foreground': `var(--color-${color})`
    }  as React.CSSProperties;

    const { heading, subheading, cta, body } = children;

    return <div className={styles.host} style={style}>
        {background && <Image className={styles.background} src={background} layout="fill"></Image>}
        <Image src="/images/watercolor-pattern.webp" className={styles.texture} layout="fill"></Image>
        <div className={styles.container}>
            <header>
                <h1>{heading}</h1>
                <h2>{subheading}</h2>
            </header>
            {body && (
                <div className={styles.body}>
                    {body}
                </div>
            )}
            { !!cta &&
                <div className={styles.cta}>
                    {cta}
                </div>
            }
        </div>
    </div>
}

export default Hero;
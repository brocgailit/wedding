import React from 'react';
import { ThemeColor } from '../types';
import styles from './Layout.module.css';

type LayoutProps = Partial<{
    children: React.ReactNode,
    backgroundColor: ThemeColor,
    backgroundOpacity: number
    color: ThemeColor,
}>;

const Layout = ({ children, backgroundColor = 'background', color = 'foreground', backgroundOpacity = 1 }: LayoutProps) => {

    const styleProps = {
        '--layout-color-background': `var(--color-${backgroundColor})`,
        '--layout-color-foreground': `var(--color-${color})`,
        '--layout-background-opacity': backgroundOpacity
    }  as React.CSSProperties;

    return (
        <div style={styleProps} className={styles.layout}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
};

export default Layout;
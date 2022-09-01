import { FunctionComponent } from "react";
import { ThemeColor } from "../types"
import styles from './Button.module.css';

type ButtonProps = Partial<{
    background: string,
    backgroundColor: ThemeColor,
    color: ThemeColor,
    children: React.ReactNode
    href: string,
    target: string
}> & React.HTMLAttributes<HTMLOrSVGElement>

const Button: FunctionComponent<ButtonProps> = ({
    background,
    children,
    backgroundColor = 'primary',
    color = 'white',
    style,
    ...inputProps
}) => {

    const styleProps = {
        '--button-color-background': `var(--color-${backgroundColor})`,
        '--button-color-foreground': `var(--color-${color})`
    }  as React.CSSProperties;

    const Tag = inputProps.href ? 'a' : 'button';
    
    return <Tag className={styles.button} style={{...style, ...styleProps}} {...inputProps}>{children}</Tag>
}

export default Button;
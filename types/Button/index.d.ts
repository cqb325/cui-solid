import type { JSX } from "solid-js";
export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    classList?: any;
    class?: string;
    type?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'danger' | 'warning' | 'default';
    theme?: 'light' | 'solid' | 'borderless' | 'outline' | 'dashed';
    block?: boolean;
    size?: 'small' | 'default' | 'large';
    active?: boolean;
    shape?: 'square' | 'round' | 'circle';
    disabled?: boolean;
    loading?: boolean;
    icon?: any;
    iconAlign?: 'left' | 'right';
    ref?: any;
    onClick?: (e: any) => void;
}
export declare const Button: (props: ButtonProps) => JSX.Element;

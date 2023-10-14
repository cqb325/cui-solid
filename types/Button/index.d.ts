import { ComponentProps } from "solid-js";
export declare type ButtonProps = {
    classList?: any;
    class?: string;
    link?: string;
    type?: 'primary' | 'success' | 'error' | 'warning' | 'default' | 'dashed' | 'link' | 'text';
    block?: boolean;
    size?: 'small' | 'default' | 'large';
    active?: boolean;
    circle?: boolean;
    disabled?: boolean;
    loading?: boolean;
    ghost?: boolean;
    icon?: any;
    iconAlign?: 'left' | 'right';
    ref?: any;
    onClick?: Function;
} & ComponentProps<any>;
export declare const Button: (props: ButtonProps) => import("solid-js").JSX.Element;

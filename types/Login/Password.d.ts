import type { JSXElement } from "solid-js";
export interface PasswordProps {
    label?: string;
    size?: 'small' | 'large';
    placeholder?: string;
    name?: string;
    icon?: JSXElement;
    rules?: {
        [key: string]: any;
    };
    messages?: {
        [key: string]: string;
    };
    onInput?(value: string, e: any): void;
}
export declare function Password(props: PasswordProps): import("solid-js").JSX.Element;

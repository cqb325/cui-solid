import type { JSXElement } from "solid-js";
export interface UserNameProps {
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
export declare function UserName(props: UserNameProps): import("solid-js").JSX.Element;

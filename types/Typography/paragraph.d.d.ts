import { ComponentProps } from "solid-js";
export declare type ParagraphProps = {
    type?: 'default' | 'secondary' | 'warning' | 'error' | 'success' | 'primary';
    disabled?: boolean;
    link?: string;
    icon?: any;
    mark?: boolean;
    code?: boolean;
    underline?: boolean;
    deleted?: boolean;
    strong?: boolean;
    size?: 'small' | 'default' | 'large';
    classList?: any;
    class?: any;
    children?: any;
    spacing?: 'extended';
    copyable?: boolean;
    style?: any;
    onCopy?: Function;
    copyText?: string;
    heading?: 1 | 2 | 3 | 4 | 5 | 6;
} & ComponentProps<any>;

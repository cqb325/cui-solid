import type { JSX } from "solid-js";
export interface ParagraphProps extends JSX.HTMLAttributes<HTMLSpanElement> {
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
    inline?: boolean;
    prefix?: "bar" | "dot";
    prefixWidth?: number;
    prefixGap?: number;
    prefixColor?: string | string[];
    style?: any;
    gradient?: string[];
    onCopy?: () => void;
    copyText?: string;
    heading?: 1 | 2 | 3 | 4 | 5 | 6;
}

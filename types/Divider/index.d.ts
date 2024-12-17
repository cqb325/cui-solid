import type { JSX } from "solid-js";
export interface DividerProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'dir'> {
    dir?: 'h' | 'v';
    align?: 'left' | 'right';
    theme?: string | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'blue' | 'green' | 'red' | 'yellow' | 'pink' | 'magenta' | 'volcano' | 'orange' | 'gold' | 'lime' | 'cyan' | 'geekblue' | 'purple';
    dashed?: boolean;
    children?: any;
    margin?: number | string;
    textColor?: string;
    textMargin?: number | string;
}
export declare function Divider(props: DividerProps): JSX.Element;

import { type JSX } from "solid-js";
export interface BadgeRibbonProps extends JSX.HTMLAttributes<HTMLDivElement> {
    text?: JSX.Element;
    status?: 'success' | 'error' | 'warning' | 'primary' | 'info';
    align?: 'start' | 'end';
    color?: string | 'blue' | 'green' | 'red' | 'yellow' | 'pink' | 'magenta' | 'volcano' | 'orange' | 'gold' | 'lime' | 'cyan' | 'geekblue' | 'purple';
}
export declare function BadgeRibbon(props: BadgeRibbonProps): JSX.Element;

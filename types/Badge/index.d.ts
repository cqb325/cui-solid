export interface BadgeProps {
    classList?: any;
    class?: string;
    count?: number;
    dot?: boolean;
    overflowCount?: number;
    text?: string;
    children?: any;
    offset?: number[];
    status?: 'success' | 'error' | 'processing' | 'warning' | 'default';
    color?: string | 'blue' | 'green' | 'red' | 'yellow' | 'pink' | 'magenta' | 'volcano' | 'orange' | 'gold' | 'lime' | 'cyan' | 'geekblue' | 'purple';
    type?: 'primary' | 'success' | 'normal' | 'info' | 'error' | 'warning';
}
export declare function Badge(props: BadgeProps): import("solid-js").JSX.Element;

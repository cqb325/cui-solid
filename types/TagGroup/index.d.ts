import type { JSXElement } from "solid-js";
export interface TagConfig {
    id: string | number;
    title: string;
    theme?: 'primary' | 'danger' | 'warning' | 'success' | 'info' | 'magenta' | 'red' | 'volcano' | 'orange' | 'gold' | 'yellow' | 'lime' | 'green' | 'cyan' | 'blue' | 'geekblue' | 'purple';
    avatar?: JSXElement;
}
export interface TagGroupProps {
    style?: any;
    classList?: any;
    class?: string;
    data: TagConfig[];
    closable?: boolean;
    max?: number;
    showMore?: boolean;
    size?: 'small' | 'large';
    extra?: JSXElement;
    onClose?(item: TagConfig, e: any): void;
}
export declare function TagGroup(props: TagGroupProps): import("solid-js").JSX.Element;

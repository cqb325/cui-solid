import type { JSXElement } from "solid-js";
export interface TimelineItemProps {
    children?: any;
    classList?: any;
    class?: string;
    color?: 'blue' | 'green' | 'red' | 'yellow';
    fill?: boolean;
    icon?: JSXElement;
    time?: string;
}
export declare function TimelineItem(props: TimelineItemProps): import("solid-js").JSX.Element;

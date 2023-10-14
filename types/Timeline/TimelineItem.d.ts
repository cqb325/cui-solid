import { JSXElement } from "solid-js";
declare type TimelineItemProps = {
    children?: any;
    classList?: any;
    class?: string;
    color?: 'blue' | 'green' | 'red' | 'yellow';
    fill?: boolean;
    icon?: JSXElement;
    time?: string;
};
export declare function TimelineItem(props: TimelineItemProps): import("solid-js").JSX.Element;
export {};

import { TimelineItem } from "./TimelineItem";
export interface TimelineProps {
    children?: any;
    classList?: any;
    class?: string;
    style?: any;
    mode?: 'left' | 'right' | 'alternate' | 'center';
}
export declare function Timeline(props: TimelineProps): import("solid-js").JSX.Element;
export declare namespace Timeline {
    var Item: typeof TimelineItem;
}

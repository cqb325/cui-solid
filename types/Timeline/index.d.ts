import { TimelineItem } from "./TimelineItem";
type TimelineProps = {
    children?: any;
    classList?: any;
    class?: string;
    style?: any;
    mode?: 'left' | 'right' | 'alternate' | 'center';
};
export declare function Timeline(props: TimelineProps): import("solid-js").JSX.Element;
export declare namespace Timeline {
    var Item: typeof TimelineItem;
}
export {};

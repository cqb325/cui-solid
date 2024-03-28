import type { JSXElement } from "solid-js";
export interface IndexListProps {
    classList?: any;
    class?: string;
    style?: any;
    data: any[];
    selectable?: boolean;
    promote?: boolean;
    border?: boolean;
    renderItem?(item: any, active: boolean): JSXElement;
    onChange?(value: any[]): void;
}
export declare function IndexList(props: IndexListProps): import("solid-js").JSX.Element;

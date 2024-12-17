import type { JSXElement } from "solid-js";
export interface SplitProps {
    classList?: any;
    class?: any;
    dir?: 'v' | 'h';
    split?: number | string;
    min?: number;
    max?: number;
    children?: JSXElement;
}
export declare function Split(props: SplitProps): import("solid-js").JSX.Element;

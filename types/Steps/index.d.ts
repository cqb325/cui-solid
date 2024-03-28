import type { JSXElement } from "solid-js";
export interface StepsProps {
    size?: 'small' | 'default';
    current?: number;
    children?: JSXElement;
    class?: string;
    classList?: any;
    style?: any;
    dir?: 'v' | 'h';
}
export declare function Steps(props: StepsProps): import("solid-js").JSX.Element;
export declare namespace Steps {
    var Step: typeof import("./Step").Step;
}

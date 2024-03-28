import type { JSX } from "solid-js";
type ViewProps = {
    classList?: any;
    class?: any;
    children?: any;
    style?: any;
    size?: string;
};
export declare function View(props: ViewProps): JSX.Element;
export declare function HView(props: ViewProps): JSX.Element;
export declare function VView(props: ViewProps): JSX.Element;
export declare function FixedView(props: ViewProps): JSX.Element;
export {};

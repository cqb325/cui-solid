import type { JSXElement } from "solid-js";
export interface BreadcrumbProps {
    classList?: any;
    class?: string;
    separator?: string;
    children?: JSXElement;
    style?: any;
}
export declare function Breadcrumb(props: BreadcrumbProps): import("solid-js").JSX.Element;
export declare namespace Breadcrumb {
    var Item: typeof import("./Item").Item;
}

import type { JSXElement } from "solid-js";
export interface BreadcrumbItemProps {
    classList?: any;
    class?: string;
    children?: JSXElement;
    link?: string;
    icon?: any;
    separator?: string | JSXElement;
}
export declare function Item(props: BreadcrumbItemProps): import("solid-js").JSX.Element;

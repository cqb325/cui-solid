import type { JSXElement } from "solid-js";

export interface BreadcrumbItemProps {
    classList?: any,
    class?: string,
    children?: JSXElement,
    link?: string,
    icon?: any,
    separator?: string | JSXElement
}

export function Item (props: BreadcrumbItemProps) {
    return props as unknown as JSXElement;
}

import type { JSXElement } from "solid-js";
export interface AnchorLinkProps {
    href: string;
    title: string | JSXElement;
    subItems(): AnchorLinkProps[];
}
export declare function AnchorLink(props: any): import("solid-js").JSX.Element;

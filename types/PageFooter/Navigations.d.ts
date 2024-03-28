import type { JSXElement } from "solid-js";
export declare function FooterNavigations(props: any): import("solid-js").JSX.Element;
export declare function FooterNavigation(props: any): import("solid-js").JSX.Element;
export declare namespace FooterNavigation {
    var Link: (props: FooterNavigationLink) => import("solid-js").JSX.Element;
}
export interface FooterNavigationLink {
    icon?: JSXElement;
    link: string;
    style?: any;
    children?: any;
}

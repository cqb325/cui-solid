import type { JSXElement } from "solid-js";
export interface SubMenuProps {
    name?: string;
    align?: "bottom" | "right" | "bottomLeft" | "bottomRight" | "rightTop" | "left" | "leftTop";
    icon?: JSXElement;
    children?: any;
    title?: any;
}
export declare function SubMenu(props: SubMenuProps): import("solid-js").JSX.Element;

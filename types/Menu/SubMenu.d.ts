import type { JSXElement } from "solid-js";
type SubMenuProps = {
    name?: string;
    align?: "bottom" | "right" | "bottomLeft" | "bottomRight" | "rightTop" | "left" | "leftTop";
    icon?: JSXElement;
    children?: any;
    title?: any;
};
export declare function SubMenu(props: SubMenuProps): import("solid-js").JSX.Element;
export {};

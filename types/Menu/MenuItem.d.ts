import type { JSXElement } from "solid-js";
export interface MenuItemProps {
    name?: string;
    disabled?: boolean;
    isSubmenuTitle?: boolean;
    onSelect?: () => void;
    data?: any;
    children?: any;
    icon?: JSXElement;
    cert?: boolean;
}
export declare function MenuItem(props: MenuItemProps): import("solid-js").JSX.Element;

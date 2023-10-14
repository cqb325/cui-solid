import { JSXElement } from "solid-js";
declare type MenuItemProps = {
    name?: string;
    disabled?: boolean;
    isSubmenuTitle?: boolean;
    onSelect?: Function;
    data?: any;
    children?: any;
    icon?: JSXElement;
    cert?: boolean;
};
export declare function MenuItem(props: MenuItemProps): import("solid-js").JSX.Element;
export {};

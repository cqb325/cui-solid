import { JSXElement } from "solid-js";
export interface DropdownItemProps {
    class?: string;
    classList?: any;
    style?: any;
    children?: any;
    disabled?: boolean;
    name?: string;
    divided?: boolean;
    icon?: JSXElement;
    arrow?: boolean;
}
export declare function DropdownItem(props: DropdownItemProps): import("solid-js").JSX.Element;

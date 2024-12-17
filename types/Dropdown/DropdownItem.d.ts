import type { JSXElement } from "solid-js";
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
    data?: any;
    theme?: string | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info' | 'light';
    selected?: boolean;
}
export declare function DropdownItem(props: DropdownItemProps): import("solid-js").JSX.Element;

import type { Signal } from "solid-js";
export * from "./MenuItem";
export * from "./SubMenu";
export * from "./MenuGroup";
export interface MenuProps {
    classList?: any;
    class?: string;
    style?: any;
    children?: any;
    accordion?: boolean;
    theme?: 'light' | 'dark';
    dir?: 'v' | 'h';
    min?: boolean;
    activeName?: string | Signal<any>;
    onSelect?: (name: any, data: any) => void;
}
export declare function Menu(props: MenuProps): import("solid-js").JSX.Element;
export declare const useMenuContext: () => unknown;

export * from "./MenuItem";
export * from "./SubMenu";
export * from "./MenuGroup";
declare type MenuProps = {
    classList?: any;
    class?: string;
    style?: any;
    children?: any;
    accordion?: boolean;
    theme?: 'light' | 'dark';
    dir?: 'v' | 'h';
    min?: boolean;
    activeName?: string | Function[];
    onSelect?: Function;
};
export declare function Menu(props: MenuProps): import("solid-js").JSX.Element;
export declare const useMenuContext: () => unknown;

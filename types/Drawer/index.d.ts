import type { JSXElement, Signal } from "solid-js";
export interface DrawerProps {
    classList?: any;
    class?: string;
    style?: any;
    align?: 'right' | 'left' | 'top' | 'bottom';
    size?: number;
    title?: string | JSXElement;
    maskCloseable?: boolean;
    children?: JSXElement;
    hasClose?: boolean;
    escClose?: boolean;
    onClose?(): void;
    onShow?(): void;
    visible?: Signal<any>;
    destroyOnClose?: boolean;
}
export declare function Drawer(props: DrawerProps): import("solid-js").JSX.Element;

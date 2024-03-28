import type { JSXElement } from "solid-js";
export interface BannerProps {
    type: 'warning' | 'info' | 'success' | 'error';
    classList?: any;
    class?: string;
    bordered?: boolean;
    icon?: JSXElement;
    closeIcon?: JSXElement | null;
    children?: any;
    onClose?(): void;
    title?: JSXElement | string;
    fullMode?: boolean;
    visible?: any;
}
export declare function Banner(props: BannerProps): import("solid-js").JSX.Element;

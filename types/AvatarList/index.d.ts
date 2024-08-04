import type { JSXElement } from "solid-js";
type AvatarListProps = {
    classList?: any;
    class?: string;
    size?: 'small' | 'large';
    align?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    gutter?: number;
    max?: number;
    excessStyle?: any;
    children?: JSXElement;
};
export declare function AvatarList(props: AvatarListProps): import("solid-js").JSX.Element;
export {};

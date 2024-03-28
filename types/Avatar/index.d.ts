import type { JSX, JSXElement } from 'solid-js';
export interface AvatarProps {
    classList?: any;
    class?: string;
    size?: number | 'small' | 'large';
    icon?: any;
    src?: string;
    shape?: string;
    style?: any;
    onClick?: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent>;
    children?: any;
    title?: string | number | JSXElement;
    asProps?: boolean;
    onMouseEnter?(e: any): void;
    onMouseLeave?(e: any): void;
    hoverMask?: JSXElement;
}
export declare function Avatar(props: AvatarProps): JSX.Element;

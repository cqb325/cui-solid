import type { JSX, JSXElement } from 'solid-js';
export interface AvatarProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "title"> {
    size?: number | 'small' | 'large';
    icon?: JSXElement;
    src?: string;
    shape?: string;
    onClick?: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent>;
    title?: string | number | JSXElement;
    asProps?: boolean;
    onMouseEnter?(e: any): void;
    onMouseLeave?(e: any): void;
    hoverMask?: JSXElement;
}
export declare function Avatar(props: AvatarProps): JSX.Element;

import type { JSXElement } from "solid-js";
export interface BasicProps {
    classList?: any;
    class?: string;
    style?: any;
    type?: string;
    width?: string | string[];
    height?: string;
    inline?: boolean;
}
export interface AvatarProps extends BasicProps {
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large' | number;
    shape?: 'circle' | 'square';
}
export declare type GenericProps = BasicProps & AvatarProps;
export declare const Avatar: (props: AvatarProps) => JSXElement;
export declare const Image: (props: AvatarProps) => JSXElement;
export declare const Title: (props: AvatarProps) => JSXElement;
export declare const Button: (props: AvatarProps) => JSXElement;
export declare const Item: (props: AvatarProps) => JSXElement;
export interface ParagraphProps extends BasicProps {
    rows?: number;
}
export declare function Paragraph(props: ParagraphProps): import("solid-js").JSX.Element;

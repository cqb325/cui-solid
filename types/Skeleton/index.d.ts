import type { JSXElement } from "solid-js";
export interface SkeletonProps {
    classList?: any;
    class?: string;
    style?: any;
    children?: JSXElement;
    active?: boolean;
    loading?: boolean;
    placeholder?: JSXElement;
    width?: string;
    height?: string;
}
export declare function Skeleton(props: SkeletonProps): import("solid-js").JSX.Element;
export declare namespace Skeleton {
    var Avatar: (props: import("./Item").AvatarProps) => import("solid-js").JSX.Element;
    var Image: (props: import("./Item").AvatarProps) => import("solid-js").JSX.Element;
    var Title: (props: import("./Item").AvatarProps) => import("solid-js").JSX.Element;
    var Button: (props: import("./Item").AvatarProps) => import("solid-js").JSX.Element;
    var Item: (props: import("./Item").AvatarProps) => import("solid-js").JSX.Element;
    var Paragraph: typeof import("./Item").Paragraph;
}

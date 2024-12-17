import type { JSXElement } from "solid-js";
export interface CardProps {
    classList?: any;
    class?: any;
    children?: any;
    bordered?: boolean;
    rised?: boolean;
    title?: any;
    size?: 'small' | 'default' | 'large';
    cover?: JSXElement;
    style?: any;
    headStyle?: any;
    bodyStyle?: any;
    footer?: any;
}
export declare function Card(props: CardProps): import("solid-js").JSX.Element;

import type { JSX } from "solid-js";
import type { AnchorLinkProps } from './AnchorLink';
import { AnchorLink } from './AnchorLink';
export interface AnchorProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children?: any;
    classList?: any;
    class?: string;
    container?: string | HTMLElement;
    scrollContainer?: string | HTMLElement;
    scrollOffset?: number;
    offsetTop?: number;
    bounds?: number;
    showInk?: boolean;
    mode?: 'hash' | 'history';
    onChange?: (id: string) => void;
}
export interface AnchorStore {
    inkTop: number;
    inkHeight: number;
    currentId: string;
    currentLink: string;
    animating: boolean;
    links: AnchorLinkProps[];
    upperFirstTitle?: boolean;
}
export declare function Anchor(props: AnchorProps): JSX.Element;
export declare namespace Anchor {
    var Link: typeof AnchorLink;
}

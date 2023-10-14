import { AnchorLink } from './AnchorLink';
declare type AnchorProps = {
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
};
export declare function Anchor(props: AnchorProps): import("solid-js").JSX.Element;
export declare namespace Anchor {
    var Link: typeof AnchorLink;
}
export {};

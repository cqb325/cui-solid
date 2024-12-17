import type { JSXElement } from "solid-js";
export interface ImageProps {
    classList?: any;
    class?: string;
    style?: any;
    failInfo?: string | JSXElement;
    preview?: boolean;
    previewTip?: string | JSXElement;
    previewList?: string[];
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    alt?: string;
    src?: string;
    lazy?: boolean;
    referrerPolicy?: any;
    scrollContainer?: string | HTMLElement;
    onLoad?: () => void;
    onError?: () => void;
    placeholder?: string | JSXElement;
    width?: number | string;
    height?: number | string;
    infinite?: boolean;
    maskClosable?: boolean;
    onClose?: () => void;
    onSwitch?: (index: number) => void;
    previewIndex?: number;
}
export declare function Image(props: ImageProps): import("solid-js").JSX.Element;

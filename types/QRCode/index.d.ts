interface QRCodeProps {
    classList?: any;
    class?: string;
    level?: string;
    value: string;
    size?: number;
    color?: string;
    bgColor?: string;
    style?: any;
    includeMargin?: boolean;
    marginSize?: number;
    icon?: string;
    imageSettings?: ImageSettings;
    title?: string;
    ref?: any;
}
declare type ImageSettings = {
    src: string;
    height?: number;
    width?: number;
    excavate: boolean;
    x?: number;
    y?: number;
};
export declare function QRCodeCanvas(props: any): import("solid-js").JSX.Element;
export declare function QRCode(props: QRCodeProps): import("solid-js").JSX.Element;
export {};

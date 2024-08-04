export interface WatermarkFontType {
    color?: string;
    fontSize?: number | string;
    fontWeight?: 'normal' | 'light' | 'weight' | number;
    fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
    fontFamily?: string;
}
export interface WatermarkProps {
    children?: any;
    class?: string;
    classList?: any;
    style?: any;
    zIndex?: number;
    rotate?: number;
    width?: number;
    height?: number;
    image?: string;
    content: string | string[];
    font?: WatermarkFontType;
    gap?: number[];
    offset?: number[];
}
export declare function Watermark(props: WatermarkProps): import("solid-js").JSX.Element;

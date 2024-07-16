import type { CustomComponentProps } from ".";
export interface VirtualListCoreProps {
    height?: number;
    maxHeight?: number;
    itemEstimatedSize: number;
    overscan?: number;
    items: any[];
    itemComponent: CustomComponentProps;
    scrollElement: HTMLDivElement;
    contentElement: HTMLDivElement;
    bodyElement: HTMLDivElement;
    onScroll?: (scrollTop: number) => void;
    ref?: any;
}
export interface MeasuredData {
    size: number;
    offset: number;
}
export interface IMeasuredDataMap {
    [key: number]: MeasuredData;
}
export declare function VirtualListCore(props: VirtualListCoreProps): import("solid-js").JSX.Element;

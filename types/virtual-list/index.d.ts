export * from './core';
export interface CustomComponentProps {
    component: any;
    props: any;
}
export interface VirtualListProps {
    height?: number;
    maxHeight?: number;
    itemEstimatedSize: number;
    overscan?: number;
    items: any[];
    onScroll?: (scrollTop: number) => void;
    itemComponent: CustomComponentProps;
    ref?: any;
    displayDelay?: number;
}
export interface MeasuredData {
    size: number;
    offset: number;
}
export interface IMeasuredDataMap {
    [key: number]: MeasuredData;
}
export declare function VirtualList(props: VirtualListProps): import("solid-js").JSX.Element;

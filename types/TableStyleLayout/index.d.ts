export * from './Row';
export * from './Col';
export * from './Label';
export * from './Value';
export interface TableStyleLayoutProps {
    labelWidth?: number;
    children?: any;
    classList?: any;
    class?: string;
    style?: any;
}
export interface TableStyleLayoutContextProps {
    labelWidth: number;
}
export declare const useTableStyleLayoutContext: () => TableStyleLayoutContextProps;
export declare function TableStyleLayout(props: TableStyleLayoutProps): import("solid-js").JSX.Element;

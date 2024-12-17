import type { JSX } from "solid-js";
export * from './Row';
export * from './Col';
export * from './Label';
export * from './Value';
export interface TableStyleLayoutProps extends JSX.HTMLAttributes<HTMLDivElement> {
    labelWidth?: number;
}
export interface TableStyleLayoutContextProps {
    labelWidth: number;
}
export declare const useTableStyleLayoutContext: () => TableStyleLayoutContextProps;
export declare function TableStyleLayout(props: TableStyleLayoutProps): JSX.Element;

import type { JSX } from "solid-js";
export interface TableStyleLayoutValueProps extends JSX.HTMLAttributes<HTMLDivElement> {
    verticalAlign?: 'start' | 'center' | 'end';
    column?: boolean;
    row?: boolean;
    justify?: 'flex-start' | 'flex-end' | 'center';
}
export declare function TableStyleLayoutValue(props: TableStyleLayoutValueProps): JSX.Element;

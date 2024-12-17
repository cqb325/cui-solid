import { type JSX } from "solid-js";
export interface TableStyleLayoutLabelProps extends JSX.HTMLAttributes<HTMLDivElement> {
    verticalAlign?: 'start' | 'center' | 'end';
    width?: number;
    required?: boolean;
}
export declare function TableStyleLayoutLabel(props: TableStyleLayoutLabelProps): JSX.Element;

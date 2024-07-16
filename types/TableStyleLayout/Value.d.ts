export interface TableStyleLayoutValueProps {
    verticalAlign?: 'start' | 'center' | 'end';
    column?: boolean;
    row?: boolean;
    justify?: 'flex-start' | 'flex-end' | 'center';
    children?: any;
    classList?: any;
    class?: string;
    style?: any;
}
export declare function TableStyleLayoutValue(props: TableStyleLayoutValueProps): import("solid-js").JSX.Element;

import { JSXElement } from "solid-js";
declare type TableProps = {
    columns: any[];
    data: any[];
    height?: number;
    classList?: any;
    class?: any;
    style?: any;
    border?: boolean;
    stripe?: boolean;
    highlight?: boolean;
    onRowSelect?: Function;
    onRowChecked?: Function;
    onCheckedAll?: Function;
    onSort?: Function;
    ref?: any;
    size?: 'small';
    spanMethod?: Function;
    loading?: boolean;
    virtual?: boolean;
};
export declare type TableStore = {
    columns: ColumnProps[];
    data: any[];
    showFixedLeft: boolean;
    showFixedRight: boolean;
    checkedAll: boolean | string;
    resizing: boolean;
    headerSize: any;
    headerLeft: number;
    x: number;
    posX: number;
    startX: number;
    resizeId?: string;
};
export declare type ColumnProps = {
    name?: string;
    title?: string | JSXElement;
    render?: Function;
    type?: string;
    width?: string;
    _width?: number;
    resize?: boolean;
    sort?: boolean | 'custom';
    sortMethod?(a: any, b: any): number;
    sortType?: 'asc' | 'desc' | '';
    fixed?: 'left' | 'right';
    tree?: boolean;
    fixedLeftLast?: boolean;
    fixedRightFirst?: boolean;
    id: string;
    _index: number;
    _: string;
};
export declare function Table(props: TableProps): import("solid-js").JSX.Element;
export declare const useTableContext: () => unknown;
export {};

import type { JSXElement, Signal } from "solid-js";
import type { PopoverProps } from "../Popover";
type KeyType = string | number;
type TableProps = {
    columns: any[];
    data: any[];
    rowKey?: string;
    height?: number;
    classList?: any;
    class?: any;
    style?: any;
    border?: boolean;
    stripe?: boolean;
    highlight?: boolean;
    selectedRowKeys?: Signal<KeyType[]>;
    onRowSelect?: (row: any, preRow: any) => void;
    onRowChecked?: (row: any, checked: boolean) => void;
    onCheckedAll?: (rows: any[]) => void;
    onSort?: (column: any, sortType: any) => void;
    ref?: any;
    size?: 'small';
    spanMethod?: (data: any, column: any, index: number, columnIndex: number) => any;
    loading?: boolean;
    loadingText?: string | JSXElement;
    virtual?: boolean;
};
export type TableStore = {
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
export type ColumnProps = {
    name?: string;
    title?: string | JSXElement;
    render?: (value: any, column: any, row: any) => any;
    type?: string;
    width?: string;
    minWidth?: number;
    maxWidth?: number;
    _width?: number;
    resize?: boolean;
    sort?: boolean | 'custom';
    sortMethod?(a: any, b: any): number;
    sortType?: 'asc' | 'desc' | '';
    fixed?: 'left' | 'right';
    tree?: boolean;
    ellipsis?: boolean;
    tooltip?: boolean;
    tooltipAlign?: PopoverProps['align'];
    tooltipTheme?: PopoverProps['theme'];
    tooltipMaxWidth?: number;
    tooltipStyle?: any;
    fixedLeftLast?: boolean;
    fixedRightFirst?: boolean;
    id: string;
    _index: number;
    _: string;
};
export declare function Table(props: TableProps): import("solid-js").JSX.Element;
export declare const useTableContext: () => unknown;
export {};

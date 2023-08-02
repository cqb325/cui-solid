import { ColumnProps, TableStore } from '.';
/**
 * 初始化表头
 * 添加默认id确定最后一个flex
 * @param columns
 */
export declare function initColumns(columns: ColumnProps[]): {
    maxFixedLeft: number;
    minFixedRight: number;
};
/**
 * 滚动条滚动后更新固定列的样式
 * @param e
 */
export declare function updateScrollFixed(maxFixedLeft: number, minFixedRight: number, setStore: Function, e: any): void;
/**
 * 初始化表格数据
 * @param data
 */
export declare function initData(data: any[]): any[];
export declare function sortData(setStore: Function, column: ColumnProps): void;
export declare function _buildTreeData(data: any[], target: any[], level: number, show: boolean): void;
/**
 * 树形数据重构
 * @param data
 * @returns
 */
export declare function buildTreeData(data: any[]): any[];
/**
 * 显示隐藏树形数据
 * @param setStore
 * @param row
 */
export declare function showHideChildren(setStore: Function, row: any): void;
/**
 * 排序信息
 * @param setStore
 * @param column
 * @param sortType
 */
export declare function sortHandler(setStore: Function, column: ColumnProps, sortType: string): void;
/**
 * 添加或删除展开收缩的数据
 * @param setStore
 * @param column
 * @param row
 */
export declare function addRemoveExpand(setStore: Function, column: ColumnProps, row: any): void;
export declare const onResizeStart: (setStore: Function, column: ColumnProps, e: any) => false | undefined;
export declare const onResizeMove: (store: any, setStore: Function, e: any) => void;
export declare const onResizeEnd: (store: TableStore, setStore: Function) => void;

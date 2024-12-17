import type { SetStoreFunction } from "solid-js/store";
import type { ColumnProps, TableStore } from '.';
/**
 * 初始化表头
 * 添加默认id确定最后一个flex
 * @param columns
 */
export declare function initColumns(columns: ColumnProps[]): {
    maxFixedLeft: number;
    minFixedRight: number;
    columnsRows: any[];
    calcColumns: ColumnProps[];
};
/**
 * 滚动条滚动后更新固定列的样式
 */
export declare function updateScrollFixed(maxFixedLeft: number, minFixedRight: number, setStore: SetStoreFunction<TableStore>, scrollLeft: number, clientWidth: number, scrollWidth: number): void;
/**
 * 初始化表格数据
 * @param data
 */
export declare function initData(data: any[], rowKey: string): any[];
export declare function sortData(setStore: SetStoreFunction<TableStore>, store: TableStore, column: ColumnProps): void;
export declare function _buildTreeData(data: any[], target: any[], level: number, show: boolean, rowKey: string): void;
/**
 * 树形数据重构
 * @param data
 * @param rowKey
 * @returns
 */
export declare function buildTreeData(data: any[], rowKey: string): any[];
/**
 * 显示隐藏树形数据
 * @param setStore
 * @param row
 */
export declare function showHideChildren(setStore: SetStoreFunction<TableStore>, row: any): void;
/**
 * 排序信息
 * @param setStore
 * @param column
 * @param sortType
 */
export declare function sortHandler(setStore: SetStoreFunction<TableStore>, store: TableStore, column: ColumnProps, sortType: string): void;
/**
 * 添加或删除展开收缩的数据
 * @param setStore
 * @param column
 * @param row
 */
export declare function addRemoveExpand(setStore: SetStoreFunction<TableStore>, column: ColumnProps, row: any): void;
export declare const onResizeStart: (setStore: SetStoreFunction<TableStore>, column: ColumnProps, e: any) => false | undefined;
export declare const onResizeMove: (store: any, setStore: SetStoreFunction<TableStore>, e: any) => void;
export declare const onResizeEnd: (store: TableStore, setStore: SetStoreFunction<TableStore>, wrap: Element) => void;
export declare const observerSizeChange: (...rest: any[]) => void;
/**
 * 获取占用宽度的列
 * @param columns 列
 * @param flatColumns
 * @returns
 */
export declare const getFlatColumns: (columns: ColumnProps[], flatColumns?: ColumnProps[], parent?: ColumnProps | undefined) => void;
export declare const getAllColumns: (columns: ColumnProps[]) => ColumnProps[];

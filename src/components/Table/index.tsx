import { createStore, produce } from "solid-js/store";
import { useClassList } from "../utils/useProps";
import { Head } from "./Head";
import { Body } from "./Body";
import type { JSXElement, Signal} from "solid-js";
import { Show, createContext, createEffect, onCleanup, onMount, untrack, useContext } from "solid-js";
import { showHideChildren, sortHandler, addRemoveExpand,
    onResizeStart, onResizeMove, onResizeEnd, initColumns, updateScrollFixed, initData,
    observerSizeChange} from "./utils";
import { Spin } from "../Spin";
import type { PopoverProps } from "../Popover";
import { Summary } from "./Summary";

const TableContext = createContext();

type KeyType = string | number;

export interface TableProps {
    columns: any[],
    data: any[],
    rowKey?: string,
    height?: number,
    classList?: any,
    class?: any,
    style?: any,
    border?: boolean,
    stripe?: boolean,
    highlight?: boolean,
    showHeader?: boolean,
    selectedRowKeys?: Signal<KeyType[]>,
    onRowSelect?: (row: any, preRow: any) => void,
    onRowChecked?: (row: any, checked: boolean) => void,
    onCheckedAll?: (rows: any[]) => void,
    onSort?: (column: any, sortType: any) => void,
    ref?: any,
    size?: 'small',
    spanMethod?: (data: any, column: any, index: number, columnIndex: number) => any,
    showSummary?: boolean,
    summaryMethod?: (columns: ColumnProps[], data: any[]) => any,
    loading?: boolean,
    loadingText?: string|JSXElement,
    title?: JSXElement,
    footer?: JSXElement,
    empty?: JSXElement,
    virtual?: boolean
}
// 表格存储
export type TableStore = {
    columns: ColumnProps[],
    columnsRows: any[],
    data: any[],
    showFixedLeft: boolean,
    showFixedRight: boolean,
    checkedAll: boolean | string,
    resizing: boolean,
    headerSize: any,
    summarySize: any,
    headerLeft: number,
    x: number,
    posX: number,
    startX: number,
    resizeId?: string
}

export interface ColumnProps {
    name?: string,
    title?: string | JSXElement,
    render?: (value: any, column: any, row: any, index: number) => any,
    type?: 'index'|'date'|'datetime'|'enum'|'checkbox'|'expand',
    width?: string,
    minWidth?: number,
    maxWidth?: number,
    _width?: number,
    resize?: boolean,
    sort?: boolean | 'custom',
    sortMethod?(a: any, b: any): number,
    sortType?: 'asc'|'desc'|'',
    fixed?: 'left'|'right',
    tree?: boolean,
    ellipsis?: boolean,
    tooltip?: boolean,
    tooltipAlign?: PopoverProps['align'],
    tooltipTheme?: PopoverProps['color'],
    tooltipMaxWidth?: number,
    tooltipStyle?: any,
    fixedLeftLast?: boolean,
    fixedRightFirst?: boolean,
    children?: ColumnProps[],
    _colspan?: number,
    _rowspan?: number,
    _parent?: ColumnProps,
    _level?: number,
    id: string,
    _index: number,
    // 触发更新使用
    _: string
}

export function Table (props: TableProps) {
    const classList = () => useClassList(props, 'cm-table-wrap', {
        'cm-table-border': props.border,
        'cm-table-stripe': props.stripe,
        'cm-table-small': props.size === 'small',
        'cm-table-with-title': props.title,
        'cm-table-with-footer': props.footer,
        'cm-table-with-summary': props.showSummary,
        'cm-table-resizing': store.resizing
    });
    let wrap: any;
    const {maxFixedLeft, minFixedRight} = initColumns(props.columns);
    const rowKey = props.rowKey ?? 'id';
    const [selectedRowKeys, setSelectedRowKeys] = props.selectedRowKeys ? props.selectedRowKeys : [];

    let data: any[] = initData(props.data, rowKey);

    // 传入的data变化
    createEffect(() => {
        data = initData(props.data, rowKey);
        setStore('data', data);
        setStore('checkedAll', false);
    });

    // 传入的columns变化
    createEffect(() => {
        const {maxFixedLeft, minFixedRight, columnsRows, calcColumns} = initColumns(props.columns);
        setStore('columns', calcColumns);
        setStore('columnsRows', columnsRows);
        setStore('showFixedLeft', false);
        setStore('showFixedRight', true);
    });

    const [store, setStore] = createStore<TableStore>({
        columns: [],
        columnsRows: [],
        data: [],
        showFixedLeft: false,
        showFixedRight: true,
        checkedAll: false,
        resizing: false,
        x: 0,
        posX: 0,
        startX: 0,
        resizeId: undefined,
        headerSize: {
            with: 0,
            height: 48
        },
        summarySize: {
            with: 0,
            height: 0
        },
        headerLeft: 0,
    });

    // 滚动条滚动更新固定列
    const onScroll = (e: any) => {
        // updateScrollFixed(maxFixedLeft, minFixedRight, setStore, e);
    }

    // 行选高亮事件
    const onSelectRow = (row: any) => {
        const lastRow = store.data.find((item: any) => {
            return item._highlight;
        });
        if (lastRow) {
            setStore('data', item => item.id === lastRow.id, produce((item: any) => item._highlight = false))
        }
        setStore('data', item => item.id === row.id, produce((item: any) => item._highlight = true))
        props.onRowSelect && props.onRowSelect(row, lastRow);
    }

    // 选择框选择，并计算是否所有都选中，排除禁用行
    const onRowChecked = (row: any, checked: boolean) => {
        setStore('data', item => item.id === row.id, produce((item: any) => item._checked = checked))
        let status: boolean | string = false;
        let checkedNum = 0;
        let total = 0;
        const checkedRowKeys: KeyType[] = [];
        store.data.forEach((item: any) => {
            if (!item._disabled) {
                total++;
            }
            if (item._checked) {
                checkedRowKeys.push(item.id);
                checkedNum ++;
                status = 'indeterminate';
            }
        })
        if (checkedNum >= total) {
            status = true;
        }

        if (checkedRowKeys.join(',') !== selectedRowKeys?.().join(',')) {
            setSelectedRowKeys?.(checkedRowKeys);
        }

        setStore('checkedAll', status);
        props.onRowChecked && props.onRowChecked(row, checked);
    }

    createEffect(() => {
        const rowKeys = selectedRowKeys?.();
        // data变更后也重新设置选择状态
        store.data;
        if (rowKeys && rowKeys.length > 0) {
            setStore('data', item => rowKeys.includes(item.id) && !item._checked , produce((item: any) => item._checked = true))
        } else {
            setStore('data', item => item._checked, produce((item: any) => item._checked = false))
        }
        let status: boolean | string = false;
        let checkedNum = 0;
        let total = 0;
        untrack(() => {
            store.data.forEach((item: any) => {
                if (!item._disabled) {
                    total++;
                }
                if (item._checked) {
                    checkedNum ++;
                    status = 'indeterminate';
                }
            })
        })
        if (checkedNum >= total) {
            status = true;
        }
        setStore('checkedAll', status);
    });

    // 头部选择框选中事件,禁用的选择框不进行响应
    const onHeadChecked = (checked: boolean) => {
        setStore('checkedAll', checked);
        setStore('data', item => checked ? !item._disabled && !item._checked : !item._disabled && item._checked, produce((item: any) => item._checked = checked))
        const checkedRowKeys: KeyType[] = [];
        const rows = store.data.filter(item => {
            if (item._checked) {
                checkedRowKeys.push(item.id);
            }
            return item._checked;
        })
        if (checkedRowKeys.join(',') !== selectedRowKeys?.().join(',')) {
            setSelectedRowKeys?.(checkedRowKeys);
        }
        props.onCheckedAll && props.onCheckedAll(rows);
    }

    // 点击排序执行
    const onSort = (column: ColumnProps, sortType: string) => {
        sortHandler(setStore, store, column, sortType);

        if (props.onSort) {
            props.onSort(column, column.sortType);
        }
    }

    // 树形展开收缩
    const onShowChildren = (row: any) => {
        showHideChildren(setStore, row);
    }

    // 展开自定义内容
    const onExpand = (column: ColumnProps, row: any) => {
        addRemoveExpand(setStore, column, row);
    }

    // resize开始
    const onDragStart = (column: ColumnProps, e: any) => {
        onResizeStart(setStore, column, e);

        document.addEventListener('mousemove', onDragMove, false);
        document.addEventListener('mouseup', onDragEnd, false);
    }
    // resize鼠标移动
    const onDragMove = (e: any) => {
        onResizeMove(store, setStore, e);
    }
    // resize停止
    const onDragEnd = () => {
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
        onResizeEnd(store, setStore, wrap);
    }

    // resize 辅助线条样式
    const resizeStyle = () => ({
        'display': store.resizing ? 'block' : 'none',
        'left': store.posX + 'px'
    });

    const getAllChecked = () => {
        return store.data.filter((item: any) => {
            return item._checked;
        });
    }

    const setChecked = (id: string | number, checked: boolean) => {
        const row: any = store.data.find((item: any) => {
            item.id === id;
        })
        onRowChecked(row, checked);
    }

    const onInitColumnWidth = (index: number, width: number) => {
        setStore('columns', index, '_width', width);
    }
    const onResizeHeader = (width: number, height: number) => {
        setStore('headerSize', 'width', width);
        setStore('headerSize', 'height', height);
    }
    const onResizeSummary = (width: number, height: number) => {
        setStore('summarySize', 'width', width);
        setStore('summarySize', 'height', height);
    }
    const onScrollBody = (scrollLeft: number, clientWidth: number, scrollWidth: number) => {
        updateScrollFixed(maxFixedLeft, minFixedRight, setStore, scrollLeft, clientWidth, scrollWidth);
        if (store.headerLeft !== scrollLeft) {
            setStore('headerLeft', scrollLeft);
        }
    }

    props.ref && props.ref({
        clearSelect (){
            setStore('data', item => item._highlight, produce((item: any) => item._highlight = false))
        },
        checkAll (checked: boolean) {
            onHeadChecked(checked);
        },
        getAllChecked () {
            return getAllChecked();
        },
        setChecked
    });

    onMount(() => {
        const body = wrap.querySelector('.cm-table-body');
        const ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                observerSizeChange(store, setStore, wrap);
            })
        });
        ro.observe(body);
        onCleanup(() => {
            ro.unobserve(body);
        })
    })

    const style = () => ({
        ...props.style,
        'max-height': props.height ? `${props.height}px` : '',
        // 'display': 'flex',
        // 'flex-direction': 'column'
    });
    const isSticky = () => !!props.height;

    return <TableContext.Provider value={{onSelectRow, onRowChecked, onHeadChecked, onSort,
        onShowChildren, onExpand, onDragStart, highlight: props.highlight, border: props.border,
        spanMethod: props.spanMethod, empty: props.empty}}>
        <div classList={classList()} ref={wrap}>
            <div class="cm-table-resize-helper" style={resizeStyle()} />
            <div class="cm-table-loading" />
            <Show when={props.loading} fallback={null}>
                <Spin type="dot" title={props.loadingText || ''}/>
            </Show>
            <Show when={props.title}>
                <div class="cm-table-title">{props.title}</div>
            </Show>
            <div class="cm-table" style={style()} >
                <Show when={props.showHeader ?? true}>
                    <Head data={store} sticky={isSticky()} onInitColumnWidth={onInitColumnWidth} onResizeHeader={onResizeHeader} virtual={props.virtual}/>
                </Show>
                <Body data={store} onScroll={onScrollBody} height={props.height} virtual={props.virtual}/>
                <Show when={props.showSummary}>
                    <Summary data={store} onResizeSummary={onResizeSummary} summaryMethod={props.summaryMethod}/>
                </Show>
            </div>
            <Show when={props.footer}>
                <div class="cm-table-footer">{props.footer}</div>
            </Show>
        </div>
    </TableContext.Provider>;
}

export const useTableContext = () => useContext(TableContext);

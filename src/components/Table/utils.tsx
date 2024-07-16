import { batch, createUniqueId } from "solid-js";
import type { SetStoreFunction} from "solid-js/store";
import { produce } from "solid-js/store";
import type { ColumnProps, TableStore } from '.';

/**
 * 初始化表头
 * 添加默认id确定最后一个flex
 * @param columns
 */
export function initColumns (columns: ColumnProps[]) {
    let maxFixedLeft = -1;
    let minFixedRight = Number.MAX_VALUE;
    if (columns) {
        columns.forEach((col: ColumnProps, index: number) => {
            col.id = col.id ?? createUniqueId();
            if (col.fixed === 'left') {
                maxFixedLeft = Math.max(maxFixedLeft, index);
            }
            if (col.fixed === 'right') {
                minFixedRight = Math.min(minFixedRight, index);
            }
        });
        if (maxFixedLeft > -1) {
            columns[maxFixedLeft] ? columns[maxFixedLeft].fixedLeftLast = true : void(0);
        }
        if (minFixedRight < Number.MAX_VALUE) {
            columns[minFixedRight] ? columns[minFixedRight].fixedRightFirst = true : void(0);
        }
    }
    return {maxFixedLeft, minFixedRight};
}

/**
 * 滚动条滚动后更新固定列的样式
 */
export function updateScrollFixed (maxFixedLeft: number, minFixedRight: number, setStore: SetStoreFunction<TableStore>, scrollLeft: number, clientWidth: number, scrollWidth: number) {
    if (maxFixedLeft >= 0 || minFixedRight < Number.MAX_VALUE) {
        setStore('showFixedLeft', scrollLeft > 0);
        setStore('showFixedRight', clientWidth + scrollLeft < scrollWidth);
    }
}

/**
 * 初始化表格数据
 * @param data
 */
export function initData (data: any[], rowKey: string) : any[] {
    let ret = data ?? [];
    ret = [...ret];
    ret.forEach((item, index) => {
        item.id = item[rowKey] ?? createUniqueId();
        item._originSort = index;
    });

    ret = buildTreeData(data, rowKey);
    return ret;
}

export function sortData (setStore: SetStoreFunction<TableStore>, store: TableStore, column: ColumnProps) {
    const arr = [...store.data];
    if (column.sortType === '') {
        arr.sort((a: any, b: any) => {
            return a._originSort - b._originSort > 0 ? 1 : -1;
        });
    } else {
        if (column.sortMethod && typeof column.sortMethod === 'function') {
            arr.sort(column.sortMethod);
        } else {
            arr.sort((a: any, b: any) => {
                const name = column.name ?? '';
                if (/^[0-9\.]+$/g.test(a[name])) {
                    return (column.sortType === 'asc' ? 1: -1) * (a[name] - b[name]) > 0 ? 1 : -1;
                } else {
                    return (column.sortType === 'asc' ? 1: -1) * a[name].localeCompare(b[name]);
                }
            });
        }
    }
    setStore('data', arr);
}

export function _buildTreeData (data: any[], target: any[], level: number, show: boolean, rowKey: string) {
    data.forEach((item: any) => {
        item.id = item[rowKey] ?? createUniqueId();
        item._level = level;
        item._show = show;
        target.push(item);
        if (item.children && item.children.length) {
            _buildTreeData(item.children, target, level + 1, !!item._showChildren, rowKey);
        }
    })
}

/**
 * 树形数据重构
 * @param data
 * @param rowKey
 * @returns
 */
export function buildTreeData (data: any[], rowKey: string) {
    const arr: any[] = [];
    _buildTreeData(data, arr, 0, true, rowKey);
    return arr;
}

const hideChildren = (map: any, id: string) => {
    if (map[id] && map[id].children) {
        map[id].children.forEach((child: any) => {
            child._show = false;
            hideChildren(map, child.id);
        });
    }
}
const showChildren = (map: any, id: string) => {
    const row = map[id];
    if (row && row.children) {
        row.children.forEach((child: any) => {
            child._show = row._showChildren;
            hideChildren(map, child.id);
        });
    }
}

/**
 * 显示隐藏树形数据
 * @param setStore
 * @param row
 */
export function showHideChildren (setStore: SetStoreFunction<TableStore>, row: any) {
    setStore('data', (item: any) => item.id === row.id, produce((item: any) => item._showChildren = !item._showChildren))
    setStore('data', produce((data: any) => {
        const ids = row.children.map((child: any) => {
            return child.id;
        });
        const map: any = {};
        data.forEach((child: any) => {
            map[child.id] = child;
        });
        ids.forEach((id: string) => {
            if (map[id]) {
                map[id]._show = row._showChildren;
            }
            if (row._showChildren) {
                showChildren(map, id);
            } else {
                hideChildren(map, id);
            }
        });
    }));
}

/**
 * 排序信息
 * @param setStore
 * @param column
 * @param sortType
 */
export function sortHandler (setStore: SetStoreFunction<TableStore>, store:TableStore, column: ColumnProps, sortType: string) {
    setStore('columns', (col: any) => col.name === column.name, produce((col: any) => {
        if (col.sortType === sortType) {
            col.sortType = '';
        } else {
            col.sortType = sortType;
        }
    }))

    // 远程排序的话使用custom
    if (column.sort !== 'custom') {
        sortData(setStore, store, column);
    }
}

/**
 * 添加或删除展开收缩的数据
 * @param setStore
 * @param column
 * @param row
 */
export function addRemoveExpand (setStore: SetStoreFunction<TableStore>, column: ColumnProps, row: any) {
    setStore('data', produce((data: any) => {
        let currentIndex = -1;
        const currentRow = data.find((item: any, index: number) => {
            const flag = item.id === row.id;
            if (flag) {
                currentIndex = index;
            }
            return flag;
        });

        // 关闭的时候进行打开,并设置_expand属性
        if (!currentRow._expand) {
            currentRow._expand = true;
            data.splice(currentIndex + 1, 0, {_type: 'expandChildren', _show: true, column, render: column.render?.bind(null, row)});
        } else {
            data.splice(currentIndex + 1, 1);
            currentRow._expand = false;
        }
    }))
}

// resize开始
export const onResizeStart = (setStore: SetStoreFunction<TableStore>, column: ColumnProps, e: any) => {
    if (typeof e.button === 'number' && e.button !== 0) return false;
    setStore('resizing', true);
    const r = e.target.getBoundingClientRect().right;
    const l = e.target.closest('.cm-table-wrap').getBoundingClientRect().left;
    setStore('posX', r - l);
    setStore('startX', r - l);
    setStore('x', e.clientX);
    setStore('resizeId', column.id);
}

// resize鼠标移动
export const onResizeMove = (store: any, setStore: SetStoreFunction<TableStore>, e: any) => {
    if (store.resizing) {
        const deltaX = e.clientX - store.x;
        setStore('x', e.clientX);
        const posX = store.posX + deltaX;
        setStore('posX', posX);
    }
}
// resize结束
export const onResizeEnd = (store: TableStore, setStore: SetStoreFunction<TableStore>, wrap: Element) => {
    setStore('resizing', false);
    setStore('columns', (col: ColumnProps) => col.id === store.resizeId, produce((col: ColumnProps) => {
        let w = col.width ? parseFloat(col.width) + (store.posX - store.startX) : undefined;
        if (w && col.minWidth) {
            w = Math.max(w, col.minWidth);
        }
        if (w && col.maxWidth) {
            w = Math.min(w, col.maxWidth);
        }
        col.width = w ? w + 'px' : undefined;
    }));
    observerSizeChange(store, setStore, wrap);
    let nextId: string | undefined;
    store.columns.find((col: ColumnProps, index: number) => {
        const flag = col.id === store.resizeId;
        if (flag) {
            nextId = store.columns[index + 1] ? store.columns[index + 1].id : undefined;
        }
        return flag;
    });
    setStore('columns', (col: ColumnProps) => col.id === nextId, produce((col: ColumnProps) => {
        col._ = createUniqueId();
    }));
    setStore('posX', 0);
}

export const observerSizeChange = (store: TableStore, setStore: SetStoreFunction<TableStore>, wrap: Element) => {
    let wrapWidth = wrap.querySelector('.cm-table')!.getBoundingClientRect().width;
    const body = wrap.querySelector('.cm-table-body')! as HTMLElement;
    const hasScroll = body.offsetHeight < body.scrollHeight;

    if (hasScroll) {
        const scrollWidth = body.offsetWidth - body.clientWidth;
        wrapWidth -= scrollWidth;
    }

    const fxiedWidthColumns = store.columns.filter((col: ColumnProps) => col.width);
    const fixedWidth = fxiedWidthColumns.reduce((pre: number, cur: ColumnProps) => pre + (cur.width ? parseFloat(cur.width) : 0), 0);
    setStore('columns', produce((columns: ColumnProps[]) => {
        const dynamicWidthColumns = columns.filter((col: ColumnProps) => !col.width);
        if (dynamicWidthColumns.length > 0) {
            const allDynamicWidth = Math.max(wrapWidth - fixedWidth, 0);
            const dynamicWidth = allDynamicWidth / dynamicWidthColumns.length;
            let remainWidth = allDynamicWidth;
            // 先设置有minWidth或maxWidth的列
            dynamicWidthColumns.filter((col:ColumnProps) => col.minWidth || col.maxWidth).forEach((col:ColumnProps) => {
                let w = dynamicWidth;
                if (col.minWidth) {
                    w = Math.max(w, col.minWidth);
                }
                if (col.maxWidth) {
                    w = Math.min(w, col.maxWidth);
                }
                remainWidth -= w;
                col._width = w;
            })
            const remianColumns = dynamicWidthColumns.filter((col:ColumnProps) => !(col.minWidth || col.maxWidth));
            const remainColWidth = remainWidth / remianColumns.length;

            remianColumns.forEach((col:ColumnProps) => {
                col._width = remainColWidth;
            });
        }
    }));
    fxiedWidthColumns.forEach((col: ColumnProps) => {
        const w = col.width ? parseFloat(col.width) : 0;
        setStore('columns', (c) => col.id === c.id, produce((c) => {
            c._width = w;
        }));
    });
}

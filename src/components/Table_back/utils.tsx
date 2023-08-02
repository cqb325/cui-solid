import { createUniqueId } from "solid-js";
import { produce } from "solid-js/store";
import { ColumnProps, TableStore } from '.';

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
 * @param e 
 */
export function updateScrollFixed (maxFixedLeft: number, minFixedRight: number, setStore: Function, e: any) {
    if (maxFixedLeft >= 0 || minFixedRight < Number.MAX_VALUE) {
        setStore('showFixedLeft', e.target.scrollLeft > 0);
        setStore('showFixedRight', e.target.clientWidth + e.target.scrollLeft < e.target.scrollWidth);
    }
}

/**
 * 初始化表格数据
 * @param data 
 */
export function initData (data: any[]) : any[] {
    let ret = data ?? [];
    ret = [...ret];
    ret.forEach((item, index) => {
        item.id = item.id ?? createUniqueId();
        item._originSort = index;
    });

    ret = buildTreeData(data);
    return ret;
}

export function sortData (setStore: Function, column: ColumnProps) {
    if (column.sortType === '') {
        setStore('data', produce((data: any) => {
            data.sort((a: any, b: any) => {
                return a._originSort - b._originSort > 0 ? 1 : -1;
            });
        }));
    } else {
        setStore('data', produce((data: any) => {
            if (column.sortMethod && typeof column.sortMethod === 'function') {
                data.sort(column.sortMethod);
            } else {
                data.sort((a: any, b: any) => {
                    const name = column.name ?? '';
                    if (/^[0-9\.]+$/g.test(a[name])) {
                        return (column.sortType === 'asc' ? 1: -1) * (a[name] - b[name]) > 0 ? 1 : -1;
                    } else {
                        return (column.sortType === 'asc' ? 1: -1) * a[name].localeCompare(b[name]);
                    }
                });
            }
        }));
    }
}

export function _buildTreeData (data: any[], target: any[], level: number, show: boolean) {
    data.forEach((item: any) => {
        item.id = item.id ?? createUniqueId();
        item._level = level;
        item._show = show;
        target.push(item);
        if (item.children && item.children.length) {
            _buildTreeData(item.children, target, level + 1, !!item._showChildren);
        }
    })
}

/**
 * 树形数据重构
 * @param data 
 * @returns 
 */
export function buildTreeData (data: any[]) {
    let arr: any[] = [];
    _buildTreeData(data, arr, 0, true);
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
export function showHideChildren(setStore: Function, row: any) {
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
export function sortHandler (setStore: Function, column: ColumnProps, sortType: string) {
    setStore('columns', (col: any) => col.name === column.name, produce((col: any) => {
        if (col.sortType === sortType) {
            col.sortType = '';
        } else {
            col.sortType = sortType;
        }
    }))

    // 远程排序的话使用custom
    if (column.sort !== 'custom') {
        sortData(setStore, column);
    }
}

/**
 * 添加或删除展开收缩的数据
 * @param setStore 
 * @param column 
 * @param row 
 */
export function addRemoveExpand (setStore: Function, column: ColumnProps, row: any) {
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
export const onResizeStart = (setStore: Function, column: ColumnProps, e: any) => {
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
export const onResizeMove = (store: any, setStore: Function, e: any) => {
    if (store.resizing) {
        const deltaX = e.clientX - store.x;
        setStore('x', e.clientX);
        const posX = store.posX + deltaX;
        setStore('posX', posX);
    }
}
// resize结束
export const onResizeEnd = (store: TableStore, setStore: Function) => {
    setStore('resizing', false);
    setStore('columns', (col: ColumnProps) => col.id === store.resizeId, produce((col: ColumnProps) => {
        col.width = col.width ? parseFloat(col.width) + (store.posX - store.startX) + 'px' : undefined;
    }));
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
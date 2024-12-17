import { Match, Show, Switch, createEffect, onMount } from "solid-js";
import { InnerCheckbox } from "../inner/Checkbox";
import type { ColumnProps } from ".";
import { useTableContext } from ".";
import { Popover } from "../Popover";
import dayjs from "dayjs";
import { FeatherChevronDown, FeatherChevronRight, FeatherChevronUp, FeatherMinusSquare, FeatherPlusSquare } from 'cui-solid-icons/feather';

export function Cell (props: any) {
    let cell: any;
    const col: ColumnProps = props.column;
    const colIndex: number = props.colIndex;
    const ctx: any = useTableContext();
    onMount(()=>{
        setTimeout(() => {
            updateCellStyle();
        })
    });

    const cellClassList = () => ({
        'cm-table-head-col': props.type === 'th',
        'cm-table-cell-fixed-left-last': col.fixedLeftLast && props.showFixedLeft,
        'cm-table-cell-fixed-right-first': col.fixedRightFirst && props.showFixedRight,
    })

    createEffect(() => {
        col.width;
        col._;
        updateCellStyle();
    });

    const updateCellStyle = () => {
        if (col.fixed && cell && !props.placeholder) {
            if (col.fixed === 'left') {
                cell.style.position = 'static';
                const parent = cell.closest('.cm-table');
                if (parent) {
                    const head = parent.querySelector('thead');
                    let left = 0;
                    for (let i = 1; i <= colIndex; i++) {
                        const th = head.querySelector('th:nth-child('+i+')');
                        if (th) {
                            left += th.getBoundingClientRect().width;
                        }
                    }

                    cell.style.position = 'sticky';
                    cell.style.left = left + 'px';
                    cell.style.zIndex = props.type === 'th' ? 3 : 1;
                    cell.classList.add('cm-table-cell-fixed-left');
                    if (col.fixedLeftLast && props.showFixedLeft) {
                        cell.classList.add('cm-table-cell-fixed-left-last');
                    }
                }
            }
            if (col.fixed === 'right') {
                const parent = cell.closest('.cm-table');
                if (parent) {
                    const head = parent.querySelector('thead');
                    const length = head.querySelectorAll('th').length;

                    let w = 0;
                    for (let i = colIndex + 2; i <= length; i++) {
                        const th = head.querySelector('th:nth-child('+i+')');
                        w += th.getBoundingClientRect().width;
                    }

                    cell.style.position = 'sticky';
                    cell.style.right = w + 'px';
                    cell.style.zIndex = props.type === 'th' ? 3 : 1;
                    cell.classList.add('cm-table-cell-fixed-right');
                    if (col.fixedRightFirst && props.showFixedRight) {
                        cell.classList.add('cm-table-cell-fixed-right-first');
                    }
                }
            }
        }
    }

    // 树型图标
    const treeIcon = () => {
        return props.data._showChildren
            ? <FeatherMinusSquare class="cm-table-tree-icon" onClick={onShowChildren}/>
            : <FeatherPlusSquare class="cm-table-tree-icon" onClick={onShowChildren}/>;
    }

    // 选择框选择事件
    const onRowChecked = (checked: boolean) => {
        ctx && ctx.onRowChecked(props.data, checked);
    }

    // 头部选择框选择事件
    const onHeadChecked = (checked: boolean) => {
        ctx && ctx.onHeadChecked(checked);
    }

    // 点击排序
    const onSort = (sortType: string) => {
        ctx && ctx.onSort(col, sortType);
    }

    // 点击树型展开图标
    const onShowChildren = () => {
        ctx && ctx.onShowChildren(props.data);
    }

    // 展开
    const onExpand = () => {
        ctx && ctx.onExpand(col, props.data);
    }

    // onDragStart
    const onDragStart = (e: any) => {
        ctx && ctx.onDragStart(col, e);
    }

    const text = () => {
        const column = props.column;
        if (props.type === 'td') {
            if (props.summary) {
                return props.data[column.name];
            }
            if (column.type === 'index') {
                return props.index + 1;
            }
            if (column.type === 'date') {
                return dayjs(props.data[column.name]).format('YYYY-MM-DD');
            }
            if (column.type === 'datetime') {
                return dayjs(props.data[column.name]).format('YYYY-MM-DD HH:mm:ss');
            }
            if (column.type === 'enum') {
                return column.enum?.[props.data[column.name]];
            }
            if (column.type === 'checkbox') {
                return <InnerCheckbox disabled={props.data._disabled} checked={props.data._checked} onChange={onRowChecked}/>;
            }
            if (props.data._type === 'expandChildren') {
                return props.data.render ? props.data.render() : null;
            }
            if (column.type === 'expand') {
                return <FeatherChevronRight class={`cm-table-expand ${props.data._expand ? 'cm-table-expand-open' : ''}`} onClick={onExpand}/>;
            }
            if (column.render && typeof column.render === 'function') {
                return column.render(props.data[column.name], column, props.data, props.index);
            }
            return props.data[column.name];
        } else {
            if (column.type === 'checkbox') {
                return <InnerCheckbox checked={props.checkedAll} onChange={onHeadChecked}/>;
            }
            return props.column.title;
        }
    }

    return <Switch>
        <Match when={props.type === 'th'}>
            <th classList={cellClassList()} ref={(el) => {cell = el; props.ref && props.ref(el)}} colSpan={props.colSpan} rowSpan={props.rowSpan} data-index={props.colIndex}>
                <div class="cm-table-cell">
                    {text()}
                    <Show when={col.sort}>
                        <span class="cm-table-sort">
                            <FeatherChevronUp class={col.sortType === 'asc' ? 'cm-table-sort-active' : ''} onClick={onSort.bind(null, 'asc')}/>
                            <FeatherChevronDown class={col.sortType === 'desc' ? 'cm-table-sort-active' : ''} onClick={onSort.bind(null, 'desc')}/>
                        </span>
                    </Show>
                    <Show when={col.resize && col.width && ctx && ctx.border}>
                        <span class="cm-table-resize" onMouseDown={onDragStart} />
                    </Show>
                </div>
            </th>
        </Match>
        <Match when={props.type === 'td'}>
            <td ref={cell} classList={cellClassList()} colSpan={props.colSpan} rowSpan={props.rowSpan}>
                <div class="cm-table-cell">
                    <Show when={col.tree}>
                        <span class="cm-table-tree-level" style={{"padding-left": `${props.data._level * 16}px`}} />
                        <Show when={props.data.children && props.data.children.length} fallback={
                            <span class="cm-table-tree-icon-empty" />
                        }>
                            {treeIcon()}
                        </Show>
                    </Show>
                    <Show when={col.ellipsis || col.tooltip} fallback={text()}>
                        <Show when={col.tooltip} fallback={<span class="cm-table-cell-ellipsis">{text()}</span>}>
                            <Popover arrow align={col.tooltipAlign || 'top'} color={col.tooltipTheme}
                                class="cm-table-cell-tooltip"
                                style={{...col.tooltipStyle, "max-width": `${col.tooltipMaxWidth || 200}px`}}
                                content={<div>{text()}</div>}>
                                <span class="cm-table-cell-tooltip-content">{text()}</span>
                            </Popover>
                        </Show>
                    </Show>
                </div>
            </td>
        </Match>
    </Switch>
}

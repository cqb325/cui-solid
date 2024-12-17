import type { Accessor} from "solid-js";
import { For, createEffect, onCleanup, onMount } from "solid-js"
import { Cell } from "./Cell";

import type { TableStore, ColumnProps } from '.';
import { Colgroup } from "./Colgroup";
import { useDebounce } from "../utils/useDebounce";

type HeadProps = {
    data: TableStore,
    sticky?: boolean,
    onInitColumnWidth: (idx: number, width: number) => void,
    onResizeHeader: (width: number, height: number) => void,
    virtual?: boolean
}

export function Head (props: HeadProps) {
    let thead: any;
    let headerWrap: any;
    // const onWrapEntry = (entry: ResizeObserverEntry) => {
    //     const el = entry.target;
    //     const index = el.getAttribute("data-index");

    //     if (index) {
    //         const idx = parseInt(index);
    //         if (el) {
    //             props.onInitColumnWidth(idx, el.getBoundingClientRect().width);
    //         }
    //     }
    // }
    const onHeadEntry = useDebounce((entry: ResizeObserverEntry) => {
        const el = entry.target;
        if (el.tagName === 'THEAD') {
            const rect = el.getBoundingClientRect();
            props.onResizeHeader(rect.width, rect.height);
            headerWrap.style.height = rect.height + 'px';
        } else {
            // setTimeout, header变化让body设置height后再计算是否有垂直滚动条
            setTimeout(() => {
                const rect = el.getBoundingClientRect();
                const parentRect = el.closest(".cm-table-body")!.getBoundingClientRect();

                if (rect.height > parentRect.height) {
                    headerWrap.style.overflowY = 'scroll';
                } else {
                    headerWrap.style.overflowY = '';
                }
            })
        }
    }, 100)

    // const ro = new ResizeObserver((entries) => {
    //     entries.forEach((entry) => onWrapEntry(entry));
    // });

    // createEffect(() => {
    //     const columns = props.data.columns;
    //     if (columns.length) {
    //         setTimeout(() => {
    //             const childs = thead.querySelectorAll('th');
    //             const len = childs.length;
    //             for (let i = 0; i < len; i++) {
    //                 ro.unobserve(childs[i]);
    //                 ro.observe(childs[i]);
    //             }
    //         })
    //     }
    // })

    // onCleanup(() => {
    //     const childs = thead.querySelectorAll('th');
    //     const len = childs.length;
    //     for (let i = 0; i < len; i++) {
    //         childs[i] && ro.unobserve(childs[i]);
    //     }
    // });

    onMount(() => {
        const ro2 = new ResizeObserver((entries) => {
            entries.forEach((entry) => onHeadEntry(entry));
        });
        ro2.observe(thead);
        const parent = thead.closest('.cm-table');
        const body = parent.querySelector('.cm-table-body-wrap');
        ro2.observe(body);
        onCleanup(() => {
            ro2.unobserve(thead);
            ro2.unobserve(body);
        });
    })

    const headStyle: any = () => ({
        'position': props.sticky ? 'sticky' : '',
        // position: 'absolute',
        'top': 0,
        'z-index': 2,
        'min-width': '100%',
        'overflow-x': 'hidden'
    });

    createEffect(() => {
        if (headerWrap) {
            headerWrap.scrollLeft = props.data.headerLeft;
        }
    });

    return <div class="cm-table-header" style={headStyle()} ref={headerWrap}>
        <table>
            <Colgroup data={props.data}/>
            <thead ref={thead}>
                <For each={props.data.columnsRows}>
                    {
                        (row: ColumnProps[], rowIndex: Accessor<number>) => {
                            return <tr>
                                <For each={row}>
                                    {
                                        (col: ColumnProps, index: Accessor<number>) => {
                                            return <Cell colSpan={col._colspan} rowSpan={col._rowspan} column={col} type="th" showFixedLeft={props.data.showFixedLeft} colIndex={index()}
                                                showFixedRight={props.data.showFixedRight} checkedAll={props.data.checkedAll} ref={(el: Element) => {
                                                    // Promise.resolve().then(() => {
                                                    //     props.onInitColumnWidth(index(), el.getBoundingClientRect().width);
                                                    // })
                                                }}/>
                                        }
                                    }
                                </For>
                            </tr>
                        }
                    }
                </For>
            </thead>
        </table>
    </div>
}

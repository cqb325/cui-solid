import type { Accessor} from "solid-js";
import { createEffect, createMemo, For, onCleanup, onMount } from "solid-js"
import { Cell } from "./Cell"
import { Colgroup } from "./Colgroup"
import type { ColumnProps, TableStore } from "."

export interface SummaryProps {
    data: TableStore
    summaryMethod?: (columns: ColumnProps[], data: any[]) => any
    onResizeSummary: (width: number, height: number) => void
}

export function Summary (props: SummaryProps) {
    let summary: any;

    const summaryData = createMemo(() => {
        let row: any = {};
        if (props.summaryMethod) {
            row = props.summaryMethod(props.data.columns, props.data.data);
        } else {
            props.data.columns.forEach((col: ColumnProps, index: number) => {
                const key = col.name!;
                if (index === 0) {
                    row[key] = '合计';
                    return;
                }
                const values = props.data.data.map(item => Number(item[key]));
                if (!values.every(value => isNaN(value))) {
                    const v = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    row[key] = v;
                } else {
                    row[key] = '';
                }
            });
        }
        return row;
    });

    createEffect(() => {
        if (summary) {
            summary.scrollLeft = props.data.headerLeft;
        }
    });

    const onEntryResize = (entry: ResizeObserverEntry) => {
        const el = entry.target;
        if (el.classList.contains("cm-table-summary")) {
            const rect = el.getBoundingClientRect();
            const tableH = el.children[0].getBoundingClientRect().height;

            props.onResizeSummary(rect.width, tableH);
            summary.style.height = tableH + 'px';
        } else {
            // setTimeout, header变化让body设置height后再计算是否有垂直滚动条
            setTimeout(() => {
                const rect = el.getBoundingClientRect();
                const parentRect = el.closest(".cm-table-body")!.getBoundingClientRect();

                if (rect.height > parentRect.height) {
                    summary.style.overflowY = 'scroll';
                } else {
                    summary.style.overflowY = '';
                }
            })
        }
    }

    onMount(() => {
        const ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => onEntryResize(entry));
        });
        ro.observe(summary);
        const parent = summary.closest('.cm-table');
        const body = parent.querySelector('.cm-table-body-wrap');
        ro.observe(body);
        onCleanup(() => {
            ro.unobserve(summary);
            ro.unobserve(body);
        });
    })

    return <div class="cm-table-summary" ref={summary}>
        <table>
            <Colgroup data={props.data}/>
            <thead style={{display: 'none'}}>
                <tr>
                    <For each={props.data.columns}>
                        {(col: ColumnProps, index: Accessor<number>) => {
                            return <Cell column={col} type="th" placeholder colIndex={index()} checkedAll={props.data.checkedAll}/>
                        }}
                    </For>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <For each={props.data.columns}>
                        {(col: ColumnProps, index: Accessor<number>) => {
                            return <Cell type="td" summary data={summaryData()} column={col} colIndex={index()} index={index()}
                        showFixedLeft={props.data.showFixedLeft}
                        showFixedRight={props.data.showFixedRight}/>
                        }}
                    </For>
                </tr>
            </tbody>
        </table>
    </div>
}

import type { Accessor} from "solid-js";
import { For, Match, Show, Switch, createEffect, createSignal } from "solid-js"
import { Cell } from "./Cell";
import { useTableContext } from ".";
import type { TableStore, ColumnProps } from '.';
import { Colgroup } from "./Colgroup";
import { VirtualListCore } from "../virtual-list";

type BodyProps = {
    data: TableStore,
    onScroll: (scrollLeft: number, clientWidth: number, scrollWidth: number) => void,
    height?: number,
    virtual?: boolean
}

type RowProps = {
    store: TableStore,
    data: any,
    index: number,
    ref?: any
}

const RowWrap = (props: any) => {
    return <Row data={props.item} index={props.index} store={props.store} ref={props.ref}/>
}

export function Row (props: RowProps) {
    const ctx: any = useTableContext();
    const onRowClick = () => {
        if (props.data._type === 'expandChildren') {
            return;
        }
        // 设置了highlight属性才能进行高亮
        if (ctx && ctx.highlight) {
            ctx.onSelectRow(props.data);
        }
    }
    const classList = () => ({
        'cm-table-row': true,
        'cm-table-row-ood': props.index % 2 === 0,
        'cm-table-row-even': props.index % 2 !== 0,
        'cm-table-row-selected': props.data._highlight
    })

    const rowStyle = () => ({
        display: props.data._show ? '' : 'none',
    })
    return <tr classList={classList()} onClick={onRowClick} style={rowStyle()} ref={props.ref}>
        <Switch>
            {/* expand展开的内容 */}
            <Match when={props.data._type === 'expandChildren'}>
                <Cell type="td" data={props.data} column={props.data.column} index={props.index}
                    showFixedLeft={props.store.showFixedLeft}
                    showFixedRight={props.store.showFixedRight} colSpan={props.store.columns.length}/>
            </Match>
            <Match when={props.data._type !== 'expandChildren'}>
                <For each={props.store.columns}>
                    {(column: ColumnProps, columnIndex: Accessor<number>) => {
                        let [rowSpan, colSpan] = [1, 1];
                        if (ctx && ctx.spanMethod) {
                            const ret = ctx.spanMethod(props.data, column, props.index, columnIndex());
                            if (ret) {
                                [rowSpan, colSpan] = ret;
                            }
                        }
                        return <Show when={rowSpan && colSpan} fallback={null}>
                            <Cell type="td" data={props.data} column={column} index={props.index} colIndex={columnIndex()}
                            showFixedLeft={props.store.showFixedLeft}
                            showFixedRight={props.store.showFixedRight} rowSpan={rowSpan} colSpan={colSpan}/>
                        </Show>
                    }}
                </For>
            </Match>
        </Switch>
    </tr>
}

function EmprtyRow (props: any) {
    return <tr>
        <td colSpan={props.store.columns.length}>
            <div class="cm-table-emprty-cell">暂无数据</div>
        </td>
    </tr>
}

export function Body (props: BodyProps) {
    let body: any;
    const [height, setHeight] = createSignal<number>();
    const width = () => {
        const columns = props.data.columns;
        let total = 0;
        columns.forEach((item: ColumnProps) => {
            total += item._width || 0;
        })
        return total;
    }

    createEffect(() => {
        // 数据改变也需要重刷
        props.data.data;
        const hh = props.data.headerSize.height;
        if (props.virtual) {
            const scrollElHeight = props.height ?? document.documentElement.clientHeight;
            setHeight(scrollElHeight - hh);
        } else {
            Promise.resolve().then(() => {
                const content = body.querySelector('.cm-table-body-wrap');
                const contentH = content.getBoundingClientRect().height;
                if (props.height && contentH > props.height - hh) {
                    const bodyH = props.height - hh;
                    setHeight(bodyH);
                }
            });
        }
    })

    const handleScroll = () => {
        props.onScroll(body.scrollLeft, body.clientWidth, body.scrollWidth);
    }
    let contentElement: any;
    let bodyElement: any;
    return <div class="cm-table-body" ref={body} onScroll={handleScroll}
        style={{display: 'block', 'width': '100%', overflow: 'auto', height: height() + 'px', position: 'relative'}}>
        <Switch>
            <Match when={props.virtual}>
                <div ref={contentElement} style={{'min-width': '100%', width: width() + 'px', 'will-change': 'transform', 'box-sizing': 'border-box', 'contain': 'strict',
                    position: 'absolute', top: 0,left: 0}}>
                    <table class="cm-table-body-wrap">
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
                        <tbody ref={bodyElement}>
                            {/* <VirtualListCore scrollElement={body} contentElement={contentElement} bodyElement={bodyElement}
                                items={props.data.data} itemEstimatedSize={50} maxHeight={height() || props.height}>
                                {(params: any) => {
                                    const rowData = params.item;
                                    return <Row data={rowData} index={params.index} store={props.data} ref={params.ref}/>
                                }}
                            </VirtualListCore> */}
                            <VirtualListCore scrollElement={body} contentElement={contentElement} bodyElement={bodyElement}
                                items={props.data.data} itemEstimatedSize={50} maxHeight={height() || props.height}
                                itemComponent={{component: RowWrap, props: {
                                    store: props.data
                                }}} />
                            <Show when={!props.data.data || !props.data.data.length}>
                                <EmprtyRow store={props.data}/>
                            </Show>
                        </tbody>
                    </table>
                </div>
            </Match>
            <Match when={!props.virtual}>
                <table class="cm-table-body-wrap" ref={bodyElement}>
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
                        <For each={props.data.data}>
                            {(rowData: any, index: Accessor<number>) => {
                                return <Row data={rowData} index={index()} store={props.data} />
                            }}
                        </For>
                        <Show when={!props.data.data || !props.data.data.length}>
                            <EmprtyRow store={props.data}/>
                        </Show>
                    </tbody>
                </table>
            </Match>
        </Switch>
    </div>
}

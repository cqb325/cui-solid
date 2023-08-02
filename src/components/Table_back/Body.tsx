import { Accessor, For, Match, Show, Switch } from "solid-js"
import { Cell } from "./Cell";
import { useTableContext } from ".";
import { TableStore, ColumnProps } from '.';

type BodyProps = {
    data: TableStore,
}

type RowProps = {
    store: TableStore,
    data: any,
    index: number
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
        'cm-table-row-selected': props.data._highlight
    })

    const rowStyle = () => ({
        display: props.data._show ? '' : 'none'
    })
    return <tr classList={classList()} onClick={onRowClick} style={rowStyle()}>
        <Switch>
            {/* expand展开的内容 */}
            <Match when={props.data._type === 'expandChildren'}>
                <Cell type='td' data={props.data} column={props.data.column} index={props.index} 
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
                            <Cell type='td' data={props.data} column={column} index={props.index} colIndex={columnIndex()} 
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
    return <tbody>
        <For each={props.data.data}>
            {(rowData: any, index: Function) => {
                return <Row data={rowData} index={index()} store={props.data}/>
            }}
        </For>
        <Show when={!props.data.data || !props.data.data.length}>
            <EmprtyRow store={props.data}/>
        </Show>
    </tbody>
}
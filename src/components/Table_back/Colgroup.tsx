import { For } from "solid-js";

import { TableStore, ColumnProps } from '.';

type ColgroupProps = {
    data: TableStore,
}

export function Colgroup (props: ColgroupProps) {
    return <colgroup class="cm-table-colgroup">
        <For each={props.data.columns}>
            {(col: ColumnProps) => {
                const style = () => ({
                    width: col.width
                });
                return <col class="cm-table-col" style={style()} />
            }}
        </For>
    </colgroup>
}
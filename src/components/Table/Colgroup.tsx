import type { Accessor} from "solid-js";
import { For } from "solid-js";

import type { TableStore, ColumnProps } from '.';

type ColgroupProps = {
    data: TableStore
}

export function Colgroup (props: ColgroupProps) {
    return <colgroup class="cm-table-colgroup">
        <For each={props.data.columns}>
            {(col: ColumnProps, index: Accessor<number>) => {
                const style = () => ({
                    width: col.width
                });
                return <col class="cm-table-col" style={style()}/>
            }}
        </For>
    </colgroup>
}

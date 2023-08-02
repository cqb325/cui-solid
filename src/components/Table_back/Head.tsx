import { Accessor, For } from "solid-js"
import { Cell } from "./Cell";

import { TableStore, ColumnProps } from '.';

type HeadProps = {
    data: TableStore,
    sticky?: boolean
}

export function Head(props: HeadProps) {
    const headStyle: any = () => ({
        'position': props.sticky ? 'sticky' : '',
        'top': 0,
        'z-index': 2
    });
    return <thead style={headStyle()}>
        <tr>
            <For each={props.data.columns}>
                {(col: ColumnProps, index: Accessor<number>) => {
                    return <Cell column={col} type='th' showFixedLeft={props.data.showFixedLeft} colIndex={index()}
                    showFixedRight={props.data.showFixedRight} checkedAll={props.data.checkedAll}/>
                }}
            </For>
        </tr>
    </thead>
}
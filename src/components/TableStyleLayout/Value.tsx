import type { JSX} from "solid-js";
import { splitProps } from "solid-js";
import { useClassList, useStyle } from "../utils/useProps";

export interface TableStyleLayoutValueProps extends JSX.HTMLAttributes<HTMLDivElement> {
    verticalAlign?: 'start' | 'center' | 'end'
    column?: boolean
    row?: boolean
    justify?: 'flex-start' | 'flex-end' | 'center'
}

export function TableStyleLayoutValue (props: TableStyleLayoutValueProps) {
    const [local, rest] = splitProps(props, ['children', 'class', 'classList', 'style', 'verticalAlign', 'column', 'row', 'justify']);
    const classList = () => useClassList(local, 'cm-table-style-layout-value', {
        column: !!local.column,
        row: !!local.row,
        [`cm-table-style-layout-value-${local.verticalAlign}`]: !!local.verticalAlign
    });
    const style = () => useStyle(local, {
        'justify-content': local.justify
    });
    return <div classList={classList()} style={style()} {...rest}>{local.children}</div>
}

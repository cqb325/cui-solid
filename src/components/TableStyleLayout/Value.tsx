import { useClassList, useStyle } from "../utils/useProps";

export interface TableStyleLayoutValueProps {
    verticalAlign?: 'start' | 'center' | 'end'
    column?: boolean
    row?: boolean
    justify?: 'flex-start' | 'flex-end' | 'center'
    children?: any
    classList?: any
    class?: string
    style?: any
}

export function TableStyleLayoutValue (props: TableStyleLayoutValueProps) {
    const classList = () => useClassList(props, 'cm-table-style-layout-value', {
        column: !!props.column,
        row: !!props.row,
        [`cm-table-style-layout-value-${props.verticalAlign}`]: !!props.verticalAlign
    });
    const style = () => useStyle(props, {
        'justify-content': props.justify
    });
    return <div classList={classList()} style={style()}>{props.children}</div>
}

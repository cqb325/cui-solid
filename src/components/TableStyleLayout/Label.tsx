import { useTableStyleLayoutContext } from ".";
import { useClassList, useStyle } from "../utils/useProps";


export interface TableStyleLayoutLabelProps {
    verticalAlign?: 'start' | 'center' | 'end'
    width?: number
    required?: boolean
    children?: any
    classList?: any
    class?: string
    style?: any
}

export function TableStyleLayoutLabel (props: TableStyleLayoutLabelProps) {
    const ctx = useTableStyleLayoutContext();
    const classList = () => useClassList(props, 'cm-table-style-layout-label', {
        [`cm-table-style-layout-label-${props.verticalAlign}`]: props.verticalAlign,
        required: !!props.required
    });
    const labelWidth: number = ctx.labelWidth;
    const style = () => useStyle(props, {
        flex: `0 0 ${(props.width || labelWidth) + 'px'}`
    });
    return <div classList={classList()} style={style()}>{props.children}</div>
}

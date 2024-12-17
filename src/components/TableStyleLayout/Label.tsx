import { splitProps, type JSX } from "solid-js";
import { useTableStyleLayoutContext } from ".";
import { useClassList, useStyle } from "../utils/useProps";


export interface TableStyleLayoutLabelProps extends JSX.HTMLAttributes<HTMLDivElement>{
    verticalAlign?: 'start' | 'center' | 'end'
    width?: number
    required?: boolean
}

export function TableStyleLayoutLabel (props: TableStyleLayoutLabelProps) {
    const ctx = useTableStyleLayoutContext();
    const [local, rest] = splitProps(props, ['children', 'class', 'classList', 'style', 'verticalAlign', 'required', 'width']);
    const classList = () => useClassList(local, 'cm-table-style-layout-label', {
        [`cm-table-style-layout-label-${local.verticalAlign}`]: local.verticalAlign,
        required: !!local.required
    });
    const labelWidth: number = ctx.labelWidth;
    const style = () => useStyle(local, {
        flex: `0 0 ${(local.width || labelWidth) + 'px'}`
    });
    return <div classList={classList()} style={style()} {...rest}>{local.children}</div>
}

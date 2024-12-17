import { splitProps, type JSX } from "solid-js";
import { useClassList, useStyle } from "../utils/useProps";

export interface TableStyleLayoutColProps extends JSX.HTMLAttributes<HTMLDivElement>{
    flex?: number
}

export function TableStyleLayoutCol (props: TableStyleLayoutColProps) {
    const [local, rest] = splitProps(props, ['children', 'class', 'classList', 'style']);
    const obj: any = {};
    if (props.flex != undefined) {
        obj.flex = `1 1 ${props.flex * 100}%`;
        obj['min-width'] = 0;
    }
    const style = () => useStyle(local, obj);
    const classList = () => useClassList(local, 'cm-table-style-layout-col');
    return <div classList={classList()} style={style()} {...rest}>{local.children}</div>
}

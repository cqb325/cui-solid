import { useClassList, useStyle } from "../utils/useProps";

export interface TableStyleLayoutColProps {
    flex?: number
    children?: any
    classList?: any
    class?: string
    style?: any
}

export function TableStyleLayoutCol (props: TableStyleLayoutColProps) {
    const obj: any = {};
    if (props.flex != undefined) {
        obj.flex = `1 1 ${props.flex * 100}%`;
    }
    const style = () => useStyle(props, obj);
    const classList = () => useClassList(props, 'cm-table-style-layout-col');
    return <div classList={classList()} style={style()}>{props.children}</div>
}

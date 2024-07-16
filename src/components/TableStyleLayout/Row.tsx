import { useClassList } from "../utils/useProps";

export function TableStyleLayoutRow (props: any) {
    const classList = () => useClassList(props, 'cm-table-style-layout-row');

    return <div classList={classList()}>{props.children}</div>
}

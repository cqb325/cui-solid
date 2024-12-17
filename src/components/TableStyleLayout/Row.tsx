import { splitProps } from "solid-js";
import { useClassList } from "../utils/useProps";

export function TableStyleLayoutRow (props: any) {
    const [local, rest] = splitProps(props, ['class', 'classList']);
    const classList = () => useClassList(local, 'cm-table-style-layout-row');

    return <div classList={classList()} {...rest} />
}

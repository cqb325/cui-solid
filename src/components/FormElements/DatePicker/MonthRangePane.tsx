import { splitProps } from "solid-js"
import { MonthPane } from "./MonthPane"

export function MonthRangePane (props: any) {
    const [local, others] = splitProps(props, ['value']);
    const val1 = () => local.value ? local.value[0] : '';
    const val2 = () => local.value ? local.value[1] : '';
    return <>
        <MonthPane name="start" {...others} value={val1()}/>
        <MonthPane name="end" {...others} value={val2()}/>
    </>
}

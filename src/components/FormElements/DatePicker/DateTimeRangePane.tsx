import { Show, splitProps } from "solid-js";
import { DateTimePane } from "./DateTimePane";

export function DateTimeRangePane (props: any) {
    const [local, others] = splitProps(props, ['value']);
    const val1 = () => local.value && local.value[0];
    const val2 = () => local.value && local.value[1];
    return <>
        <DateTimePane name="start" value={val1()} {...others}/>
        <DateTimePane name="end" value={val2()} {...others}/>
    </>
}

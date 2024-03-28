import { splitProps } from "solid-js";
import { DatePane } from "./DatePane"
export function DateRangePane (props: any) {
    const [local, others] = splitProps(props, ['value']);
    const val1 = () => local.value[0];
    const val2 = () => local.value[1];
    return <>
        <DatePane name="start" value={val1()} {...others}/>
        <DatePane name="end" value={val2()} {...others}/>
    </>
}

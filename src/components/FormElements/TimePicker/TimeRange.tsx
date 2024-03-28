import { splitProps } from "solid-js";
import { TimePane } from "./TimePane";

export function TimeRange (props: any) {
    const [local, others] = splitProps(props, ['header', 'footer', 'value']);
    const val1 = () => local.value[0];
    const val2 = () => local.value[1];
    return <>
        <TimePane value={val1()} header={local.header[0]} footer={(local.footer && local.footer.length) && local.footer[0]} {...others} name="start"/>
        <TimePane value={val2()} header={local.header[1]} footer={(local.footer && local.footer.length) && local.footer[1]} {...others} name="end"/>
    </>
}

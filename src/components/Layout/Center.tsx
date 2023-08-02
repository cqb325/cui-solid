import { splitProps } from "solid-js";
import { useClassList, useStyle } from "../utils/useProps";

type CenterProps = {
    classList?: any,
    class?: any,
    children?: any,
    style?: any,
    width?: number,
    height?: number,
}

export function Center (props: CenterProps) {
    const classList = () => useClassList(props, 'cm-view-center');
    const newStyle = useStyle(props, {width: props.width + 'px', height: props.height + 'px'});
    const [local, others] = splitProps(props, ['classList', 'class', 'style', 'width', 'height', 'children']);
    return <div classList={classList()} style={newStyle()} {...others}>{local.children}</div>
}

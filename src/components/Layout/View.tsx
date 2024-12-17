import type { JSX} from "solid-js";
import { splitProps } from "solid-js"
import { useClassList, useStyle } from "../utils/useProps";

export interface ViewProps {
    classList?: any,
    class?: any,
    children?: any,
    style?: any,
    size?: string,
}

export function View (props: ViewProps): JSX.Element {
    const [local, others] = splitProps(props, ['classList', 'class', 'style', 'size', 'children']);
    const classList = () => useClassList(props, 'cm-view');
    const newStyle = ()=> useStyle(props, {flex: `0 1 ${local.size}`});
    return <div classList={classList()} style={newStyle()} {...others}>
        {local.children}
    </div>
}

export function HView (props: ViewProps): JSX.Element {
    const classList = () => useClassList(props, 'cm-h-view');
    const [local, others] = splitProps(props, ['classList', 'class']);
    return <View classList={classList()} {...others}/>
}

export function VView (props: ViewProps): JSX.Element {
    const classList = () => useClassList(props, 'cm-v-view');
    const [local, others] = splitProps(props, ['classList', 'class']);

    return <View classList={classList()} {...others}/>
}

export function FixedView (props: ViewProps) {
    const classList = () => useClassList(props, 'cm-fixed-view');
    const [local, others] = splitProps(props, ['classList', 'class']);
    return <View classList={classList()} {...others}/>;
}

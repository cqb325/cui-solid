import type { ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { useClassList, useStyle } from "../utils/useProps";
interface IconProps extends ComponentProps<'div'> {
    classList?: any,
    class?: string,
    style?: any,
    size?: number,
    spin?: boolean,
    name?: string,
    color?: string
}

export const Icon = (props: IconProps) => {
    const classList = () => useClassList(props, 'cm-icon', `cm-icon-${props.name}`, {
        'cm-icon-spin': props.spin
    });
    const [local, others] = splitProps(props, ['color', 'size', 'spin', 'classList', 'class', 'name', 'style', 'children', 'ref']);
    const newStyle = () => useStyle(props, { 'font-size': (local.size || 14) + 'px', color: local.color });
    return <div classList={classList()} style={newStyle()} {...others} ref={local.ref}>{local.children}</div>;
}

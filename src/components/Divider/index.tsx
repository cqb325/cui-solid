import { useClassList, useStyle } from "../utils/useProps";

type DividerProps = {
    classList?: any,
    class?: string,
    dir?: 'h'|'v',
    align?: 'left'|'right',
    style?: any,
    dashed?: boolean,
    children?: any,
    height?: string,
}

export function Divider (props: DividerProps) {
    const classList = () => useClassList(props, 'cm-divider', {
        [`cm-divider-${props.dir || 'h'}`]: props.dir || 'h',
        [`cm-divider-${props.align}`]: props.align,
        'cm-divider-dashed': props.dashed
    });
    const aStyle = () => useStyle(props, {
        height: props.height
    });
    return <div classList={classList()} style={aStyle()}>
        {props.children ? <span class="cm-divider-text">{props.children}</span> : null}
    </div>;
}

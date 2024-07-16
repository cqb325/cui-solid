import { useClassList, useStyle } from "../utils/useProps";

type DividerProps = {
    classList?: any,
    class?: string,
    dir?: 'h'|'v',
    align?: 'left'|'right',
    style?: any,
    dashed?: boolean,
    children?: any,
    margin?: number | string,
    textColor?: string, // 颜色
    textMargin?: number | string
}

export function Divider (props: DividerProps) {
    const classList = () => useClassList(props, 'cm-divider', {
        [`cm-divider-${props.dir || 'h'}`]: props.dir || 'h',
        [`cm-divider-${props.align}`]: props.align,
        'cm-divider-dashed': props.dashed
    });
    const aStyle = () => useStyle(props, {
        margin: `${props.margin}${typeof props.margin === 'number' ? 'px' : ''}`,
    });

    const textStyle = () => ({
        margin: `${props.textMargin}${typeof props.textMargin === 'number' ? 'px' : ''}`,
        color: props.textColor
    })
    return <div classList={classList()} style={aStyle()}>
        {props.children ? <span class="cm-divider-text">{props.children}</span> : null}
    </div>;
}

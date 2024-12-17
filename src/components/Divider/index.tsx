import type { JSX} from "solid-js";
import { splitProps } from "solid-js";
import { useClassList, useStyle } from "../utils/useProps";
import { isColor } from "../utils/utils";

export interface DividerProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'dir'> {
    dir?: 'h'|'v',
    align?: 'left'|'right',
    theme?: string |'primary'|'success'|'warning'|'error'|'info'|'blue'|'green'|'red'|'yellow'|'pink'|'magenta'|'volcano'|'orange'|'gold'|'lime'|'cyan'|'geekblue'|'purple'
    dashed?: boolean,
    children?: any,
    margin?: number | string,
    textColor?: string, // 颜色
    textMargin?: number | string
}

export function Divider (props: DividerProps) {
    const [local, rest] = splitProps(props, ['classList', 'class', 'dir', 'align', 'theme', 'style', 'dashed', 'children', 'margin', 'textColor', 'textMargin']);
    const theme = isColor(local.theme) ? '' : local.theme;
    const classList = () => useClassList(local, 'cm-divider', {
        [`cm-divider-${local.dir || 'h'}`]: local.dir || 'h',
        [`cm-divider-${local.align}`]: local.align,
        [`cm-divider-${theme}`]: theme,
        'cm-divider-dashed': local.dashed
    });
    const aStyle = () => useStyle(local, {
        margin: `${local.margin}${typeof local.margin === 'number' ? 'px' : ''}`,
        '--cui-divider-border-color': isColor(local.theme) ? local.theme : '',
    });

    const textStyle = () => ({
        margin: `${local.textMargin}${typeof local.textMargin === 'number' ? 'px' : ''}`,
        color: local.textColor
    })
    return <div classList={classList()} style={aStyle()} {...rest}>
        {local.children ? <span class="cm-divider-text" style={textStyle()}>{local.children}</span> : null}
    </div>;
}

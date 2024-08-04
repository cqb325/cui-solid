import { Dynamic } from "solid-js/web";
import type { ParagraphProps } from "./paragraph.d";
import { useClassList, useStyle } from "../utils/useProps";

export function Title (props: ParagraphProps) {
    const heading = () => props.heading || 1;
    const classList = () => useClassList(props, 'cm-typograghy-title', `cm-typograghy-h${heading()}`, {
        'cm-typograghy-title-inline': props.inline,
        [`cm-typograghy-title-prefix-${props.prefix}`]: props.prefix,
    });

    const style = () => useStyle(props, {
        'background-image': props.gradient ? `linear-gradient(${props.gradient.join(',')})` : '',
        color: props.gradient ? 'transparent' : '',
        [`--cm-title-prefix-width`]: props.prefixWidth ?? (props.prefix === 'bar' ? 4 : 8),
        [`--cm-title-prefix-gap`]: props.prefixGap ?? 16,
        [`--cm-title-prefix-color`]: typeof props.prefixColor === 'string' ? props.prefixColor : "",
        [`--cm-title-prefix-gradient`]: props.prefixColor instanceof Array ? props.prefixColor.join(',') : "",
    })
    const options = [
        () => <h1 classList={classList()} style={style()}>{props.children}</h1>,
        () => <h2 classList={classList()} style={style()}>{props.children}</h2>,
        () => <h3 classList={classList()} style={style()}>{props.children}</h3>,
        () => <h4 classList={classList()} style={style()}>{props.children}</h4>,
        () => <h5 classList={classList()} style={style()}>{props.children}</h5>,
        () => <h6 classList={classList()} style={style()}>{props.children}</h6>,
    ];
    return <Dynamic component={options[heading() - 1]} />
}

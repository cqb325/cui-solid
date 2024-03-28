import { Dynamic } from "solid-js/web";
import type { ParagraphProps } from "./paragraph.d";
import { useClassList } from "../utils/useProps";

export function Title (props: ParagraphProps) {
    const heading = () => props.heading || 1;
    const classList = () => useClassList(props, 'cm-typograghy-title', `cm-typograghy-h${heading()}`);
    const options = [
        () => <h1 classList={classList()} style={props.style}>{props.children}</h1>,
        () => <h2 classList={classList()} style={props.style}>{props.children}</h2>,
        () => <h3 classList={classList()} style={props.style}>{props.children}</h3>,
        () => <h4 classList={classList()} style={props.style}>{props.children}</h4>,
        () => <h5 classList={classList()} style={props.style}>{props.children}</h5>,
        () => <h6 classList={classList()} style={props.style}>{props.children}</h6>,
    ];
    return <Dynamic component={options[heading() - 1]} />
}

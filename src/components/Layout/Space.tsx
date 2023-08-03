import { useClassList, useStyle } from "../utils/useProps";

export interface SpaceOptions {
    dir?: 'v' | 'h'
    wrap?: boolean
    inline?: boolean
    size?: number
    align?: 'center'|'start'|'end'|'baseline'
    justify?: 'center'|'start'|'end'
    classList?: any
    class?: string
    children?: any
    style?: any
    id?: string
    title?: string
}
export const Space = (props: SpaceOptions) => {
    const dir = () => props.dir ?? 'h';
    const wrap = () => props.wrap ?? false;
    const inline = () => props.inline ?? false;
    const size = () => props.size ?? 8;
    const align = () => props.align ?? '';
    const classList = () => useClassList(props, 'cm-space', {
        [`cm-space-${dir()}`]: dir(),
        [`cm-space-align-${align()}`]: align(),
        [`cm-space-justify-${props.justify}`]: !!props.justify,
        'cm-space-wrap': wrap(),
        'cm-space-inline': inline()
    });
    const newStyle = () => useStyle(props, {[dir() === 'h' ? 'column-gap': 'row-gap']: size() + 'px'});
    return <div classList={classList()} style={newStyle()} id={props.id} title={props.title}>
        {
            props.children
        }
    </div>;
}

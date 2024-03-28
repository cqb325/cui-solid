import { useClassList, useStyle } from "../utils/useProps";

export interface FloorProps {
    classList?: any;
    class?: string;
    style?: any;
    children?: any;
    center?: boolean;
    padding?: string;
    color?: string;
    dividerTop?: boolean;
    dividerBottom?: boolean;
}

export function Floor (props: FloorProps) {
    const classList = () => useClassList(props, 'cm-footer-floor', {
        'cm-footer-floor-center': props.center,
        'cm-footer-floor-divider-top': props.dividerTop,
        'cm-footer-floor-divider-bottom': props.dividerBottom,
    });
    const style = () => useStyle(props, {padding: props.padding, color: props.color})
    return <div classList={classList()} style={style()}>
        {props.children}
    </div>
}

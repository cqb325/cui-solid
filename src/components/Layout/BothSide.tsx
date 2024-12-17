import type { JSX } from "solid-js";
import { useClassList } from "../utils/useProps";

export interface BothSideProps {
    classList?: any,
    class?: any,
    children?: any,
    style?: any,
}

export function BothSide (props: BothSideProps): JSX.Element {
    const classList = () => useClassList(props, 'cm-both-side');
    return <div classList={classList()} style={props.style}>{props.children}</div>
}

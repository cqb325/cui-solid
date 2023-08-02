import { createContext, mergeProps } from "solid-js";
import { useClassList } from "../utils/useProps";
export const Context = createContext();

type RowProps = {
    classList?: any,
    class?: any,
    children?: any,
    style?: any,
    justify?: 'start'|'center'|'end'|'space-between'|'space-around',
    align?: 'top'|'middle'|'bottom',
    gutter?: number,
}

export const Row = (props: RowProps) => {
    const classList = () => useClassList(props, 'cm-row', {
        [`cm-row-${props.justify}`]: props.justify,
        [`cm-row-${props.align}`]: props.align
    });
    const newStyle = () => {
        let half = props.gutter ? props.gutter / 2 : 0;
        const obj = {
            ...props.style,
        }
        if (props.gutter) {
            obj['margin-left'] = `-${half}px`;
            obj['margin-right'] = `-${half}px`;
        }
        return obj;
    }
    const v = mergeProps({gutter: props.gutter || 0});
    return <Context.Provider value={v}>
        <div classList={classList()} style={newStyle()}>{props.children}</div>
    </Context.Provider>
}
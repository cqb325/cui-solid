import { createContext, mergeProps } from "solid-js";
import { useClassList } from "../utils/useProps";
import { createGutter } from "../utils/createGridOffset";
export const Context = createContext();

export type GutterProps = {
    xs?: number | number[],
    sm?: number | number[],
    md?: number | number[],
    lg?: number | number[],
    xl?: number | number[],
    xxl?: number | number[]
}
export interface RowProps {
    classList?: any,
    class?: any,
    children?: any,
    style?: any,
    justify?: 'start'|'center'|'end'|'space-between'|'space-around',
    align?: 'top'|'middle'|'bottom',
    gutter?: number | number[] | GutterProps,
}

export const Row = (props: RowProps) => {
    const gutterClass = typeof props.gutter === 'object' ? createGutter(props.gutter) : {};
    const classList = () => useClassList(props, 'cm-row', {
        ...gutterClass,
        [`cm-row-${props.justify}`]: props.justify,
        [`cm-row-${props.align}`]: props.align
    });
    const newStyle = () => {
        const obj = {
            ...props.style,
        }
        let half = 0;
        let rowGutter = 0;
        if (typeof props.gutter === 'number') {
            half = props.gutter ? props.gutter / 2 : 0;
            rowGutter = props.gutter || 0;
        }
        if (Array.isArray(props.gutter)) {
            half = props.gutter[0] ? props.gutter[0] / 2 : 0;
            rowGutter = props.gutter[1] || 0;
        }

        if (half) {
            obj['margin-left'] = `-${half}px`;
            obj['margin-right'] = `-${half}px`;
        }
        if (rowGutter) {
            obj['row-gap'] = `${rowGutter}px`;
        }
        return obj;
    }
    const v = mergeProps({gutter: props.gutter || 0});
    return <Context.Provider value={v}>
        <div classList={classList()} style={newStyle()}>{props.children}</div>
    </Context.Provider>
}

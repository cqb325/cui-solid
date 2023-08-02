import { useContext } from 'solid-js';
import { Context } from '../Row';
import { useClassList } from '../utils/useProps';

type ColProps = {
    classList?: any,
    class?: any,
    children?: any,
    style?: any,
    grid?: number,
    push?: number,
    pull?: number,
    offset?: number,
    flex?: string,
}

export const Col = (props: ColProps) => {
    const ctx: any = useContext(Context);
    let ref: any;
    const style = () => {
        const obj = {
            ...props.style,
            flex: `0 0 ${(props.grid || 1) * 100}%`,
        };
        if (props.push) {
            obj.left = `${props.push * 100}%`;
        }
        if (props.pull) {
            obj.right = `${props.pull * 100}%`;
        }
        if (props.offset) {
            obj['margin-left'] = `${props.offset * 100}%`;
        }
        if (ctx?.gutter) {
            obj['padding-left'] = ctx?.gutter / 2 + 'px';
            obj['padding-right'] = ctx?.gutter / 2 + 'px';
        }
        if (props.flex) {
            if (props.flex.indexOf(' ') > -1) {
                obj['flex'] = props.flex;
            } else {
                obj['flex'] = `0 0 ${props.flex}`;
            }
        }
        return obj;
    }
    const classList = () => useClassList(props, 'cm-col');
    return <div ref={ref} classList={classList()} style={style()}>{props.children}</div>
}

import { Show, createContext, useContext } from "solid-js";
import createModel from "../utils/createModel";
import { useClassList } from "../utils/useProps";
import { Item } from "./Item";
import { useSlots } from "../utils/useSlots";

type ListProps = {
    classList?: any,
    class?: string,
    border?: boolean,
    size?: 'small'|'large',
    style?: any,
    head?: any,
    foot?: any,
    children?: any,
    render?: Function,
    onSelect?: Function
}

export type ListContextProps = {
    render?: Function,
    signal: Function[],
    onSelect?: Function
}

const ListContext = createContext<ListContextProps>();

export function List (props: ListProps) {
    const classList = () => useClassList(props, 'cm-list', {
        'cm-list-border': props.border,
        [`cm-list-${props.size}`]: props.size
    });

    const [activeKey, setActiveKey] = createModel(props, 'activeKey', '');

    const slots = useSlots(props.children);

    return <ListContext.Provider value={{
        render: props.render,
        signal: [activeKey, setActiveKey],
        onSelect: props.onSelect
    }}>
        <div classList={classList()} style={props.style}>
            <Show when={slots.head}>
                <div class='cm-list-head'>{slots.head}</div>
            </Show>
            {
                props.head ? <div class='cm-list-head'>{props.head}</div> : null
            }
            {slots.default}
            {
                props.foot ? <div class='cm-list-foot'>{props.foot}</div> : null
            }
            <Show when={slots.foot}>
                <div class='cm-list-foot'>{slots.foot}</div>
            </Show>
        </div>
    </ListContext.Provider>;
}
List.Item = Item;

export const useListContext: ()=> ListContextProps|undefined = () => useContext(ListContext);
import type { Signal} from "solid-js";
import { createContext, useContext } from "solid-js";
import createModel from "../utils/createModel";
import { useClassList } from "../utils/useProps";
import { Item } from "./Item";

type ListProps = {
    classList?: any,
    class?: string,
    border?: boolean,
    size?: 'small'|'large',
    style?: any,
    head?: any,
    foot?: any,
    children?: any,
    onSelect?: (item: any) => void
}

export type ListContextProps = {
    signal: Signal<any>,
    onSelect?: (item: any) => void
}

const ListContext = createContext<ListContextProps>();

export function List (props: ListProps) {
    const classList = () => useClassList(props, 'cm-list', {
        'cm-list-border': props.border,
        [`cm-list-${props.size}`]: props.size
    });

    const [activeKey, setActiveKey] = createModel(props, 'activeKey', '');

    return <ListContext.Provider value={{
        signal: [activeKey, setActiveKey],
        onSelect: props.onSelect
    }}>
        <div classList={classList()} style={props.style}>
            {
                props.head ? <div class="cm-list-head">{props.head}</div> : null
            }
            {props.children}
            {
                props.foot ? <div class="cm-list-foot">{props.foot}</div> : null
            }
        </div>
    </ListContext.Provider>;
}
List.Item = Item;

export const useListContext: ()=> ListContextProps|undefined = () => useContext(ListContext);

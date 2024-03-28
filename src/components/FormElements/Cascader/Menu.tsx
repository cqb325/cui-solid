import { For } from "solid-js";
import { Item } from "./Item";

export function Menu (props: any) {
    const [store, setStore] = props.store;
    const data = () => props.data;

    return <div class="cm-cascader-list">
        <For each={data()}>
            {(item: any) => {
                return <Item trigger={props.trigger} data={props.mapData[item]} store={[store, setStore]} level={props.level}/>;
            }}
        </For>
    </div>
}

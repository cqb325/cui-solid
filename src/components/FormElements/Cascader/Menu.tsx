import { For, Show } from "solid-js";
import { Item } from "./Item";
import { Exception, NO_DATA_IMAGE } from "../../Exception";

export function Menu (props: any) {
    const data = () => props.data;

    return <div classList={{"cm-cascader-list": true, 'cm-cascader-list-empty': !data().length}}>
        <Show when={data().length} fallback={
            <div class="cm-cascader-empty">
                <Exception width={100} type="empty" typeImage={NO_DATA_IMAGE} desc={props.emptyText}/>
            </div>
        }>
            <For each={data()}>
                {(item: any) => {
                    return <Item trigger={props.trigger} data={props.store.store.nodeMap[item]}
                        store={props.store} level={props.level} />;
                }}
            </For>
        </Show>
    </div>
}

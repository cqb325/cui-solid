import { For } from "solid-js";
import { Node } from "./Node";

export function SubNodes (props: any) {
    return <ul class="cm-tree-nodes">
        <For each={props.data}>
            {(item: any) => {
                return <Node data={item} store={props.store} level={props.level} gutter={props.gutter} multi={props.multi} directory={props.directory}/>
            }}
        </For>
    </ul>;
}

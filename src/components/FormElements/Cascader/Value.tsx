import { Show } from "solid-js";
import { Icon } from "../../Icon";

export function Value (props: any) {
    const onClear = () => {

    }
    return <div class="cm-cascader-value">
        <Show when={props.prepend}>
            <div class="cm-cascader-prepend">
                {props.prepend}
            </div>
        </Show>
        <div class="cm-cascader-text">{props.text}</div>
        <Show when={props.clearable && (props.value && props.value.length !== 0)}>
            <Icon name="x-circle" class="cm-cascader-clear" onClick={onClear}/>
        </Show>
    </div>
}

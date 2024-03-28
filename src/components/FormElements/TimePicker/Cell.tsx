import { createEffect, For } from "solid-js";
import { useTimepickerContext } from ".";
import { useDatepickerContext } from "../DatePicker";

export function Cell (props: any) {
    const arr = [];
    for (let i = 0; i < props.max; ) {
        arr.push(i);
        i += props.step || 1;
    }
    const ctx: any = useTimepickerContext();
    const ctx2: any = useDatepickerContext();
    const onClick = (num: number, disabled: boolean) => {
        if (disabled) {
            return;
        }
        ctx && ctx.onSelect(props.type, num, props.name);
        props.onSelectTime && props.onSelectTime(props.type, num, props.name)
    }
    let wrap: any;

    createEffect(() => {
        const v = ctx?.visible();
        const v2 = ctx2?.visible();
        if (wrap && (v || v2)) {
            wrap.scrollTop = 26 * (props.value / (props.step || 1));
        }
    });

    return <div class="cm-time-picker-cell" ref={wrap}>
        <ul>
            <For each={arr}>
                {(num: number) => {
                    const disabled = ctx && ctx.disabledTime && ctx.disabledTime(num, props.type);
                    const classList = () => ({
                        'cm-time-picker-item': true,
                        'cm-time-picker-item-active': props.value === num,
                        'cm-time-picker-item-disabled': disabled
                    });
                    return <li classList={classList()} onClick={onClick.bind(null, num, disabled)}>{num}</li>
                }}
            </For>
        </ul>
    </div>;
}

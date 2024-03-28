import { createEffect, For } from "solid-js";
import { useDatepickerContext } from ".";

export function Cell (props: any) {
    const ctx: any = useDatepickerContext();
    const onClick = (num: number, disabled: boolean) => {
        if (disabled) {
            return;
        }
        props.onSelect && props.onSelect(props.type, num);
    }
    let wrap: any;

    createEffect(() => {
        if (wrap && ctx?.visible()) {
            const start = props.data[0]
            const v = props.value ? props.value : (props.type === 'year' ? new Date().getFullYear() : new Date().getMonth() + 1);
            wrap.scrollTop = 26 * (v - start);
        }
    });

    return <div class="cm-month-picker-cell" ref={wrap}>
        <ul>
            <For each={props.data}>
                {(num: number) => {
                    const disabled = () => {
                        let dis = false;
                        const d = new Date(props.day);
                        if (props.type === 'year') {
                            // 年份必须使用那年的1月1号进行比较
                            // 要不然年份小于禁用年份月份大于禁用月份时 年份会被禁用
                            d.setFullYear(num);
                            d.setMonth(1);
                            d.setDate(1);
                            dis = ctx && ctx.disabledDate && ctx.disabledDate(d);
                        }
                        if (props.type === 'month') {
                            d.setMonth(num - 1);
                            dis = ctx && ctx.disabledDate && ctx.disabledDate(d);
                        }
                        return dis;
                    };
                    const classList = () => ({
                        'cm-month-picker-item': true,
                        'cm-month-picker-item-active': props.value === num,
                        'cm-month-picker-item-disabled': disabled()
                    });
                    return <li classList={classList()} onClick={() => {
                        onClick(num, disabled())
                    }}>{num}</li>
                }}
            </For>
        </ul>
    </div>;
}

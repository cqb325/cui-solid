import { Show, onCleanup, onMount } from "solid-js";
import { Icon } from "../../Icon";
import dayjs from "dayjs";

export function Value (props: any) {
    const text = () => {
        if (props.value) {
            if (typeof props.value === 'string') {
                return props.value;
            } else {
                if (props.type === 'dateRange' || props.type === 'monthRange' || props.type === 'dateTimeRange') {
                    return [
                        dayjs(props.value[0]).format(props.format),
                        dayjs(props.value[1]).format(props.format),
                    ].join(props.seperator)
                }
                return dayjs(props.value).format(props.format);
            }
        }
        return '';
    }
    // 由于dropdown事件监听为addEventListener注册 所以阻止冒泡时需要使用stopImmediatePropagation
    const onClear = (e: any) => {
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        props.onClear && props.onClear();
    }
    return <div class="cm-date-picker-value">
        <Show when={props.prepend}>
            <div class="cm-date-picker-prepend">
                {props.prepend}
            </div>
        </Show>
        <div class="cm-date-picker-text">{text()}</div>
        <Icon name="calendar1" class="cm-date-picker-cert"/>
        <Show when={props.clearable && (props.value && props.value.length !== 0)}>
            <Icon name="x-circle" class="cm-date-picker-clear" onClick={onClear}/>
        </Show>
    </div>
}

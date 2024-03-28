import { Show } from "solid-js";
import { Icon } from "../../Icon";
import dayjs from "dayjs";

export function Value (props: any) {
    const onClear = () => {
        props.onClear && props.onClear();
    }

    const text = () => {
        if (props.value) {
            if (typeof props.value === 'string') {
                return props.value;
            } else {
                if (props.type === 'timeRange') {
                    if (props.value.length) {
                        if (typeof props.value[0] === 'string') {
                            return props.value.join(props.seperator);
                        }
                        return [
                            dayjs(props.value[0]).format(props.format),
                            dayjs(props.value[1]).format(props.format),
                        ].join(props.seperator)
                    } else {
                        return '';
                    }
                }
                return dayjs(props.value).format(props.format);
            }
        }
        return '';
    }
    return <div class="cm-time-picker-value">
        <Show when={props.prepend}>
            <div class="cm-time-picker-prepend">
                {props.prepend}
            </div>
        </Show>
        <div class="cm-time-picker-text">{text()}</div>
        <Icon name="clock" class="cm-time-picker-cert"/>
        <Show when={props.clearable && (props.value !== '' && props.value.length !== 0)}>
            <Icon name="x-circle" class="cm-time-picker-clear" onClick={onClear}/>
        </Show>
    </div>
}

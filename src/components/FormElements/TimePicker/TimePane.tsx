import { Show } from "solid-js";
import { Cell } from "./Cell"

export function TimePane (props: any) {
    const hour = () => {
        return props.value && props.value.getHours && props.value.getHours();
    }
    const minute = () => {
        return props.value && props.value.getMinutes && props.value.getMinutes();
    }
    const second = () => {
        return props.value && props.value.getSeconds && props.value.getSeconds();
    }

    const hasHour = () => {
        return props.format.indexOf('H') > -1;
    }
    const hasMinute = () => {
        return props.format.indexOf('m') > -1;
    }
    const hasSecond = () => {
        return props.format.indexOf('s') > -1;
    }
    return <div class="cm-time-picker-pane">
        <Show when={props.header}>
            <div class="cm-time-picker-header">{props.header}</div>
        </Show>
        <div class="cm-time-picker-options">
            <Show when={hasHour()}>
                <Cell max={24} type="hour" value={hour()} step={props.hourStep} name={props.name} onSelectTime={props.onSelectTime}/>
            </Show>
            <Show when={hasMinute()}>
                <Cell max={60} type="minute" value={minute()} step={props.minuteStep} name={props.name} onSelectTime={props.onSelectTime}/>
            </Show>
            <Show when={hasSecond()}>
                <Cell max={60} type="second" value={second()} step={props.secondStep} name={props.name} onSelectTime={props.onSelectTime}/>
            </Show>
        </div>
        <Show when={props.footer}>
            <div class="cm-time-picker-footer">{props.footer}</div>
        </Show>
    </div>
}

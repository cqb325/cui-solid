import { ComponentProps, Show } from "solid-js";
import { useClassList } from "../utils/useProps"

type BadgeProps = {
    classList?: any,
    class?: string,
    count?: number,
    dot?: boolean,
    overflowCount?: number,
    text?: string,
    children?: any,
    status?: 'success'|'error'|'processing'|'warning'|'default',
    color?: string | 'blue'|'green'|'red'|'yellow'|'pink'|'magenta'|'volcano'|'orange'|'gold'|'lime'|'cyan'|'geekblue'|'purple',
    type?: 'primary'|'success'|'normal'|'info'|'error'|'warning'
}

function isColor (strColor: string | undefined): boolean {
    if (strColor && (strColor.startsWith('#') || strColor.startsWith('rgb') || strColor.startsWith('hsl'))) {
        var s = new Option().style;
        s.color = strColor as string;
        return s.color.startsWith('rgb');
    }
    return false;
}
export function Badge(props: BadgeProps) {
    const overflowCount = props.overflowCount ?? 99;
    const classList = () => useClassList(props, 'cm-badge', {
        'cm-badge-status': props.status
    });
    const showCount = () => {
        return props.count && props.count > overflowCount ? Math.min(overflowCount, props.count) + '+' : props.count;
    }

    const statusClass = () => ({
        'cm-badge-status-dot': true,
        [`cm-badge-status-${props.status}`]: !!props.status,
        [`cm-badge-status-${props.color}`]: !!props.color && props.color.indexOf('#') === -1
    })

    const statusStyle = () => ({
        'background-color': isColor(props.color) ? props.color : ''
    });

    const countClass = () => ({
        'cm-badge-count': true,
        [`cm-badge-count-${props.type}`]: !!props.type
    })

    return <span classList={classList()}>
        {props.children}
        <Show when={!props.status && !props.color} fallback={
            <>
                <span classList={statusClass()} style={statusStyle()}></span>
                <span class="cm-badge-status-text">{props.text}</span>
            </>
        }>
            <Show when={props.count !== undefined || props.text !== undefined}>
                <sup classList={countClass()}>{showCount()}{props.text}</sup>
            </Show>
            <Show when={props.dot !== undefined}>
                <sup class="cm-badge-dot"></sup>
            </Show>
        </Show>
    </span>
}
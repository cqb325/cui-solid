import { Show } from "solid-js";
import { useClassList } from "../utils/useProps"

export interface BadgeProps {
    classList?: any,
    class?: string,
    count?: number,
    dot?: boolean,
    overflowCount?: number,
    text?: string,
    children?: any,
    offset?: number[],
    status?: 'success'|'error'|'processing'|'warning'|'default',
    color?: string | 'blue'|'green'|'red'|'yellow'|'pink'|'magenta'|'volcano'|'orange'|'gold'|'lime'|'cyan'|'geekblue'|'purple',
    type?: 'primary'|'success'|'normal'|'info'|'error'|'warning'
}

function isColor (strColor: string | undefined): boolean {
    if (strColor && (strColor.startsWith('#') || strColor.startsWith('rgb') || strColor.startsWith('hsl'))) {
        const s = new Option().style;
        s.color = strColor as string;
        return s.color.startsWith('rgb');
    }
    return false;
}
export function Badge (props: BadgeProps) {
    const overflowCount = props.overflowCount ?? 99;
    const classList = () => useClassList(props, 'cm-badge', {
        'cm-badge-status': props.status
    });

    const styles = () => {
        const style: any = {};
        if (props.offset && props.offset.length === 2) {
            style['margin-top'] = `${props.offset[0]}px`;
            style['margin-right'] = `${props.offset[1]}px`;
        }
        return style;
    };

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
                <span classList={statusClass()} style={statusStyle()} />
                <span class="cm-badge-status-text">{props.text}</span>
            </>
        }>
            <Show when={props.count !== undefined || props.text !== undefined}>
                <sup classList={countClass()} style={styles()}>{showCount()}{props.text}</sup>
            </Show>
            <Show when={props.dot !== undefined}>
                <sup class="cm-badge-dot" style={styles()} />
            </Show>
        </Show>
    </span>
}

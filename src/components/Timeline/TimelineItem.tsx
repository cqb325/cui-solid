import type { JSXElement} from "solid-js";
import { Show } from "solid-js";
import { useClassList } from "../utils/useProps";

export interface TimelineItemProps {
    children?: any,
    classList?: any,
    class?: string,
    color?: 'blue'|'green'|'red'|'yellow',
    fill?: boolean,
    icon?: JSXElement,
    time?: string
};
export function TimelineItem (props: TimelineItemProps) {
    const color = props.color ?? 'blue';
    const classList = () => useClassList(props, 'cm-timeline-item-head', {
        [`cm-timeline-item-head-${color}`]: color,
        'cm-timeline-item-head-custom': props.icon,
        'cm-timeline-item-head-fill': props.fill
    })
    return <div class="cm-timeline-item">
        <div class="cm-timeline-item-tail" />
        <div classList={classList()}>
            {props.icon}
        </div>
        <div class="cm-timeline-item-content">
            {props.children}
            <Show when={props.time}>
                <div class="cm-timeline-time">
                    {props.time}
                </div>
            </Show>
        </div>
    </div>
}

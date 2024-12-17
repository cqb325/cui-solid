import type { JSXElement} from "solid-js";
import { Show } from "solid-js";
import { useClassList } from "../utils/useProps";

export interface CardProps {
    classList?: any,
    class?: any,
    children?: any,
    bordered?: boolean,
    rised?: boolean,
    title?: any,
    size?: 'small'|'default'|'large',
    cover?: JSXElement,
    style?: any,
    headStyle?: any,
    bodyStyle?: any,
    footer?: any
}

export function Card (props: CardProps) {
    const classList = () => useClassList(props, 'cm-card', {
        'cm-card-bordered': props.bordered,
        'cm-card-rised': props.rised,
        [`cm-card-${props.size}`]: props.size,
    });
    return <div classList={classList()} style={props.style}>
        {
            props.title ? <div class="cm-card-head" style={props.headStyle}>
                { props.title }
            </div>
            : null
        }
        <Show when={props.cover}>
            <div class="cm-card-cover">{props.cover}</div>
        </Show>
        <div class="cm-card-body" style={props.bodyStyle}>
            { props.children }
        </div>
        {
            props.footer ? <div class="cm-card-footer">{props.footer}</div> : null
        }
    </div>
}

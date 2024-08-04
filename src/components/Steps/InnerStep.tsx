import { Show, type JSXElement } from "solid-js";
import { useClassList } from "../utils/useProps";
import { Icon } from "../Icon";

export interface InnerStepProps {
    title?: JSXElement | string
    description?: JSXElement | string
    style?: any
    classList?: any
    class?: string
    icon?: JSXElement,
    status?: 'finished'|'process'|'error'|'warning'|'wait'
    current: number,
    index: number,
}

export function InnerStep (props: InnerStepProps) {
    const status = () : string => {
        if (props.status) {
            return props.status;
        }
        let ret:string = '';
        if (props.current + 1 > props.index) {
            ret = 'finished';
        }
        if (props.current + 1 === props.index) {
            ret = 'process';
        }
        return ret || 'wait';
    }
    const done = () : string => {
        let ret:string = '';
        if (props.current + 1 > props.index) {
            ret = 'done';
        }
        if (props.current + 1 === props.index) {
            ret = 'active';
        }
        return ret;
    }

    const classList = () => useClassList(props, 'cm-steps-item', {
        [`cm-steps-status-${status()}`]: status(),
        [`cm-steps-status-${done()}`]: done(),
    })

    const inner = () => {
        let ret:JSXElement = '';
        if (!props.icon) {
            if (status() === 'finished') {
                ret = <div class="cm-step-head-inner"><Icon name="check" /></div>;
            } else if (status() === 'error') {
                ret = <Icon name="x-circle" size={26}/>;
            } else if (status() === 'warning') {
                ret = <Icon name="alert-triangle" size={26}/>;
            } else {
                ret = <div class="cm-step-head-inner"><span>{props.index}</span></div>;
            }
        } else {
            ret = props.icon;
        }
        return ret;
    }

    return <div classList={classList()} style={props.style}>
        <div class="cm-step-head">
            {inner()}
        </div>
        <div class="cm-step-main">
            <div class="cm-step-title">{props.title}</div>
            <Show when={props.description}>
                <div class="cm-step-description">{props.description}</div>
            </Show>
        </div>
    </div>;
}

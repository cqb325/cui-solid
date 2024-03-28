import type { JSXElement} from "solid-js";
import { Show } from "solid-js"
import { useClassList } from "../utils/useProps"
import { Icon } from "../Icon"
import { useSlots } from "../utils/useSlots"
import createModel from "../utils/createModel"

export interface BannerProps {
    type: 'warning'|'info'|'success'|'error'
    classList?: any
    class?: string
    bordered?: boolean
    icon?: JSXElement
    closeIcon?: JSXElement | null
    children?: any
    onClose?(): void
    title?: JSXElement | string
    fullMode?: boolean
    visible?: any
}

export function Banner (props: BannerProps) {
    const [visible, setVisible] = createModel(props, 'visible', true);
    const classList = () => useClassList(props, 'cm-banner', {
        [`cm-banner-${props.type}`]: props.type,
        [`cm-banner-bordered`]: props.bordered,
        [`cm-banner-full`]: props.fullMode ?? true,
        [`cm-banner-not-full`]: props.fullMode === false,
    })
    const getIconByType = () => {
        let icon = '';
        switch (props.type) {
            case 'info': {
                icon = 'info';
                break;
            }
            case 'success': {
                icon = 'check-circle';
                break;
            }
            case 'warning': {
                icon = 'alert-circle';
                break;
            }
            case 'error': {
                icon = 'x-circle';
                break;
            }
            default: {
                icon = 'info';
            }
        }
        return <Icon name={icon} size={20}/>;
    }

    const onClickClose = () => {
        setVisible(false);
        props.onClose && props.onClose();
    }

    const slots = useSlots(props.children);

    const icon = props.icon === null ? null : props.icon ?? getIconByType();
    return <Show when={visible()}>
        <div classList={classList()}>
            <div class="cm-banner-body">
                <div class="cm-banner-content">
                    <Show when={icon}>
                        <div class="cm-banner-icon">{icon}</div>
                    </Show>
                    <div class="cm-banner-content-body">
                        <Show when={props.title}>
                            <div class="cm-banner-title">
                                {props.title}
                            </div>
                        </Show>
                        <Show when={slots.default}>
                            <div class="cm-banner-desc">
                                {slots.default}
                            </div>
                        </Show>
                    </div>
                </div>
                <Show when={props.closeIcon !== null}>
                    <span class="cm-banner-close" onClick={onClickClose}>{props.closeIcon ?? <Icon name="x"/>}</span>
                </Show>
            </div>
            <Show when={slots.extra}>
                <div class="cm-banner-extra">
                    {slots.extra}
                </div>
            </Show>
        </div>
    </Show>
}

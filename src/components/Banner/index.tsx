import type { JSXElement} from "solid-js";
import { Show } from "solid-js"
import { useClassList } from "../utils/useProps"
import { useSlots } from "../utils/useSlots"
import createModel from "../utils/createModel"
import { FeatherX } from 'cui-solid-icons/feather';
import { F7ExclamationmarkTriangleFill, F7CheckmarkAltCircleFill, F7XmarkCircleFill, F7InfoCircleFill } from "cui-solid-icons/f7";

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
        let icon = null;
        switch (props.type) {
            case 'info': {
                icon = <F7InfoCircleFill />;
                break;
            }
            case 'success': {
                icon = <F7CheckmarkAltCircleFill/>;
                break;
            }
            case 'warning': {
                icon = <F7ExclamationmarkTriangleFill />;
                break;
            }
            case 'error': {
                icon = <F7XmarkCircleFill/>;
                break;
            }
            default: {
                icon = <F7InfoCircleFill/>;
            }
        }
        return icon;
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
                    <span class="cm-banner-close" onClick={onClickClose}>{props.closeIcon ?? <FeatherX />}</span>
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

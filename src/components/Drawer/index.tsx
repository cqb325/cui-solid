import type { JSXElement, Signal} from "solid-js";
import { Show, createComputed, createSignal } from "solid-js";
import { useClassList } from "../utils/useProps";
import createModel from "../utils/createModel";
import { useTransition } from "../utils/useTransition";
import { FeatherX } from "cui-solid-icons/feather";

export interface DrawerProps {
    classList?: any
    class?: string
    style?: any
    align?: 'right'|'left'|'top'|'bottom'
    size?: number
    title?: string | JSXElement
    maskCloseable?: boolean
    children?: JSXElement
    hasClose?: boolean
    escClose?: boolean
    onClose?(): void
    onShow?(): void
    visible?: Signal<any>
    destroyOnClose?: boolean
}

export function Drawer (props: DrawerProps) {
    const [visible, setVisible] = createModel(props, 'visible', false);
    const [destroyed, setDestroyed] = createSignal(props.destroyOnClose && !visible());
    const align = () => props.align ?? 'right';
    const maskCloseable = props.maskCloseable ?? true;
    const size = () => (props.size ?? 256) + 'px';
    const style = () => ({[(align() === 'left' || align() === 'right') ? 'width' : 'height']: size()});
    const classList = ()=> useClassList(props, 'cm-drawer', {
        [`cm-drawer-${align()}`]: align(),
    });
    let box: any;
    let target: any;
    let originBodyOverflow: string;

    const transition = useTransition({
        el: ()=> box,
        target: () => target,
        startClass: 'cm-drawer-visible',
        activeClass: 'cm-drawer-open',
        onLeave: () => {
            props.onClose && props.onClose();
            document.body.style.overflow = originBodyOverflow;
            setDestroyed(true);
        },
        onEnter: () => {
            originBodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }
    })

    const onMaskClick = () => {
        if (maskCloseable) {
            onClose();
        }
    }

    const onClose = () => {
        setVisible(false);
    }

    createComputed(() => {
        const v = visible();
        if (v) {
            setDestroyed(false);
            transition.enter();
            props.onShow && props.onShow();
        } else {
            transition.leave();
        }
    })

    const onKeyUp = (e: KeyboardEvent) => {
        if (props.escClose && e.code === 'Escape') {
            setVisible(false);
        }
    }

    return <div classList={classList()} style={props.style} ref={box} tabIndex={1} onKeyUp={onKeyUp}>
        <div class="cm-drawer-mask" onClick={onMaskClick} />
        <div class="cm-drawer-wrap" style={style()} ref={target}>
            <Show when={props.title}>
                <div class="cm-drawer-title">
                    {props.title}
                </div>
            </Show>
            <Show when={props.hasClose ?? true}>
                <FeatherX class="cm-drawer-close" onClick={onClose}/>
            </Show>
            <div class="cm-drawer-body">
                {destroyed() ? null : props.children}
            </div>
        </div>
    </div>
}

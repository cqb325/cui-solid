import type { JSXElement, Signal} from "solid-js";
import { Show, createComputed } from "solid-js";
import { Icon } from "../Icon";
import { useClassList } from "../utils/useProps";
import createModel from "../utils/createModel";
import { useTransition } from "../utils/useTransition";

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
}

export function Drawer (props: DrawerProps) {
    const [visible, setVisible] = createModel(props, 'visible', false);
    const align = () => props.align ?? 'right';
    const maskCloseable = props.maskCloseable ?? true;
    const size = () => (props.size ?? 256) + 'px';
    const style = () => ({[(align() === 'left' || align() === 'right') ? 'width' : 'height']: size()});
    const classList = ()=> useClassList(props, 'cm-drawer', {
        [`cm-drawer-${align()}`]: align(),
    });
    let box: any;
    let target: any;

    const transition = useTransition({
        el: ()=> box,
        target: () => target,
        startClass: 'cm-drawer-visible',
        activeClass: 'cm-drawer-open',
        onLeave: () => {
            props.onClose && props.onClose();
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
                <Icon name="x" size={18} class="cm-drawer-close" onClick={onClose}/>
            </Show>
            <div class="cm-drawer-body">
                {props.children}
            </div>
        </div>
    </div>
}

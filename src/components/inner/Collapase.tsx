import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { useClassList } from "../utils/useProps";
import { isServer } from "solid-js/web";

export interface CollapaseProps {
    open?: boolean,
    onOpen?: (height: number) => void,
    style?: any,
    children?: any,
    onEnd?: (open: boolean | undefined) => void,
    classList?: any,
    class?: string,
    ref?: any
}

export function Collapase(props: CollapaseProps) {
    const classList = () => useClassList(props, 'cm-collapase');
    let dom: any;
    function whichTransitionEvent() {
        const el: any = document.createElement('surface');
        const transitions: any = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

        for (const t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

    function transitionEventEnd() {
        if (props.open) {
            dom ? dom.style.height = 'auto' : false;
        }
        props.onEnd && props.onEnd(props.open);
    }
    createEffect(() => {
        if (!dom) {
            return;
        }
        const open = props.open;
        if (open) {
            dom.style.height = 'auto';
            const h = dom.getBoundingClientRect().height;
            props.onOpen && props.onOpen(h);
            dom.style.height = '0px';
            dom.classList.add('cm-collapase-open');
            setTimeout(() => {
                dom.style.height = `${h}px`;
            }, 0);
        } else {
            const h = dom.getBoundingClientRect().height;
            dom.classList.add('animation');
            dom.classList.remove('cm-collapase-open');
            dom.style.height = `${h}px`;
            setTimeout(() => {
                dom.style.height = '0px';
            }, 0);
        }
    });
    onMount(() => {
        if (dom) {
            if (isServer) return;
            const transitionEvent = whichTransitionEvent();
            dom.addEventListener(transitionEvent, transitionEventEnd);
        }
    });
    onCleanup(() => {
        if (isServer) return;
        const transitionEvent = whichTransitionEvent();
        dom && dom.removeEventListener(transitionEvent, transitionEventEnd);
    });

    props.ref && props.ref({
        getHeight() {
            const orignHeight = dom.style.height;
            dom.style.transition = 'none';
            dom.style.height = 'auto';
            const oh = dom.offsetHeight;
            dom.style.transition = '';
            dom.style.height = orignHeight;
            return oh;
        }
    });

    return <div classList={classList()} ref={dom} style={props.style}>{props.children}</div>
}

import type { JSXElement } from "solid-js";
import { For, createEffect, createRenderEffect, createSignal, onCleanup } from "solid-js";
import { useClassList } from "../utils/useProps"
import { createStore } from "solid-js/store";
import { useSlots } from "../utils/useSlots";
import { isServer } from "solid-js/web";

type SplitProps = {
    classList?: any,
    class?: any,
    dir?: 'v' | 'h',
    split?: number | string,
    min?: number,
    max?: number,
    children?: JSXElement
}

export function Split(props: SplitProps) {
    const dir = props.dir || 'v';
    const classList = () => useClassList(props, 'cm-split-wrap', {
        [`cm-split-wrap-${dir}`]: dir
    });
    let initSplit: any = props.split;
    if (initSplit && initSplit < 1) {
        initSplit = initSplit * 100 + '%';
    }
    const [split, setSplit] = createSignal(initSplit || '50%');
    const min = props.min || 40;
    let wrap: any;
    let prev: any;
    const handlerClassList = () => ({
        'cm-split-handler': true,
        'cm-split-dragging': store.dragging,
        [`cm-split-handler-${dir}`]: !!dir
    });

    const slots = useSlots(props.children);
    if (!slots.prev) {
        console.warn('Split need prev Slot Element');
    }
    if (!slots.next) {
        console.warn('Split need next Slot Element');
    }

    createEffect(() => {
        const wrapRect = wrap.getBoundingClientRect();
        const wrapSize = dir === 'v' ? wrapRect.width : wrapRect.height;
        let wh = dir === 'v' ? prev.style.width : prev.style.height;
        if (wh.indexOf('px') > -1) {
            wh = parseFloat(wh) / wrapSize * 100;
        } else {
            wh = parseFloat(wh);
        }
        const max = props.max ? props.max / wrapSize * 100 : 100 - min / wrapSize * 100;
        wh = wh + (dir === 'v' ? store.deltaX : store.deltaY) / wrapSize * 100;
        wh = Math.max(wh, min / wrapSize * 100);
        wh = Math.min(wh, max);
        setSplit(wh + '%');
    });

    const prevStyle = () => {
        return { [`${dir === 'v' ? 'width' : 'height'}`]: split() };
    }
    const handlerStyle = () => {
        return { [`${dir === 'v' ? 'left' : 'top'}`]: split() };
    }
    const nextStyle = {
        flex: '1'
    }

    const [store, setStore] = createStore({
        dragging: false,
        x: NaN,
        y: NaN,
        deltaX: 0,
        deltaY: 0
    })

    const onDragStart = (e: any) => {
        if (typeof e.button === 'number' && e.button !== 0) return false;

        setStore('dragging', true);
        const x = e.clientX;
        const y = e.clientY;
        setStore('x', x);
        setStore('y', y);

        document.addEventListener('mousemove', onDragMove, false);
        document.addEventListener('mouseup', onDragEnd, false);
    }

    const onDragMove = (e: any) => {
        const deltaX = e.clientX - store.x;
        const deltaY = e.clientY - store.y;
        setStore('x', e.clientX);
        setStore('y', e.clientY);
        setStore('deltaX', deltaX);
        setStore('deltaY', deltaY);

    }
    const onDragEnd = (e: any) => {
        setStore('dragging', false);
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
        setStore('deltaX', 0);
        setStore('deltaY', 0);
    }

    onCleanup(() => {
        if (isServer) return;
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
    })

    return <div classList={classList()} ref={wrap}>
        <div style={prevStyle()} ref={prev} class={`cm-split-panel cm-split-${dir === 'v' ? 'left' : 'top'}`}>
            {slots.prev}
        </div>
        <div class="cm-slpit-handler-wrap" style={handlerStyle()}>
            <div classList={handlerClassList()} onMouseDown={onDragStart}>
                <div class="cm-split-handler-bar-wrap">
                    <For each={[1, 2, 3, 4, 5, 6, 7, 8]}>
                        {() => {
                            return <div class="cm-split-handler-bar" />
                        }}
                    </For>
                </div>
            </div>
        </div>
        <div style={nextStyle} class={`cm-split-panel cm-split-${dir === 'v' ? 'right' : 'bottom'}`}>
            {slots.next}
        </div>
    </div>
}

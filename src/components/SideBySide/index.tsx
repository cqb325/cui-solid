import { createStore } from "solid-js/store"
import { useClassList } from "../utils/useProps"
import { createEffect, createSignal, onCleanup, untrack } from "solid-js"
import { isServer } from "solid-js/web"

export interface SideBySideProps {
    style?: any
    class?: string
    classList?: any
    left?: any
    right?: any
}

export function SideBySide(props: SideBySideProps) {
    const classList = () => useClassList(props, 'cm-side-by-side');
    const [split, setSplit] = createSignal(50);
    const [store, setStore] = createStore({
        dragging: false,
        x: NaN,
        y: NaN,
        deltaX: 0,
        deltaY: 0
    })
    let wrap: any;

    createEffect(() => {
        const wrapRect = wrap.getBoundingClientRect();
        let w = untrack(() => split());

        w = w + (store.deltaX / wrapRect.width * 100);
        w = Math.min(w, 100);
        w = Math.max(w, 0);
        setSplit(w);
    });

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

    const leftStyle = () => ({
        'clip-path': `inset(0 ${100 - split()}% 0 0)`
    })

    const handlerStyle = () => ({
        left: `${split()}%`
    })

    onCleanup(() => {
        if (isServer) return;
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
    })

    return <div classList={classList()} style={props.style} ref={wrap}>
        <div class="cm-sbs-right-panel">
            {props.right}
        </div>
        <div class="cm-sbs-left-panel" style={leftStyle()}>
            {props.left}
        </div>
        <div class="cm-sbs-handler" style={handlerStyle()} onMouseDown={onDragStart}>
            <div class="cm-sbs-track">
                <div class="cm-sbs-line" />
                <div class="cm-sbs-line" />
                <div class="cm-sbs-line" />
            </div>
        </div>
    </div>
}

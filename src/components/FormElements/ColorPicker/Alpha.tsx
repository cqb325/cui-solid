import { createEffect, createSignal, onCleanup } from "solid-js";
import { toRGBAString } from "./utils";
import { isServer } from "solid-js/web";

export function Alpha(props: any) {
    const [left, setLeft] = createSignal(props.value.hsl.a * 100);

    const gradientStyle = () => {
        const { r, g, b } = props.value.rgba;
        const start = toRGBAString({ r, g, b, a: 0 });
        const finish = toRGBAString({ r, g, b, a: 1 });
        return { background: `linear-gradient(to right, ${start} 0%, ${finish} 100%)` };
    }

    let container: any;
    const handleMouseDown = (e: any) => {
        if (isServer) return;
        if (typeof e.button === 'number' && e.button !== 0) return false;
        handleChange(e);

        document.addEventListener('mousemove', handleChange, false);
        document.addEventListener('mouseup', onDragEnd, false);
    }

    const onDragEnd = (e: any) => {
        if (isServer) return;
        handleChange(e);
        document.removeEventListener('mousemove', handleChange);
        document.removeEventListener('mouseup', onDragEnd);
    }

    onCleanup(() => {
        if (isServer) return;
        document.removeEventListener('mousemove', handleChange);
        document.removeEventListener('mouseup', onDragEnd);
    })

    const handleChange = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        const { clientWidth } = container;
        const xOffset = container.getBoundingClientRect().left + window.screenX;
        const left = e.clientX - xOffset;
        if (left < 0) {
            change(0);
            return;
        }
        if (left > clientWidth) {
            change(1);
            return;
        }


        change(Math.round(left * 100 / clientWidth) / 100);
    }

    const change = (newAlpha: number) => {
        setLeft(newAlpha * 100);

        const { h, s, l, a } = props.value.hsl;
        if (a !== newAlpha) {
            props.onChange && props.onChange({ h, s, l, a: newAlpha, source: 'rgba' });
        }
    }

    createEffect(() => {
        setLeft(props.value.hsl.a * 100)
    })

    return <div class="cm-color-picker-alpha" ref={container}>
        <div class="cm-color-picker-alpha-wrap" style={gradientStyle()} onMouseDown={handleMouseDown}>
            <div class="cm-color-picker-alpha-picker" style={{ left: `${left()}%`, top: '0px' }} />
        </div>
    </div>
}

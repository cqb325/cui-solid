import { createEffect, createSignal, onCleanup } from "solid-js";
import { clamp } from "./utils";
import { isServer } from "solid-js/web";

export function Hue(props: any) {
    const [left, setLeft] = createSignal(clamp(props.value.hsl.h * 100 / 360, 0, 100));
    // const left = () => clamp(props.value.hsl.h * 100 / 360, 0, 100);
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
            change(100);
            return;
        }


        change(left * 100 / clientWidth);
    }

    const change = (percent: number) => {
        setLeft(clamp(percent, 0, 100));

        const { h, s, l, a } = props.value.hsl;
        const newHue = clamp(percent / 100 * 360, 0, 360);

        if (h !== newHue) {
            props.onChange && props.onChange({ h: newHue, s, l, a, source: 'hsl' });
        }
    }

    createEffect(() => {
        setLeft(clamp(props.value.hsl.h * 100 / 360, 0, 100))
    })
    return <div class="cm-color-picker-hue" ref={container}>
        <div class="cm-color-picker-hue-wrap" onMouseDown={handleMouseDown}>
            <div class="cm-color-picker-hue-pointer" style={{ top: 0, left: `${left()}%` }} />
        </div>
    </div>
}

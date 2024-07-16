import { onCleanup } from "solid-js";
import { clamp } from "./utils";
import { isServer } from "solid-js/web";

export function Saturation(props: any) {
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

        const { clientWidth, clientHeight } = container;
        const xOffset = container.getBoundingClientRect().left + window.screenX;
        const yOffset = container.getBoundingClientRect().top + window.screenY;
        const left = clamp(e.clientX - xOffset, 0, clientWidth);
        const top = clamp(e.clientY - yOffset, 0, clientHeight);
        const saturation = left / clientWidth;
        const bright = clamp(1 - top / clientHeight, 0, 1);

        props.onChange && props.onChange({
            h: props.value.hsv.h,
            s: saturation,
            v: bright,
            a: props.value.hsv.a,
            source: 'hsva'
        })
    }

    const bgColorStyle = () => ({ background: `hsl(${props.value.hsv.h}, 100%, 50%)` });
    const pointerStyle = () => ({ top: `${-(props.value.hsv.v * 100) + 1 + 100}%`, left: `${props.value.hsv.s * 100}%` })
    return <div class="cm-saturation" style={bgColorStyle()} onMouseDown={handleMouseDown} ref={container}>
        <div class="cm-saturation-white" />
        <div class="cm-saturation-black" />
        <div class="cm-saturation-pointer" style={pointerStyle()}>
            <div class="cm-saturation-circle" />
        </div>
    </div>
}

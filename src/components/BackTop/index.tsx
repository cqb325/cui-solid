import { createSignal, onCleanup, onMount } from "solid-js";
import { useClassList } from "../utils/useProps"
import { scrollTop } from "../utils/utils";

export interface BackTopProps {
    classList?: any,
    class?: string,
    style?: any,
    bottom?: number,
    right?: number,
    children?: any,
    height?: number,
    duration?: number,
    onClick?: () => void
}

export function BackTop (props: BackTopProps) {
    const [backTop, setBackTop] = createSignal(false);
    const classList = () => useClassList(props, 'cm-back-top', {
        'cm-back-top-show': backTop()
    });
    const bottom = props.bottom ?? 30;
    const right = props.right ?? 30;
    const height = props.height ?? 400;
    const duration = props.duration ?? 1000;

    const style = () => ({...props.style,
        bottom: `${bottom}px`,
        right: `${right}px`
    });

    const onClick = () => {
        const sTop = document.documentElement.scrollTop || document.body.scrollTop;
        scrollTop(window, sTop, 0, duration);
        props.onClick && props.onClick();
    }

    const handleScroll = () => {
        setBackTop(window.pageYOffset >= height);
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    });

    onCleanup(() => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
    });
    return <div classList={classList()} style={style()} onClick={onClick}>
        <div class="cm-back-top-inner">
            {props.children}
        </div>
    </div>
}

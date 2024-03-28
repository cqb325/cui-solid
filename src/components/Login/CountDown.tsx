import { Show, createSignal, onCleanup, onMount } from "solid-js";
import { useClassList } from "../utils/useProps";

interface CountDownProps {
    classList?: any,
    class?: string,
    style?: any,
    prefix?: any,
    suffix?: any,
    value: number,
    format?: string,
    onEnd?: () => void,
    duration?: number
}

function fixedZero (val: number) {
    return `${val}`.padStart(2, '0');
}

export function CountDown (props: CountDownProps) {
    let timer: any;
    const duration = props.duration ?? 1000;
    const [now, setNow] = createSignal<number>(props.value);
    const text = () => {
        let offset: number = now();
        if (offset <= 0) {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            if (props.onEnd) {
                props.onEnd();
            }
            offset = 0;
        }
        const seconds = fixedZero(offset);

        const format = props.format ?? 's';
        let ret: string = format;
        if (format.match(/s+/)) {
            ret = ret.replace(/s+/, seconds + '');
        }
        return ret;
    }

    const update = () => {
        timer = setInterval(() => {
            setNow(now() - 1);
        }, duration);
    }
    onMount(() => {
        update();
    })

    onCleanup(() => {
        clearInterval(timer);
        timer = null;
    })

    const classList = () => useClassList(props, 'cm-count-down');

    return <span classList={classList()} style={props.style}>
        <Show when={props.prefix}><span class="cm-count-down-prefix">{props.prefix}</span></Show>
        <span class="cm-count-down-value">{text()}</span>
        <Show when={props.suffix}><span class="cm-count-down-suffix">{props.suffix}</span></Show>
    </span>
}

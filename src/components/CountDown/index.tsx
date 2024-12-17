import dayjs from "dayjs";
import { Show, createSignal, onCleanup, onMount } from "solid-js";
import { useClassList } from "../utils/useProps";

export interface CountDownProps {
    classList?: any,
    class?: string,
    style?: any,
    prefix?: any,
    suffix?: any,
    value?: string|number|Date,
    format?: string,
    onEnd?: () => void
}

function fixedZero (val: number) {
    return `${val}`.padStart(2, '0');
}

export function CountDown (props: CountDownProps) {
    let timer: any;
    const [now, setNow] = createSignal(new Date().getTime());
    const text = () => {
        let val: any = props.value;
        if (typeof val === 'string' || val instanceof Date) {
            val = dayjs(val).toDate().getTime();
        }
        let offset: number = val - now();
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
        const days = fixedZero(parseInt(offset / (1000 * 60 * 60 * 24) + '', 10));
        const hours = fixedZero(parseInt(offset / (1000 * 60 * 60) + '', 10) % 24);
        const minutes = fixedZero(parseInt(offset / (1000 * 60) + '', 10) % 60);
        const seconds = fixedZero(parseInt(offset / 1000 + '', 10) % 60);

        const format = props.format ?? 'HH:mm:ss';
        let ret: string = format;
        if (format.match(/D+/)) {
            ret = ret.replace(/D+/, days + '');
        }
        if (format.match(/H+/)) {
            ret = ret.replace(/H+/, hours + '');
        }
        if (format.match(/m+/)) {
            ret = ret.replace(/m+/, minutes + '');
        }
        if (format.match(/s+/)) {
            ret = ret.replace(/s+/, seconds + '');
        }
        return ret;
    }

    const update = () => {
        timer = setInterval(() => {
            setNow(new Date().getTime())
        }, 1000);
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

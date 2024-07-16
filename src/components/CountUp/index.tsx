import { createEffect, onCleanup, onMount } from "solid-js";
import { CountUp as CU } from "./countUp";
import { useClassList } from "../utils/useProps";

interface CountUpProps {
    style?: any
    classList?: any
    class?: string
    value: number
    start?: number
    duration?: number
    decimal?: number
    useGrouping?: boolean
    useEasing?: boolean
    separator?: string
    formattingFn?: (n: number) => string
    prefix?: string; // text prepended to result
    suffix?: string; // text appended to result
    ref?: any
    onEnd?(): void
}

/**
 *
 * @param props
 * @returns
 */
export function CountUp (props: CountUpProps) {
    const startVal = props.start ?? 0;
    let target: any;
    let instance: any;

    onMount(() => {
        instance = new CU(target, props.value, {
            startVal: startVal,
            duration: props.duration ?? 2,
            decimalPlaces: props.decimal ?? 0,
            useGrouping: props.useGrouping ?? true,
            useEasing: props.useEasing ?? true,
            separator: props.separator ?? ',',
            formattingFn: props.formattingFn,
            prefix: props.prefix ?? '',
            suffix: props.suffix ?? '',
            onCompleteCallback: onComplete,
        });
        if (!instance.error) {
            start();
        } else {
            console.error(instance.error);
        }
    });

    onCleanup(() => {
        instance = null;
    })

    const onComplete = () => {
        props.onEnd && props.onEnd();
    }

    const start = () => {
        instance && instance.start();
    }

    const update = (val: number) => {
        instance && instance.update(val);
    }

    const pauseResume = () => {
        instance && instance.pauseResume();
    }

    createEffect(() => {
        update(props.value);
    })

    props.ref && props.ref({
        reset: () => {
            instance && instance.reset();
        },
        update,
        start,
        pauseResume
    });

    const classList = () => useClassList(props, 'cm-count-up');

    return <span classList={classList()} style={props.style} ref={target} />
}

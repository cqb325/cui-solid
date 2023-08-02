import { Show } from "solid-js";
import { Progress } from "../Progress";

export interface WordCountProps {
    total: number;
    value: string;
    prefix?: any;
    prefixOverflow?: any;
    suffix?: any;
    suffixOverflow?: any;
    circle?: boolean;
    overflow?: boolean;
    radius?: number;
}

export function WordCount (props: WordCountProps) {
    const overflow = () => {
        const val = props.value ?? '';
        return val.length > props.total;
    }
    const overNumber = () => {
        const val = props.value ?? '';
        return props.overflow && overflow() ? val.length - props.total : val.length;
    }
    const percent = () => {
        const val = props.value ?? '';
        return Math.min(val.length / props.total * 100, 100);
    }
    const radius = props.radius ?? 10;
    return <div class="cm-word-count">
        <Show when={props.circle} fallback={<>
            <span classList={{"cm-word-count-prefix": true, 'cm-word-count-overflow': overflow()}}>
                {overflow() ? props.prefixOverflow : props.prefix}
            </span>
            <span class={overflow() ? 'cm-word-count-overflow' : ''}>{overNumber()}</span>
            <span>/</span>
            <span>{props.total}</span>
            <span classList={{"cm-word-count-suffix": true, 'cm-word-count-overflow': overflow()}}>{overflow() ? props.suffixOverflow : props.suffix}</span>
        </>}>
            <Progress type="circle" radius={radius} strokeWidth={1} hidePercent value={percent()}/>
        </Show>
    </div>
}
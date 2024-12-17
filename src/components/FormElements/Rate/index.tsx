import { useClassList } from "../../utils/useProps";
import type { Signal} from "solid-js";
import { For, createSignal } from "solid-js";
import { RateItem } from "./Item";
import createField from "../../utils/createField";

export interface RateProps {
    classList?: any,
    class?: string,
    disabled?: boolean,
    icon: any,
    style?: any,
    value?: number | Signal<any>,
    children?: any,
    count?: number,
    allowHalf?: boolean,
    onChange?: (value: number) => void,
    name?: string
    asFormField?: boolean
}
export function Rate (props: RateProps) {
    const classList = () => useClassList(props, 'cm-rate', {
        'cm-rate-disabled': props.disabled
    });
    if (!props.icon) {
        console.warn('need icon property');
        return null;
    }

    const [value, setValue] = createField(props, 0);
    const [current, setCurrent] = createSignal(value());

    const allowHalf = props.allowHalf || false;
    const onMouseEnter = (val: number) => {
        setCurrent(val);
    };

    const onMouseEnterHalf = (val: number, e: any) => {
        if (!allowHalf) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        setCurrent(val);
    };

    const onMouseLeave = () => {
        setCurrent(value());
    };

    const onClickStar = (val: number) => {
        setValue(val);
        props.onChange && props.onChange(val);
    };

    const onClickHalfStar = (val: number, e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (!allowHalf) {
            return;
        }
        setValue(val);
        props.onChange && props.onChange(val);
    };

    const count = props.count || 5;
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({id: i, value: i});
    }
    return <div style={props.style} classList={classList()} onMouseLeave={onMouseLeave}>
        <For each={stars}>
            {(item, index) => {
                return <RateItem index={index()} onMouseEnterHalf={onMouseEnterHalf} onClickHalfStar={onClickHalfStar}
                onMouseEnter={onMouseEnter} onClickStar={onClickStar} icon={props.icon} allowHalf={allowHalf}
                current={[current, setCurrent]}/>
            }}
        </For>
        <span>{props.children}</span>
    </div>
}

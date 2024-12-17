import { Input } from "../Input";
import { useClassList } from "../../utils/useProps";
import createField from "../../utils/createField";
import type { Signal } from "solid-js";
import { FeatherChevronDown, FeatherChevronUp } from "cui-solid-icons/feather";

export interface SpinnerProps {
    classList?: any,
    class?: string,
    size?: 'small'|'default'|'large',
    name?: string,
    value?: number | Signal<any>,
    style?: any,
    max?: number,
    min?: number,
    step?: number,
    loop?: boolean,
    placeholder?: string,
    onChange?: (value: number) => void,
    onPlus?: (value: number, step: number) => void,
    onSub?: (value: number, step: number) => void,
    disabled?: boolean
    asFormField?: boolean
}
export function Spinner (props: SpinnerProps) {
    const classList = () => useClassList(props, 'cm-spinner', {
        [`cm-spinner-${props.size}`]: props.size,
        'cm-spinner-disabled': props.disabled
    });

    const [value, setValue] = createField<number>(props, Math.max(0, props.min ?? 0));

    const _onInput = (val: string, e: any) => {
        val = val.replace(/[^0-9\.]/g, '');
        e.target.value = val;
    };

    const _onKeyDown = (e: any) => {
        if (e.keyCode === 38) {
            plus();
        }
        if (e.keyCode === 40) {
            sub();
        }
    };

    const min = props.min || 0;
    const step = props.step || 1;
    const _onChange = (value: number) => {
        let val = value;
        if (props.max !== undefined) {
            val = Math.min(val, props.max);
        }
        if (min !== undefined) {
            val = Math.max(val, min);
        }

        Promise.resolve().then(() => {
            setValue(val);
        })

        props.onChange && props.onChange(val);
    };

    /**
     * 增加
     * @memberof Spinner
     */
    const plus = () => {
        if (props.disabled) {
            return;
        }
        let v = add(value(), step);
        if (props.loop && props.max !== undefined && min !== undefined && v > props.max) {
            const off = v - props.max;
            v = min + off - 1;
        }

        if (props.max !== undefined) {
            v = Math.min(props.max, v);
        }

        setValue(v);
        props.onChange && props.onChange(v);
        props.onPlus && props.onPlus(v, step);
    }

    /**
     * 减少
     * @memberof Spinner
     */
    const sub = () => {
        if (props.disabled) {
            return;
        }
        let v = add(value(), -step);
        if (props.loop && props.max !== undefined && min !== undefined && v < min) {
            const off = v - min;
            v = props.max + off + 1;
        }
        if (min !== undefined) {
            v = Math.max(min, v);
        }

        setValue(v);
        props.onChange && props.onChange(v);
        props.onSub && props.onSub(v, step);
    }

    /**
     * 解决数字浮点型双精度问题
     * @param {[type]} num1 [description]
     * @param {[type]} num2 [description]
     */
    function add (num1: number, num2: number): number {
        let r1; let r2;
        try {
            r1 = num1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        const m = Math.pow(10, Math.max(r1, r2));
        return (num1 * m + num2 * m) / m;
    }

    return <Input classList={classList()} style={props.style} size={props.size} placeholder={props.placeholder} disabled={props.disabled} onInput={_onInput} value={[value, setValue]}
        onChange={_onChange} onKeyDown={_onKeyDown} append={
            <>
                <span class="cm-spinner-plus" onClick={plus}>
                    <FeatherChevronUp />
                </span>
                <span class="cm-spinner-subs" onClick={sub}>
                    <FeatherChevronDown />
                </span>
            </>
        }/>
}

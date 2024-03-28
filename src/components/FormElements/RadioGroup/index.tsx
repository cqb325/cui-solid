import { createSignal, createEffect, Show, onMount, For } from "solid-js";
import { useClassList } from "../../utils/useProps";
import { InnerCheckbox } from "../../inner/Checkbox";
import createField from "../../utils/createField";

type RadioGroupProps = {
    classList?: any,
    class?: string,
    block?: boolean,
    name?: string,
    value?: any,
    style?: any,
    children?: any,
    disabled?: boolean,
    onChange?: (v: any) => void,
    data?: any,
    type?: 'radio' | 'checkbox',
    textField?: string,
    valueField?: string,
    stick?: boolean
}

export function RadioGroup (props: RadioGroupProps) {
    const classList = () => useClassList(props, 'cm-radio-group', {
        'cm-radio-group-stack': props.block,
        'cm-radio-group-stick': props.stick,
    });

    const [value, setValue] = createField(props, '');
    const [thumbStyle, setThumbStyle] = createSignal({});
    let wrap: any;

    const _onChange = (checked: boolean, v: any) => {
        if (props.disabled) {
            return;
        }
        setValue(v);
        props.onChange && props.onChange(v);
    };

    const textField = props.textField ?? 'label';
    const valueField = props.valueField ?? 'value';


    const checked = (item: any) => {
        return value() === item[valueField];
    }

    createEffect(() => {
        const val: any = value() ?? "";
        let currentIndex: number = -1;
        for (let i = 0; i < props.data.length; i++) {
            const item = props.data[i];
            const checked = val === item[valueField];
            checked ? currentIndex = i : false;
        }

        const eles = wrap.querySelectorAll('.cm-radio');

        const ele = eles[currentIndex];
        if (!ele) {
            return;
        }
        const rect = ele.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        const left = rect.left - wrapRect.left;
        const width = rect.width;
        const ret = {
            width: `${width}px`,
            left: `${left}px`
        }
        setThumbStyle(ret);
    })

    return <div classList={classList()} style={props.style} ref={wrap}>
        <Show when={props.stick}>
            <div class="cm-radio-group-thumb" style={thumbStyle()} />
        </Show>
        <For each={props.data}>{(item: any) => {
                return <InnerCheckbox disabled={props.disabled || item.disabled} class="cm-radio" type={props.type || 'radio'} inner value={item[valueField]} checked={checked(item)} label={item[textField]} onChange={_onChange} />
            }}</For>
    </div>
}


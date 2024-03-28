import { createContext, createSignal, createEffect, For } from "solid-js";
import { useClassList } from "../../utils/useProps";
import { InnerCheckbox } from "../../inner/Checkbox";
import createField from '../../utils/createField';

export const CheckboxGroupContext = createContext();

type CheckboxGroupProps = {
    classList?: any,
    class?: string,
    block?: boolean,
    name?: string,
    value?: any[],
    style?: any,
    children?: any,
    disabled?: boolean,
    onChange?: (value: any) => void,
    data?: any,
    textField?: string,
    valueField?: string,
}

export function CheckboxGroup (props: CheckboxGroupProps) {
    const classList = () => useClassList(props, 'cm-checkbox-group', {
        'cm-checkbox-group-stack': props.block
    });

    const [value, setValue] = createField<any[]>(props, []);

    const _onChange = (checked: boolean, v: any) => {
        if (props.disabled) {
            return;
        }
        let val: any[] = value() || [];
        if (checked) {
            if (!val.includes(v)) {
                val = val.concat(v);
            }
        } else {
            const index = val.indexOf(v);
            if (index > -1) {
                val.splice(index, 1);
            }
        }
        const newVal = JSON.parse(JSON.stringify(val));
        setValue(newVal);
        props.onChange && props.onChange(newVal);
    };

    const textField = props.textField || 'label';
    const valueField = props.valueField || 'value';

    // 子元素的控制
    const controllers: any = {};
    if (props.data) {
        props.data.forEach((item: any) => {
            const val: any[] = value() || [];
            const checked = val.includes(item[valueField]);
            controllers[item[valueField]] = createSignal(checked);
        });
    }

    createEffect(() => {
        const val: any[] = value() ?? [];
        for (let i = 0; i < props.data.length; i++) {
            const item = props.data[i];
            const checked = val.includes(item[valueField]);
            controllers[item[valueField]] && controllers[item[valueField]][1](checked);
        }
    });

    return <div classList={classList()} style={props.style}>
        <For each={props.data}>{(item: any) => {
                return <InnerCheckbox inner disabled={props.disabled || item.disabled} value={item[valueField]} checked={controllers[item[valueField]][0]()} label={item[textField]} onChange={_onChange} />
            }}</For>
    </div>
}


import type { Accessor, Setter, Signal} from 'solid-js';
import { createSignal, onCleanup, useContext } from 'solid-js';
import type { FormContextOptions } from '../Form';
import { FormContext } from '../Form';
import { useFormItem } from '../FormItem';

export default function createField<T> (props: any, field: any, defaultValue?: any): Signal<T> {
    if (arguments.length === 2) {
        defaultValue = field;
        field = 'value';
    }
    let value: Accessor<T>;
    let setValue: Setter<any>;
    if (props[field] && props[field].length === 2 && typeof props[field][0] === 'function') {
        value = props[field][0];
        setValue = props[field][1];
    } else {
        [value, setValue] = createSignal<T>(props[field] || defaultValue);
    }

    const ctx: FormContextOptions|undefined = useContext<FormContextOptions|undefined>(FormContext);
    const data = ctx?.form?.getFormData ? ctx.form?.getFormData() : {};
    const formItem = useFormItem();
    const propagation = formItem?.propagation || props.asFormField;
    // 自身的name属性如果与formItem的name属性不一致，优先使用自身的name，绑定到form上的自身的name
    // 值改变的时候，改变自身的name，触发onChang则为formItem的name
    const name = props.name || formItem?.name;
    const formInitValue = name ? ctx?.form?.getValueByPath(name) : undefined;

    if (formInitValue != undefined && propagation) {
        setValue(formInitValue);
    }
    if (ctx && ctx.form && name && propagation) {
        ctx.form.bindController(name, value, setValue);
        onCleanup(() => {
            ctx.form?.unBindController(name);
        })
    }
    // 一个formItem只能绑定一个form元素，只能使用一次context
    if (formItem) {
        formItem.propagation = false;
    }

    const newSetValue: Setter<T> = (v?: any) => {
        setValue(v);
        if (propagation) {
            if (name) {
                ctx?.onChange(name, v);
            }
            if (name && formItem?.name && name !== formItem?.name) {
                ctx?.onChange(formItem?.name, undefined, true);
            }
        }
        return v;
    }
    return [value, newSetValue];
}

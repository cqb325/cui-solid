import type { Accessor, Setter, Signal} from 'solid-js';
import { createSignal, useContext } from 'solid-js';
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
    const name = formItem?.name || props.name;
    const formInitValue = data && name ? data[name] : undefined;

    if (formInitValue != undefined && !props.notCreateFiled) {
        setValue(formInitValue);
    }
    if (ctx && ctx.form && name && !props.notCreateFiled) {
        ctx.form.bindController(name, value, setValue);
    }

    const newSetValue: Setter<T> = (v?: any) => {
        setValue(v);
        if (!props.notCreateFiled) {
            ctx?.onChange(name, v);
        }
        return v;
    }
    return [value, newSetValue];
}

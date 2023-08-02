import { createSignal, useContext } from 'solid-js';
import { FormContext, FormContextOptions } from '../Form';
import { useFormItem } from '../FormItem';

export default function createField (props: any, field: any, defaultValue?: any) {
    if (arguments.length === 2) {
        defaultValue = field;
        field = 'value';
    }
    let value: Function;
    let setValue: Function;
    if (props[field] && props[field].length === 2 && typeof props[field][0] === 'function') {
        value = props[field][0];
        setValue = props[field][1];
    } else {
        [value, setValue] = createSignal(props[field] || defaultValue);
    }

    const ctx: FormContextOptions|undefined = useContext<FormContextOptions|undefined>(FormContext);
    const data = ctx?.form.getFormData ? ctx.form.getFormData() : {};
    const formItem = useFormItem();
    const name = formItem?.name || props.name;
    const formInitValue = data && name ? data[name] : undefined;

    if (formInitValue != undefined && !props.notCreateFiled) {
        setValue(formInitValue);
    }
    if (ctx && ctx.form && name && !props.notCreateFiled) {
        ctx.form.bindController(name, value, setValue);
    }

    let newSetValue = (v: any) => {
        setValue(v);
        if (!props.notCreateFiled) {
            ctx?.onChange(name, v);
        }
    }
    return [value, newSetValue];
}
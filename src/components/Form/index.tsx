import type { JSXElement } from "solid-js";
import { createContext, splitProps, useContext } from "solid-js";
import { useClassList } from "../utils/useProps";
import type { useFormProps } from "../utils/useForm";

export const FormContext = createContext<FormContextOptions>();

export interface FormContextOptions {
    labelWidth?: number,
    inline?: boolean,
    form?: useFormProps,
    errorTransfer?: boolean,
    errorAlign?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
    onChange: (name: string, value: any, silence?: boolean) => void
}

export const useFormContext = () => useContext<FormContextOptions|undefined>(FormContext);

export interface FormProps {
    classList?: any,
    class?: string,
    children?: JSXElement,
    style?: any,
    labelWidth?: number,
    form?: useFormProps,
    inline?: boolean,
    errorTransfer?: boolean,
    errorAlign?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
    onChange?: (name: string, value: any) => void,
    onBeforeSubmit?: () => any,
    autocomplete?: string
}

export function Form (props: FormProps) {
    if (useFormContext()) {
        console.warn('Form can not be nested');
    }
    const errorTransfer = props.errorTransfer ?? false;
    const errorAlign = props.errorAlign ?? 'right';
    const classList = () => useClassList(props, 'cm-form', {
        'cm-form-inline': props.inline
    });
    const [local, others] = splitProps(props, ['labelWidth', 'form', 'inline', 'classList', 'class', 'onChange', 'children', 'onBeforeSubmit']);
    const _onChange = (name: string, v: any, silence: boolean = false) => {
        if (local.form) {
            // local.form[name] = v;
            // name 不一致时，不更新值
            if (!silence) {
                local.form.setProxyValue(name, v);
            }
            local.form.checkField(name);
        }
        if (local.onChange) {
            local.onChange(name, local.form?.getValueByPath(name));
        }
    };

    const ctx: FormContextOptions = {
        labelWidth: local.labelWidth,
        inline: local.inline,
        form: local.form,
        errorTransfer,
        errorAlign,
        onChange: _onChange
    };

    const onSubmit = (e: Event) => {
        e.preventDefault();
        if (local.onBeforeSubmit) {
            return local.onBeforeSubmit();
        }
        return false;
    };

    return <FormContext.Provider value={ctx}>
        <form classList={classList()} onSubmit={onSubmit} {...others} autocomplete={props.autocomplete}>
        <button type="submit" style={{display: 'none'}} />{local.children}</form>
    </FormContext.Provider>;
}


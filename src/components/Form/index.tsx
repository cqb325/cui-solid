import type { JSXElement } from "solid-js";
import { createContext, splitProps, ComponentProps } from "solid-js";
import { useClassList } from "../utils/useProps";

export const FormContext = createContext<FormContextOptions>();

export type FormContextOptions = {
    labelWidth?: number,
    inline?: boolean,
    form: any,
    errorTransfer?: boolean,
    errorAlign?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
    onChange: (name: string, value: any) => void
}

type FormProps = {
    classList?: any,
    class?: string,
    children?: JSXElement,
    style?: any,
    labelWidth?: number,
    form?: any,
    inline?: boolean,
    errorTransfer?: boolean,
    errorAlign?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
    onChange?: (name: string, value: any) => void,
    onBeforeSubmit?: () => any,
    autocomplete?: string
}

export function Form (props: FormProps) {
    const errorTransfer = props.errorTransfer ?? false;
    const errorAlign = props.errorAlign ?? 'right';
    const classList = () => useClassList(props, 'cm-form', {
        'cm-form-inline': props.inline
    });
    const [local, others] = splitProps(props, ['labelWidth', 'form', 'inline', 'classList', 'class', 'onChange', 'children', 'onBeforeSubmit']);
    const _onChange = (name: string, v: any) => {
        if (local.form) {
            local.form[name] = v;
        }
        if (local.onChange) {
            local.onChange(name, v);
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


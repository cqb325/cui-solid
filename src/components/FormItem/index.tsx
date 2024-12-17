import useValidation from '../utils/useValidation';
import type { JSXElement} from 'solid-js';
import { Show, createContext, createSignal, useContext } from 'solid-js';
import type { FormContextOptions } from '../Form';
import { FormContext } from '../Form';
import { useClassList } from '../utils/useProps';
import { Popover } from '../Popover';
import AsyncValidator from 'async-validator';

export interface FormItemContextProps {
    name?: string
    propagation?: boolean
}
export const FormItemContext = createContext<FormItemContextProps>();

export interface FormItemProps {
    classList?: any,
    class?: string,
    inline?: boolean,
    name?: string,
    children?: any,
    labelStyle?: any,
    label?: string,
    labelAlign?: 'start' | 'end' | 'center',
    style?: any,
    rules?: {[key: string]: any},
    messages?: {[key: string]: string},
    errorTransfer?: boolean,
    errorAlign?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
}

export function FormItem (props: FormItemProps) {
    const [error, setError] = createSignal<JSXElement>(null);
    const ctx: FormContextOptions|undefined = useContext<FormContextOptions|undefined>(FormContext);
    const validation:any = useValidation();
    let itemRef: any;
    const labelAlign = props.labelAlign ?? 'center';
    const errorTransfer = props.errorTransfer ?? ctx?.errorTransfer ?? false;
    const errorAlign = props.errorAlign ?? ctx?.errorAlign ?? 'right';

    const name = props.name;
    let isRequired = false;
    if (name && ctx?.form?.getValidation && ctx?.form?.getValidation(name)) {
        const rules = ctx.form.getValidation(name);
        isRequired = Array.isArray(rules) ? rules.some(rule => rule.required) : rules.required;
    }
    if (props.rules) {
        isRequired = Array.isArray(props.rules) ? props.rules.some(rule => rule.required) : props.rules.required;
    }

    const clazzName = () => useClassList(props, 'cm-form-item', {
        'cm-form-item-error': error(),
        'cm-form-item-inline': props.inline || ctx?.inline,
        'cm-form-item-required': isRequired && props.label
    })

    // 自带校验方式
    const validateByDefault = async (v: any, rules: any, msgs: any) => {
        if (rules.required) {
            const ret = await validation['required'](v, rules.required, ctx?.form);
            if (!ret) {
                setError(msgs ? msgs['required'] : '');
                return ret;
            }
        }
        for (const key in rules) {
            if (key === 'required') {
                continue;
            }
            if (validation[key]) {
                const ret = await validation[key](v, rules[key], ctx?.form);
                if (!ret) {
                    setError(msgs ? msgs[key] : '');
                    return ret;
                }
            }
            if (rules[key] && typeof rules[key] === 'function') {
                const ret = await rules[key](v, ctx?.form);
                if (!ret) {
                    setError(msgs ? msgs[key] : '');
                    return ret;
                }
            }
        }
        setError(null);
        return true;
    }

    // 通过async-validator 校验
    const validateByAsyncValidator = async (v: any, rules: any) => {
        const descriptor = {
            [`${name}`]: rules
        };
        const validator = new AsyncValidator(descriptor);
        const model = {
            [`${name}`]: v
        };
        return new Promise((resolve) => {
            validator.validate(model, { firstFields: true }, (errors) => {
                if (errors) {
                    setError(errors[0].message);
                    resolve(false);
                } else {
                    setError(null);
                    resolve(true);
                }
            });
        });
    }

    const check = async (v: any) => {
        if (itemRef) {
            const rect = itemRef.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
                return true;
            }
        }

        if ((name && ctx?.form?.getValidation(name)) || (ctx && props.rules)) {
            const rules = ctx?.form?.getValidation(name!) || props.rules;
            const msgs = ctx?.form?.getMessage(name!) || props.messages;
            if (Array.isArray(rules)) {
                return validateByAsyncValidator(v, rules);
            } else {
                return validateByDefault(v, rules, msgs);
            }
        }
        return true;
    };
    if (!props.name) {
        console.warn('formItem needs name property to check valid');
    }

    const clearError = () => {
        setError(null);
    }

    props.name && ctx?.form?.setCheckValid && ctx.form?.setCheckValid(props.name, check);
    props.name && ctx?.form?.setClearValid && ctx.form?.setClearValid(props.name, clearError);

    return <FormItemContext.Provider value={{name: props.name, propagation: true}}>
        <div classList={clazzName()} style={props.style}>
            <label classList={{
                "cm-form-label": true,
                [`cm-form-label-${labelAlign}`]: true,
            }} style={{width: ctx?.labelWidth + 'px', ...props.labelStyle}}>{props.label}</label>
            <Show when={errorTransfer} fallback={
                <div class="cm-form-item-element" ref={itemRef}>
                    {props.children}
                    <div class="cm-form-item-error-tip">{error()}</div>
                </div>
            }>
                <Popover class="cm-form-item-error-popover" arrow align={errorAlign} theme="error" disabled={!error()} content={error()}>
                    <div class="cm-form-item-element" ref={itemRef}>
                        {props.children}
                    </div>
                </Popover>
            </Show>
        </div>
    </FormItemContext.Provider>
}

export const useFormItem = () => useContext(FormItemContext);


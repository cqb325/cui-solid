import useValidation from '../utils/useValidation';
import {
  JSXElement,
  Show,
  createContext,
  createSignal,
  useContext,
} from 'solid-js';
import { FormContext, FormContextOptions } from '../Form';
import { useClassList } from '../utils/useProps';
import { Popover } from '../Popover';
import AsyncValidator from 'async-validator';

export type FormItemContextProps = {
  name?: string;
};
export const FormItemContext = createContext<FormItemContextProps>();

type FormItemProps = {
  classList?: any;
  class?: string;
  inline?: boolean;
  name?: string;
  children?: any;
  labelStyle?: Object;
  label?: string;
  style?: any;
  rules?: { [key: string]: any };
  messages?: { [key: string]: string };
  errorTransfer?: boolean;
  errorAlign?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
};

export function FormItem(props: FormItemProps) {
  const [error, setError] = createSignal<JSXElement>(null);
  const ctx: FormContextOptions | undefined = useContext<
    FormContextOptions | undefined
  >(FormContext);
  const validation: any = useValidation();
  let itemRef: any;
  const errorTransfer = props.errorTransfer ?? ctx?.errorTransfer ?? false;
  const errorAlign = props.errorAlign ?? ctx?.errorAlign ?? 'right';

  const name = props.name;
  let isRequired = false;

  if (name && ctx && ctx.form.getValidation && ctx.form.getValidation(name)) {
    const rules = ctx.form.getValidation(name);
    // isRequired = rules.required;
    if (Array.isArray(rules)) {
      for (let rule of rules) {
        console.log(rule);
        if (rule.required) {
          isRequired = true;
        }
      }
    } else {
      isRequired = rules.required;
    }
  }
  if (props.rules) {
    if (Array.isArray(props.rules)) {
      for (let rule of props.rules) {
        console.log(rule);
        if (rule.required) {
          isRequired = true;
        }
      }
    } else {
      isRequired = props.rules.required;
    }
  }

  const clazzName = () =>
    useClassList(props, 'cm-form-item', {
      'cm-form-item-error': error(),
      'cm-form-item-inline': props.inline || ctx?.inline,
      'cm-form-item-required': isRequired,
    });
  const check = async (v: any) => {
    if (itemRef) {
      const rect = itemRef.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        return true;
      }
    }

    if (
      (name && ctx && ctx.form.getValidation && ctx.form.getValidation(name)) ||
      (ctx && props.rules)
    ) {
      const rules = ctx.form.getValidation(name) || props.rules;

      const validator = new AsyncValidator({
        name: rules,
      });
      if (Array.isArray(rules)) {
        validator.validate({ name: v }, { firstFields: true }, (errors) => {
          if (errors) {
            setError(errors![0].message);
            return;
          } else {
            setError(null);
          }
        });
      } else {
        const msgs = ctx.form.getMessage(name) || props.messages;
        if (rules.required) {
          const ret = await validation['required'](v, rules.required, ctx.form);
          if (!ret) {
            setError(msgs ? msgs['required'] : '');
            return ret;
          }
        }
        for (let key in rules) {
          if (key === 'required') {
            continue;
          }
          if (validation[key]) {
            const ret = await validation[key](v, rules[key], ctx.form);
            if (!ret) {
              setError(msgs ? msgs[key] : '');
              return ret;
            }
          }
          if (rules[key] && typeof rules[key] === 'function') {
            const ret = await rules[key](v, ctx.form);
            if (!ret) {
              setError(msgs ? msgs[key] : '');
              return ret;
            }
          }
        }
        setError(null);
      }

      return true;
    }
    return true;
  };
  if (!props.name) {
    console.warn('formItem needs name property to check valid');
  }

  const clearError = () => {
    setError(null);
  };

  props.name &&
    ctx?.form.setCheckValid &&
    ctx.form.setCheckValid(props.name, check);
  props.name &&
    ctx?.form.setClearValid &&
    ctx.form.setClearValid(props.name, clearError);

  return (
    <FormItemContext.Provider value={{ name: props.name }}>
      <div classList={clazzName()} style={props.style}>
        <label
          class="cm-form-label"
          style={{ width: ctx?.labelWidth + 'px', ...props.labelStyle }}
        >
          {props.label}
        </label>
        <Show
          when={errorTransfer}
          fallback={
            <div class="cm-form-item-element" ref={itemRef}>
              {props.children}
              <div class="cm-form-item-error-tip">{error()}</div>
            </div>
          }
        >
          <Popover
            class="cm-form-item-error-popover"
            arrow
            align={errorAlign}
            disabled={!error()}
            content={error()}
          >
            <div class="cm-form-item-element" ref={itemRef}>
              {props.children}
            </div>
          </Popover>
        </Show>
      </div>
    </FormItemContext.Provider>
  );
}

export const useFormItem = () => useContext(FormItemContext);

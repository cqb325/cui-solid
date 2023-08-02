import { splitProps } from "solid-js";
import { useClassList } from "../../utils/useProps";
import createField from "../../utils/createField";

export interface TextareaProps {
    classList?: any;
    class?: any
    style?: any
    disabled?: boolean
    autoHeight?: boolean
    value?: any
    name?: string
    trigger?: 'input'|'blur'
    onChange?: Function
    onInput?: Function
    onKeyUp?: Function
    onEnter?: Function
}

export function Textarea (props: TextareaProps) {
    const [local, others] = splitProps(props, ['classList', 'class', 'style', 'value', 'autoHeight', 'disabled',
        'onChange', 'onInput', 'onKeyUp', 'onEnter', 'name', 'trigger']);
    const classList = () => useClassList(local, 'cm-textarea', 'cm-input-wrapper', {
        'cm-input-disabled': local.disabled,
        'cm-input-auto-height': local.autoHeight
    });
    const [_value, setValue] = createField(props, '');
    const trigger = local.trigger || 'blur';
    const _onChange = (e: any) => {
        // setValue(e.target.value);
    };

    const onBlurChange = (e: any) => {
        setValue(e.target.value);
        if (local.onChange) {
            local.onChange(e.target.value);
        }
    };

    const _onInput = (e: any) => {
        if (trigger === 'input') {
            setValue(e.target.value);
            if (local.onChange) {
                local.onChange(e.target.value);
            }
        }
        if (local.onInput) { local.onInput(e.target.value, e); }
        local.autoHeight && _autoHeight(e);
    };

    const _onKeyUp = (e: any) => {
        if (local.onKeyUp) { local.onKeyUp(e.target.value, e); }
        if (e.keyCode === 13) {
            local.onEnter && local.onEnter(e.target.value, e);
        }
    };

    let initHeight: number;
    const _autoHeight = (event: any) => {
        const ele = event.target;
        if (!initHeight) {
            initHeight = ele.clientHeight;
        }
        if (ele.scrollHeight > initHeight) {
            if (ele.value.split('\n').length === 1) {
                ele.style.height = `${initHeight}px`;
            } else {
                ele.style.height = 'auto';
            }
            ele.style.overflowY = 'hidden';
            ele.scrollTop = 0; // 防抖动
            ele.style.height = `${ele.scrollHeight}px`;
        }
    }

    return <div classList={classList()} style={props.style}>
        <textarea class='cm-input' {...others} value={_value()} spellcheck={false} autocomplete="off" wrap="soft"
                onChange={_onChange} onInput={_onInput} onKeyUp={_onKeyUp} onBlur={onBlurChange}
            ></textarea>
    </div>
}

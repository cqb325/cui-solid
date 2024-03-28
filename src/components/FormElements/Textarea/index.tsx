import { createSignal, splitProps } from "solid-js";
import { useClassList } from "../../utils/useProps";
import createField from "../../utils/createField";
import { WordCount } from "../../WordCount";

export interface TextareaProps {
    classList?: any;
    class?: any
    style?: any
    disabled?: boolean
    autoHeight?: boolean
    value?: any
    name?: string
    trigger?: 'input'|'blur'
    wordCount?: boolean
    maxLength?: number
    onChange?: (value: any) => void
    onInput?: (value: any, e: any) => void
    onKeyUp?: (value: any, e: any) => void
    onEnter?: (value: any, e: any) => void
}

export function Textarea (props: TextareaProps) {
    const [local, others] = splitProps(props, ['classList', 'class', 'style', 'value', 'autoHeight', 'disabled',
        'onChange', 'onInput', 'onKeyUp', 'onEnter', 'name', 'trigger']);
    const classList = () => useClassList(local, 'cm-textarea', 'cm-input-wrapper', {
        'cm-input-disabled': local.disabled,
        'cm-input-auto-height': local.autoHeight
    });
    const [_value, setValue] = createField<any>(props, '');
    const [valForCount, setValForCount] = createSignal(_value());
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
        setValForCount(e.target.value);
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
        <textarea class="cm-input" {...others} value={_value()} spellcheck={false} autocomplete="off" wrap="soft"
                onChange={_onChange} onInput={_onInput} onKeyUp={_onKeyUp} onBlur={onBlurChange}
             />
        {
            props.wordCount && props.maxLength ? <div class="cm-input-suffix">
                <WordCount total={props.maxLength} value={valForCount()}/>
            </div> : null
        }
    </div>
}

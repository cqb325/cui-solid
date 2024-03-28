import { Show, createSignal, splitProps } from 'solid-js';
import {Icon} from '../../Icon';
import { useClassList } from '../../utils/useProps';
import createField from '../../utils/createField';
import { WordCount } from '../../WordCount';

export interface InputProps {
    classList?: any
    class?: any
    children?: any
    style?: any
    name?: string
    disabled?: boolean
    size?: 'small'|'default'|'large'
    type?: string
    append?: any
    prepend?: any
    prefix?: any
    suffix?: any
    suffixStyle?: any
    prefixStyle?: any
    clearable?: boolean
    value?: any
    placeholder?: string
    autocomplete?: string
    onChange?(value: any): void
    onEnter?(value: any): void
    onKeyDown?(e: any): void
    onKeyUp?(e: any): void
    onInput?(value: any, e: any): void
    trigger?: string
    ref?: any
    notCreateFiled?: boolean
    wordCount?: boolean
    maxLength?: number
    autoHeight?: boolean
    rows?: number
}

export function InnerInput (props: InputProps) {
    const clazzName = () => useClassList(props, 'cm-input-wrapper', {
        'cm-input-disabled': props.disabled,
        'cm-input-auto-height': props.autoHeight,
        'cm-textarea': props.type === 'textarea',
        'cm-input-hidden': props.type === 'hidden',
        [`cm-input-${props.size}`]: props.size,
        // 'cm-input-group': append || prepend,
        'cm-input-group-with-prefix': props.prefix,
        'cm-input-group-with-suffix': props.suffix,
        'cm-input-group-with-append': props.append,
        'cm-input-group-with-prepend': props.prepend
    });
    const [local, others] = splitProps(props, ['classList', 'class', 'name', 'style', 'disabled', 'size', 'type', 'append', 'prepend', 'prefix', 'suffix', 'suffixStyle', 'prefixStyle',
        'clearable', 'value', 'onChange', 'onEnter', 'onKeyDown', 'onKeyUp', 'onInput', 'trigger']);
    const inputStyle: any = {};
    if (local.suffixStyle && local.suffixStyle.width) {
        inputStyle['padding-right'] = local.suffixStyle.width + 'px';
    }
    if (local.prefixStyle && local.prefixStyle.width) {
        inputStyle['padding-left'] = local.prefixStyle.width + 'px';
    }

    const [_value, setValue] = createField<any>(props, '');
    const [valForCount, setValForCount] = createSignal(_value());

    const trigger = local.trigger || 'blur';
    const _onInput = (e: any) => {
        if (trigger === 'input') {
            if (local.onChange) {
                local.onChange(e.target.value);
            }
            setValue(e.target.value);
        }
        setValForCount(e.target.value);
        local.onInput && local.onInput(e.target.value, e);
        props.type === 'textarea' && props.autoHeight && _autoHeight(e);
    }

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

    const _onChange = (e: any) => {
        // setValue(e.target.value);
    }
    const onBlurChange = (e: any) => {
        const v = e.target.value;
        if (trigger === 'blur') {
            if (local.onChange) {
                local.onChange(v);
            }
        }
        setValue(v);
    }

    const clear = () => {
        if (local.onChange) {
            local.onChange('');
        }
        setValue('');
    }

    const _onKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            if (local.onEnter) {
                local.onEnter(_value());
            }
        }
        local.onKeyUp && local.onKeyUp(e);
    }

    const _onKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            setValue(e.target.value);
            if (local.onChange) {
                local.onChange(e.target.value);
            }
        }
        local.onKeyDown && local.onKeyDown(e);
    }

    return <div classList={clazzName()} style={local.style}>
        {
            local.prefix ? <div class="cm-input-prefix" style={local.prefixStyle}>{local.prefix}</div> : null
        }
        {
            local.prepend ? <div class="cm-input-group-prepend">{local.prepend}</div> : null
        }
        <Show when={local.type === 'textarea'} fallback={
            <input class="cm-input" ref={props.ref} {...others} value={_value()} autocomplete={props.autocomplete || 'off'}
            onChange={_onChange} onInput={_onInput} onBlur={onBlurChange} disabled={local.disabled}
            style={inputStyle} onKeyDown={_onKeyDown} onKeyUp={_onKeyUp} type={local.type}/>
        }>
            <textarea class="cm-input" ref={props.ref} {...others} value={_value()} spellcheck={false} autocomplete={props.autocomplete || 'off'} wrap="soft"
            onChange={_onChange} onInput={_onInput} onBlur={onBlurChange} disabled={local.disabled}
            style={inputStyle} onKeyDown={_onKeyDown} onKeyUp={_onKeyUp} />
        </Show>
        {
            local.clearable && _value() ? <Icon class="cm-input-clear" name="x-circle" onClick={clear}/> : null
        }
        {
            local.suffix || (props.wordCount && props.maxLength) ? <div class="cm-input-suffix" style={local.suffixStyle}>
                <Show when={props.wordCount && props.maxLength} fallback={local.suffix}>
                    <WordCount total={props.maxLength!} value={valForCount()}/>
                </Show>
            </div> : null
        }
        {
            local.append ? <div class={`cm-input-group-append`}>{local.append}</div> : null
        }
    </div>;
}

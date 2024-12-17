import type { JSX} from 'solid-js';
import { Show, createSignal, splitProps } from 'solid-js';
import { useClassList } from '../../utils/useProps';
import createField from '../../utils/createField';
import { WordCount } from '../../WordCount';
import { FeatherEye, FeatherEyeOff, FeatherXCircle } from 'cui-solid-icons/feather';

export interface InputProps extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onInput'> {
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
    onBlur?: (e: any) => void
    onCompositionStart?: (e: any) => void
    onCompositionEnd?: (e: any) => void
    trigger?: string
    ref?: any
    password?: boolean
    wordCount?: boolean
    maxLength?: number
    autoHeight?: boolean
    rows?: number
    asFormField?: boolean
}

export function Input (props: InputProps) {
    let suffix = props.suffix;
    if (props.password) {
        suffix = () => <Show when={type() === 'password'} fallback={
            <FeatherEye class="cm-input-password-icon" onClick={togglePassword}/>
        }>
            <FeatherEyeOff class="cm-input-password-icon" onClick={togglePassword}/>
        </Show>;
    }
    const [type, setType] = createSignal(props.type || 'text');
    const clazzName = () => useClassList(props, 'cm-input-wrapper', {
        'cm-input-disabled': props.disabled,
        'cm-input-auto-height': props.autoHeight,
        'cm-textarea': type() === 'textarea',
        'cm-input-hidden': type() === 'hidden',
        [`cm-input-${props.size}`]: props.size,
        'cm-input-group-with-prefix': props.prefix,
        'cm-input-group-with-suffix': suffix,
        'cm-input-group-with-append': props.append,
        'cm-input-group-with-prepend': props.prepend
    });
    const [local, others] = splitProps(props, ['classList', 'class', 'name', 'style', 'disabled', 'size', 'type', 'append', 'prepend', 'prefix', 'suffix', 'suffixStyle', 'prefixStyle',
        'clearable', 'value', 'onChange', 'onEnter', 'onKeyDown', 'onKeyUp', 'onInput', 'trigger', 'password']);
    const inputStyle: any = {};
    if (local.suffixStyle && local.suffixStyle.width) {
        inputStyle['padding-right'] = local.suffixStyle.width + 'px';
    }
    if (local.prefixStyle && local.prefixStyle.width) {
        inputStyle['padding-left'] = local.prefixStyle.width + 'px';
    }

    const [_value, setValue] = createField<any>(props, '');
    const [valForCount, setValForCount] = createSignal(_value());
    const [isCompositioning, setIsCompositioning] = createSignal(false);

    const togglePassword = () => {
        setType(type() === 'password' ? 'text' : 'password');
    }

    const trigger = local.trigger || 'blur';
    const _onInput = (e: any) => {
        if (trigger === 'input') {
            // 输入中文时，不触发change
            if (!isCompositioning()) {
                setValue(e.target.value);
                if (local.onChange) {
                    local.onChange(e.target.value);
                }
            }
        }
        setValForCount(e.target.value);
        local.onInput && local.onInput(e.target.value, e);
        type() === 'textarea' && props.autoHeight && _autoHeight(e);
    }

    const _onCompositionStart = (e: any) => {
        setIsCompositioning(true);
        props.onCompositionStart?.(e);
    }

    const _onCompositionEnd = (e: any) => {
        setIsCompositioning(false);
        _onInput(e);
        props.onCompositionEnd?.(e);
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
        setValue(v);
        if (trigger === 'blur') {
            if (local.onChange) {
                local.onChange(v);
            }
        }
        props.onBlur?.(e);
    }

    const clear = () => {
        setValue('');
        if (local.onChange) {
            local.onChange('');
        }
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
        <Show when={local.prefix}>
            <div class="cm-input-prefix" style={local.prefixStyle}>{local.prefix}</div>
        </Show>
        <Show when={local.prepend}>
            <div class="cm-input-group-prepend">{local.prepend}</div>
        </Show>
        <Show when={type() === 'textarea'} fallback={
            <input class="cm-input" ref={props.ref} {...others} value={_value()} autocomplete={props.autocomplete || 'off'}
            onChange={_onChange} onInput={_onInput} onBlur={onBlurChange} disabled={local.disabled}
            style={inputStyle} onKeyDown={_onKeyDown} onKeyUp={_onKeyUp} type={type()} onCompositionStart={_onCompositionStart} onCompositionEnd={_onCompositionEnd}/>
        }>
            <textarea class="cm-input" ref={props.ref} {...others} value={_value()} spellcheck={false} autocomplete={props.autocomplete || 'off'} wrap="soft"
            onChange={_onChange} onInput={_onInput} onBlur={onBlurChange} disabled={local.disabled}
            style={inputStyle} onKeyDown={_onKeyDown} onKeyUp={_onKeyUp} />
        </Show>
        <Show when={local.clearable && _value()}>
            <FeatherXCircle class="cm-input-clear" onClick={clear} size={14}/>
        </Show>
        <Show when={suffix || (props.wordCount && props.maxLength)}>
            <div class="cm-input-suffix" style={local.suffixStyle}>
                <Show when={props.wordCount && props.maxLength} fallback={suffix}>
                    <WordCount total={props.maxLength!} value={valForCount()}/>
                </Show>
            </div>
        </Show>
        <Show when={local.append}>
            <div class={`cm-input-group-append`}>{local.append}</div>
        </Show>
    </div>;
}

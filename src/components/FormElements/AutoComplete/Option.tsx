import { Show } from "solid-js";

type SelectOptions = {
    data: any,
    checked?: boolean,
    disabled?: boolean,
    textField: string,
    onClick?: Function,
    style?: any,
    visible?: boolean,
    renderOption?: Function
}

export function Option (props: SelectOptions) {
    const classList = () => ({
        'cm-select-option': true,
        'cm-select-group-wrap': props.data.children && props.data.children.length,
        'cm-select-option-active': props.checked,
        'cm-select-option-disabled': props.data.disabled,
    });
    const value = props.data[props.textField];
    return <Show when={props.visible} fallback={null}>
        <li classList={classList()} style={props.style} onClick={() => props.onClick && props.onClick(value)}>
            {props.renderOption ? props.renderOption(props.data) : props.data[props.textField]}
        </li>
    </Show>;
}
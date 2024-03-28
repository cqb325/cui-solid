type SelectOptions = {
    data: any,
    checked?: boolean,
    disabled?: boolean,
    onClick?: (value: any) => void,
    style?: any,
    visible?: boolean,
}

export function EmptyOption (props: SelectOptions) {
    const classList = () => ({
        'cm-select-option': true,
        'cm-select-option-active': props.checked,
    });
    const value = props.data.value;
    return <li classList={classList()} style={props.style} onClick={() => props.onClick && props.onClick(value)}>
        {props.data.label}
    </li>;
}

type InnerCheckboxProps = {
    classList?: any,
    class?: any,
    checked?: any,
    disabled?: boolean,
    type?: 'radio' | 'checkbox',
    onChange?: (checked: boolean, value: any) => void,
    value?: any,
    name?: string,
    label?: string,
    inner?: boolean
}

export function InnerCheckbox (props: InnerCheckboxProps){
    const type = props.type || 'checkbox';
    const classList = () => ({
        ...props.classList,
        [props.class]: true,
        'cm-checkbox': true,
        'cm-checkbox-checked': props.checked,
        'cm-checkbox-indeterminate': props.checked === 'indeterminate',
        disabled: props.disabled
    });

    const onClick = () => {
        if (props.disabled) {
            return;
        }
        if (type == 'radio' && props.checked) {
            return;
        }
        let flag = props.checked;
        if (flag === 'indeterminate') {
            flag = true;
        } else {
            flag = !flag;
        }
        if (props.onChange) {
            props.onChange(flag, props.value);
        }
    }

    return <div classList={classList()} onClick={onClick}>
        {/* 文字对齐辅助 */}
        <span style={{width: '0px', "font-size": '12px', visibility: 'hidden'}}>A</span>
        <input
            type={type}
            name={props.name}
            value={props.value}
            style={{display: 'none'}}
            onChange={() => {}}
        />
        <span style={{position: 'relative'}} class="cm-checkbox-outter">
            &nbsp;
            <span class="cm-checkbox-inner" />
        </span>
        <label>{props.label}</label>
    </div>
}

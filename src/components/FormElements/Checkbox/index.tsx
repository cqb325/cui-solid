import { splitProps} from "solid-js";
import { InnerCheckbox } from '../../inner/Checkbox';
import createField from '../../utils/createField';

export type CheckboxProps = {
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

export function Checkbox (props: CheckboxProps){
    const [checked, setChecked] = createField(props, 'checked', false);
    const [local, others] = splitProps(props, ['checked', 'onChange']);

    const onChange = (checked: boolean, v: any) => {
        if (props.disabled) {
            return;
        }
        setChecked(checked);
        if (local.onChange) {
            local.onChange(checked, v);
        }
    }

    return <InnerCheckbox checked={checked()} onChange={onChange} {...others}/>
}

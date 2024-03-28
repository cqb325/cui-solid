import createField from "../../utils/createField";
import { useClassList } from "../../utils/useProps";
import { Loading } from "../../inner/Loading";

type SwitchProps = {
    size?: 'small'|'default'|'large',
    disabled?: boolean,
    style?: any,
    name?: string,
    classList?: any,
    class?: any,
    checked?: any,
    labels?: any[],
    values?: any[],
    onBeforeChange?: (currentStatus: boolean) => Promise<boolean>,
    onChange?: (value: any) => void,
    loading?: boolean
}
export function Switch (props: SwitchProps) {
    const classList = () => useClassList(props, 'cm-switch', {
        [`cm-switch-${props.size}`]: props.size,
        'cm-switch-disabled': props.disabled,
        'cm-switch-checked': checked(),
        'cm-switch-loading': props.loading,
    });
    const [checked, setChecked] = createField<boolean>(props, 'checked', false);

    const labels = props.labels || [];
    const values = props.values || [true, false];

    const toggleSwitch = async () => {
        if (props.disabled) {
            return;
        }
        if (props.loading) {
            return;
        }
        let ret = true;
        if (props.onBeforeChange) {
            ret = await props.onBeforeChange(checked());
        }
        if (ret) {
            const flag = checked();
            const v = !flag ? values[0] : values[1];
            props.onChange && props.onChange(v);
            setChecked(v);
        }
    }

    const text = () => checked() ? labels[0] : labels[1];
    return <div classList={classList()} style={props.style} tabIndex="0" onClick={toggleSwitch}>
        {/* 文字对齐辅助 */}
        <span style={{width: '0px', "font-size": '12px', visibility: 'hidden'}}>A</span>
        <span class="cm-switch-inner">{text()}</span>
        {
            props.loading ? <Loading /> : null
        }
        <input name={props.name} type="hidden" value={checked() ? values[0] : values[1]} />
    </div>
}


import createField from "../../utils/createField";
import { useClassList, useStyle } from "../../utils/useProps";
import { Loading } from "../../inner/Loading";
import type { JSXElement } from "solid-js";

export interface SwitchProps {
    size?: 'small'|'default'|'large',
    disabled?: boolean,
    style?: any,
    name?: string,
    classList?: any,
    class?: any,
    checked?: any,
    labels?: any[],
    values?: any[],
    round?: boolean,
    icon?: JSXElement | JSXElement[],
    colors?: string[],
    onBeforeChange?: (currentStatus: boolean) => Promise<boolean>,
    onChange?: (value: any) => void,
    loading?: boolean
    asFormField?: boolean
}
export function Switch (props: SwitchProps) {
    const classList = () => useClassList(props, 'cm-switch', {
        [`cm-switch-${props.size}`]: props.size,
        'cm-switch-disabled': props.disabled,
        'cm-switch-checked': checked(),
        'cm-switch-loading': props.loading,
        'cm-switch-round': props.round ?? true,
    });
    const [checked, setChecked] = createField<boolean>(props, 'checked', false);

    const style = () => useStyle(props, {
        '--cm-switch-default-color': props.colors && props.colors[0],
        '--cm-switch-active-color': props.colors && props.colors[1],
    });

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

    const icon = () => {
        if (checked()) {
            if (props.icon && props.icon instanceof Array) {
                return props.icon[1];
            }
            return props.icon;
        } else {
            if (props.icon && props.icon instanceof Array) {
                return props.icon[0];
            }
            return props.icon;
        }
    }

    return <div classList={classList()} style={style()} tabIndex="0" onClick={toggleSwitch}>
        {/* 文字对齐辅助 */}
        <span style={{width: '0px', "font-size": '12px', visibility: 'hidden'}}>A</span>
        <span class="cm-switch-inner-placeholder">
            <span><span class="cm-switch-inner-button-placeholder" />{labels[0]}</span>
            <span><span class="cm-switch-inner-button-placeholder" />{labels[1]}</span>
        </span>
        <span class="cm-switch-inner">
            {
                icon() ? <span class="cm-switch-inner-icon">{icon()}</span> : null
            }
            <span class="cm-switch-label cm-switch-label-left">{labels[0]}</span>
            <span class="cm-switch-label cm-switch-label-right">{labels[1]}</span>
        </span>
        {
            props.loading ? <Loading /> : null
        }
        <input name={props.name} type="hidden" value={checked() ? values[0] : values[1]} />
    </div>
}


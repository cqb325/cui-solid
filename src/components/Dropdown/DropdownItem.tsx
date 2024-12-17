import type { JSXElement} from "solid-js";
import { splitProps } from "solid-js"
import { useClassList, useStyle } from "../utils/useProps"
import { useDropdownConext } from ".";
import { FeatherChevronRight } from "cui-solid-icons/feather";
import { isColor } from "../utils/utils";

export interface DropdownItemProps {
    class?: string
    classList?: any
    style?: any
    children?: any
    disabled?: boolean
    name?: string
    divided?: boolean
    icon?: JSXElement
    arrow?: boolean
    data?: any
    theme?: string|'primary'|'secondary'|'tertiary'|'success'|'warning'|'error'|'info'|'light'
    selected?: boolean
}

export function DropdownItem (props: DropdownItemProps) {
    const [local, others] = splitProps(props, ['classList', 'class', 'theme', 'disabled', 'data', 'name', 'divided', 'children', 'arrow', 'icon', 'style', 'selected'])
    const theme = isColor(props.theme) ? '' : props.theme;
    const classList = () => useClassList(local, 'cm-dropdown-item', {
        'cm-dropdown-item-disabled': local.disabled,
        'cm-dropdown-item-divided': local.divided,
        'cm-dropdown-item-selected': local.selected,
        'cm-dropdown-item-with-arrow': local.arrow,
        [`cm-dropdown-item-${theme}`]: theme,
    });
    const ctx: any = useDropdownConext();
    const onClick= (e: any) => {
        if (local.disabled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        ctx?.onSelect(local.name, local.data);
    }

    const style = () =>useStyle(local, {
        '--cui-dropdown-text-color': isColor(props.theme) ? props.theme : '',
    })

    return <li classList={classList()} {...others} style={style()} onClick={onClick}>
        {local.icon ? <span class="cm-dropdown-item-icon">{local.icon}</span> : null}
        {local.children}
        {local.arrow ? <FeatherChevronRight class="cm-dropdown-item-arrow" /> : null}
    </li>
}

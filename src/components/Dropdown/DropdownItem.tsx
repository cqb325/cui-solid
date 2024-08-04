import { JSXElement, splitProps } from "solid-js"
import { useClassList, useStyle } from "../utils/useProps"
import { useDropdownConext } from ".";
import { Icon } from "../Icon";

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
}

export function DropdownItem (props: DropdownItemProps) {
    const [local, others] = splitProps(props, ['classList', 'class', 'disabled', 'name', 'children', 'icon', 'style'])
    const classList = () => useClassList(local, 'cm-dropdown-item', {
        'cm-dropdown-item-disabled': local.disabled,
        'cm-dropdown-item-divided': props.divided,
        'cm-dropdown-item-with-arrow': props.arrow,
    });
    const ctx: any = useDropdownConext();
    const onClick= (e: any) => {
        if (local.disabled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        ctx?.onSelect(local.name);
    }

    const style = () => useStyle(local, {
        color: ctx?.color,
    })
    return <li classList={classList()} {...others} style={style()} onClick={onClick}>
        {props.icon ? <span class="cm-dropdown-item-icon">{props.icon}</span> : null}
        {local.children}
        {props.arrow ? <Icon class="cm-dropdown-item-arrow" name="chevron-right" /> : null}
    </li>
}

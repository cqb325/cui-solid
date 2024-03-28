import { splitProps } from "solid-js"
import { useClassList } from "../utils/useProps"
import { useDropdownConext } from ".";

export function DropdownItem (props: any) {
    const [local, others] = splitProps(props, ['classList', 'class', 'disabled', 'name', 'children'])
    const classList = () => useClassList(local, 'cm-dropdown-item', {
        'cm-dropdown-item-disabled': local.disabled,
        'cm-dropdown-item-divided': props.divided,
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
    return <li classList={classList()} {...others} onClick={onClick}>
        {local.children}
    </li>
}

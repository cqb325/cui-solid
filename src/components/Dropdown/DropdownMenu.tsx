import { useDropdownConext } from "."
import { useClassList, useStyle } from "../utils/useProps"

export interface DropdownMenuProps {
    style?: any
    class?: string
    classList?: any
    children?: any
}

export function DropdownMenu (props: DropdownMenuProps) {
    const classList = () => useClassList(props, 'cm-dropdown-list');
    const ctx: any = useDropdownConext();

    const style = () => useStyle(props, {
        'background': ctx?.gradient ? `linear-gradient(${ctx.gradient?.join(',')})` : ''
    })
    return <ul classList={classList()} style={style()}>{props.children}</ul>
}

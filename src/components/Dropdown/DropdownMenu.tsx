import { useClassList } from "../utils/useProps"

export function DropdownMenu (props: any) {
    const classList = () => useClassList(props, 'cm-dropdown-list');
    return <ul classList={classList()} style={props.style}>{props.children}</ul>
}

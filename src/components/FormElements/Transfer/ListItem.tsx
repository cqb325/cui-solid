import { InnerCheckbox } from "../../inner/Checkbox";

export function ListItem (props: any) {
    const text = () => {
        if (props.render) {
            return props.render(props.data);
        }
        return props.data.title;
    }
    const onSelect = () => {
        if (!props.data.disabled) {
            props.onSelect(props.data);
        }
    }
    const checked = () => props.data._checked;
    const style = () => ({display: props.data._hide ? 'none' : 'flex'});
    return <div class="cm-transfer-list-item" onClick={onSelect} style={style()}>
        <InnerCheckbox checked={checked()} disabled={props.data.disabled}/>
        <div>{text()}</div>
    </div>
}

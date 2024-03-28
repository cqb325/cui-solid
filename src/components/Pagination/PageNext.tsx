import { Icon } from "../Icon";

export function PageNext (props: any) {
    const classList = () => ({
        'cm-pagination-num': true,
        'cm-pagination-next': true,
        'cm-pagination-num-disabled': props.disabled
    });
    return (<li onClick={props.onClick} classList={classList()}>
        <Icon name="chevron-right" size={14}/>
    </li>);
}

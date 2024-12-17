import { FeatherChevronRight } from "cui-solid-icons/feather";

export function PageNext (props: any) {
    const classList = () => ({
        'cm-pagination-num': true,
        'cm-pagination-next': true,
        'cm-pagination-num-disabled': props.disabled
    });
    return (<li onClick={props.onClick} classList={classList()}>
        <FeatherChevronRight />
    </li>);
}

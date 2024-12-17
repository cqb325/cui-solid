import { FeatherChevronLeft } from "cui-solid-icons/feather";

export function PagePrev (props: any) {
    const classList = () => ({
        'cm-pagination-num': true,
        'cm-pagination-prev': true,
        'cm-pagination-num-disabled': props.current === 1
    });
    return (<li onClick={props.onClick} classList={classList()}>
        <FeatherChevronLeft />
    </li>);
}

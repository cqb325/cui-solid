
export function PageItem (props: any) {
    const classList = () => ({
        'cm-pagination-num': true,
        'cm-pagination-item-active': props.active
    });
    return <li onClick={props.onClick} classList={classList()}>
        {props.currentIndex}
    </li>;
}

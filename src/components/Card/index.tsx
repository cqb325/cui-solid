import { useClassList } from "../utils/useProps";

type CardProps = {
    classList?: any,
    class?: any,
    children?: any,
    bordered?: boolean,
    rised?: boolean,
    title?: any,
    style?: any,
    bodyStyle?: any,
    footer?: any
}

export function Card (props: CardProps) {
    const classList = () => useClassList(props, 'cm-card', {
        'cm-card-bordered': props.bordered,
        'cm-card-rised': props.rised,
    });
    return <div classList={classList()} style={props.style}>
        {
            props.title ? <div class="cm-card-head">
                { props.title }
            </div>
            : null
        }
        <div class="cm-card-body" style={props.bodyStyle}>
            { props.children }
        </div>
        {
            props.footer ? <div class="cm-card-footer">{props.footer}</div> : null
        }
    </div>
}

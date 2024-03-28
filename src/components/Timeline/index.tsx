import { useClassList } from "../utils/useProps"
import { TimelineItem } from "./TimelineItem"

type TimelineProps = {
    children?: any,
    classList?: any,
    class?: string,
    style?: any,
    mode?: 'left'|'right'|'alternate'|'center'
}

export function Timeline (props: TimelineProps) {
    const classList = () => useClassList(props, 'cm-timeline', {
        [`cm-timeline-${props.mode}`]: props.mode
    })
    return <div classList={classList()} style={props.style}>
        {props.children}
    </div>
}

Timeline.Item = TimelineItem;

import { useClassList } from "../utils/useProps";
import type { ListContextProps } from ".";
import { useListContext } from ".";

type ListItemProps = {
    id: string | number,
    data?: any,
    style?: any,
    actions?: any,
    avatar?: any,
    content?: any,
    children?: any,
    title?: any,
    desc?: any,
}
export function Item (props: ListItemProps) {
    const ctx: ListContextProps|undefined = useListContext();
    const activeKey = ctx?.signal[0];
    const setActiveKey = ctx?.signal[1];

    const classList = () => useClassList(props, 'cm-list-item', {
        'cm-list-item-active': activeKey && activeKey() === props.id
    });

    const onClick = () => {
        setActiveKey && setActiveKey(props.id);
        ctx?.onSelect && ctx.onSelect(props.data);
    }

    return <div classList={classList()} style={props.style} onClick={onClick}>
        <div class="cm-list-item-main">
            <div class="cm-list-item-meta">
                {props.avatar ? <div class="cm-list-item-avatar">{props.avatar}</div> : null}
                {props.title || props.desc ? <div class="cm-list-item-body">
                    <div class="cm-list-item-title">{props.title}</div>
                    <div class="cm-list-item-desc">{props.desc}</div>
                </div> : null}
            </div>
            <div class="cm-list-item-content">
                {props.children}
            </div>
        </div>
        { props.actions ? <ul class="cm-list-item-addon">
            {props.actions}
        </ul> : null}
    </div>
}

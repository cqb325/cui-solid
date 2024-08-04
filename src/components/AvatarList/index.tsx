import type { Accessor, JSXElement} from "solid-js";
import { For, Show, children } from "solid-js";
import type { AvatarProps } from "../Avatar";
import { Avatar } from "../Avatar";
import { Tooltip } from "../Tooltip";
import { useClassList } from "../utils/useProps";

type AvatarListProps = {
    classList?: any,
    class?: string,
    size?: 'small' | 'large',
    align?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
    gutter?: number,
    max?: number,
    excessStyle?: any,
    children?: JSXElement
}
export function AvatarList (props: AvatarListProps) {
    const classList = () => useClassList(props, 'cm-avatar-list', {
        [`cm-avatar-list-${props.size}`]: props.size
    });

    const max = () => props.max ?? Number.MAX_VALUE;
    const avatars = children(() => props.children)
	const evaluatedAvatars = () => avatars.toArray() as unknown as AvatarProps[];
    const avatarsLength = () => evaluatedAvatars().length;

    const gutter = () => (props.gutter ?? (props.size === 'small' ? -8 : -12)) + 'px';

    return <div classList={classList()}>
        <For each={evaluatedAvatars()}>
            {(item: AvatarProps, index: Accessor<number>) => {
                item.asProps = false;
                if (index() < max()) {
                    return <div class="cm-avatar-list-item" style={{'margin-left': index() > 0 ? gutter() : 0}}>
                        <Tooltip align={props.align || 'top'} content={item.title}>
                            <Avatar {...item} size={props.size}/>
                        </Tooltip>
                    </div>
                }
            }}
        </For>
        <Show when={avatarsLength() > max() }>
            <div class="cm-avatar-list-item" style={{'margin-left': gutter()}}>
                <Avatar size={props.size} style={props.excessStyle}>+{avatarsLength() - max()}</Avatar>
            </div>
        </Show>
    </div>;
}


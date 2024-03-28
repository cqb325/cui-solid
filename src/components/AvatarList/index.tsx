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

    return <div classList={classList()}>
        <For each={evaluatedAvatars()}>
            {(item: AvatarProps, index: Accessor<number>) => {
                item.asProps = false;
                if (index() < max()) {
                    return <div class="cm-avatar-list-item">
                        <Tooltip align={props.align || 'top'} content={item.title}>
                            <Avatar {...item} size={props.size}/>
                        </Tooltip>
                    </div>
                }
            }}
        </For>
        <Show when={avatarsLength() > max() }>
            <div class="cm-avatar-list-item">
                <Avatar size={props.size} style={props.excessStyle}>+{avatarsLength() - max()}</Avatar>
            </div>
        </Show>
    </div>;
}


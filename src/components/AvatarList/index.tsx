import type { Accessor, JSX, JSXElement} from "solid-js";
import { For, Show, children, splitProps } from "solid-js";
import type { AvatarProps } from "../Avatar";
import { Avatar } from "../Avatar";
import { Tooltip } from "../Tooltip";
import { useClassList } from "../utils/useProps";

export interface AvatarListProps extends JSX.HTMLAttributes<HTMLDivElement> {
    size?: 'small' | 'large',
    align?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
    gutter?: number,
    max?: number,
    excessStyle?: any,
}

export function AvatarList (props: AvatarListProps) {
    const [local, rest] = splitProps(props, ['classList', 'class', 'size', 'align', 'gutter', 'max', 'excessStyle', 'children'])
    const classList = () => useClassList(local, 'cm-avatar-list', {
        [`cm-avatar-list-${local.size}`]: local.size
    });

    const max = () => local.max ?? Number.MAX_VALUE;
    const avatars = children(() => local.children)
	const evaluatedAvatars = () => avatars.toArray() as unknown as AvatarProps[];
    const avatarsLength = () => evaluatedAvatars().length;

    const gutter = () => (local.gutter ?? (local.size === 'small' ? -8 : -12)) + 'px';

    return <div classList={classList()} {...rest}>
        <For each={evaluatedAvatars()}>
            {(item: AvatarProps, index: Accessor<number>) => {
                item.asProps = false;
                if (index() < max()) {
                    return <div class="cm-avatar-list-item" style={{'margin-left': index() > 0 ? gutter() : 0}}>
                        <Tooltip align={local.align || 'top'} content={item.title}>
                            <Avatar {...item} size={local.size}/>
                        </Tooltip>
                    </div>
                }
            }}
        </For>
        <Show when={avatarsLength() > max() }>
            <div class="cm-avatar-list-item" style={{'margin-left': gutter()}}>
                <Avatar size={local.size} style={local.excessStyle}>+{avatarsLength() - max()}</Avatar>
            </div>
        </Show>
    </div>;
}


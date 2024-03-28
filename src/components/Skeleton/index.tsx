import type { JSXElement} from "solid-js";
import { Show } from "solid-js";
import { useClassList, useStyle } from "../utils/useProps"
import { Avatar, Image, Title, Button, Paragraph, Item } from "./Item";

export interface SkeletonProps {
    classList?: any;
    class?: string;
    style?: any;
    children?: JSXElement;
    active?: boolean;
    loading?: boolean;
    placeholder?: JSXElement;
    width?: string;
    height?: string;
}

export function Skeleton (props: SkeletonProps) {
    const classList = () => useClassList(props, 'cm-skeleton', {
        'cm-skeleton-active': props.active
    });
    const style = () => useStyle(props, {
        width: props.width,
        height: props.height
    })
    return <Show when={props.loading} fallback={props.children}>
            <div classList={classList()} style={style()}>
                {props.placeholder}
            </div>
    </Show>
}

Skeleton.Avatar = Avatar;
Skeleton.Image = Image;
Skeleton.Title = Title;
Skeleton.Button = Button;
Skeleton.Item = Item;
Skeleton.Paragraph = Paragraph;

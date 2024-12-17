import type { Accessor, JSXElement } from "solid-js";
import { For } from "solid-js";
import { useClassList, useStyle } from "../utils/useProps";

export interface BasicProps {
    classList?: any;
    class?: string;
    style?: any;
    type?: string;
    width?: string | string[];
    height?: string;
    inline?: boolean;
};

export interface AvatarProps extends BasicProps {
    size?: 'extra-small'|'small'|'medium'|'large'|'extra-large'|number;
    shape?: 'circle'|'square'
}

export type GenericProps = BasicProps & AvatarProps;

function Generic (props: GenericProps) {
    const size = props.size ?? 'medium';
    const shape = props.shape ?? 'circle';
    const classList = () => useClassList(props, 'cm-skeleton-item', {
        [`cm-skeleton-${props.type}`]: props.type,
        [`cm-skeleton-${props.type}-${size}`]: size,
        [`cm-skeleton-${props.type}-${shape}`]: shape,
        [`cm-skeleton-inline`]: props.inline,
    });
    const style = () => useStyle(props, {
        width: typeof props.size === 'number' ? props.size + 'px' : props.width,
        height: typeof props.size === 'number' ? props.size + 'px' : props.height,
    })
    return <div classList={classList()} style={style()} />;
}

const generator = <T extends BasicProps>(type: string) => (props: T): JSXElement => <Generic type={type} {...props} />;

export const Avatar = generator<AvatarProps>('avatar');
export const Image = generator<AvatarProps>('image');
export const Title = generator<AvatarProps>('title');
export const Button = generator<AvatarProps>('button');
export const Item = generator<AvatarProps>('item');

export interface ParagraphProps extends BasicProps {
    rows?: number;
}

export function Paragraph (props: ParagraphProps) {
    const rows = props.rows ?? 4;
    const classList = () => useClassList(props, 'cm-skeleton-paragraph');
    const arr = new Array(rows).fill(1);
    const outStyle = () => useStyle(props, {
        width: props.width,
    })
    return <ul classList={classList()} style={outStyle()}>
        <For each={arr}>
            {(_: number, index: Accessor<number>) => {
                const style: any = {};
                if (props.width && props.width instanceof Array) {
                    style.width = props.width[index()];
                }
                return <li style={style} />
            }}
        </For>
    </ul>
}

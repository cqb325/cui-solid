import type { JSX } from "solid-js";
export interface AvatarListProps extends JSX.HTMLAttributes<HTMLDivElement> {
    size?: 'small' | 'large';
    align?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    gutter?: number;
    max?: number;
    excessStyle?: any;
}
export declare function AvatarList(props: AvatarListProps): JSX.Element;

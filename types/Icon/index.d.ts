import type { ComponentProps } from "solid-js";
interface IconProps extends ComponentProps<'div'> {
    classList?: any;
    class?: string;
    style?: any;
    size?: number;
    spin?: boolean;
    name?: string;
    color?: string;
}
export declare const Icon: (props: IconProps) => import("solid-js").JSX.Element;
export {};

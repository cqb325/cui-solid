import type { ComponentProps } from "solid-js";
type ButtonGroupProps = {
    classList?: any;
    class?: any;
    children?: any;
    type?: 'primary' | 'success' | 'error' | 'warning' | 'default' | 'dashed' | 'link' | 'text';
    size?: 'small' | 'default' | 'large';
    disabled?: boolean;
} & ComponentProps<'div'>;
export declare const ButtonGroupContext: import("solid-js").Context<unknown>;
export declare function ButtonGroup(props: ButtonGroupProps): import("solid-js").JSX.Element;
export {};

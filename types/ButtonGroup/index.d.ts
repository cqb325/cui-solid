import type { JSX } from "solid-js";
import type { ButtonProps } from "../Button";
export interface ButtonGroupProps extends JSX.HTMLAttributes<HTMLDivElement> {
    classList?: any;
    class?: any;
    children?: any;
    type?: ButtonProps['type'];
    theme?: ButtonProps['theme'];
    size?: 'small' | 'default' | 'large';
    disabled?: boolean;
}
export declare const ButtonGroupContext: import("solid-js").Context<unknown>;
export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;

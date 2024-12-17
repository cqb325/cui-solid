import type { JSXElement } from "solid-js";
export interface SelectOptionProps {
    disabled?: boolean;
    style?: any;
    value: string | number;
    label: string | JSXElement;
    [key: string]: any;
}
export declare function Option(props: SelectOptionProps): import("solid-js").JSX.Element;

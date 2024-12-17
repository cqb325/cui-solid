import type { JSX } from "solid-js";
export interface InnerCheckboxProps {
    classList?: any;
    class?: any;
    checked?: any;
    disabled?: boolean;
    type?: 'radio' | 'checkbox';
    onChange?: (checked: boolean, value: any) => void;
    value?: any;
    name?: string;
    label?: JSX.Element;
    inner?: boolean;
}
export declare function InnerCheckbox(props: InnerCheckboxProps): JSX.Element;

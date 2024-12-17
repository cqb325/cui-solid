import type { JSX } from "solid-js";
export interface CheckboxProps {
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
    asFormField?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;

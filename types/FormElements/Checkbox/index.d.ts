export type CheckboxProps = {
    classList?: any;
    class?: any;
    checked?: any;
    disabled?: boolean;
    type?: 'radio' | 'checkbox';
    onChange?: (checked: boolean, value: any) => void;
    value?: any;
    name?: string;
    label?: string;
    inner?: boolean;
};
export declare function Checkbox(props: CheckboxProps): import("solid-js").JSX.Element;

export declare const CheckboxGroupContext: import("solid-js").Context<unknown>;
export interface CheckboxGroupProps {
    classList?: any;
    class?: string;
    block?: boolean;
    name?: string;
    value?: any[];
    style?: any;
    children?: any;
    disabled?: boolean;
    onChange?: (value: any) => void;
    data?: any;
    textField?: string;
    valueField?: string;
    asFormField?: boolean;
}
export declare function CheckboxGroup(props: CheckboxGroupProps): import("solid-js").JSX.Element;

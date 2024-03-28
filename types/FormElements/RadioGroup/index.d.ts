type RadioGroupProps = {
    classList?: any;
    class?: string;
    block?: boolean;
    name?: string;
    value?: any;
    style?: any;
    children?: any;
    disabled?: boolean;
    onChange?: (v: any) => void;
    data?: any;
    type?: 'radio' | 'checkbox';
    textField?: string;
    valueField?: string;
    stick?: boolean;
};
export declare function RadioGroup(props: RadioGroupProps): import("solid-js").JSX.Element;
export {};

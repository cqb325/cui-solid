type SelectOptions = {
    data: any;
    checked?: boolean;
    disabled?: boolean;
    textField: string;
    valueField: string;
    onClick?: (value: any) => void;
    style?: any;
    visible?: boolean;
    ref?: any;
    renderOption?: (item: any) => any;
};
export declare function Option(props: SelectOptions): import("solid-js").JSX.Element;
export {};

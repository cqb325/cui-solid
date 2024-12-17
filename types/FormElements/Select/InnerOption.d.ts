declare type SelectInnerOptions = {
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
export declare function Option(props: SelectInnerOptions): import("solid-js").JSX.Element;
export {};

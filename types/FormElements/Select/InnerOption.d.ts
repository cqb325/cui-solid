type SelectOptions = {
    data: any;
    checked?: boolean;
    disabled?: boolean;
    textField: string;
    valueField: string;
    onClick?: Function;
    style?: any;
    visible?: boolean;
    ref?: any;
    renderOption?: Function;
};
export declare function Option(props: SelectOptions): import("solid-js").JSX.Element;
export {};

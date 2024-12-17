export interface AutoCompleteOptionprops {
    data: any;
    checked?: boolean;
    disabled?: boolean;
    textField: string;
    valueField: string;
    onClick?: (value: any, data: any) => void;
    style?: any;
    visible?: boolean;
    renderOption?: (data: any) => any;
}
export declare function Option(props: AutoCompleteOptionprops): import("solid-js").JSX.Element;

export interface AutoCompleteOptions {
    name?: string;
    value?: any;
    disabled?: boolean;
    size?: 'small' | 'large';
    clearable?: boolean;
    prefix?: any;
    style?: any;
    data?: Array<any>;
    textField?: string;
    valueField?: string;
    class?: any;
    classList?: any;
    filter?: boolean;
    placeholder?: string;
    renderOption?: (data: any) => any;
    ref?: any;
    emptyOption?: any;
    onChange?: (value: any, item?: any) => void;
    onSearch?: (query: string) => void;
    transfer?: boolean;
    align?: 'bottomLeft' | 'bottomRight';
    asFormField?: boolean;
}
export declare function AutoComplete(props: AutoCompleteOptions): import("solid-js").JSX.Element;

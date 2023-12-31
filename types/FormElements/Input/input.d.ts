export interface InputProps {
    classList?: any;
    class?: any;
    children?: any;
    style?: any;
    name?: string;
    disabled?: boolean;
    size?: 'small' | 'default' | 'large';
    type?: string;
    append?: any;
    prepend?: any;
    prefix?: any;
    suffix?: any;
    suffixStyle?: any;
    prefixStyle?: any;
    clearable?: boolean;
    value?: any;
    placeholder?: string;
    autocomplete?: string;
    onChange?(value: any): void;
    onEnter?(value: any): void;
    onKeyDown?(e: any): void;
    onKeyUp?(e: any): void;
    onInput?(value: any, e: any): void;
    trigger?: string;
    notCreateFiled?: boolean;
}
export declare function InnerInput(props: InputProps): import("solid-js").JSX.Element;

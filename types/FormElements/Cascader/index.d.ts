import { JSXElement } from "solid-js";
type CascaderProps = {
    classList?: any;
    class?: string;
    disabled?: boolean;
    clearable?: boolean;
    size?: 'small' | 'large';
    prepend?: string | JSXElement;
    value?: string | string[] | number[];
    seperator?: string;
    transfer?: boolean;
    align?: 'bottomLeft' | 'bottomRight';
    revers?: boolean;
    data: any[];
    onSelect?: Function;
    onChange?: Function;
    trigger?: 'click' | 'hover';
    changeOnSelect?: boolean;
    placeholder?: string;
    loadData?: Function;
};
export type CascaderStore = {
    selectedValue: any[];
    columns: any[][];
};
export declare function Cascader(props: CascaderProps): import("solid-js").JSX.Element;
export declare const useCascaderContext: () => unknown;
export {};

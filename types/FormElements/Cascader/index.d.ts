import type { JSXElement } from "solid-js";
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
    onSelect?: (item: any) => void;
    onChange?: (value: any) => void;
    trigger?: 'click' | 'hover';
    changeOnSelect?: boolean;
    placeholder?: string;
    loadData?: (item: any) => Promise<any>;
};
export type CascaderStore = {
    selectedValue: any[];
    columns: any[][];
};
export declare function Cascader(props: CascaderProps): import("solid-js").JSX.Element;
export declare const useCascaderContext: () => unknown;
export {};

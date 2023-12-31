import { JSXElement } from "solid-js";
type TimePickerProps = {
    classList?: any;
    class?: any;
    type?: 'timeRange';
    disabled?: boolean;
    theme?: 'light' | 'dark';
    size?: 'small' | 'large';
    clearable?: boolean;
    align?: 'bottomLeft' | 'bottomRight';
    format?: string;
    value?: string | Date | string[] | Date[] | Function[];
    prepend?: string | JSXElement;
    disabledTime?: Function;
    minuteStep?: number;
    secondStep?: number;
    hourStep?: number;
    header?: string | JSXElement | string[] | JSXElement[];
    footer?: string | JSXElement | string[] | JSXElement[];
    seperator?: string;
    transfer?: boolean;
    trigger?: Function;
    placeholder?: string;
    onChange?: Function;
};
export declare function Timepicker(props: TimePickerProps): import("solid-js").JSX.Element;
export declare const useTimepickerContext: () => unknown;
export {};

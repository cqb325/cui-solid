import type { JSXElement, Signal } from "solid-js";
export interface DatepickerProps {
    classList?: any;
    class?: any;
    style?: any;
    disabled?: boolean;
    theme?: 'light' | 'dark';
    size?: 'small' | 'large';
    clearable?: boolean;
    type?: 'dateRange' | 'monthRange' | 'month' | 'dateTime' | 'dateTimeRange';
    align?: 'bottomLeft' | 'bottomRight';
    format?: string;
    value?: string | Date | string[] | Date[] | Signal<any>;
    prepend?: string | JSXElement;
    header?: string | JSXElement | string[] | JSXElement[];
    footer?: string | JSXElement | string[] | JSXElement[];
    seperator?: string;
    transfer?: boolean;
    trigger?: () => any;
    disabledDate?: (day: Date) => boolean;
    onChange?: (value: any) => void;
    maxRange?: number;
    shortCuts?: (() => any) | JSXElement;
    revers?: boolean;
    placeholder?: string;
    stick?: boolean;
    asFormField?: boolean;
}
export interface DatepickerStore {
    currentMonth: Date[];
    range: Date[];
    hoverDate?: Date;
}
export declare function Datepicker(props: DatepickerProps): import("solid-js").JSX.Element;
export declare const useDatepickerContext: () => unknown;

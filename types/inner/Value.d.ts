import type { JSXElement, Signal } from "solid-js";
import type { TagConfig } from "../TagGroup";
export interface ValueProps {
    onClear?: (e?: any) => void;
    prepend?: any;
    text?: string | Array<any>;
    clearable?: boolean;
    icon?: JSXElement;
    disabled?: boolean;
    size?: 'small' | 'large';
    multi?: boolean;
    showMax?: number;
    placeholder?: string;
    valueClosable?: boolean;
    onClose?(item: TagConfig, e: any): void;
    onInput?(e: any): void;
    filter?: boolean;
    query?: Signal<any>;
    showMore?: boolean;
    onDeleteLastValue?: () => void;
}
export declare function Value(props: ValueProps): import("solid-js").JSX.Element;

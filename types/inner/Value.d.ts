import { JSXElement } from "solid-js";
import { TagConfig } from "../TagGroup";
export interface ValueProps {
    onClear?: Function;
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
    showMore?: boolean;
}
export declare function Value(props: ValueProps): import("solid-js").JSX.Element;

import type { Signal } from "solid-js";
type ListProps = {
    classList?: any;
    class?: string;
    border?: boolean;
    size?: 'small' | 'large';
    style?: any;
    head?: any;
    foot?: any;
    children?: any;
    onSelect?: (item: any) => void;
};
export type ListContextProps = {
    signal: Signal<any>;
    onSelect?: (item: any) => void;
};
export declare function List(props: ListProps): import("solid-js").JSX.Element;
export declare namespace List {
    var Item: typeof import("./Item").Item;
}
export declare const useListContext: () => ListContextProps | undefined;
export {};

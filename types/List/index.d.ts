declare type ListProps = {
    classList?: any;
    class?: string;
    border?: boolean;
    size?: 'small' | 'large';
    style?: any;
    head?: any;
    foot?: any;
    children?: any;
    render?: Function;
    onSelect?: Function;
};
export declare type ListContextProps = {
    render?: Function;
    signal: Function[];
    onSelect?: Function;
};
export declare function List(props: ListProps): import("solid-js").JSX.Element;
export declare namespace List {
    var Item: typeof import("./Item").Item;
}
export declare const useListContext: () => ListContextProps | undefined;
export {};

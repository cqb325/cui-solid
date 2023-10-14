declare type TransferListProps = {
    width?: number;
    height?: number;
    store?: any;
    setStore: Function;
    name?: string;
    value?: any[];
    onSelect: Function;
    render?: Function;
    filter?: boolean;
};
export declare function List(props: TransferListProps): import("solid-js").JSX.Element;
export {};

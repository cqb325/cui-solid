declare type TransferProps = {
    classList?: any;
    class?: string;
    style?: any;
    width?: number;
    height?: number;
    data?: any[];
    value?: any[] | Function[];
    filter?: boolean;
    render?: Function;
    onChange?: Function;
};
export declare function Transfer(props: TransferProps): import("solid-js").JSX.Element;
export {};

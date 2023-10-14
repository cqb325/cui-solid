import { TableStore } from '.';
declare type BodyProps = {
    data: TableStore;
    onScroll: Function;
    height?: number;
    virtual?: boolean;
};
declare type RowProps = {
    store: TableStore;
    data: any;
    index: number;
    ref?: any;
};
export declare function Row(props: RowProps): import("solid-js").JSX.Element;
export declare function Body(props: BodyProps): import("solid-js").JSX.Element;
export {};

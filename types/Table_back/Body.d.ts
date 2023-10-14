import { TableStore } from '.';
declare type BodyProps = {
    data: TableStore;
};
declare type RowProps = {
    store: TableStore;
    data: any;
    index: number;
};
export declare function Row(props: RowProps): import("solid-js").JSX.Element;
export declare function Body(props: BodyProps): import("solid-js").JSX.Element;
export {};

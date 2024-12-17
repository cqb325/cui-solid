import type { TableStore } from '.';
declare type BodyProps = {
    data: TableStore;
    onScroll: (scrollLeft: number, clientWidth: number, scrollWidth: number) => void;
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

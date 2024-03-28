import type { TableStore } from '.';
type BodyProps = {
    data: TableStore;
    onScroll: (scrollLeft: number, clientWidth: number, scrollWidth: number) => void;
    height?: number;
    virtual?: boolean;
};
type RowProps = {
    store: TableStore;
    data: any;
    index: number;
    ref?: any;
};
export declare function Row(props: RowProps): import("solid-js").JSX.Element;
export declare function Body(props: BodyProps): import("solid-js").JSX.Element;
export {};

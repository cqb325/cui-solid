import type { TableStore } from '.';
declare type HeadProps = {
    data: TableStore;
    sticky?: boolean;
    onInitColumnWidth: (idx: number, width: number) => void;
    onResizeHeader: (width: number, height: number) => void;
    virtual?: boolean;
};
export declare function Head(props: HeadProps): import("solid-js").JSX.Element;
export {};

import { TableStore } from '.';
type HeadProps = {
    data: TableStore;
    sticky?: boolean;
    onInitColumnWidth: Function;
    onResizeHeader: Function;
    virtual?: boolean;
};
export declare function Head(props: HeadProps): import("solid-js").JSX.Element;
export {};

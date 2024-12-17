import type { SetStoreFunction } from "solid-js/store";
import type { TransferStore } from ".";
export interface TransferListProps {
    width?: number;
    height?: number;
    store?: any;
    setStore: SetStoreFunction<TransferStore>;
    name?: string;
    value?: any[];
    onSelect: (item: any, checked: boolean) => void;
    render?: (item: any) => any;
    filter?: boolean;
}
export declare function List(props: TransferListProps): import("solid-js").JSX.Element;
